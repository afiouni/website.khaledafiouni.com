$(function() {

    /*---------------------------------------*/
    /*  JQUERY FOR PAGE SCROLLING FEATURE
    /*  requires jQuery Easing plugin
    /*---------------------------------------*/
    var pageScroll = function(){
        $('.page-scroll a').bind('click', function(e){
            e.preventDefault();

            var $anchor = $(this);

            var offset = $('body').attr('data-offset');
            
            if($('.navbar.navbar-fixed-top').hasClass('side-menu') && $(window).width() >= 992){
                $('body').data('offset', 1);
                offset = $('body').data('offset');
            }

            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
            }, 1500, 'easeInOutExpo');

            
            $('.navbar-rj-collapse').collapse('hide');

        });
    };
    
    
    /*---------------------------------------*/
    /*  STICKY NAVBAR
    /*---------------------------------------*/
    $('.navbar.navbar-fixed-top').sticky({topSpacing: 0});
    
    var stickySideMenu = function(){
        var navbar = $('.navbar.navbar-fixed-top.side-menu');
        
        if ($(window).width() >= 992) {        
            navbar.unstick();
        }
        else
        {
            navbar.unstick();
            navbar.sticky({topSpacing: 0});
        }
    };
    
    pageScroll();
    stickySideMenu();
    
    $(window).smartresize(function(){
        pageScroll();
        stickySideMenu();
    });
    
    $('.navbar-trigger-open').click(function(e) {
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });

    $('.navbar-trigger-close').click(function(e) {
        e.preventDefault();
        $('.navbar.side-menu').toggleClass('active');
        $('body.push.push-left').toggleClass('pushed-left');
        $('body.push.push-right').toggleClass('pushed-right');
    });
  
    
    /*---------------------------------------*/
    /*  CONTACT FORM REQUEST
    /*---------------------------------------*/
    $('.validate').validate();
    
    $(document).on('submit', '#contact-us-form', function(e){
        e.preventDefault();
        
        $('.form-respond').html("<div class='content-message'><i class='fa fa-refresh fa-spin'></i><span> Sending message, please wait...</span></div>");

        $.ajax({
            url: $('#contact-us-form').attr('action'),
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data){
                if (data == true){
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-rocket'></i><span> Email sent successfully, thank you</span></div>");
                } else {
                    $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle'></i><span> Error sending message, please try again.</span></div>");
                }
                
                setTimeout(function(){
                    $('.form-respond').html("");
                },3000);
            },
            error: function(xhr, err){
                $('.form-respond').html("<div class='content-message'><i class='fa fa-exclamation-circle'></i><span> Error sending message, please try again.</span></div>");
                
                setTimeout(function(){
                    $('.form-respond').html("");
                },3000);
            }
        });
    });
});