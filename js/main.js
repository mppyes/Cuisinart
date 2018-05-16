/*
 * author: Awedoo Studio
 * template: Bicolor - Creative Coming Soon Template
 * version: v1.0
 * url: http://themeforest.net/user/awedoo
 */

(function ($) {
    "use strict";

    function awdMenu() {
        $(".menu-toggle").on('click', function (e) {
            $(this).toggleClass('opened');
            $("#awd-site-nav").toggleClass('active');
        });
    }
    
    ///** COUNTDOWN **/
    function awdCountdown() {

        $('#clock').countdown(awd_countdownDate).on('update.countdown', function (event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="counter-container"><div class="counter-date"><div class="counter-box first"><span>day%!d</span><div class="number">%-D</div></div></div>'
                + '<div class="counter-time"><div class="counter-box"><div class="number">%H:%M</div></div>'
                + '<div class="counter-box last"><div class="number">%S</div><span>seconds</span></div></div></div>'
            ));
        });
    }

    ///** ANIMATE ELEMENTS **/
    function awdAnimate() {
        if (!$('body').hasClass('mobile')) {

            /* Starting Animation on Load */
            $(window).load(function () {
                $('.start .animated').each(function () {
                    var elem = $(this);
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        var animation = elem.data('animation');
                        if (animationDelay) {
                            setTimeout(function () {
                                elem.addClass(animation + " visible");
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + " visible");
                        }
                    }
                });
            });

        }
    }

    ///** DOCUMENT READY **/
    $(document).on('ready', function () {

        if (awd_bordered === true) {
            $('body').addClass('bordered');
        }
        awdMenu();
        if (awd_countdown === true) {
            awdCountdown();
        }
        if (awd_animated === true) {
            $('body').addClass('start');
            awdAnimate();
        }
        
    });
})(jQuery);