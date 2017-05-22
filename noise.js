$(document).ready(function() {
  // handles click playing
  $('.note').on('click', playByClick);
  // handles keyboard playing inside the given html page(this)
  $(this).keypress(playByKey);
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

var playByKey = function(e){
  // store the keypressed value in lowercase
  var keyPressed = e.key.toLowerCase();
  // checks that pressed key is valid
  if (keyPressed.match(/[a-g]{1}/)) {
    // send that key to play function
    play(keyPressed);
  } else {
    // alert the user when invalid key is pressed
    alert("Only press keys C,D,E,F,G,A, or B");
  }
};
