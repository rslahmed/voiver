(function($){
    "use strict";
    // mean menu
    jQuery('#mobile-menu-active').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "768"
    });
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


     // hire Slider
     $('.hire-p-slider').slick({
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
          breakpoint: 1200,
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


    setTimeout(function(){
      $('.rp-wrapper').css({"opacity": "1", "visibility": "visible"});
      $('.register-pupup').css("transform", "scale(1)");
   },50);

   $(".cls-btn").click(function(){
    $('.rp-wrapper').css("display", "none");
    event.preventDefault();
  });





})(jQuery);