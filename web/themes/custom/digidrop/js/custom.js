/**
 * @file
 * Custom js.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.digidropglobal = {
    attach: function () {
      // nav
      $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
      });

      $('.overlay').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
      });

      $('.menu a').on('click', function () {
        $(".overlay").fadeToggle(200);
        $(".menu-btn a").toggleClass('btn-open').toggleClass('btn-close');
      });

      // services
      $(".i-service div").click(function() {
        window.location = $(this).find("a").first().attr("href");
        return false;
      });
    }
  }

})(jQuery);

