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
        },
        oninit: function () {
            var self = this;
            $.get('/content/' + location.pathname.split('/')[2], function (data) {
                self.set('value', data);
            });
        }
    });

    Ractive.components.Notepad = Ractive.extend({
        template: '#Notepad',
        data: () => {
            return {
                value: ''
            };
        },
        oninit: function () {
            var self = this;
            self.observe('value', function () {
                $.ajax({
                    type: "POST",
                    url: location.pathname,
                    data: JSON.stringify({ content: self.get('value') }),
                    success: function () {
                        self.set('lastSaved', new Date());
                    },
                    contentType: 'application/json'
                });
            }, {
                init: false
            });
        }
    });

    Ractive({
        el: 'body',
        template: '#index',
        data: {
            debounce: function (func, wait, immediate) {
                var timeout;
                return function () {
                    var context = this,
                        args = arguments;
                    var later = function () {
                        timeout = null;
                        if (!immediate) func.apply(context, args);
                    };
                    var callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) func.apply(context, args);
                };
            }
        }
    });
})(Ractive, math, jQuery);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vdGVwYWQvTm90ZXBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxDQUFPLEFBQUMsaUJBQVUsRUFBQyxPQUFPLEVBQUcsQUFBTyxBQUFDLEFBQU0sQUFBQyxBQUN4QyxBQUFRLEFBQUUsQUFBVSxBQUNwQjs7QUFBSSxZQUFFLEFBQU0sNENBQ1I7a0JBQU8sa0JBQ0g7b0JBQUssQUFBRSxBQUFFO0FBQ1osQUFBQyxtQkFDTDt5QkFDRDtjQUFNLEFBQUUsQUFBWSxBQUNoQjtTQUFJLEFBQUksQUFBRyxBQUFJLEFBQUMsQUFDaEI7Z0JBQUksQUFBQyxFQUFPLEFBQUMsQUFBTyxBQUFFLEFBQVksQUFDOUI7aUJBQUMsQUFBQyxFQUFJLEFBQUMsWUFDSDt1QkFBSSxBQUFFLFNBQU0scUJBQ1o7YUFBRyxBQUFFLEFBQVEsQUFBQyxBQUFRLEFBQ3RCO1NBQUksQUFBRSxBQUFJLEFBQUMsQUFBUyxBQUFDLEFBQUMsQUFBTyxBQUFDLEFBQUksQUFBQyxBQUFHLEFBQUMsQUFBTyxBQUFDLEFBQUMsQUFBQyxBQUNqRDtPQUFPLEFBQUUsQUFBVSxBQUNmLEFBQUksQUFBQyxBQUFHLEFBQUMsQUFBVyxBQUFFLEFBQUksQUFBSSxBQUFFLEFBQUMsQUFBQyxBQUNyQzs7QUFDRCx1QkFBVyxBQUFFLDRCQUFrQjtnQkFDbEMsRUFBQyxBQUFDO1lBQ04sRUFBRSxNQUNDO21CQUFJLEFBQUUsQUFBSyxBQUNkLEFBQUMsQUFBQzt5QkFDTjtjQUNKLEFBQUMsQUFBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIlJhY3RpdmUuY29tcG9uZW50cy5Ob3RlcGFkID0gUmFjdGl2ZS5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiAnI05vdGVwYWQnLFxuICAgIGRhdGE6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgb25pbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vYnNlcnZlKCd2YWx1ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBsb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7Y29udGVudDpzZWxmLmdldCgndmFsdWUnKX0pLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0KCdsYXN0U2F2ZWQnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICBpbml0OiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG59KTtcbiJdfQ==
