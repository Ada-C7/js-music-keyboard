$(document).ready( function() {

  $('button').click(function(){
    note = $(this).html();
    sound = "#" + note + "Audio";
    $(sound).get(0).play();

  });

    $('body').keydown(function(e){
      // console.log(e.key);
      sound = "#" + e.key + "Audio";
      $(sound).get(0).play();

  });

});
