$(function(){
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        if ($(document).scrollTop() < 600) {
            $('.nav').toggleClass('affix');
            console.log("OK1");
        }
        $("#mainListDiv").toggleClass("show_list");

        if($('.navTrigger').hasClass('active')) {
            console.log("FadeOut");
            $("#mainListDiv").fadeIn();
        }
        else {
            console.log("FadeIn");
            $("#mainListDiv").fadeOut();
        }
    
    });
    
    $(window).scroll(function() {
        if ($(document).scrollTop() > 600) {
            $('.nav').addClass('affix');
            console.log("OK");
        } else {
            $('.nav').removeClass('affix');
        }
    });
});

