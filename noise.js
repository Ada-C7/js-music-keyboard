$(document).ready( function() {

  function setupClicks() {
    var tones = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    for (var i = 0; i < tones.length; i++) {
      var tone = tones[i];
      //make a function to attach to the appropriate click event
      $("." + tone).click(makeToneCallback(tone));
    }
  };

  function makeTone(tone) {
      $("#" + tone + "Audio")[0].play();
  }


  function makeToneCallback(tone) {
    return function() {
      makeTone(tone);
    }
  }

  setupClicks();
});
