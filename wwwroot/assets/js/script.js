$(function(){
    var disableScroll = false;
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        console.log("Clicked menu");

        $("#mainListDiv").toggleClass("show_list");

        if($('.navTrigger').hasClass('active')) {
            console.log("FadeOut");
            $("#mainListDiv").fadeIn();
            // add listener to disable scroll
            noScroll();
        }
        else {
            console.log("FadeIn");
            $("#mainListDiv").fadeOut();
            // Remove listener to re-enable scroll
            enableScroll()
        }
    
    });
    
    $(window).scroll(function() {
        if(disableScroll){
            console.log("Doing nothing")
        }    
        else if (($(document).scrollTop() > 600)) {
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

