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
    
    //DOM Ready
    $(function() {
        uni_home_sl();
        our_team_sl();
    });
})();

