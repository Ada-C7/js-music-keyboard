
var playNote = function(note){
   var sound = $("#" + note +"Audio")[0];
   sound.preload = 'auto';
   sound.load();
   sound.play();
 };

$(document).ready(function() {

  $(".note").on('click', function(){
    playNote($(this).html());
        }
      );

  $('body').on('keypress',function(event){
    playNote(event.key);
      }
    );
  }
);
