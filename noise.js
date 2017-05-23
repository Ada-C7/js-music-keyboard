$(document).ready( function() {

  //On Click make noise:
  // $('.instrument').on('click', 'button', function(){
  //   var audio = $(this).text() + "Audio";
  //   document.getElementById(audio).play();
  // })

  $('.instrument').on('keydown', 'button', function(press){
    var audio = press.key + "Audio";
    if (document.getElementById(audio).paused) {
        document.getElementById(audio).play();
      } else {
        document.getElementById(audio).currentTime = 0
      }
  })
});
