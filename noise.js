$(document).ready(function() {

  var audioElementC = document.createElement('audio');
    audioElementC.setAttribute('src', 'media/c_note.mp3');

  var audioElementD = document.createElement('audio');
    audioElementD.setAttribute('src', 'media/d_note.mp3');

  var audioElementE = document.createElement('audio');
    audioElementE.setAttribute('src', 'media/e_note.mp3');

  var audioElementF = document.createElement('audio');
    audioElementF.setAttribute('src', 'media/f_note.mp3');

  var audioElementG = document.createElement('audio');
    audioElementG.setAttribute('src', 'media/g_note.mp3');

  var audioElementA = document.createElement('audio');
    audioElementA.setAttribute('src', 'media/a_note.mp3');

  var audioElementB = document.createElement('audio');
    audioElementB.setAttribute('src', 'media/b_note.mp3');




  $('.instrument').on('click', 'button.c', function(event) {
      audioElementC.play();
});
$('.instrument').on('click', 'button.d', function(event) {
    audioElementD.play();
});
$('.instrument').on('click', 'button.e', function(event) {
    audioElementE.play();
});
$('.instrument').on('click', 'button.f', function(event) {
    audioElementF.play();
});
$('.instrument').on('click', 'button.g', function(event) {
    audioElementG.play();
});
$('.instrument').on('click', 'button.a', function(event) {
    audioElementA.play();
});
$('.instrument').on('click', 'button.b', function(event) {
    audioElementB.play();
});



});
