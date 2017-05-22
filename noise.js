$(document).ready( function() {

  Array.prototype.contains = function ( needle ) {
     for(i in this) {
         if (this[i] == needle) return true;
     }
     return false;
  };

  $(".c").click(function(){
    playKey('c');
  });

  $(".d").click(function(){
    playKey('d');
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
    if (validKeys.contains(key)) {
      document.getElementById(key + "Audio").play();
    }
  };

});
