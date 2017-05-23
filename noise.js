$(document).ready( function() {

  // var allAudio = [$("#cAudio"), $("#dAudio"), $("#eAudio"), $("#fAudio"), $("#gAudio"), $("#aAudio"), $("#bAudio")];
  //
  // var colorClass = [$('.c'), $('.d'), $('.e'), $('.f'), $('.g'), $('.a'), $('.b')];
  //
  //
  // for (var i = 0; i < allAudio.length; i++) {
  //   var audio = allAudio[i][0];
  //   colorClass[i].click(function() {
  //     audio[i].play();
  //   });
  // }
  //
  var audioC = $("#cAudio")[0];
  $('.c').click(function() {
    if (audioC.paused) {
        audioC.play();
    } else {
      audioC.currentTime = 0;
    }
  });


  var audioD = $("#dAudio")[0];
  $('.d').click(function() {
    if (audioD.paused) {
        audioD.play();
    } else {
      audioD.currentTime = 0;
    }
  });

  var audioE = $("#eAudio")[0];
  $('.e').click(function() {
    if (audioE.paused) {
        audioE.play();
    } else {
      audioE.currentTime = 0;
    }
  });

  var audioF = $("#fAudio")[0];
  $('.f').click(function() {
    if (audioF.paused) {
        audioF.play();
    } else {
      audioF.currentTime = 0;
    }
  });

  var audioG = $("#gAudio")[0];
  $('.g').click(function() {
    if (audioG.paused) {
        audioG.play();
    } else {
      audioG.currentTime = 0;
    }
  });

  var audioA = $("#aAudio")[0];
  $('.a').click(function() {
    if (audioA.paused) {
        audioA.play();
    } else {
      audioA.currentTime = 0;
    }
  });

  var audioB = $("#bAudio")[0];
  $('.b').click(function() {
    if (audioB.paused) {
        audioB.play();
    } else {
      audioB.currentTime = 0;
    }
  });

  $('body').keydown(function(event){
    if (event.key == 'c') {
      audioC.play();
    } else if (event.key == 'd') {
      audioD.play();
    } else if (event.key == 'e') {
      audioE.play();
    } else if (event.key == 'f') {
      audioF.play();
    } else if (event.key == 'g') {
      audioG.play();
    } else if (event.key == 'a') {
      audioA.play();
    } else if (event.key == 'b') {
      audioB.play();
    }
  });
});


// var obj = document.createElement("audio");
// obj.src="https://kahimyang.com/resources/sound/click.mp3";
// var audio = $("#cAudio")[0];
// var audio = $("#clickSound")[0];
// $('#cAudio').click(function(){
//   // var obj.setAttribute("src", "media/c_note.mp3");
//   this.Play();
// });
// your code here

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
