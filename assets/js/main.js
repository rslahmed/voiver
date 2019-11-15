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

    





})(jQuery);