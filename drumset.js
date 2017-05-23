$(document).ready( function() {

  var playNote = function(note) {
    var id = '#' + note;
    $(id).get(0).load();
    $(id).get(0).play();
  };

  var speeds = {
    slow: 1000,
    medium: 500,
    fast: 200
  };

  var hiHatLoop;

  $('td.hi_hat').click(function () {
    var speed = $(this).html();
    if (hiHatLoop) { window.clearInterval(hiHatLoop); }

    if (speeds[speed]) {
      hiHatLoop = window.setInterval(function () { playNote('h'); }, speeds[speed]);
    }
  });

  $('.note').click(function () {
    playNote($(this).html());
  });

  var notes = ['b', 's', 'h', 'l', 'm'];
  $('body').keydown(function (event) {
    if (notes.includes(event.key)) {
      playNote(event.key);
    }
  });
});
