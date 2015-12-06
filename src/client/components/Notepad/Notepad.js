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
                data: JSON.stringify({content:self.get('value')}),
                success: function(){
                    self.set('lastSaved', new Date());
                },
                contentType: 'application/json'
            });
        }, {
            init: false
        });
    }
});