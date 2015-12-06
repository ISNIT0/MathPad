(function (Ractive, math, $) {

    Ractive.components.BackgroundRuler = Ractive.extend({
        template: '#BackgroundRuler',
        data: () => {
            return {
                value: ''
            };
        },
        computed: {
            lines: function () {
                return this.get('value').split('\n');
            }
        }
    });

    Ractive.components.CalculationOverlay = Ractive.extend({
        template: '#CalculationOverlay',
        data: () => {
            return {
                value: ''
            };
        },
        computed: {
            lines: function () {
                return this.get('value').split('\n').map(this.renderLine.bind(this));
            },
            originalLines: function () {
                return this.get('value').split('\n');
            }
        },
        parser: math.parser(),
        operations: ['+', '-'],
        renderLine: function (line) {
            var parser = this.parser;
            if (line) try {
                if (1 + this.operations.indexOf(line.trim()[0])) throw '';
                line = parser.eval('ans = ' + line);
            } catch (e) {
                try {
                    line = parser.eval('ans = ans ' + line);
                } catch (e) {
                    line = '';
                }
            };
            return line;
        }
    });

    Ractive.components.Home = Ractive.extend({
        template: '#home',
        data: () => {
            return {
                value: `I love maths!
1 + 2
test = 4 + 2

test * 3

test cm to inch`
            };
        }
    });

    Ractive.components.Notepad = Ractive.extend({
        template: '#Notepad',
        data: () => {
            return {
                value: ''
            };
        }
    });

    Ractive({
        el: 'body',
        template: '#index'
    });
})(Ractive, math, jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vdGVwYWQvTm90ZXBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFPLEFBQUMsaUJBQVUsRUFBQyxPQUFPLEVBQUcsQUFBTyxBQUFDLEFBQU0sQUFBQyxBQUN4QyxBQUFRLEFBQUUsQUFBVSxBQUNwQjs7QUFBSSxZQUFFLEFBQUksNENBQ047a0JBQU8sa0JBQ0w7b0JBQUssQUFBQyxBQUFFO0FBQ1QsQUFBQyxtQkFDTDt5QkFDSixBQUFDLEFBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJSYWN0aXZlLmNvbXBvbmVudHMuTm90ZXBhZCA9IFJhY3RpdmUuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJyNOb3RlcGFkJyxcbiAgICBkYXRhOiAoKT0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOicnICBcbiAgICAgICAgfTtcbiAgICB9XG59KTtcbiJdfQ==
