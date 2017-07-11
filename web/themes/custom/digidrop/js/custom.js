/**
 * @file
 * Custom js.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.digidropglobal = {
    attach: function () {

      $('.nav-btn.closed').click(function(){
        //$(this).hasClass('closed');
        $('.nav-overlay').fadeIn(800);
      });

    }
  }

})(jQuery);

