var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  /*for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  dots[slideIndex - 1].className += " active";
  */
  slides[slideIndex - 1].style.display = "grid";
}

if (slideIndex == 3 && window.innerWidth < 1000) {
  alert(
    "Para mejorar la experiencia en esta parte de la página consúltela desde un dispositivo con mayor tamaño."
  );
}
