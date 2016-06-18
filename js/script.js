// for sticky navigation
var waypoints = $('#section-features').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
    offset: '60px'
});

//scroll on buttons

$('.scroll-to-plan').click(function() {
    $('html, body').animate({
        scrollTop: $('.section-plans').offset().top
    }, 1000);
});

$('.scroll-to-start').click(function() {
    $('html, body').animate({
        scrollTop: $('.section-features').offset().top
    }, 1000);
});

// Navigation scroll

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    //Animations on scroll
    $('.wp-1').waypoint(function(direction) {
        $('.wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.wp-2').waypoint(function(direction) {
        $('.wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.wp-3').waypoint(function(direction) {
        $('.wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.wp-4').waypoint(function(direction) {
        $('.wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });



});
