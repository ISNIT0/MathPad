Ractive.components.BackgroundRuler = Ractive.extend({
    template: '#BackgroundRuler',
    data: ()=>{
        return {
          value:''
        };
    },
    computed:{
        lines:function(){
            return this.get('value').split('\n');
        }
    }
});