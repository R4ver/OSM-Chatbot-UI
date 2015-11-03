$(function() {
    $(".client__navigation li a").click(function () {
        if ( $(".client__navigation li a").hasClass("nav__current-item") ) {
            $(".client__navigation li a").removeClass("nav__current-item");
        }
        $(this).addClass("nav__current-item");
    });
});