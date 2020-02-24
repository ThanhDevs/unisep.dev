;(function() {
    'use strict'

    function uni_home_sl() {
        $('.uni_home_sl').slick();
    }

    function our_team_sl() {
        $('.our_team_sl').slick(
            {
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 3,
            }
        );
    }

    function modal_box() {
        
            $('.uni_testimonial_box .img_box').on('click', function() {
                $('body').addClass('modal_show');
            });

            $('.modal_box').on('click', function() {
                $('body').removeClass('modal_show');
            });
        
    }

    function testimonial_sl() {
        $('.testimonial_sl').slick(
            {
                slidesToShow: 3,
                easing: 'linear',
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                lazyLoad: 'ondemand',
            }
        );
    }
    
    //DOM Ready
    $(function() {
        uni_home_sl();
        our_team_sl();
        modal_box();
        testimonial_sl();
    });
})();

