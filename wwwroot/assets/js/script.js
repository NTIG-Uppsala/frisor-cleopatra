$(function () {
    $(document).ready(function () {
        $(".nav").toggleClass("affix"); //Sets affix for nav class to make bar black
        if (matchMedia("(pointer:coarse)").matches) { // Check if device is using touch screen
            $(".navTrigger").css("display", "block"); // Show element .navTrigger
        } else if (matchMedia("(max-width:590px)").matches) { // Check if device is using screen smaller then 590px in width
            $(".navTrigger").css("display", "block"); // Show element .navTrigger
        }
    });

    /* 
    Element: Window
    Usage: Checks if window is resized then sets navTrigger accordingly.
    Deps: None
    Return: None    
    */

    $(window).on("resize", function () {
        var win = $(this); //this = window
        if (win.width() <= 590 || matchMedia("(pointer:coarse)").matches) {
            $(".navTrigger").css("display", "block");
        } else if (win.width() >= 590) {
            $(".navTrigger").css("display", "none");
        }
    });

    var disableScroll = false; // Global variable for checking scrolling

    /* 
    Element: navTrigger
    Usage: Checks if element is clicked then toggles active class.
    Deps: None
    Return: None    
    */
    $(".navTrigger").click(function () {
        $(this).toggleClass("active");
        if ($(document).scrollTop() < 150) { // If user has scrolled down toggle class affix
            $(".nav").toggleClass("affix");
        }

        $("#mainListDiv").toggleClass("show_list"); // Toggles show list to show client navLinks in a list.

        if ($(".navTrigger").hasClass("active")) {
            $("#mainListDiv").fadeIn(); // Fades manListDiv to make a smooth transition
            // add listener to disable scroll
            noScroll();
        } else {
            $("#mainListDiv").fadeOut();
            // Remove listener to re-enable scroll
            enableScroll();
        }
    });

    /* 
    Element: navLink
    Usage: Logic for clicking a link in mobile menu.
    Deps: None
    Return: None    
    */
    $(".navLink").click(function () {
        if ($(".navTrigger").hasClass("active")) {
            $("#mainListDiv").toggleClass("show_list");
            $(".navTrigger").toggleClass("active");
            $(".nav").toggleClass("affix");
            enableScroll();
        }
    });

    /* 
    Element: Window
    Usage: Sets nav to black if user scrolls page.
    Deps: None
    Return: None    
    */
    $(window).scroll(function () {
        if (disableScroll) {
        } else if ($(document).scrollTop() > 150) { // Checks current position of page
            $(".nav").addClass("affix");
        } else {
            $(".nav").removeClass("affix");
        }
    });

    /* 
    Element: None
    Usage: Function to disable scroll and locks screen to current positon
    Deps: None
    Return: None    
    */
    function noScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft), (disableScroll = true);
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
    }

    /* 
    Element: None
    Usage: Enables scroll for user
    Deps: None
    Return: None    
    */
    function enableScroll() {
        window.onscroll = function () {};
        disableScroll = false;
    }
});