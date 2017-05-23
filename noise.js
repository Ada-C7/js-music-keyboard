$(document).ready( function() {

  var getNote = function(note) {
    var audio = $('#' + note + "Audio");
    $(audio)[0].load();
    $(audio)[0].play();
  };

  $('.note').click(function() {
    getNote($(this).html());
  });

  $("body").keydown(function(event) {
    getNote(event.key);
  });

 // tried to add chord, but the resulting sound is strange, to be honest 
  $('.song').click(function() {
    var notes = ["c", "f", "g"];
    for (var i = 0; i < notes.length; i++) {
      getNote(notes[i]);
    }
  });


});
