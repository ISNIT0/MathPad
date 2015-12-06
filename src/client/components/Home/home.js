Ractive.components.Home = Ractive.extend({
    template: '#home',
    data: ()=>{
        return {
          value:`I love maths!
1 + 2
test = 4 + 2

test * 3

test cm to inch`
        };
    },
    oninit:function(){
        var self = this;
        $.get('/content/'+location.pathname.split('/')[2], function(data){
            self.set('value', data);
        });
    }
});