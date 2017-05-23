$(document).ready(function() {

  var play = function(note) {
    var sound = $("#"+note+"Audio")[0];
    sound.load();
    sound.play();
  };

  // play notes by clicking
  $("button").click(function(){
    var note = this.className.slice(-1);
    play(note);
  });

  // play notes by typing
  $("body").keydown(function(event){
    var input_ascii = event.which;
    var letter = String.fromCharCode(input_ascii);
    play(letter.toLowerCase());
  });
});
