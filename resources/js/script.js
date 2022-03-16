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
    radioNav.forEach(cur => cur.style.display = "none");
    title.forEach(cur => cur.style.color = "var(--color-lightgrey)");
    no.forEach(cur => cur.style.color = "var(--color-lightgrey-2)");
};
const closeModal = function () {
    container.classList.remove('modal');
    overlay.classList.add('hidden');
    btnCloseModal.classList.add('hidden');
    radioNav.forEach(cur => cur.style.display = "flex");
    title.forEach(cur => cur.style.color = "var(--color-darkgrey)");
    no.forEach(cur => cur.style.color = "var(--color-lightgrey-1)");
};

btnsOpenModal.forEach(cur => cur.addEventListener('click', openModal));
 
btnCloseModal.addEventListener('click', closeModal);
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !overlay.classList.contains('hidden')) {
        closeModal();
    }
});

//// PROJECTS
const leftArrow=document.querySelector('.left-arrow');
const rightArrow=document.querySelector('.right-arrow');
const slider=document.querySelector('.projects__block');
const slides = document.querySelectorAll('.projects__blocks');
const projectNav = document.querySelector('.projects__nav');


let curSlide = 0;
const maxSlide = slides.length;

const activeDot = function(slide) {
  document
  .querySelectorAll('.projects__radio-label')
  .forEach(dot => dot.classList
  .remove('projects__radio-label--active'));

  document.querySelector(`.projects__radio-label[for="slide${slide}"]`)
  .classList.add('projects__radio-label--active');
}

activeDot(0);

const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`);
  };
  
  goToSlide(0);

const nextSlide = function() {
  if(curSlide === maxSlide - 1) {
    curSlide = 0;
  }
  else{
    curSlide++;
  }
  goToSlide(curSlide)
  activeDot(curSlide);
}
const prevSlide = function() {
  if(curSlide === 0) {
    curSlide = maxSlide-1;
  }
  else{
    curSlide--;
  }
  goToSlide(curSlide)
  activeDot(curSlide);
}


//EVENT LISTENERS
rightArrow.addEventListener('click', function() {
  nextSlide();
});

leftArrow.addEventListener('click', function() {
  prevSlide();
});

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowRight') nextSlide();

  else if(e.key === 'ArrowLeft') prevSlide();
});

projectNav.addEventListener('click', function(e){
  if(e.target.classList.contains('projects__radio-label')) {
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
});


/*
document.querySelector('.header__main-nav').addEventListener('click', function(e){
    e.preventDefault();
    

    if(e.target.classList.contains('header__links')) {
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });

  */

