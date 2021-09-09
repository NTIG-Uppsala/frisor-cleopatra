$(function(){
    $(document).ready(function(){
        $('.nav').toggleClass('affix');
        if(matchMedia('(pointer:coarse)').matches) {
            $('.navTrigger').css("display","block");
        }
        else if (matchMedia("(max-width:530px)").matches) {
            $('.navTrigger').css("display","block");
        }
    });

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() <= 530 || matchMedia('(pointer:coarse)').matches) {
            $('.navTrigger').css("display","block");
        }
        else if (win.width() >= 530){
            $('.navTrigger').css("display","none");
        }

    });
    

    var disableScroll = false;
    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        if ($(document).scrollTop() < 150) {
            $('.nav').toggleClass('affix');
        }
        
        $("#mainListDiv").toggleClass("show_list");

        if($('.navTrigger').hasClass('active')) {
            $("#mainListDiv").fadeIn();
            // add listener to disable scroll
            noScroll();
        }
        else {
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
            //Do Nothing
        }    
        else if (($(document).scrollTop() > 150)) {
            $('.nav').addClass('affix');
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

