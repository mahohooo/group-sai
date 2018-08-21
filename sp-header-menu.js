
$(function() {
    $('.toggle').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.header-menu-sp').addClass('active');
        } else {
            $('.header-menu-sp').removeClass('active');
        }
    });
});