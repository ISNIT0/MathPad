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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhY2tncm91bmRSdWxlci9CYWNrZ3JvdW5kUnVsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztBQUNoRCxZQUFRLEVBQUUsa0JBQWtCO0FBQzVCLFFBQUksRUFBRSxNQUFJO0FBQ04sZUFBTztBQUNMLGlCQUFLLEVBQUMsRUFBRTtTQUNULENBQUM7S0FDTDtBQUNELFlBQVEsRUFBQztBQUNMLGFBQUssRUFBQyxZQUFVO0FBQ1osbUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDeEM7S0FDSjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJCYWNrZ3JvdW5kUnVsZXIvQmFja2dyb3VuZFJ1bGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiUmFjdGl2ZS5jb21wb25lbnRzLkJhY2tncm91bmRSdWxlciA9IFJhY3RpdmUuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJyNCYWNrZ3JvdW5kUnVsZXInLFxuICAgIGRhdGE6ICgpPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdmFsdWU6JydcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOntcbiAgICAgICAgbGluZXM6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldCgndmFsdWUnKS5zcGxpdCgnXFxuJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhbGN1bGF0aW9uT3ZlcmxheS9DYWxjdWxhdGlvbk92ZXJsYXkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ25ELFlBQVEsRUFBRSxxQkFBcUI7QUFDL0IsUUFBSSxFQUFFLE1BQU07QUFDUixlQUFPO0FBQ0gsaUJBQUssRUFBRSxFQUFFO1NBQ1osQ0FBQztLQUNMO0FBQ0QsWUFBUSxFQUFFO0FBQ04sYUFBSyxFQUFFLFlBQVk7QUFDZixtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN4RTtBQUNELHFCQUFhLEVBQUUsWUFBVTtBQUNyQixtQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztLQUNKO0FBQ0QsVUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDckIsY0FBVSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztBQUN0QixjQUFVLEVBQUUsVUFBVSxJQUFJLEVBQUU7QUFDeEIsWUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixZQUFJLElBQUksRUFBRSxJQUFJO0FBQ1YsZ0JBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDO0FBQzFELGdCQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNSLGdCQUFJO0FBQ0Esb0JBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUMzQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1Isb0JBQUksR0FBRyxFQUFFLENBQUM7YUFDYjtTQUNKLENBQUM7QUFDRixlQUFPLElBQUksQ0FBQztLQUNmO0NBQ0osQ0FBQyxDQUFDIiwiZmlsZSI6IkNhbGN1bGF0aW9uT3ZlcmxheS9DYWxjdWxhdGlvbk92ZXJsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJSYWN0aXZlLmNvbXBvbmVudHMuQ2FsY3VsYXRpb25PdmVybGF5ID0gUmFjdGl2ZS5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiAnI0NhbGN1bGF0aW9uT3ZlcmxheScsXG4gICAgZGF0YTogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBjb21wdXRlZDoge1xuICAgICAgICBsaW5lczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2YWx1ZScpLnNwbGl0KCdcXG4nKS5tYXAodGhpcy5yZW5kZXJMaW5lLmJpbmQodGhpcykpO1xuICAgICAgICB9LFxuICAgICAgICBvcmlnaW5hbExpbmVzOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KCd2YWx1ZScpLnNwbGl0KCdcXG4nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGFyc2VyOiBtYXRoLnBhcnNlcigpLFxuICAgIG9wZXJhdGlvbnM6IFsnKycsICctJ10sXG4gICAgcmVuZGVyTGluZTogZnVuY3Rpb24gKGxpbmUpIHtcbiAgICAgICAgdmFyIHBhcnNlciA9IHRoaXMucGFyc2VyO1xuICAgICAgICBpZiAobGluZSkgdHJ5IHtcbiAgICAgICAgICAgIGlmICgxICsgdGhpcy5vcGVyYXRpb25zLmluZGV4T2YobGluZS50cmltKClbMF0pKSB0aHJvdyAnJztcbiAgICAgICAgICAgIGxpbmUgPSBwYXJzZXIuZXZhbCgnYW5zID0gJyArIGxpbmUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxpbmUgPSBwYXJzZXIuZXZhbCgnYW5zID0gYW5zICcgKyBsaW5lKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBsaW5lO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhvbWUvaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3JDLFlBQVEsRUFBRSxPQUFPO0FBQ2pCLFFBQUksRUFBRSxNQUFJO0FBQ04sZUFBTztBQUNMLGlCQUFLLEVBQUMsQ0FBQzs7Ozs7O2VBTUYsQ0FBQztTQUNQLENBQUM7S0FDTDtBQUNELFVBQU0sRUFBQyxZQUFVO0FBQ2IsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFNBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQVMsSUFBSSxFQUFDO0FBQzdELGdCQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzQixDQUFDLENBQUM7S0FDTjtDQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJIb21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJSYWN0aXZlLmNvbXBvbmVudHMuSG9tZSA9IFJhY3RpdmUuZXh0ZW5kKHtcbiAgICB0ZW1wbGF0ZTogJyNob21lJyxcbiAgICBkYXRhOiAoKT0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHZhbHVlOmBJIGxvdmUgbWF0aHMhXG4xICsgMlxudGVzdCA9IDQgKyAyXG5cbnRlc3QgKiAzXG5cbnRlc3QgY20gdG8gaW5jaGBcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG9uaW5pdDpmdW5jdGlvbigpe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICQuZ2V0KCcvY29udGVudC8nK2xvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJylbMl0sIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgc2VsZi5zZXQoJ3ZhbHVlJywgZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk5vdGVwYWQvTm90ZXBhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQ3hDLFlBQVEsRUFBRSxVQUFVO0FBQ3BCLFFBQUksRUFBRSxNQUFNO0FBQ1IsZUFBTztBQUNILGlCQUFLLEVBQUUsRUFBRTtTQUNaLENBQUM7S0FDTDtBQUNELFVBQU0sRUFBRSxZQUFZO0FBQ2hCLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixZQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxZQUFZO0FBQzlCLGFBQUMsQ0FBQyxJQUFJLENBQUM7QUFDSCxvQkFBSSxFQUFFLE1BQU07QUFDWixtQkFBRyxFQUFFLFFBQVEsQ0FBQyxRQUFRO0FBQ3RCLG9CQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7QUFDakQsdUJBQU8sRUFBRSxZQUFVO0FBQ2Ysd0JBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDckM7QUFDRCwyQkFBVyxFQUFFLGtCQUFrQjthQUNsQyxDQUFDLENBQUM7U0FDTixFQUFFO0FBQ0MsZ0JBQUksRUFBRSxLQUFLO1NBQ2QsQ0FBQyxDQUFDO0tBQ047Q0FDSixDQUFDLENBQUMiLCJmaWxlIjoiTm90ZXBhZC9Ob3RlcGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiUmFjdGl2ZS5jb21wb25lbnRzLk5vdGVwYWQgPSBSYWN0aXZlLmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6ICcjTm90ZXBhZCcsXG4gICAgZGF0YTogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH07XG4gICAgfSxcbiAgICBvbmluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLm9ic2VydmUoJ3ZhbHVlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IGxvY2F0aW9uLnBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtjb250ZW50OnNlbGYuZ2V0KCd2YWx1ZScpfSksXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXQoJ2xhc3RTYXZlZCcsIG5ldyBEYXRlKCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGluaXQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
