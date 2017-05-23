function play(event) {
  var note = $(this).attr("id");
  document.getElementById(note + "Audio").play();
}

$(document).ready( function() {
  // $('.note').on("click", play);
  $("body").keydown(function(event) {
    var key = document.getElementById(event.key + "Audio");
    if (key){
      key.play();
    }
  });
});
