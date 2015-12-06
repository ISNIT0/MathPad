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
        originalLines: function(){
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