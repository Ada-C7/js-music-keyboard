$(document).ready( function() {

function playAudio(letter) {
    console.log("HELLO");
    var noteID = ("#" + letter + "Audio");
    console.log(noteID);
    $(noteID)[0].load();
    $(noteID)[0].play();
}

function helper(theNote) {
  return function() {
    playAudio(theNote);
  };
}

function setupNotes() {

  var notes = [ "a", "b", "c", "d", "e", "f", "g"];


  $("body").keydown(function(event) {

    console.log("KEY " + event.key);
    notes.forEach(function(note) {
     if (event.key == note) {
      console.log(" NUMBER: " + note);
      playAudio(note);
    }});
  });

  for (var i = 0; i < notes.length; i++) {

    letter = notes[i];

    $("." + letter).click(helper(letter));
    console.log("Event Handler: " + letter);

  }
}

setupNotes();

  //
  // $(".c").click(function(){
  //   console.log("C");
  //   console.log($('#cAudio'));
  //   $("#cAudio")[0].load();
  //   $("#cAudio")[0].play();
  //
  // });

  //set up on clicks so that the right note plays when you click on the corresponding button

});
