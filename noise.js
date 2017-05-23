$(document).ready( function() {


  var Note = function(letter) {
    this.letter = letter;
  };

  Note.prototype = {
    location: function() {
      var tag = this.letter + "Audio";

      var audioLocation = document.getElementById(tag);
      return audioLocation;
    },

    playNote: function() {
      var location = this.location();
      location.currentTime = 0;
      return location.play();
    }
  };

  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    var newNote = new Note(note);
    $(this)(newNote.playNote());
  });
});
