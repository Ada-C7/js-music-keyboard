$(document).ready( function() {
  var playing = false;


  $('button').click(function() {
    var note = $(this).html();
    console.log(note);
    var sound = '#' + note + 'Audio';
    $(sound).load();
    $(sound).get(0).play();

    //
    // if (playing === false) {
    //   $('#cAudio').trigger('play');
    //   playing = true;
    //   $(this).text("stop sound");
    // } else {
    //   document.getElementById('#cAudio').pause();
    //   playing = false;
    //   $(this).text("restart sound");
    //
    //   $(this).play();
    //   alert('music playing');
    //
    // }
    // console.log(button);
  });

  $('body').keydown(function(event) {
      var keys = {'c': true, 'd': true, 'e': true, 'f': true, 'g': true, 'a': true, 'b': true};
    if (keys[event.key]) {
      var note = event.key;
      console.log(note);
      var sound = '#' + note + 'Audio';
      $(sound).load();
      $(sound).get(0).play();
    }
  });
});
