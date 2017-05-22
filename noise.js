$(document).ready(function() {

  // var key_sound = $("#cAudio")[0];
  // $(".c").click(function(){
  //   key_sound.load();
  //   key_sound.play();
  // });

  var play = function(note) {
    var sound = $("#"+note+"Audio")[0];
    sound.load();
    sound.play();
  };

  $("button").click(function(){
    var note = this.className.slice(-1);
    play(note);
  });
});
