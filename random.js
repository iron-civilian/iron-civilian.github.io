const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  
});

carousel.addEventListener("scroll", e => {
  if (carousel.scrollLeft == 0) {
    prev.style.display = "none";
  }
  else if (carousel.scrollLeft+width == carousel.scrollWidth) {
    next.style.display = "none";
  }
  else
  {
  	prev.style.display="flex";
  	next.style.display="flex";
  }
 
});


prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
});

window.addEventListener("load", (e) => {
  if (carousel.scrollLeft == 0) {
    prev.style.display = "none";
    next.style.display="flex";
  }
  else if (carousel.scrollLeft+width == carousel.scrollWidth) {
    next.style.display = "none";
    prev.style.display = "flex";
  }
  else
  {
  	prev.style.display="flex";
  	next.style.display="flex";
  	
  }
  
});





let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));

