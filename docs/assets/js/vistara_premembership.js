$(document).ready(function () {
	$("#state-selectmenu").selectmenu({
		icons: {
			button: "my-selectmenu-icon"
		}
	});
	$("#title-selectmenu").selectmenu({
		icons: {
			button: "my-selectmenu-icon"
		}
	});
	$("#existing-selectmenu").selectmenu({
		icons: {
			button: "my-selectmenu-icon"
		}
	});

	// handle click on success-notification cross
	$('#success-notification-cross').click(function() {
		$("#success-notification").css('display', 'none');
		$(".success-line").css('display', 'block');
		$(".top-cta").css({
			'background': '#222',
			'color': 'rgba(255, 255, 255, 0.3)',
			'cursor': 'default',
		}).text('Application Processing');
	})

	$('.success-close').click(function() {
		$("#success-notification").css('display', 'none');
		$(".success-line").css('display', 'block');
		$(".top-cta").css({
			'background': '#222',
			'color': 'rgba(255, 255, 255, 0.3)',
			'cursor': 'default',
		}).text('Application Processing');
	})
});