$(document).on('ready', function () {


    $(".center").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        responive: [{
            breakpoint: 768,
            setting: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            setting: {
                slidesToShow: 1
            }
        }
        ]
    });
});