$(document).ready( function() {

function playAudio(letter) {
    console.log("HELLO");
    var noteID = ("#" + letter + "Audio");
    console.log(noteID);
    $("#" + letter + "Audio")[0].load();
    $("#" + letter + "Audio")[0].play();
}

function helper(theNote) {
  return function() {
    playAudio(theNote);
  };
}

function setupNotes() {

  notes = ["a", "b", "c", "d", "e", "f", "g"];

  for (var i = 0; i < notes.length; i++) {
    // We get the help element in the Array
    var note = notes[i];
      //  When this element gets focus

      $("." + note).click(helper(note));
      console.log("Event Handler: " + note);

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
