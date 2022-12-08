$(document).ready (function () {
   $('.cards').slick({
      infinite: true,
      slidesToShow : 6,
      responsive:[
         {
            breakpoint: 768,
            settings: {
               slidesToShow : 3,
            }
         }
      ]
   }
   );
});

$(document).ready (function () {
   $('.places').slick({
      infinite: true,
      slidesToShow : 3,
      responsive:[
         {
            breakpoint: 768,
            settings: {
               slidesToShow : 2,
            }
         }
      ]
   }
   );
});

$(document).ready (function () {
   $('.description').slick({
      infinite: true,
      slidesToShow : 1
   }
   );
});