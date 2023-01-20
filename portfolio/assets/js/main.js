
//back-to-top-button start
$(document).ready(function(){
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
});
// back-to-top-button-end

// head fix
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 5){
            $(".navi_wrap").css({"background-color":"#ffff", "color":"#333"});
            $(".logo_color")
            $(".logo a").css({"color":"#333"});
            $(".nav-link").css({"color":"#333"});
            
        }
        else if($(window).scrollTop() < 5){
            $(".navi_wrap").css({"background-color":"transparent","color":"#ffff"});
            $(".logo a").css({"color":"#ffff"});
            $(".nav-link").css({"color":"#ffff"});
            
        }
        else{
            $(".navi_wrap").css({"background-color":"transparent"});
            $(".logo").css({"font-weight":"900"});
        }

    });
});

        // MMENU JS
      $(document).ready(function(){
        document.addEventListener(
            "DOMContentLoaded", () => {
                new Mmenu( "#menu", {
                   "offCanvas": {
                      "position": "left-front"
                   },
                });
            }
        );
      });

        
        // swiper js
        $(document).ready(function(){
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          loop:true,
          allowTouchMove: true,
          speed:1000,
          autoplay: {
             delay: 2000,
         },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          },
        });
      });
        // SWIPER END



      // typed ANIMATION

$(document).ready(function () {
  var typed = new Typed('.mytype', {
      strings: ["WEB DESIGNER", "WEB DEVELOPER"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true
  });
});
