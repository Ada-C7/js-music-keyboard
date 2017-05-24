$(document).ready( function() {
    $('body').bind('keypress click', function(event){
        var hasBeenClicked = false;
        $('body').click(function(event){
            hasBeenClicked = true;
            console.log(hasBeenClicked);
        })
        if (hasBeenClicked == true){
            var target = (event.target.classList[1]);
        } else {
            var target = (event.originalEvent.key);

        }

        var keyAudio = target + "Audio"
        document.getElementById(keyAudio).play();
    });


    // $('body').click(function(event) {
    //     var target = (event.target.classList[1]);
    //     var keyAudio = target + "Audio"
    //
    //     document.getElementById(keyAudio).play();
    // })
    //
    // $('body').keypress(function(event){
    //     var target = (event.originalEvent.key);
    //     var keyAudio = target + "Audio"
    //     document.getElementById(keyAudio).play();
    //
    // })
});
