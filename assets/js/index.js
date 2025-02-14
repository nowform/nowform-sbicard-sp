var handle_membership_cards = function () {
	let $membershipCardsDiv = $("section#membership-cards"),
		$membershipNavButton = $("#memberships-nav-button"),
		$window = $(window);

	// if the current page is a membership page
	// no need of the sliding/unsliding
	if ($membershipNavButton.hasClass('active')) {
		return;
	}

	// show when the button on the navbar is mouseentered
	// $membershipNavButton.on("mouseenter", function () {
	// 	if ($window.scrollTop() > 0) {
	// 		return;
	// 	}
	// 	$membershipCardsDiv.slideToggle(200, 'linear');
	// });

	// // hide when the button on the navbar is mouseleave-d from anywhere but the botton 
	// $membershipNavButton.on("mouseleave", function (e) {
	// 	var $this = $(this);
	// 	var bottom = $this.offset().top + $this.outerHeight();
	// 	if (e.pageY < bottom) {
	// 		$membershipCardsDiv.slideToggle(200, 'linear');
	// 	}
	// });

	// hide when the cards div itself is mouseleave-d
	// $membershipCardsDiv.on("mouseleave", function () {
	// 	$(this).slideToggle(200, 'linear');
	// });
};

var handle_airport_experience_cards = function () {
	let $membershipCardsDiv = $("section#airport-experience-cards"),
		$membershipNavButton = $("#airport-experience-nav-button"),
		$window = $(window);

	// if the current page is a membership page
	// no need of the sliding/unsliding
	if ($membershipNavButton.hasClass('active')) {
		return;
	}

	// show when the button on the navbar is mouseentered
	// $membershipNavButton.on("mouseenter", function () {
	// 	if ($window.scrollTop() > 0) {
	// 		return;
	// 	}
	// 	$membershipCardsDiv.slideToggle(200, 'linear');
	// });

	// // hide when the button on the navbar is mouseleave-d from anywhere but the botton 
	// $membershipNavButton.on("mouseleave", function (e) {
	// 	var $this = $(this);
	// 	var bottom = $this.offset().top + $this.outerHeight();
	// 	if (e.pageY < bottom) {
	// 		$membershipCardsDiv.slideToggle(200, 'linear');
	// 	}
	// });

	// hide when the cards div itself is mouseleave-d
	// $membershipCardsDiv.on("mouseleave", function () {
	// 	$(this).slideToggle(200, 'linear');
	// });
};

$(document).ready(function () {

	// handle tnc read-more
	$("section.tncs div.tnc-list div.read-more-overlay span").on('click', function () {
		// show/hide the tncs
		$("section.tncs div.tnc-list ul div.initially-hide").toggle();
		// change the text from read more to read less or vice versa
		$("section.tncs div.tnc-list div.read-more-overlay").toggleClass('shown');
	});

	// trigger readmore when "terms and conditions" is clicked in the form
	$("#tnclink-readmore-trigger").on('click', function () {
		$("section.tncs div.tnc-list div.read-more-overlay span.read-more").trigger('click');
		$("html, body").animate({
			'scrollTop': $("section.tncs").offset().top
		}, 200);
	});

	// scroll to center of div in membership benefits page
	var toScroll = (600 - $("body").width()) / 2;
	$("div.right-content div.content-details").scrollLeft(toScroll);

	// handle showing and hiding of the memberships cards -.-
	handle_membership_cards();
	handle_airport_experience_cards()


	$(document).on('scroll', function () {
		var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
		var nav = document.querySelector('.page-header');
		var offset = nav.getBoundingClientRect();
		console.log(scrollPos);
		if (scrollPos > window.innerHeight) {
			$('.scroll-to-top').addClass('active');
		} else {
			$('.scroll-to-top').removeClass('active');
		}
		// document.body.scrollTop = document.documentElement.scrollTop = 0;
		// if (window.pageYOffset > offset.top) {
		// 	nav.style.position = 'fixed';
		// 	nav.style.top = 0;
		// } else {
		// 	nav.style.position = 'relative';
		// 	nav.style.top = '';
		// }
		if (document.querySelector('.error-strip')) {
			if (window.innerWidth > 850) {
				if (document.querySelector('.membership-cards').offsetHeight > 0) {
					var errorOffset = document.querySelector('.error-strip-trigger').offsetTop - 110;
				} else {
					var errorOffset = document.querySelector('.error-strip-trigger').offsetTop;
				}
			} else {
				var errorOffset = document.querySelector('.error-strip-trigger').offsetTop - 80;


			}
			if (scrollPos >= errorOffset && errorOffset > 0) {
				$('.error-strip').addClass('is-fixed');
			} else if (scrollPos < (document.querySelector('.error-strip-trigger').offsetTop - 110)) {
				$('.error-strip').removeClass('is-fixed');
			}
		}
	})

});
var scrollToTop = function () {
	$('html,body').animate({ scrollTop: 0 }, 'slow');
}