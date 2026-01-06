$(document).ready(function(){
    $(".nav-buttons").hover(function(){
        $(this).css("color", "rgba(192, 102, 0, 1)")
    });

    $("#topBar").mouseenter(function(){
        $(this).css("background-color", "hsla(0, 0%, 100%, 1.00)")
        $("#image").css("opacity", "1")
        $("#name").css("opacity", "1")
    });

    $("#topBar").mouseleave(function(){
        $(this).css("background-color", "hsla(0, 0%, 100%, 0.27)")
        $("#image").css("opacity", "0.5")
        $("#name").css("opacity", "0.5")
    });
    
});