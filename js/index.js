/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
} */

/* 상단바 고정 */
var TopMenu, TopMenuPosition;
TopMenu = document.getElementById('gnb');
TopMenuPosition = TopMenu.offsetTop; 

function gnb_fixed(){   
  if ( window.pageYOffset >= TopMenuPosition ) {
      TopMenu.classList.add("gnb");
  } else {
      TopMenu.classList.remove("gnb");
  }
}
document.addEventListener('scroll',submenu_bar_fixed);



/* function currentSlide(n) {
  showSlides(slideIndex = n);
} */

/* var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slides[slideIndex-1].className += " active";
}
 */
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

