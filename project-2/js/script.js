$(function(){
	$('.carousel').slick({
	arrows: true,
	dots: true,
	slidesToShow: 1,
	centerMode: true,
	});
});

$( function() {
	$( "#draggable-insert" ).draggable({ axis: "y", containment: "parent" });
} );