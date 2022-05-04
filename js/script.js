//  banner slider
let slideIndex = 1;
showSlides(slideIndex);

var btn1 = document.getElementById("next-btn1")
var btn2 = document.getElementById("next-btn2")
btn1.addEventListener("click", (e)=>{
  console.log("btn")
  let slidesn = document.getElementsByClassName("bannerSlides");
  let  fade = document.querySelectorAll(".bannerSlides")

  console.log(fade)
       
  fade.forEach(element =>{

    element.classList.add("banner-animation-left");
    element.classList.remove("banner-animation-right");
    
    console.log(element)
    
  })
  
  if(slidesn.length+1){
    btn1.classList.add("indicator-change-background2")
    
   
    console.log(slideIndex, 'btn1');
    
  }
  if(slideIndex === slidesn.length-1 ){
    btn2.classList.remove("indicator-change-background");
    btn2.disabled = false;
  }
  if(slideIndex === 1 ){
    btn1.classList.remove("indicator-change-background2");
    btn1.disabled = true;
  }
 
})
btn2.addEventListener("click", (e)=>{
  console.log(slideIndex, 'btn2')
  let slidesn = document.getElementsByClassName("bannerSlides");
  btn1.classList.add("indicator-change-background2");
  btn1.disabled = false;

  let  fade = document.querySelectorAll(".bannerSlides")
  console.log(fade)
  fade.forEach(element =>{
    element.classList.add("banner-animation-right");
    element.classList.remove("banner-animation-left");
   
    console.log(element)
  })
 

  if (slidesn.length == slideIndex) {
    btn2.classList.add("indicator-change-background");
    btn2.disabled = true;
  }
 
})

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("bannerSlides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


  slides[slideIndex - 1].style.display = "block";



}

//  youg tab slider 

let slideIndextwo = 1;
showSlidestwo(slideIndextwo);

function plusSlidestwo(n) {
  showSlidestwo(slideIndextwo += n);
}

function currentSlidetwo(n) {
  showSlidestwo(slideIndextwo = n);
}

function showSlidestwo(n) {
  let slideindextwo;
  let i;
  let slidestwo = document.getElementsByClassName("slider-tab");
  if (n > slidestwo.length) {
    slideIndextwo = 1
  }
  if (n < 1) {
    slideIndextwo = slidestwo.length
  }
  for (i = 0; i < slidestwo.length; i++) {
    slidestwo[i].style.display = "none";
  }

  slidestwo[slideIndextwo - 1].style.display = "block";

}

// t-mobile slider

let slideIndexthree = 1;

showSlidesthree(slideIndexthree);

function plusSlidesthree(n) {
  showSlidesthree(slideIndexthree += n);
}

function currentSlidethree(n) {
  showSlidesthree(slideIndexthree = n);
}

function showSlidesthree(n) {
  let slideindexthree;
  let i;
  let slidesthree = document.getElementsByClassName("slider-tab2");
  if (n > slidesthree.length) {
    slideIndexthree = 1
  }
  if (n < 1) {
    slideIndexthree = slidesthree.length
  }
  for (i = 0; i < slidesthree.length; i++) {
    slidesthree[i].style.display = "none";
  }

  slidesthree[slideIndexthree - 1].style.display = "block";

}

// javscript for tab
document.getElementById("young-living-id").addEventListener("click", function () {
  document.getElementById("young-sec").style.display = "block";
  document.getElementById("t-mobile-sec").style.display = "none";
  document.getElementById("young-living-id").classList.add("tab-active")
  document.getElementById("t-mobile-id").classList.remove("tab-active")
});
document.getElementById("t-mobile-id").addEventListener("click", function () {
  document.getElementById("t-mobile-sec").style.display = "block";
  document.getElementById("young-sec").style.display = "none";
  document.getElementById("t-mobile-id").classList.add("tab-active")
  document.getElementById("young-living-id").classList.remove("tab-active")
  document.getElementById("young-living-id").classList.remove("background")
  document.getElementById("Linking_2").classList.remove("tab-active")
  document.getElementById("young-living-id").classList.remove("background")

});
// banner-slider-owlCarousel






// last product slider
$('.owl-carousel').owlCarousel({
  // loop: true,
  margin: 100,
  // autoHeight: true,
  nav: true,
  margin: 10,
  navText: ["<span class='fa fa-angle-left slider-indicator '></span>", "<span class='fa fa-angle-right slider-indicator'></span>"],
  dots: false,
  responsive: {
    0: {
      items: 1
    },
    768: {
      
      items: 1
    },
    1000: {
      items: 3
    },
    
  }
})
// banner-slider-owlCarousel
 