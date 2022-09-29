// Talking_Keyboard.js
// Written by Aaron Gaba
//
// jQuery functions for animation and speech

// Sound library for each letter
// Uses the HowlerJS library
var sound = new Howl({
    src: 'alphabet_sprites.wav',
    sprite: {
        a: [0,544],
        b: [644,490],
        c: [1234,486],
        d: [1820,475],
        e: [2395,445],
        f: [2940,546],
        g: [3586,537],
        h: [4223,502],
        i: [4825,549],
        j: [5474,483],
        k: [6057,425],
        l: [6582,477],
        m: [7159,443],
        n: [7702,528],
        o: [8330,478],
        p: [8908,450],
        q: [9458,619],
        r: [10177,695],
        s: [10972,577],
        t: [11649,553],
        u: [12302,499],
        v: [12901,618],
        w: [13619,710],
        x: [14429,598],
        y: [15127,588],
        z: [15815,571]
    }
});


// A small utility function that returns true if the given keycode
// is associated with an alphanumeric key (based upon jQuery's event.which property).
function isAlphanumericKey(keycode) {
    return (keycode >= 48) && (keycode <= 90);
}

// Main function of TalkingKeyboard

$(document).ready(function(){

    $(".keyboard-key").on({
        // Upon mouse-down, make the selectedLetter region immediately visible again
        // and show the letter that was pressed (which is exactly the button's label).
        // Also, speak the letter.
        mousedown: function() {
            $("#selectedLetter").stop().css('opacity', '1.0').text($(this).text());
            console.log($(this).text());
            sound.play($(this).text().toLowerCase());
        },

        // Upon mouse-up, fade away the shown letter.
        mouseup: function() {
            $("#selectedLetter").stop().animate({opacity: 0}, 1000);
        }

    });

});


// Emulates a mousedown event on a keyboard-key button.
$(document).keydown(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mousedown").addClass('active-style');
    }
});

// Emulates a mouseup event on a keyboard-key button.
$(document).keyup(function (e) {
    if (isAlphanumericKey(e.which)) {
        var myID = "#key-" + String.fromCharCode(e.which);
        $(myID).trigger("mouseup").removeClass('active-style');
    }
});