(function($){
    "use strict";
    // nav
    $(function () {
        $(document).scroll(function () {
          var $nav = $("#main-nav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
        });
      });

    //   nice select
    $('select').niceSelect();

     // Testomonial Slider
     $('.testomonial-slider-active').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: false,
      fade: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1500,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },{
          breakpoint: 1350,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },{
          breakpoint: 992,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },{
          breakpoint: 768,
          settings: {
            arrows: false,
            dots: false,
            infinite: true,
            autoplay: false,
            fade: false,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });





})(jQuery);