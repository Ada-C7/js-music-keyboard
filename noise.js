$(document).ready( function() {

var alwaysPlay = function (elementID) {
  var audio = document.getElementById(elementID);
  if (audio.paused) {
      audio.play();
  } else {
    audio.currentTime = 0;
  }
};

var helper = function(elementAudioID) {
  return function() {
    alwaysPlay(elementAudioID);
  };
};

var keyPressHelper = function(element) {
  return function(event) {
    console.log(element);
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
      $('.' + selected.key).click(helper(selected.audio));
      $('body').keydown(keyPressHelper(selected));
    }
  };

  setupKeyboard();

  $("body").keydown(function() {
    if (event.key == 'c') {
      alwaysPlay("cAudio");
    }
  });

//   $("body").keydown(function() {
//     if (event.key == 'd') {
//       alwaysPlay("dAudio");
//     }
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'e') {
//       alwaysPlay("eAudio");
//     }
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'f') {
//       alwaysPlay("fAudio");
//     }
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'g') {
//       alwaysPlay("gAudio");
//     }
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'a') {
//       alwaysPlay("aAudio");
//     }
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'b') {
//       alwaysPlay("bAudio");
//     }
//   });

});
