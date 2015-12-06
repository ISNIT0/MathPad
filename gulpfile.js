var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('gulp-babel');
var sourcemaps = require("gulp-sourcemaps");
var fileinclude = require('gulp-file-include');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');


var paths = {
    indexHTML: 'src/client/index.html',
    indexJS: 'src/client/index.js',
    componentHTML: 'src/client/components/**/*.html',
    componentJS: 'src/client/components/**/*.js',
    less: 'src/client/**/*.less',
    server: 'src/server/*',
    res: 'src/public/*'
};

gulp.task('less', function () {
    return gulp.src([paths.less]).
    pipe(less()).
    pipe(concat("index.css")).
    pipe(gulp.dest('./build/public'));
});




gulp.task('html', function (cb) {
    runSequence('componentHTML', 'indexHTML', cb);
});

gulp.task('componentHTML', function () {
    return gulp.src([paths.componentHTML]).
    pipe(insert.transform(function (contents, file) {
        return '<script type="text/html" id="' + file.path.split('.')[0].split('/').slice(-1)[0].split('\\').slice(-1)[0] + '">' +
            contents + '</script>\n';
    })).
    pipe(concat('components.html')).
    pipe(gulp.dest('./build/client'));
});

gulp.task('indexHTML', function () {
    return gulp.src([paths.indexHTML]).
    pipe(fileinclude({
        prefix: '@@',
        basepath: './build/client'
    })).
    pipe(gulp.dest('./build/client'));
});





gulp.task('scripts', function (cb) {
    runSequence('componentJS', 'indexJS', cb);
});

gulp.task('componentJS', function () {
    return gulp.src([paths.componentJS]).
    pipe(insert.append('\n')).
    pipe(sourcemaps.init()).
    pipe(babel()).
    on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    }).
    pipe(sourcemaps.write()).
    pipe(concat('components.js')).
    pipe(gulp.dest('./build/client'));
});

gulp.task('indexJS', function () {
    return gulp.src([paths.indexJS]).
    pipe(fileinclude({
        prefix: '@@',
        basepath: './build/client'
    })).
    pipe(sourcemaps.init()).
    pipe(babel()).
    on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    }).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('./build/public'));
});





gulp.task('server', function () {
    return gulp.src([paths.server]).
    pipe(babel()).
    on('error', function(e) {
      console.log('>>> ERROR', e);
      // emit here
      this.emit('end');
    }).
    pipe(gulp.dest('./build/server'));
});



gulp.task('res', function(){
    return gulp.src([paths.res]).
    pipe(gulp.dest('./build/public'));
});


gulp.task('browser-sync', function() {
	browserSync.init(null, {
        proxy:'http://localhost:1337',
        files: ['build/**/*.*'],
        browser: 'google chrome',
        port: 7000,
	});
});

gulp.task('serve', shell.task([
  'npm start'
]));


gulp.task('default', ['serve', 'server', 'scripts', 'less', 'html', 'res', 'watch', 'browser-sync'], function () {

});

gulp.task('watch', function () {
    gulp.watch([paths.res], ['res']);
    gulp.watch([paths.server], ['server']);
    gulp.watch([paths.componentJS, paths.indexJS], ['scripts']);
    gulp.watch([paths.less], ['less']);
    gulp.watch([paths.indexHTML, paths.componentHTML], ['html']);
});