$(document).ready( function() {

  $(".d").click(function(){
    playKey(this.class);
  });

  $(".e").click(function(){
    playKey('e');
  });

  $(".f").click(function(){
    playKey('f');
  });

  $(".g").click(function(){
    playKey('g');
  });

  $(".a").click(function(){
    playKey('a');
  });

  $(".b").click(function(){
    playKey('b');
  });

  $('body').keydown(function(event){
    playKey(event.key);
  });

  var playKey = function(key){
    var validKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    if (validKeys.indexOf(key) > -1) {
      document.getElementById(key + "Audio").play();
    }
  };

});
