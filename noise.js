$(document).ready( function() {

  console.log(event);

  // Grabbing the audio source. (Working)
  var audioC = document.getElementById("cAudio");
  var audioD = document.getElementById("dAudio");
  var audioE = document.getElementById("eAudio");
  var audioF = document.getElementById("fAudio");
  var audioG = document.getElementById("gAudio");
  var audioA = document.getElementById("aAudio");
  var audioB = document.getElementById("bAudio");


  var playNote = function(note) {
    if (note === 'c') {
      audioC.play();
    } else if (note === 'd') {
      audioD.play();
    } else if (note === 'e') {
      audioE.play();
    } else if (note === 'f') {
      audioF.play();
    } else if (note === 'g') {
      audioG.play();
    } else if (note === 'a') {
      audioA.play();
    } else if (note === 'b') {
      audioB.play();
    }
  };

  var pauseNote = function() {
    audioC.pause();
  };

  $('.instrument').on('click', 'button', function(event) {
    console.log(event);
    console.log($(this).html());
    var note = $(this).html();
    $(this).addClass(playNote(note));
  });
});
