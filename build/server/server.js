var express = require('express');
var db = require('mongojs')('test', ['notes']);
var fs = require('fs');
var app = express();
var YANG = require('yet-another-name-generator');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('../public'));
app.use(function (req, res, next) {
    res.header('Cache-Control', 'no-cache');
    next();
});

app.get('/', function (req, res) {
    res.redirect(301, '/note/' + YANG.generate({ the: false, camelize: true, separator: '-' }));
});

app.get('/note/:name', function (req, res) {
    fs.createReadStream('../client/index.html').pipe(res);
});

app.post('/note/:name', function (req, res) {
    db.notes.update({ name: req.params.name }, { $set: { content: req.body.content } }, { upsert: true }, function (err, doc) {
        res.status(err ? 500 : 200).send(err ? err : doc);
    });
});

app.get('/content/:name', function (req, res) {
    db.notes.findOne({ name: req.params.name }, function (err, doc) {
        if (doc && doc.content) res.send(doc.content);else fs.createReadStream('../public/default.txt').pipe(res);
    });
});

app.listen(1337);