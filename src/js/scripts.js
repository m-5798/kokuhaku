if (typeof Site === 'undefined') {
  var Site = {};
  (function(S, W) {
    'use strict';

    var d = W.document;

    S.getDevice = function() {
      var ua = navigator.userAgent
        , res = '';
      if(ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        res = 'sp';
      } else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        res = 'tablet';
      } else {
        res = 'other';
      }
      return res;
    };

    S.anchorScroll = function() {
      $('a[href^="#"]').click(function() {
        var speed = 400
          , href= $(this).attr('href')
          , target = $(href == '#' || href == '' ? 'html' : href)
          , position = target.offset().top;
        position = position - 70;
        $('body, html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    };

  })(Site, window);
}

$(document).ready(function () {
  Site.anchorScroll();

  var $info = $('.p-information')
    , $toggle = $('[data-kkhk-toggle]')
    , cls = 'p-information-open'
    ;
  $toggle.on('click', function() {
    $info.toggleClass(cls);
  });
});
