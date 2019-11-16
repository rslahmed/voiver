(function($){
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

    $(function () {
        $(document).scroll(function () {
          var $nav = $("#back_top");
          $nav.toggleClass('show', $(this).scrollTop() > 50);
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
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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


     // register Slider
     $('.register-slider').slick({
      dots: false,
      infinite: true,
      arrows: false,
      autoplay: false,
      fade: false,
      speed: 300,
      slidesToShow: 2,
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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

    var windowSize = window.innerWidth;
  if(windowSize < 800){
    var $service = $("#service_area");
    $service.addClass('service-slider');
  }


     // register Slider
     $('.service-slider').slick({
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
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            dots: false,
            prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>' ,
            nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>' ,
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
      $('.cookie-model').css({"opacity": "1", "visibility": "visible"});
   },50);

  // popup close
  $('.cookiecls').click(function () {
    var $cookie = $("#cookie_popup");
    $cookie.addClass('hide');
    event.preventDefault();
  });


  




})(jQuery);

