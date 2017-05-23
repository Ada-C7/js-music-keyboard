$(document).ready(function() {

     var key = {
          '.a': 'aAudio',
          '.b': 'bAudio',
          '.c': 'cAudio',
          '.d': 'dAudio',
          '.e': 'eAudio',
          '.f': 'fAudio',
          '.g': 'gAudio'
     };

     var note = '';
     $('div').click(function(event) {
          note = '.' + $(event.target).attr('class').slice(-1);
          return note;
     });

     $('div').on('click', note, function(event) {
          document.getElementById(key[note]).play();
     });

     $("body").keydown(function(event) {
          if (event.key == '.' + '') {
               alert('You got an A!');
          }
     });

     $('body').keypress(function(event){
          note = String.fromCharCode( event.which );
          // console.log(note);
          // console.log(typeof note);

          return note
     });

     $("body").keydown(function(event) {
          if (event.key == note) {
               note = '.' + note;
               console.log(note);

               document.getElementById(key[note]).play();
          }
     });


});
