$(document).ready( function() {


//on the click of .note and .(letter of class)
$('button').click(function(){
note = $(this).html();
// document.getElementById(note+"Audio").play();
// play the id of ('letter of class'+'Audio')

$('#' + note + "Audio").get(0).load();
$('#' + note + "Audio").get(0).play();


});

$('body').keydown(function(event){
// event.key returns the key that is pressed
note = event.key;
$('#' + note + "Audio").get(0).load();
$('#' + note + "Audio").get(0).play();

});

});
