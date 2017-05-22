$(document).ready( function() {

  function makeNoiser(noise) {
    return function() {
      $('.instrument').html(noise);
    };
  }

  function play(event) {
    var note = $(this).attr("id");
    document.getElementById(note + "Audio").play();
  }

  // var soundD = new Audio("media/d_note.wav");
  // var soundE = new Audio("media/e_note.wav");
  // var soundF = new Audio("media/f_note.wav");
  // var soundG = new Audio("media/g_note.wav");
  // var soundA = new Audio("media/a_note.wav");
  // var soundB = new Audio("media/b_note.wav");

  $('.note').on("click", play);
});
