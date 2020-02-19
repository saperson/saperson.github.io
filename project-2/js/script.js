$(function(){
	$('.carousel').slick({
	arrows: false,
	dots: false,
	slidesToShow: 1,
	centerMode: true,
	});
});

$(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('nav > a[href="'+pathname+'"]').parent().addClass('active');
})

$(function() {
	$("a").click(function() {
		// remove classes from all
		$("a").removeClass("active");
		// add class to the one we clicked
		$(this).addClass("active");
	});
});