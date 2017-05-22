$(document).ready( function() {

  $('.note').click(function(event) {
    var note = $(this).html();
    var audio = $('#' + note + "Audio");
    $(audio)[0].load();
    $(audio)[0].play();
  });
});
