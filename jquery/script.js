$(document).ready( function () {
    // $('main').hide(3000).delay(2000).show(6000);
    $('.portret img').mouseenter( function () {
        $(this).fadeTo(1000, 0.1);
    }).mouseleave( function () {
        $(this).fadeTo(1599, 1);
    }).click( function () {
        $(this).next().toggle(100);
    });
    $(document).ready(function() {
        $(".imgLiquidFill").imgLiquid();
    });
    $('footer').click( function() {
        $(this).animate( {
            top : '-=30px',
            opacity : '-=.2'
        }, 500 );
    }).dblclick( function() {
        $(this).animate({
            top : '100',
            opacity : '10'
        }, 500);
    }).resize (function () {
        $("footer").height(100);
    });
});