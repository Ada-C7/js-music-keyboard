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

  $('body').keydown(function(event) {
    // var note = $(this).html();
    // console.log(note);

    // if (event.key === note) {
    //   var newNote = new Note(note);
    //   $(this)(newNote.playNote());
    // }
    if (event.key === 'c') {
      var newNote = new Note('c');
      $(this)(newNote.playNote());
    } else if (event.key === 'd') {
      var newNote = new Note('d');
      $(this)(newNote.playNote());
    } else if (event.key === 'e') {
      var newNote = new Note('e');
      $(this)(newNote.playNote());
    } else if (event.key === 'f') {
      var newNote = new Note('f');
      $(this)(newNote.playNote());
    } else if (event.key === 'g') {
      var newNote = new Note('g');
      $(this)(newNote.playNote());
    } else if (event.ket === 'a') {
      var newNote = new Note('a');
      $(this)(newNote.playNote());
    } else if (event.key === 'b') {
      var newNote = new Note('b');
      $(this)(newNote.playNote());
    }
  });
});
