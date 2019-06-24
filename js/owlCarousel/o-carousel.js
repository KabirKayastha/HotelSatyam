    $('.gallery .owl-carousel').owlCarousel({
        loop:true,
        margin: 20,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed: 1000,
        dragEndSpeed: 250,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1050:{
                items:5
            }
        }
    })

