$(document).ready( function() {
  // your code here
  var replayNote = function(note) {
    key = document.getElementById(note + "Audio");
    key.load();
    key.play();
  };

  $('.c').click(function() {
    replayNote("c");
  });

  

  $(".d").click(function() {
    document.getElementById("dAudio").load();

    document.getElementById("dAudio").play();
  });

  $(".e").click(function() {
    document.getElementById("eAudio").play();
  });

  $(".f").click(function() {
    document.getElementById("fAudio").play();
  });

  $(".g").click(function() {
    document.getElementById("gAudio").play();
  });

  $(".a").click(function() {
    document.getElementById("aAudio").play();
  });

  $(".b").click(function() {
    document.getElementById("bAudio").play();
  });
});
