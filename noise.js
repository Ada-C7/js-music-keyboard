$(document).ready( function() {
  var playing = false;


  $('button').click(function() {
    var note = $(this).html();
    console.log(note);
    var sound = '#' + note + 'Audio';

    if (playing === false) {
    $(sound).load();
    console.log($(sound));
    $(sound).get(0).play();
    playing = true;
    // $(this).text('stop sound');
  } else {
    $(sound).delay(100);
    playing = false;
    // $(this).text('restart sound');
  }
  });

  function buttonExists(keyCharacter) {
    var buttons = $('button');

    for (var i = 0; i < buttons.length; i++) {
      console.log('called buttonExists', buttons[i].html);
      if ($(buttons[i]).html() == keyCharacter) {
        console.log('found key!', keyCharacter);
        return true;
      }
    }

    return false;
  }

  $('body').keydown(function(event) {
    // var keys1 = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];
    // var keys = {'c': true, 'd': true, 'e': true, 'f': true, 'g': true, 'a': true, 'b': true};

    if (buttonExists(event.key)) {
      var note = event.key;
      console.log(note);
      var sound = '#' + note + 'Audio';
      $(sound).load();
      $(sound).get(0).play();
    }
  });
});
