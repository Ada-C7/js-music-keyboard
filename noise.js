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
    replayNote("e");
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
      replayNote("c");
    } else if (event.key == 'd'){
      replayNote("d");
      console.log(event);
    } else if (event.key == 'e'){
      replayNote("e");
    } else if (event.key == 'f'){
      replayNote("f");
    } else if (event.key == 'g'){
      replayNote("g");
    } else if (event.key == 'a'){
      replayNote("a");
    } else if (event.key == 'b'){
      replayNote("b");
    } else {
      alert("You must have typed a letter other than a, b, c, d, e, f, g");
    }
  });
});
