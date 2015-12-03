'use strict';

var parser = math.parser();
parser.eval('ans = 0');

var renderLine = function renderLine(line, parser) {
  if (line) try {
    line = parser.eval('ans = ' + line);
  } catch (e) {
    try {
      line = parser.eval('ans = ans ' + line);
    } catch (e) {
      line = '';
    }
  };
  return line;
};

var ractive = Ractive({
  el: 'body',
  template: '#home',
  data: {
    text: 'I love maths!\n1 + 2\n\ntest = 4 + 2\n\ntest * 3\n\ntest cm to inch',
    values: []
  },
  computed: {
    values: function values() {
      return this.get('text').split('\n').reduce(function (a, b) {
        return {
          lines: a.lines.concat(renderLine(b, parser))
        };
      }, { lines: [], parser: parser }).lines;
    }
  }
});
