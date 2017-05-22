$(document).ready( function() {

  // trigger appropriate sound when box is clicked
  $(".instrument").on("click", "button", function() {
    var note = $(this).html();
    console.log(note);
    var audio = document.getElementById(note + "Audio");
    audio.play();
  });

  // trigger appropriate sound when key is pressed
  $("body").keydown(event, function() {
    var allNotes = ["a", "b", "c", "d", "e", "f", "g"];
    if (allNotes.includes(event.key)) {
      var note = event.key;
      var audio = document.getElementById(note + "Audio");
      audio.play();
    } else {
      alert("Not a valid key, dodo");
    }
  });

});
