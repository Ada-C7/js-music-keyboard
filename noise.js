$(document).ready( function() {

  var clickPlay = function(note) {
    var playNote = function() {
      var audio = $("#" + note + "Audio");
      audio.trigger('load');
      audio.trigger('play');
    };
    return playNote;
  };

  var setClickPlay = function() {
    var notes = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

    for (var i = 0; i < notes.length; i++) {
      var note = notes[i];
      $('.' + note).on('click', clickPlay(note));
    }
  };

  setClickPlay();
});
