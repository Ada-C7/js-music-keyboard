$(document).ready( function() {
  // your code here
  // click on a box (class note)
  // trigger a tone (class a, b, etc.)
  // cycle through all the tones
  // bind calling play on a particular audio embed to clicking on the appropriate box
});

// <button onclick="document.getElementById('myTune').play()">Play Music</button>


function setupClicks() {
  var tones = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

  for (var i = 0; i < tones.length; i++) {
    var tone = tones[i];
    //make a function to attach to the appropriate click event
    []
  }
};

function makeTone(tone) {
  var audio = $("#" + tone + "Audio");
  $("." + tone).click(function() {
    audio.play();
  })
}


function makeToneCallback(tone) {
  return function() {
    makeTone(tone);
  }
}
