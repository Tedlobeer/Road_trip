var slideIndex = 1;
showSlides1p(slideIndex);
showSlides2p(slideIndex);
showSlides3p(slideIndex);
showSlides4p(slideIndex);
showSlides5p(slideIndex);
showSlides1l(slideIndex);
showSlides2l(slideIndex);
showSlides3l(slideIndex);
showSlides4l(slideIndex);
showSlides5l(slideIndex);

function showSlides1p(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides1p");
    var captionText = document.getElementById("caption1p");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption1p");
  }

function showSlides1l(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides1l");
    var captionText = document.getElementById("caption1l");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption1l");
  }

function showSlides2p(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides2p");
    var captionText = document.getElementById("caption2p");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption2p");
  }

function showSlides2l(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides2l");
    var captionText = document.getElementById("caption2l");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption2l");
  }

function showSlides3p(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides3p");
    var captionText = document.getElementById("caption3p");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption3p");
  }

function showSlides3l(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides3l");
    var captionText = document.getElementById("caption3l");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption3l");
  }

function showSlides4p(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides4p");
    var captionText = document.getElementById("caption4p");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption4p");
  }

function showSlides4l(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides4l");
    var captionText = document.getElementById("caption4l");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption4l");
  }

function showSlides5p(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides5p");
    var captionText = document.getElementById("caption5p");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption5p");
  }

function showSlides5l(n) 
  {
    var i;
    var slides = document.getElementsByClassName("mySlides5l");
    var captionText = document.getElementById("caption5l");
    if (n > slides.length) 
      { 
        slideIndex = 1;
      }
    if (n < 1) 
      {
        slideIndex = slides.length; 
      }
    for (i = 0; i < slides.length; i++) 
      {
        slides[i].style.display = "none";
      }
    slides[slideIndex - 1].style.display = "block";
    captionText.innerHTML = slides[slideIndex - 1].getAttribute("data-caption5l");
  }


function plusSlides1p(n) 
  {
    showSlides1p(slideIndex += n);
  }

function plusSlides1l(n) 
  {
    showSlides1l(slideIndex += n);
  }

function plusSlides2p(n) 
  {
    showSlides2p(slideIndex += n);
  }

function plusSlides2l(n) 
  {
    showSlides2l(slideIndex += n);
  }

function plusSlides3p(n) 
  {
    showSlides3p(slideIndex += n);
  }

function plusSlides3l(n) 
  {
    showSlides3l(slideIndex += n);
  }

function plusSlides4p(n) 
  {
    showSlides4p(slideIndex += n);
  }

function plusSlides4l(n) 
  {
    showSlides4l(slideIndex += n);
  }

function plusSlides5p(n) 
  {
    showSlides5p(slideIndex += n);
  }

function plusSlides5l(n) 
  {
    showSlides5l(slideIndex += n);
  }
