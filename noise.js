$(document).ready( function() {

  var alwaysPlay = function (elementID) {
    var audio = document.getElementById(elementID);
    if (audio.paused) {
        audio.play();
    } else {
      audio.currentTime = 0;
    }
  };

  var clickHelper = function(elementAudioID) {
    return function() {
      alwaysPlay(elementAudioID);
    };
  };

  var keyPressHelper = function(element) {
    return function(event) {
      if (event.key == element.key) {
        alwaysPlay(element.audio);
      }
    };
  };

  var setupKeyboard = function() {
    var keys = [
      {'key': 'a', 'audio': 'aAudio'},
      {'key': 'b', 'audio': 'bAudio'},
      {'key': 'c', 'audio': 'cAudio'},
      {'key': 'd', 'audio': 'dAudio'},
      {'key': 'e', 'audio': 'eAudio'},
      {'key': 'f', 'audio': 'fAudio'},
      {'key': 'g', 'audio': 'gAudio'}
    ];

    for (var i = 0; i < keys.length; i++) {
      var selected = keys[i];
      $('.' + selected.key).click(clickHelper(selected.audio));
      // Would be good to take out of loop eventually.
      $('body').keydown(keyPressHelper(selected));
    }
  };

  setupKeyboard();
});
