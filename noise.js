$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = $(this).html();
    var audio = document.getElementById(note + "Audio");

    audio.load();
    audio.play();
  });

  $('body').keydown(function(event){
    var keys = {'c': 'true', 'd': 'true', 'e': 'true', 'f': 'true', 'g': 'true', 'a': 'true', 'b': 'true'};

    if(keys[event.key]) {
      var note = event.key;
      var audio = document.getElementById(note + "Audio");

      audio.load();
      audio.play();
    }
  });

});
