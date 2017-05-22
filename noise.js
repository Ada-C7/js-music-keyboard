$(document).ready( function() {
  // your code here
  // click on a box (class note)
  // trigger a tone (class a, b, etc.)
  // cycle through all the tones
  // bind calling play on a particular audio embed to clicking on the appropriate box
  // $(".e").click(function() {
  //     $("#eAudio").play();
  //   })
  // $("#eAudio").play();

  $('.e').on('click', function() {
    $('#eAudio')[0].play();
  })
});

// <button onclick="document.getElementById('myTune').play()">Play Music</button>

// codepen example
// function showHelp(help) {
//   document.getElementById('help').innerHTML = help;
// }
//
// function helper(message) {
//   // Returns a new function to call 'showHelp' with the given message
//   function() {
//     showHelp(message);
//   }
// }
//
// function setupHelp() {
//   // An array of Objects with the ID of the TextField
//   //   and the help message.
//   var helpText = [
//       {'id': 'email', 'help': 'Your e-mail address'},
//       {'id': 'name', 'help': 'Your full name'},
//       {'id': 'age', 'help': 'Your age (you must be over 16)'}
//     ];
//     // Loop Through the Array
//   for (var i = 0; i < helpText.length; i++) {
//     // We get the help element in the Array
//     var item = helpText[i];
//         //  When this element gets focus
//         document.getElementById(item.id).onfocus = helper(item.help);
//
//     });
//   }
// }
//
// setupHelp();

//initial attempt
// function setupClicks() {
//   var tones = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
//
//   for (var i = 0; i < tones.length; i++) {
//     var tone = tones[i];
//     //make a function to attach to the appropriate click event
//     []
//   }
// };
//
// function makeTone(tone) {
//   var audio = $("#" + tone + "Audio");
//   $("." + tone).click(function() {
//     audio.play();
//   })
// }
//
//
// function makeToneCallback(tone) {
//   return function() {
//     makeTone(tone);
//   }
// }
