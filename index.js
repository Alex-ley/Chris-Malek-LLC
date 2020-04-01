let rellax = new Rellax('.rellax');

const menu_wrap = document.querySelector('.menu-wrap');
const burger = document.getElementById('nav-icon1');
burger.addEventListener('click', e => {
    burger.classList.toggle("open");
    menu_wrap.classList.toggle("open");
    if (burger.classList.contains('open')){
        //disableScroll();
    }else{
        //enableScroll();
    }
})

function disableScroll() { 
    // Get the current page scroll position 
    scrollTop =  window.pageYOffset || document.documentElement.scrollTop; 
    scrollLeft =  window.pageXOffset || document.documentElement.scrollLeft, 

    // if any scroll is attempted, 
    // set this to the previous value 
    window.onscroll = function(e) { 
        e.preventDefault();
        window.scrollTo(scrollLeft, scrollTop); 
    }; 
} 

function enableScroll() { 
    window.onscroll = function() {}; 
} 