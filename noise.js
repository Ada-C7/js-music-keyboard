$(document).ready( function() {
  // your code here
  $(".c").click(function(){
    document.getElementById("cAudio").play();
  });

  $(".d").click(function(){
    document.getElementById("dAudio").play();
  });

  $(".e").click(function(){
    document.getElementById("eAudio").play();
  });

  $(".f").click(function(){
    document.getElementById("fAudio").play();
  });

  $(".g").click(function(){
    document.getElementById("gAudio").play();
  });

  $(".a").click(function(){
    document.getElementById("aAudio").play();
  });

  $(".b").click(function(){
    document.getElementById("bAudio").play();
  });

  $('body').keydown(function(event){
    if (event.key == 'c'){
      document.getElementById("cAudio").play(); }
    else if (event.key == 'd'){
      document.getElementById("dAudio").play(); }
    else if (event.key == 'e'){
      document.getElementById("eAudio").play(); }
    else if (event.key == 'f'){
      document.getElementById("fAudio").play(); }
    else if (event.key == 'g'){
      document.getElementById("gAudio").play(); }
    else if (event.key == 'a'){
      document.getElementById("aAudio").play(); }
    else if (event.key == 'a'){
      document.getElementById("aAudio").play(); }
    });


});
