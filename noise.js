
var playNote = function(note){
   var sound = $("#" + note +"Audio")[0];
   sound.play();
 };


$(document).ready(function() {

   $('.c').click(function() {
     note = "c";
     playNote(note);
   });

   $('.d').click(function() {
     note = "d";
     playNote(note);
   });

   $('.e').click(function() {
     note = "e";
     playNote(note);
   });

   $('.f').click(function() {
     note = "f";
     playNote(note);
   });

   $('.g').click(function() {
     note = "g";
     playNote(note);
   });

   $('.a').click(function() {
     note = "a";
     playNote(note);
   });

   $('.b').click(function() {
     note = "b";
     playNote(note);
   });

}
);
