$(document).ready(function () {
	$('.carousel').slick({
		infinite: true,
		arrows: true,
    	speed: 1000,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	slidesToShow: 1,
    	slidesToScroll: 1,
		responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
					infinite: true,
					dots: true,
                    slidesToScroll: 1
                }
            }
        ]
	});
	$(".prev-btn").click(function () {
		$('.carousel').slick("slickPrev");
	});

	$(".next-btn").click(function () {
		$('.carousel').slick("slickNext");
	});
});

$(document).ready(function () {
	$('.carousel-options').slick({
		infinite: true,
		arrows: false,
		dots: true,
    	speed: 1000,
    	autoplay: true,
    	autoplaySpeed: 1000,
    	slidesToShow: 1,
    	slidesToScroll: 1
	});
});

$(document).ready(function() {
    var navMobile = $('#nav-mobile');
    var navTrigger = $('#nav-trigger');

    navTrigger.click(function() {
        if (navTrigger.hasClass('closed')) {
            // Se o menu está fechado, abra-o
            navMobile.slideDown();
            navTrigger.removeClass('closed').addClass('open');
        } else {
            // Se o menu está aberto, feche-o
            navMobile.slideUp();
            navTrigger.removeClass('open').addClass('closed');
        }
    });
});
