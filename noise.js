$(document).ready( function() {
    // curious how to DRY this up. i want to make a key variable and a keyAudio variable that will be set on click
    //  with two variables, only have to write  this function once
    $('body').click(function(event) {
        var target = (event.target.classList[1]);
        var key = target + "Audio"
        console.log(key);

        document.getElementById(key).play();
    })
});
