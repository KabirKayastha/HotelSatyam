$('#review-container .owl-carousel').owlCarousel({
    loop:true,
    margin: 20,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 2000, //animation duration
    dragEndSpeed: 250,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },
        1050:{
            items:1
        }
    }
})

