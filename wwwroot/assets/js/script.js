$(function () {
    $(document).ready(function () {
        $("#submitButton").css("display", "inline");
        $("#inputPostalNumber").css("display", "inline");
        $("#hiddenJS").css("display", "none");
        $("#hideListDate").css("display", "none");
        $("#hideListDay").css("display", "none");
        $("#showListDate").css("display", "block");
        $("#showListDay").css("display", "block");
        updateClosedDayList(todaysDate());  //Calls List logic function with todaysdate
        if (($(document).scrollTop() < 10)) { // If user has scrolled down toggle class affix
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
    Deps: JQuery
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
    Deps: JQuery
    Return: None    
    */
    $(".navTrigger").click(function () {
        $(this).toggleClass("active");
        if ($(document).scrollTop() < 10) { // If user has scrolled down toggle class affix
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
    Deps: JQuery
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
    Deps: JQuery
    Return: None    
    */
    $(window).scroll(function () {
        if (disableScroll) {
        } else if ($(document).scrollTop() > 10) { // Checks current position of page
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

/* 
Element: None
Usage: Checks user input if PostalNumber is correct. Returns true if value exist.
Deps: None
Return: Boolean    
*/

function checkPostalNumber(input){
    let validNumbers = [98139, 98140, 98142, 98138];
        for(let i = 0; i < validNumbers.length;i++){
            if (validNumbers[i] == input){
                return true;
            }
        }
    return false;
}


document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        getPostalNumberInput();
    }
}

/* 
Element: None
Usage: Logic for PostalNumber check and text viewing. Gets input from input element with id inputPostalNumber.
Deps: None
Return: Boolean    
*/

function getPostalNumberInput(){ 
    var PostalNumber = document.getElementById('inputPostalNumber').value;
    PostalNumber = PostalNumber.split(" ").join("");
    let x = PostalNumber.length;
    var PostalNumber =  PostalNumber.replace(/[^0-9.]/g, '');
    let target = document.getElementById('postalNumberMessage');
    let y = PostalNumber.length;
    let isOnlyNumbers = true;
    if(x > y) {
        isOnlyNumbers = false;
    }

    let IsValid = checkPostalNumber(parseInt(PostalNumber));
    if(IsValid && isOnlyNumbers){
        target.innerHTML = "Vi har hembesök till dig!";
        target.style.display = "block";
        target.classList.add('text-success');
        target.classList.remove('text-danger');
    } else if(!isOnlyNumbers){
        target.innerHTML = "Du får bara använda siffror i fältet.";
        target.style.display = "block";
        target.classList.add('text-danger');
        target.classList.remove('text-success');
    } else {
        target.innerHTML = "Vi har inte hembesök till dig!";
        target.style.display = "block";
        target.classList.add('text-danger');
        target.classList.remove('text-success');
    }
    return IsValid; //Returns bool to onclick call to make sure its successful
}

/* 
Element: None
Usage: Checks current day to list next closed days. It loops the resulting array to view days for user.
Deps: None
Return: None    
*/

function updateClosedDayList(today){
    const dateList = [
        { title: 'Nyårsdagen', month: 1, day: 1 },
        { title: 'Trettondedag', month: 1, day: 6 },
        { title: 'Första maj', month: 5, day: 1  },
        { title: 'Sveriges nationaldag', month: 6, day: 6 },
        { title: 'Julafton', month: 12, day: 24 },
        { title: 'Juldagen', month: 12, day: 25 },
        { title: 'Annandag jul', month: 12, day: 26 },
        { title: 'Nyårsafton', month: 12, day: 31 }
      ];

      var currentMonth = parseInt(today.getMonth() + 1); //get month returns a value between 0 and 11. setting +1 gets the real month number.
      var currentDay = parseInt(today.getDate());

      let futureDates = [];
      let pastDates = [];
      for(let i = 0; i < dateList.length; i++){
            if((dateList[i].month <= currentMonth)){
                if(dateList[i].day >= currentDay && dateList[i].month == currentMonth){
                    futureDates.push(dateList[i]);
                }
                else {
                    pastDates.push(dateList[i]);
                }
            }
            else {
                futureDates.push(dateList[i]);
            }
      }
    dateArr = [];
    dateArr.push.apply(dateArr, futureDates);
    dateArr.push.apply(dateArr, pastDates);

    for(let x = 0; x < dateArr.length; x++){
        $("#dayLi" + (x + 1)).text(dateArr[x].title);
        $("#dateLi" + (x + 1)).text(dateArr[x].day + "/" + dateArr[x].month); 
    }
    
}

/* 
Element: None
Usage: Gets current day in a date object.
Deps: None
Return: Date()   
*/

function todaysDate(){
    var date = new Date();
    return date;
}