$(document).ready( function() {


  var Note = function(letter) {
    this.letter = letter;
  };

  Note.prototype = {
    location: function() {
      var tag = this.letter + "Audio";

      var audioLocation = document.getElementById(tag);
      console.log(audioLocation);
      return audioLocation;
    },

    playNote: function() {
      var location = this.location();
      console.log(typeof location === 'string');
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
