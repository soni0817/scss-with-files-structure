$(document).ready(function(){
  $('#home-section').owlCarousel({
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
    // navText: ["<img src='../images/Icon metro-arrow-left.png'>",
    // "<img src='../images/Icon metro-arrow-right.png'>"],
    navText: ["<i class='fa fa-arrow-right'></i>","<i class='fa fa-arrow-left'></i>"],
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

