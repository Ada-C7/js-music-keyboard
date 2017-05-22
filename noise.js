$(document).ready( function() {

  Array.prototype.contains = function ( needle ) {
     for(i in this) {
         if (this[i] == needle) return true;
     }
     return false;
  };

  button.click(function(){
    playKey(this.class);
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
