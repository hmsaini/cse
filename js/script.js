/* =============================================
                  preloader
===================================================
*/
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =============================================
            team
===================================================
*/
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         // 1000:{
//         //     items:5
//         // }
//     }
// });

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        nav: true,
        // dots:false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});
/* =============================================
     progress bar
===================================================
*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });

        // alert('hello');
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* =============================================
     Responsive Tabs
===================================================
*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
        // animation: 'fade'
    });
});
/* =============================================
     portfolio
===================================================
*/
$(window).on('load', function () {
    // initialize isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =============================================
     Magnifier
===================================================
*/
$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/* =============================================
     testimonials
===================================================
*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        nav: true,
        // dots:false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =============================================
     stats
===================================================
*/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/* =============================================
     clients
===================================================
*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayhoverpause: true,
        nav: true,
        // dots:false,
        dots: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});
/* =============================================
     navigation
===================================================
*/
// show and hide white navigation
$(function () {
    // show/hide nav on page load
    showHideNav();
    $(window).scroll(function () {
        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            $("nav").addClass("white-nav-top");

            // show dark logo
            // $(".navbar-brand img").attr("img/logo/logo-dark.png");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");

            // show logo
            // $(".navbar-brand img").attr("img/logo/logo.png");

            // Hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});

// smooth scrolling
$(function () {
    $("a.smoth-scroll").click(function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250);
    });
});
/* =============================================
     mobile menu
===================================================
*/
$(function () {

    // show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn,#mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });
});
/* =============================================
     Animation
===================================================
*/
// animate on scroll
$(function () {
    new WOW().init();
});
// home animation on page load
$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});