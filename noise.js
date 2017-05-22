$(document).ready( function() {

  $("button").click(function(){
    var getClasses = $(this).attr("class");
    var classes = getClasses.split(" ");

    for (i = 0; i < classes.length; i++){
      playKey(classes[i]);
    }
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
