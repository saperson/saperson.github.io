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

$( function() {
	$( "#draggable-insert" ).draggable({ axis: "y", containment: "parent" });
} );

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