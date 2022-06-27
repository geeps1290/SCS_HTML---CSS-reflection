// WRITE IN jQuery
// when page scroll is <= "window.pageYOffset = 210", header is "position: absolute"



    if ($(document).scrollTop() <= 210) {
        $('.sticky-header').addClass('absolute-header');
        $('.sticky-header').removeClass('fixed-header');
    };

// when page is > " window.pageYOffset = 210 ", header is "position: fixed" and hidden
    // hide header

    if ($(document).scrollTop() > 210) {
        console.log(scrollTop);
        $('.sticky-header').addClass('fixed-header');
        $('.sticky-header').removeClass('absolute-header');
        // $('.sticky-header').hide();
    };

    // change header position to "fixed"

//


// on page scroll UP, slide header down

$(document).on("scroll", function(){

    $('.sticky-header').slideDown();

});




// on page scroll DOWN, slide header up