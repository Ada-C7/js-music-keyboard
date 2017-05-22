$(document).ready(function() {

  $('body').keypress(function(event) {
    var media;

    switch (event.keyCode) {
      case 49:
        media = 'media/c_note.mp3';
        break;
      case 50:
        media = 'media/d_note.mp3';
        break;
      case 51:
        media = 'media/e_note.mp3';
        break;
      case 52:
        media = 'media/f_note.mp3';
        break;
      case 53:
        media = 'media/g_note.mp3';
        break;
      case 54:
        media = 'media/a_note.mp3';
        break;
      case 55:
        media = 'media/b_note.mp3';
        break;
      }

      var audioElement = document.createElement('audio');
      if (media) {
        audioElement.setAttribute('src', media);
        audioElement.load(); audioElement.play();
      }

  });

});
