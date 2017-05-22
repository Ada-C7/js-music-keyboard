$(document).ready( function() {
  $('.note').click(function(event) {
    // $('#cAudio').load();
    console.log($('#cAudio'));
    $('#cAudio')[0].play();
  });
});
