$(document).ready(function() {

  $('body').keypress(function(event) {
    var media;

    switch (event.keyCode) {
      case 49:
        media = $('#cAudio')[0];
        break;
      case 50:
        media = $('#dAudio')[0];
        break;
      case 51:
        media = $('#eAudio')[0];
        break;
      case 52:
        media = $('#fAudio')[0];
        break;
      case 53:
        media = $('#gAudio')[0];
        break;
      case 54:
        media = $('#aAudio')[0];
        break;
      case 55:
        media = $('#bAudio')[0];
        break;
      }

      if (media) {
        media.load(); media.play();
      }

  });

});
