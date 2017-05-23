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
      audioC.currentTime = 0;
      audioC.play();
    } else if (note === 'd') {
      audioD.currentTime = 0;
      audioD.play();
    } else if (note === 'e') {
      audioE.currentTime = 0;
      audioE.play();
    } else if (note === 'f') {
      audioF.currentTime = 0;
      audioF.play();
    } else if (note === 'g') {
      audioG.currentTime = 0;
      audioG.play();
    } else if (note === 'a') {
      audioA.currentTime = 0;
      audioA.play();
    } else if (note === 'b') {
      audioB.currentTime = 0;
      audioB.play();
    }
  };

  // var pauseNote = function() {
  //   audioC.pause();
  // };

  $('.instrument').on('click', 'button', function(event) {
    console.log(event);
    console.log($(this).html());
    var note = $(this).html();
    $(this)(playNote(note));
  });
});


// if (this.paused == false) {
//     this.pause();
//     alert('music paused');
// } else {
//     this.play();
//     alert('music playing');
// }
