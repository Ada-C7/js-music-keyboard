$(document).ready( function() {
  // your code here
  var replayNote = function(note) {
    key = document.getElementById(note + "Audio");
    key.load();
    key.play();
  };

  // clicks
  $('.c').click(function() {
    replayNote("c");
  });
  $(".d").click(function() {
    replayNote("d");
  });
  $(".e").click(function() {
    replayNote("d");
  });
  $(".f").click(function() {
    replayNote("f");
  });
  $(".g").click(function() {
    replayNote("g");
  });
  $(".a").click(function() {
    replayNote("a");
  });
  $(".b").click(function() {
    replayNote("b");
  });

  //downkey
  $("body").keydown(function(event){
    if (event.key == 'c') {
      // var note = 'c';
      replayNote("c");
    }
  });
});
