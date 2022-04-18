$(document).ready(function() {
    $('.header__menu-icon').click(function(event) {
        $('.header__menu-icon,.menu,.menu-block').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.sidebar').click(function(event) {
        $('.sidebar').toggleClass('disable');
    });
});