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
  showCursor: false,
  // cursorChar: '...'

});

const typeA = new Typed('#a-space', {
  strings: ['We are', 'Do you need'],
  typeSpeed: 10,
  startDelay: 0,
  backDelay: 3800,
  backSpeed: 0,
  loop: true,
  loopCount: 200,
  fadeOut: true,
  showCursor: false
  // cursorChar: '...'
});

const typeB = new Typed('#b-space', {
  strings: ['Network', 'Desktop', 'Field'],
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

const typeC = new Typed('#c-space', {
  strings: ['Engineers.', 'support?'],
  typeSpeed: 10,
  startDelay: 0,
  backDelay: 3800,
  backSpeed: 0,
  loop: true,
  loopCount: 200,
  fadeOut: true,
  showCursor: false
  // cursorChar: '...'
});

// const typingA = new Typed('#h-space', {
//   strings: ['Web'],
//   typeSpeed: 100,
//   startDelay: 0,
//   backDelay: 4000,
//   backSpeed: 0,
//   loop: true,
//   loopCount: 200,
//   // fadeOut: true,
//   showCursor: false
//   // cursorChar: '...'
// });

const typingB = new Typed('#t-space', {
  strings: ['Websites!?', 'Web apps!?', 'Web services!?'],
  typeSpeed: 100,
  startDelay: 0,
  backDelay: 1000,
  backSpeed: 0,
  loop: true,
  loopCount: 200,
  // fadeOut: true,
  showCursor: false,
  // cursorChar: '!?'
});