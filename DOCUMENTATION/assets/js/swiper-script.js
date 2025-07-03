$(function () {
    var swiperTestimonials = new Swiper('.swiper.swiperTestimonials', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 2, // Change to 1.5 to show one and a half slides
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        hashNavigation: true,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1, // Adjust for smaller screens if needed
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2, // Adjust for medium screens if needed
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 2, // Adjust for larger screens if needed
            }
        },
        // If we need pagination
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });
});

$(function () {
    var swiperPartner = new Swiper('.swiperPartner', {
        autoplay: {
            delay: 3000
        },
        speed: 2000,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: false,
        grabCursor: true,
        breakpoints: {
            // when window width is >= 360px
            360: {
                slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            enabled: true,
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

});
