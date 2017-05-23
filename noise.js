$(document).ready( function() {


$(".instrument").on("click", "button", function() {
  var note = $(this).html();
  console.log(note);
  var audio = document.getElementById(note + "Audio");
  audio.play();
});


  $('body').keypress(function(event){
    var scale = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var note = event.key;
    var audio = '#' + note + "Audio";

    if (scale.includes(note)) {
      $(audio)[0].load();
      $(audio)[0].play();
    }

  });
});
