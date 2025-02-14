$(document).ready(function(){
	// handle owl carousel
	$(".owl-carousel").owlCarousel({
		'responsive': {
			0: {
				'items': 1,
				'margin': 9,
				'dots': false,
				'nav': true,
				'navText': ["<div class='nav-btn prev'><img src='assets/images/carousel-prev-inactive.svg'></div>", "<div class='nav-btn next'><img src='assets/images/carousel-next-inactive.svg'></div>"],
				'stagePadding': 20,
				'loop': true,
				'startPosition': 1
			},
			400: {
				'items': 1,
				'margin': 9,
				'dots': false,
				'nav': true,
				'navText': ["<div class='nav-btn prev'><img src='assets/images/carousel-prev-inactive.svg'></div>", "<div class='nav-btn next'><img src='assets/images/carousel-next-inactive.svg'></div>"],
				'stagePadding': 70,
				'loop': true,
				'startPosition': 1
			},
			850: {
				'items': 1,
				'margin': 20,
				'dots': false,
				'nav': true,
				'navText': ["<div class='nav-btn prev'><img src='assets/images/carousel-prev-inactive.svg'></div>", "<div class='nav-btn next'><img src='assets/images/carousel-next-inactive.svg'></div>"],
				'stagePadding': 400,
				'loop': true,
				'startPosition': 1
			}
		}
	});
});