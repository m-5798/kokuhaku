if (typeof Site === 'undefined') {
  var Site = {};
  (function(S, W) {
    'use strict';

    var d = W.document;

    S.getDevice = function() {
      var ua = navigator.userAgent
        , res = ''
        ;
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
          , position = target.offset().top
          ;
        console.log(href);
        position = (href === '#lede') ? position : position - 70;
        $('body, html').animate({scrollTop:position}, speed, 'swing');
        return false;
      });
    };

    S.toggleInfo = function() {
      var $info = $('.p-information')
        , $toggle = $('[data-kkhk-toggle]')
        , cls = 'p-information-open'
        ;
      $toggle.on('click', function() {
        $info.toggleClass(cls);
      });
    };

    S.scrollOut = function() {
      var logo = '[data-kkhk-logo]'
        , lede1 = '[data-kkhk-lede1]'
        , lede2 = '[data-kkhk-lede2]'
        , lede3 = '[data-kkhk-lede3]'
        , businessH1 = '[data-kkhk-business-h1]'
        , businessH2_1 = '[data-kkhk-business-h2_1]'
        , businessH2_2 = '[data-kkhk-business-h2_2]'
        , worksH1 = '[data-kkhk-works-h1]'
        , memberH1 = '[data-kkhk-member-h1]'
        , memberH2_1 = '[data-kkhk-member-h2_1]'
        , memberH2_2 = '[data-kkhk-member-h2_2]'
        , memberH2_3 = '[data-kkhk-member-h2_3]'
        , memberH2_4 = '[data-kkhk-member-h2_4]'
        , variation = '-show'
        ;

      $.each([
        lede1,
        lede3,
        businessH1,
        businessH2_1,
        businessH2_2,
        worksH1,
        memberH1,
        memberH2_1,
        memberH2_2,
        memberH2_3,
        memberH2_4,
      ], function(i, obj) {
        var showClass = $(obj).attr('class') + variation;
        ScrollOut({
          targets: obj,
          once: true,
          onShown: function() {
            $(obj).addClass(showClass);
          }
        });
      });

      ScrollOut({
        targets: lede2,
        once: true,
        onShown: function(el) {
          $(logo).addClass($(logo).attr('class') + variation);
          $(el).addClass($(el).attr('class') + variation);
        }
      });
    };

  })(Site, window);
}

$(document).ready(function () {
  Site.anchorScroll();
  Site.toggleInfo();
  Site.scrollOut();
});
