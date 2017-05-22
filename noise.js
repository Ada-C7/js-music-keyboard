$(document).ready( function() {
  // var obj = document.createElement("audio");
  // obj.src="https://kahimyang.com/resources/sound/click.mp3";
  // var audio = $("#cAudio")[0];
  // var audio = $("#clickSound")[0];
  // $('#cAudio').click(function(){
  //   // var obj.setAttribute("src", "media/c_note.mp3");
  //   this.Play();
  // });
  // your code here


  var audioC = $("#cAudio")[0];
	// var audio2 = $("#clickSound2")[0];
	$('.c').click(function() {
	  audioC.play();
	});


    var audioD = $("#dAudio")[0];
    $('.d').click(function() {
  	  audioD.play();
  	});

    var audioE = $("#eAudio")[0];
    $('.e').click(function() {
  	  audioE.play();
  	});

    var audioF = $("#fAudio")[0];
    $('.f').click(function() {
  	  audioF.play();
  	});

    var audioG = $("#gAudio")[0];
    $('.g').click(function() {
  	  audioG.play();
  	});

    var audioA = $("#aAudio")[0];
    $('.a').click(function() {
  	  audioA.play();
  	});

    var audioB = $("#bAudio")[0];
    $('.b').click(function() {
  	  audioB.play();
  	});

});

// $( document ).ready(function() {
// 	var audio = $("#cAudio")[0];
// 	var audio2 = $("#cAudio")[0];
// 	$("#cAudio").mousedown(function() {
// 	  audio2.play();
// 	});
// 	$("#button").mouseup(function() {
// 	  audio.play();
// 	});
// });
