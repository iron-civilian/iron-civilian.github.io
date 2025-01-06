const navbar=document.getElementsByClassName("nav1")[0];
const menu=document.getElementsByClassName("menu")[0];
const svgElement=document.getElementsByClassName("love_react")[0];

svgElement.addEventListener('click', () => {
      const pathElement = svgElement.querySelector('path');
      const currentFill = pathElement.style.fill;
      pathElement.style.fill = (currentFill == 'none' || currentFill == "") ? '#dbd8e3':'none';
    });

menu.onclick=function(){
	if(navbar.style.maxHeight=="")
	{	navbar.style.maxHeight = 0 + "px";
	}
	else
		navbar.style.maxHeight=null;
		
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n=1) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  slideIndex++;
  setTimeout(showSlides2, 3500); // Change image every 3.5 seconds
}



showSlides2();

