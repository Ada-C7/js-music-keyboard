$(document).ready( function() {

  console.log(event);

  // Grabbing the audio source. (Working)
  var audioC = document.getElementById("cAudio");
  var audioD = document.getElementById("dAudio");


  var playNote = function() {
    audioC.play();
  };

  // var pauseNote = function() {
  //   audioC.pause();
  // };

  $('.instrument').on('click', 'button', function(event) {
    console.log(event);
    $(this).addClass(playNote());
  });
});
