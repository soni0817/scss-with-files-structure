$(document).ready(function(){
  $('.homepage-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $('.owl-hw-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<img src='../images/Icon metro-arrow-left.png'>",
    "<img src='../images/Icon metro-arrow-right.png'>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }      
      }
  });

  $('.owl-three').owlCarousel({
      loop:false,
      margin:0,
      nav:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
  });
});

