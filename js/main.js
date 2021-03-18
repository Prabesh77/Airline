$(document).ready(function () {
	$('.hamburger-menu').click(function () {
		console.log('a');
		$('.nav-bar').slideToggle('toggle');
	});
});

AOS.init();
