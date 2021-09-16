$(function () {
    $(document).ready(function () {
        $("#submitButton").css("display", "inline");
        $("#inputPostalNumber").css("display", "inline");
        $("#hiddenJS").css("display", "none");
        $("#hideListDate").css("display", "none");
        $("#hideListDay").css("display", "none");
        $("#showListDate").css("display", "block");
        $("#showListDay").css("display", "block");
        updateClosedDayList();
        if (($(document).scrollTop() < 150)) { // If user has scrolled down toggle class affix
            $(".nav").toggleClass("affix");
        } //Sets affix for nav class to make bar black
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

function checkPostalNumber(input){
    let validNumbers = [98139, 98140, 98142, 98138];
        for(let i = 0; i < validNumbers.length;){
            if (validNumbers[i] == input){
                return true;
            }
            i++;
        }
    return false;
}

function getPostalNumberInput(){ 
    var PostalNumber = document.getElementById('inputPostalNumber').value;
    PostalNumber = PostalNumber.split(" ").join("");
    let x = PostalNumber.length;
    var PostalNumber =  PostalNumber.replace(/[^0-9.]/g, '');
    let target = document.getElementById('postalNumberMessage');
    let y = PostalNumber.length;
    let isOnlyNumbers = true;
    /* some other fields */
    /* now call ur function by passing the above values */
    if(x > y) {
        isOnlyNumbers = false;
    }

    let isPossible = checkPostalNumber(parseInt(PostalNumber));
    if(isPossible && isOnlyNumbers){
        target.innerHTML = "Vi har hemkörning till dig!";
        target.style.display = "block";
        target.classList.add('text-success');
        target.classList.remove('text-danger');
    } else if(!isOnlyNumbers){
        target.innerHTML = "Du får bara använda siffror i fältet.";
        target.style.display = "block";
        target.classList.add('text-danger');
        target.classList.remove('text-success');
    } else {
        target.innerHTML = "Vi har inte hemkörning till dig!";
        target.style.display = "block";
        target.classList.add('text-danger');
        target.classList.remove('text-success');
    }
    return isPossible;
}


function updateClosedDayList(){
    dateList = [
        { title: 'Nyårsdagen', date: new Date('2022-01-01') },
        { title: 'Trettondedag', date: new Date('2022-01-06') },
        { title: 'Första maj', date: new Date('2022-05-01') },
        { title: 'Sveriges nationaldag', date: new Date('2022-06-06') },
        { title: 'Julafton', date: new Date('2021-12-24') },
        { title: 'Juldagen', date: new Date('2021-12-25') },
        { title: 'Annandag jul', date: new Date('2021-12-26') },
        { title: 'Nyårsafton', date: new Date('2021-12-31') }
      ]

    var today = new Date();
    for(var i = 0; i < 8; i++){
        const closest = dateList.reduce(function (a, b) { // a och b är tagna ur dateList efter reduce modellen. Dessa är i detta fall ett index av dateList 
            const adiff = a.date - today;
            const bdiff = b.date - today;
            if(adiff > 0 && adiff < bdiff){
                return a;
            }
            return b;
        });
        today = closest.date;
        const options = { month: 'long', day: '2-digit' };
        const dateStr = new Intl.DateTimeFormat('sv-SE', options).format;
        dateList.splice(dateList.indexOf(closest), 1);
        $("#dayLi" + (i + 1)).text(closest.title);
        $("#dateLi" + (i + 1)).text(dateStr(today));
    }
}