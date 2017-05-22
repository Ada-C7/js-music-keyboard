$(document).ready( function() {

  var getNote = function(note) {
    var audio = $('#' + note + "Audio");
    $(audio)[0].load();
    $(audio)[0].play();
  };

  $('.note').click(function() {
    getNote($(this).html());
  });

  $("body").keydown(function(event) {
    getNote(event.key);
  });
});
