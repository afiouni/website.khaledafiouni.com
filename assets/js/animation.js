$(function() {

  /*---------------------------------------*/
  /*  PAGE LOADER
  /*---------------------------------------*/
  $(window).load(function(){
    $('#page-loader').fadeOut('fast');
  });
    
  var ua = navigator.userAgent.toLowerCase(),
  isAndroid = ua.indexOf("android") > -1;

  // Only animate elements when using non-mobile devices    
  if (jQuery.browser.mobile === false && !isAndroid) {


    /*---------------------------------------*/
    /*  HEADER ROTATOR
    /*---------------------------------------*/
    $("#js-rotating").html($("#js-rotating").html().replace(/<br>/g,', '));
    $("#js-rotating").html($("#js-rotating").html().replace(/<br\/>/g,', '));

    $("#js-rotating").Morphext({
      // The [in] animation type. Refer to Animate.css for a list of available animations.
      animation: "fadeInDown",
      // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
      separator: ',',
      // The delay between the changing of each phrase in milliseconds.
      speed: 2000,
      complete: function () {/* Called after the entrance animation is executed. */}
    });

    /*---------------------------------------*/
    /*  FUNNY BOXES
    /*---------------------------------------*/
    $('.funny-boxes-icon').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated fadeIn delayp1').css('opacity', 1);}
    });

    $('.funny-boxes-text').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated flipInY delayp1').css('opacity', 1);}
    });

    /*---------------------------------------*/
    /*  EXTRA LINK TEXT
    /*---------------------------------------*/
    $('.extra-link-text').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated slideInRight delayp1').css('opacity', 1);}
    });

    /*---------------------------------------*/
    /*  CONTENT BOXES
    /*---------------------------------------*/
    $('.content-boxes').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated flipInY delayp1').css('opacity', 1);}
    });

    /*---------------------------------------*/
    /*  CONTACT FORM
    /*---------------------------------------*/
    $('.contact-me-text').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
    });
    $('#contact-me form').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated fadeInUp delayp1').css('opacity', 1);}
    });

    /*---------------------------------------*/
    /*  Quote Section
    /*---------------------------------------*/
    $('.quote-text>h2').css('opacity', 0).one('inview', function(isInView){
      if (isInView) {$(this).addClass('animated pulse').css('opacity', 1);}
    });

    /*---------------------------------------*/
    /*  FOOTER
    /*---------------------------------------*/
    $('#footer').find('.footer-column').each(function(i){
      var element = $(this),
      itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
      element.css('opacity', 0).one('inview', function(isInView) {
        if (isInView) {
          setTimeout(function() {
            element.addClass('animated fadeInUp').css('opacity', 1);
          }, itemsDelay * (i * 2));
        }
      });
    });

    $('#footer').find('.social-icon-list > li').each(function(i){
      var element = $(this),
      itemsDelay   = ( isNaN($(this).data('animation-delay')) ? 50 : $(this).data('animation-delay'));
      element.css('opacity', 0).one('inview', function(isInView) {
        if (isInView) {
          setTimeout(function() {
            element.addClass('animated slideInRight').css('opacity', 1);
          }, itemsDelay * (i * 4));
        }
      });
    });
  }
});