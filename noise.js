$(document).ready( function() {
  var playNote = function(note) {
    var audio = $("#" + note + "Audio");
    audio.trigger('load');
    audio.trigger('play');
  };

  var playChord = function(chordNotes) {
    return function() {
      for (var i = 0; i < chordNotes.length; i++) {
        playNote(chordNotes[i]);
      }
    };
  };

  var setClickChords = function() {
    var chords = {c: ['c', 'e', 'g'], f: ['f', 'a', 'c'], g: ['g', 'b', 'd']};
    for (var i = 0; i < Object.keys(chords).length; i++) {
      var chord = Object.keys(chords)[i];
      var chordNotes = chords[chord];
      $('.' + chord + '-chord').on('click', playChord(chordNotes));
    }
  };

  $('.note').click(function() {
    playNote($(this).html());
  });

  $('body').keydown(function(event) {
    playNote(event.key);
  });

  setClickChords();
});
