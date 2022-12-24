$(document).ready(function () {
   $('.popular-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinity: true,
      centerMode: true,
      appendArrows: $('.popular-slider-buttons'),
      responsive: [
         {
            breakpoint: 1000,
            settings: {
               slidesToShow: 2
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1
            }
         }
      ]
   });
});