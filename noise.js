
$(document).ready(function() {

  var play = function(note) {
    var sound = $("#"+note+"Audio")[0];
    dampen();
    sound.load();
    sound.play();
  };

  // play notes by clicking
  $("button").click(function(){
    var note = this.innerHTML;
    play(note);
  });

  // play notes by typing
  $("body").keypress(function(event){
    var input_ascii = event.which;
    var letter = (String.fromCharCode(input_ascii)).toLowerCase();
    $("."+letter).addClass("active");
    // $("."+letter).addClass("active").delay(5000).removeClass("active");
    setTimeout(function(){
      $("."+letter).removeClass("active");
    }, 120);
    play(letter);
  });

  // dampen sounds between each one
  var dampen = function(){
    var notes = "abcdefg";
    for (var i = 0; i < notes.length; i ++) {
      pause(notes[i]);
    }
  };

  var pause = function(note) {
    var sound = $("#"+note+"Audio")[0];
    sound.pause();
  };
});
