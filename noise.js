$(document).ready( function() {
  $('.instrument').on ('click', '.note', function() {
    var note = $(this).html();
    var audio = '#' + note + "Audio";
    console.log(note);
    $(audio)[0].load();
    $(audio)[0].play();
  });
});
