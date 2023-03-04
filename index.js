/* -- Carousel Navigation -- */

let activeIndex = 0;

const slides = document.getElementsByTagName("article");

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentSlide.dataset.status = "after";
  
  nextSlide.dataset.status = "becoming-active-from-before";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;
  
  const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
        nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);
  
  currentSlide.dataset.status = "before";
  
  nextSlide.dataset.status = "becoming-active-from-after";
  
  setTimeout(() => {
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

// js text type animation 
const typed = new Typed('#type-space', {
  strings: ['Websites!?', 'Web apps!?', 'Web services!?'],
  typeSpeed: 35,
  startDelay: 500,
  backDelay: 1000,
  backSpeed: 35,
  loop: true,
  loopCount: 200,
  fadeOut: true,
  showCursor: false
  // cursorChar: '...'

});

const type = new Typed('#hmz-space', {
  strings: ['Welcome!', 'Network Support!?', 'Desktop Support!?'],
  typeSpeed: 10,
  startDelay: 0,
  backDelay: 1000,
  backSpeed: 0,
  loop: true,
  loopCount: 200,
  fadeOut: true,
  showCursor: false
  // cursorChar: '...'

});

const typing = new Typed('#htj-space', {
  strings: ['Welkom!', 'Websites!?', 'Web apps!?', 'Web services!?'],
  typeSpeed: 10,
  startDelay: 0,
  backDelay: 1000,
  backSpeed: 0,
  loop: true,
  loopCount: 200,
  fadeOut: true,
  showCursor: false
  // cursorChar: '...'

});