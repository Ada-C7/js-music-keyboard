$(document).ready( function() {
  var notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

  var playNote = function(note) {
    var audio = $("#" + note + "Audio");
    audio.trigger('load');
    audio.trigger('play');
  };

  var playNoteHelper = function(note) {
    return function() {
      playNote(note);
    };
  };

  var setClickPlay = function() {
    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      $('.' + note).on('click', playNoteHelper(note));
    }
  };

  $('body').keydown(function(event) {
    console.log(event.key);
    if (notes.includes(event.key)) {
      playNote(event.key);
    }
  });

  setClickPlay();
});
