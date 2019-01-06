$(function() {

	// set every .container width 1170px

	$(".container").each(function () {
		$(this).css("max-width", "1170px");
	});

	// fill div's with pictures automatically
	
	for ( let i = 0; i < $(".portfolio-item").length; i++ ) {
		$(".portfolio-item:eq("+ i +")").css("background", "url(img/sections/our-works/" + i + ".jpg) center center no-repeat");
	}

	for (let i = 0; i < $(".article-photo").length; i++) {
		$(".article-photo:eq("+ i +")").css("background", "url(img/sections/from-the-journal/" + i + ".jpg) center center no-repeat");
	}

	// hamburger adaptive menu
	
	$('.js-toggle').on('click', function () {
		$('.js-toggle').toggleClass('is-active');
		$(".mynav").fadeToggle();
		$(".overlay").fadeToggle();
	});

	// i don't wanna do this. i tired.

	$(window).resize(function () {
		let width = $(document).width();

		if (width > 992) {
			$(".mynav").show();
			$(".overlay").hide();
		} else {
			$(".mynav").hide();
		}
	});

});
