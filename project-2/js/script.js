$(function(){
	$('.carousel').slick({
	arrows: false,
	dots: false,
	slidesToShow: 1,
	centerMode: true,
	});
});

$(function() {
	$("a").click(function() {
		// remove classes from all
		$("a").removeClass("active");
		// add class to the one we clicked
		$(this).addClass("active");
	});
});

// $(document).ready(function() {
// 	// get current URL path and assign 'active' class
// 	var pathname = window.location.pathname;
// 	$('nav > a[href="'+pathname+'"]').parent().addClass('active');
// })

// $(function() {
//   $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
// });

$(function () {
	setNavigation();
});

function setNavigation() {
	var path = window.location.pathname;
	path = path.replace(/\/$/, "");
	path = decodeURIComponent(path);

	$(".nav a").each(function () {
		var href = $(this).attr('href');
		if (path.substring(0, href.length) === href) {
			$(this).closest('a').addClass('active');
		}
	});
}