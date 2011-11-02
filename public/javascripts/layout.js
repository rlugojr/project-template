var Layout = function(){};

(function(){

  Layout.Editor = new Class({
    
    Implements: [Options, Events],
    
    options: {},
    
    initialize: function(options){
      this.setOptions(options);
      this.setup();
    },
    
    setup: function(){
      console.log('Boing!');
    }
    
  });

})();

window.addEvents({
  domready: function(){
    new Layout();
  }
});
