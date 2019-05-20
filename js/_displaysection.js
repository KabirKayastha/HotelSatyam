// $(document).ready(function(){
//     $('#a-D').click(function(){
//         $('#right-D').toggle();
//     });
// });

function _(id){
    return document.getElementById(id);
}

function switchCaret(){
    if($('#a-D').css('background','red')){
        $('#right-D').css('display','block');
    } 
    else{
        $('#right-D').css('display','none');
    }
}

switchCaret();