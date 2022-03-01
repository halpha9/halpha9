$(document).ready(function(){

    function clickSingleA(a)
    {
        items = document.querySelectorAll('.single.active');

        if(items.length) 
        {
            items[0].className = 'single';
        }

        a.className = 'single active';
    }


	$(".section-about").waypoint(function(direction) {
        if(direction=="down") {
            $('.navigation').removeClass('hidden');
        }
        else {
            $('.navigation').addClass('hidden');
        }
    });
});

function disableScroll() {
    // Get the current page scroll position
    scrollTop = 
      window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = 
      window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}

const overlay = document.querySelector('.overlay');
const container = document.querySelector('.container');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const projectsSection = document.querySelector('.section-projects');
const radioNav = document.querySelectorAll('.projects__radio-label')
const svg = document.querySelector('.svg__page')
const title = document.querySelectorAll('.projects__components');
const no = document.querySelectorAll('.projects__no');

const openModal = function () {
    container.classList.add('modal');
    overlay.classList.remove('hidden');
    btnCloseModal.classList.remove('hidden');
    //title.style.color = "white";
    
    for( let i = 0; i < radioNav.length; i++) {
        radioNav[i].style.display = "none";
     }

    for( let i = 0; i < title.length; i++) {
        title[i].style.color = "var(--color-lightgrey)";
     }

    for( let i = 0; i < no.length; i++) {
        no[i].style.color = "var(--color-lightgrey-2)";
     }
};
const closeModal = function () {
    container.classList.remove('modal');
    overlay.classList.add('hidden');
    btnCloseModal.classList.add('hidden');

    for( let i = 0; i < title.length; i++) {
        title[i].style.color = "var(--color-darkgrey)";
    }
    
     for( let i = 0; i < no.length; i++) {
        no[i].style.color = "var(--color-lightgrey-1)";
    }

    for( let i = 0; i < radioNav.length; i++) {
        radioNav[i].style.display = "flex";
     }
};

console.log(title)

for( let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
    
 }
 
btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    console.log(e.key);
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        closeModal();
    }
});
 