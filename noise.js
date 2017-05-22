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
      $('body').keydown(); {
        if (event.key == selected.key) {
          helper(selected.audio);
        }
      }
    }
  };

  setupKeyboard();

//   $("body").keydown(function() {
//     if (event.key == 'c') {
//       alwaysPlay("cAudio");
//     }
//   });
//
//   $(".d").click(function() {
//     alwaysPlay("dAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'd') {
//       alwaysPlay("dAudio");
//     }
//   });
//
//   $(".e").click(function() {
//     alwaysPlay("eAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'e') {
//       alwaysPlay("eAudio");
//     }
//   });
//
//   $(".f").click(function() {
//     alwaysPlay("fAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'f') {
//       alwaysPlay("fAudio");
//     }
//   });
//
//   $(".g").click(function() {
//     alwaysPlay("gAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'g') {
//       alwaysPlay("gAudio");
//     }
//   });
//
//   $(".a").click(function() {
//     alwaysPlay("aAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'a') {
//       alwaysPlay("aAudio");
//     }
//   });
//
//   $(".b").click(function() {
//     alwaysPlay("bAudio");
//   });
//
//   $("body").keydown(function() {
//     if (event.key == 'b') {
//       alwaysPlay("bAudio");
//     }
//   });
//
//
//   // trying to do this all in one rather than one for each.
//   // $('.instrument').on('click', 'button', function(event) {
//   //   document.getElementById("Audio").play();
//   // });
});
