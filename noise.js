
var playNote = function(note){
   var sound = $("#" + note +"Audio")[0];
   sound.play();
 };

$(document).ready(function() {

  $(".note").on('click', function(){
    playNote($(this).html());
  });

  $('body').on('keypress',function(event){
    playNote(event.key);

  });

}
);
