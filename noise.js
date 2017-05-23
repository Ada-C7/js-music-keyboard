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
    newNote.playNote();
  });

  $('body').keydown(function(event) {

    var note = $(this).html();
    // console.log(note);

    if (event.key === 'c') {
      var newNote = new Note('c');
      newNote.playNote();
    } else if (event.key === 'd') {
      newNote = new Note('d');
      newNote.playNote();
    } else if (event.key === 'e') {
      newNote = new Note('e');
      newNote.playNote();
    } else if (event.key === 'f') {
      newNote = new Note('f');
      newNote.playNote();
    } else if (event.key === 'g') {
      newNote = new Note('g');
      newNote.playNote();
    } else if (event.key === 'a') {
      newNote = new Note('a');
      newNote.playNote();
    } else if (event.key === 'b') {
      newNote = new Note('b');
      newNote.playNote();
    }


  });
});
