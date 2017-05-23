$(document).ready( function() {

//function to play audio based on ID
function playAudio(letter) {
    var noteID = ("#" + letter + "Audio");
    $(noteID)[0].load();
    $(noteID)[0].play();
}

//helper function for the closure
function helper(theNote) {
  return function() {
    playAudio(theNote);
  };
}

function setupNotes() {

  var notes = [ "a", "b", "c", "d", "e", "f", "g"];

  //event handler for key presses -- probably shouldn't be part of setupNotes()?
  $("body").keydown(function(event) {
    notes.forEach(function(note) {
     if (event.key == note) {
      playAudio(note);
      // was trying to toggle/add the active class on keydown but this is not working (trying add b/c i thought maybe toggle was happening too quickly)
      $("." + note).addClass('.active');
    }});
  });

  //create event handlers for clicks for each note
  notes.forEach(function(letter) {
    $("." + letter).click(helper(letter));
  });
}

setupNotes();

});
