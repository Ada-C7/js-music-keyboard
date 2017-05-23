$(document).ready(function() {

  $('button').click(function(){
    button = $(this).html();
    note = '#' + button + "Audio";

    $(note).get(0).load();
    $(note).get(0).play();

  });
  $("body").keydown(function(event){
    note = "#" + event.key + "Audio";
    $(note).get(0).load();
    $(note).get(0).play();
  });
});
