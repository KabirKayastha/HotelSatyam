$(document).ready(function(){
    
    // click function
    // $('#star1').click(function(){
    //     (this).addClass('checked');
    // });

    //hover function
    $('#star1').hover(
        function(){
            $(this).css('color','orange')
        },

        function(){
            $(this).css('color','#333')
        }
    ).click(function(){
        $(this).css('color','orange');
    });

    $('#star2').hover(

        function(){
            $('#star1, #star2').css('color','orange')
        },

        function(){
            $('#star1, #star2').css('color','#333');
        }
    );

    $('#star3').hover(

        function(){
            $('#star1, #star2, #star3').css('color','orange')
        },

        function(){
            $('#star1, #star2, #star3').css('color','#333');
        }
    );

    $('#star4').hover(

        function(){
            $('#star1, #star2, #star3, #star4').css('color','orange')
        },

        function(){
            $('#star1, #star2, #star3, #star4').css('color','#333');
        }
    );

    $('#star5').hover(

        function(){
            $('#star1, #star2, #star3, #star4, #star5').css('color','orange')
        },

        function(){
            $('#star1, #star2, #star3, #star4, #star5').css('color','#333');
        }
    );

});