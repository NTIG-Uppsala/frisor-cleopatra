$(function(){
    var disableScroll = false;
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");
        if ($(document).scrollTop() < 150) {
            $('.nav').toggleClass('affix');
            console.log("OK1");
        }
        
        $("#mainListDiv").toggleClass("show_list");

        if($('.navTrigger').hasClass('active')) {
            console.log("FadeIn");
            $("#mainListDiv").fadeIn();
            // add listener to disable scroll
            noScroll();
        }
        else {
            console.log("FadeOut");
            $("#mainListDiv").fadeOut();
            // Remove listener to re-enable scroll
            enableScroll()
        }
    
    });
    $( ".navLink" ).click(function() {
        if($('.navTrigger').hasClass('active')){
            $("#mainListDiv").toggleClass("show_list");
            $('.navTrigger').toggleClass('active');
            $('.nav').toggleClass('affix');
            enableScroll();
        }
      });

    
    $(window).scroll(function() {
        if(disableScroll){
            console.log("Doing nothing")
        }    
        else if (($(document).scrollTop() > 150)) {
            $('.nav').addClass('affix');
            console.log("OK");
        } 
        else {
            $('.nav').removeClass('affix');
        }
    });

    function noScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        disableScroll = true;
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }
      
    function enableScroll() {
        window.onscroll = function() {};
        disableScroll = false;
    }
});

