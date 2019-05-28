$(document).ready(function(){
    
    
    
    $('#menuToggler').click(function(){
        $('#navbar .container').slideToggle('slow/400/fast');
        $('#out-of-navbar').toggleClass('out-of-navbar');
    });
    
    $(window).click(function(){
        $('#culinary_subMenu').slideUp('slow/400/fast');
        $('#aboutus_subMenu').slideUp('slow/400/fast');
        $('#rooms_subMenu').slideUp('slow/400/fast');
        $('#conference_subMenu').slideUp('slow/400/fast');
    });

    $('#aboutUs').click(function(){
        $('#aboutus_subMenu').slideToggle('slow/400/fast');
        $('#rooms_subMenu').slideUp('slow/400/fast');
        $('#conference_subMenu').slideUp('slow/400/fast');
        $('#culinary_subMenu').slideUp('slow/400/fast');
    });

    $('#rooms').click(function(){
        $('#rooms_subMenu').slideToggle('slow/400/fast');
        $('#aboutus_subMenu').slideUp('slow/400/fast');
        $('#conference_subMenu').slideUp('slow/400/fast');
        $('#culinary_subMenu').slideUp('slow/400/fast');
    });

    $('#conferenceHall').click(function(){
        $('#conference_subMenu').slideToggle('slow/400/fast');
        $('#aboutus_subMenu').slideUp('slow/400/fast');
        $('#rooms_subMenu').slideUp('slow/400/fast');
        $('#culinary_subMenu').slideUp('slow/400/fast');
    });

    $('#culinaryDelights').click(function(){
        $('#culinary_subMenu').slideToggle('slow/400/fast');
        $('#aboutus_subMenu').slideUp('slow/400/fast');
        $('#rooms_subMenu').slideUp('slow/400/fast');
        $('#conference_subMenu').slideUp('slow/400/fast');
    });

    
});

//removes container class
var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 1000) {
            $('#header .header').removeClass('container');
        } 
        
        else if (ww > 1000) {
            $('#header .header').addClass('container');
        };
    };

$(window).resize(function(){
alterClass();
});
//Fire it when the page first loads:
alterClass();