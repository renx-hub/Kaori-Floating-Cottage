$(document).ready(function(){
    $(".nav-buttons").hover(function(){
        $(this).css("color", "rgba(255, 157, 46, 1)")
    });

    $("#topBar").mouseenter(function(){
        $(this).css("background-color", "hsla(69, 100%, 86%, 1.00)")
    });
    
    $("#topBar").mouseleave(function(){
        $(this).css("background-color", "hsla(69, 100%, 86%, 0.56)")
    });
    
});