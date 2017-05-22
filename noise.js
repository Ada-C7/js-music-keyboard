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
  $(".d").click(function() {
    document.getElementById("dAudio").play();
  });
  // trying to do this all in one rather than one for each.
  // $('.instrument').on('click', 'button', function(event) {
  //   document.getElementById("Audio").play();
  // });
});
