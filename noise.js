$(document).ready(function() {
  // handles click playing
  $('.note').on('click', playByClick);
});

var playByClick = function() {
  // store the actual key value from the clicked .note element
  var keyClicked = $(this).html();
  // send that key to play function
  play(keyClicked);
};

var play = function(key) {
  // created a string for the audio element, using the passed key info
  var audio = "#" + key + "Audio";
  // .load() allows repeated play
  $(audio)[0].load();
  // .play() plays the audio from html
  $(audio)[0].play();
};
