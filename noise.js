$(document).ready( function() {

  Array.prototype.contains = function ( needle ) {
     for(i in this) {
         if (this[i] == needle) return true;
     }
     return false;
  };

  // your code here
  $(".c").click(function(){
    document.getElementById("cAudio").play();
  });

  $(".d").click(function(){
    document.getElementById("dAudio").play();
  });

  $(".e").click(function(){
    document.getElementById("eAudio").play();
  });

  $(".f").click(function(){
    document.getElementById("fAudio").play();
  });

  $(".g").click(function(){
    document.getElementById("gAudio").play();
  });

  $(".a").click(function(){
    document.getElementById("aAudio").play();
  });

  $(".b").click(function(){
    document.getElementById("bAudio").play();
  });

  $('body').keydown(function(event){
    var validKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    if (validKeys.contains(event.key) {
      document.getElementById(event.key + "Audio").play(); }
  );

});
