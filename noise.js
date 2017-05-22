$(document).ready( function() {
  $('.instrument').on('click', '.note', function() {
    var note = $(this).html();
    var audio = '#' + note + "Audio";

    $(audio)[0].load();
    $(audio)[0].play();
  });

  $('body').on('keydown', function(e) {
    var note = e.key;
    var audio = '#' + note + "Audio";

    if (['a', 'b', 'c', 'd', 'e', 'f', 'g'].includes(note)) {
      $(audio)[0].load();
      $(audio)[0].play();
    }

  });
});
