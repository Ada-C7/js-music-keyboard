$(document).ready( function() {
  $('button').click(function() {
    note = $(this).html();
    audio = '#' + note + 'Audio';
    $(audio).get(0).play();
  });

  $('body').keydown(function(event) {
    var notes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    if (notes.indexOf(event.key) !== -1) {
      audio = '#' + event.key + 'Audio';
      $(audio).get(0).play();
    }
  });
});
