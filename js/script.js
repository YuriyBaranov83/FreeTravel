$(document).ready (function () {
   $('.cards').slick({
      infinite: true,
      slidesToShow : 6,
      responsive:[
         {
            breakpoint: 1200,
            settings: {
               slidesToShow : 5,
            }
         },
         {
            breakpoint: 950,
            settings: {
               slidesToShow : 4,
            }
         },
         {
            breakpoint: 768,
            settings: {
               slidesToShow : 3,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow : 2,
            }
         },
         {
            breakpoint: 425,
            settings: {
               slidesToShow : 1,
            }
         },
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