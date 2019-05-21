$(document).ready(function(){
    $('#a-D').click(function(){
        $('#li-D').addClass('active');
        $('#li-R').removeClass('active');
        $('#li-B').removeClass('active');
        $('#li-O').removeClass('active');
        $('#li-C').removeClass('active');
        $('#li-A').removeClass('active');
    });

    $('#a-B').click(function(){
        $('#li-B').addClass('active');
        $('#li-R').removeClass('active');
        $('#li-D').removeClass('active');
        $('#li-O').removeClass('active');
        $('#li-C').removeClass('active');
        $('#li-A').removeClass('active');
    });

    $('#a-R').click(function(){
        $('#li-R').addClass('active');
        $('#li-D').removeClass('active');
        $('#li-B').removeClass('active');
        $('#li-O').removeClass('active');
        $('#li-C').removeClass('active');
        $('#li-A').removeClass('active');
    });

    $('#a-O').click(function(){
        $('#li-O').addClass('active');
        $('#li-R').removeClass('active');
        $('#li-B').removeClass('active');
        $('#li-D').removeClass('active');
        $('#li-C').removeClass('active');
        $('#li-A').removeClass('active');
    });

    $('#a-C').click(function(){
        $('#li-C').addClass('active');
        $('#li-R').removeClass('active');
        $('#li-B').removeClass('active');
        $('#li-O').removeClass('active');
        $('#li-D').removeClass('active');
        $('#li-A').removeClass('active');
    });

    $('#a-A').click(function(){
        $('#li-A').addClass('active');
        $('#li-R').removeClass('active');
        $('#li-B').removeClass('active');
        $('#li-O').removeClass('active');
        $('#li-C').removeClass('active');
        $('#li-D').removeClass('active');
    });
});

