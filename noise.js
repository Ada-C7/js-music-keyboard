$(document).ready( function() {

  var alwaysPlay = function (elementID) {
    var audio = document.getElementById(elementID);
    if (audio.paused) {
        audio.play();
    } else {
      audio.currentTime = 0;
    }
  };

  $(".c").click(function() {
    alwaysPlay("cAudio");
  });
  $("body").keydown(function() {
    if (event.key == 'c') {
      alwaysPlay("cAudio");
    }
  });

  $(".d").click(function() {
    alwaysPlay("dAudio");
  });
  $(".e").click(function() {
    alwaysPlay("eAudio");
  });
  $(".f").click(function() {
    alwaysPlay("fAudio");
  });
  $(".g").click(function() {
    alwaysPlay("gAudio");
  });
  $(".a").click(function() {
    alwaysPlay("aAudio");
  });

  // trying to do this all in one rather than one for each.
  // $('.instrument').on('click', 'button', function(event) {
  //   document.getElementById("Audio").play();
  // });
});
