$(function(){
	$('.carousel').slick({
	arrows: true,
	dots: true,
	slidesToShow: 1,
	centerMode: true,
	});
});

$( function() {
	$( "#draggable-insert" ).draggable({ axis: "y" });
} );

$("draggable-lid").click(function(){
  $('#draggable-lid').css("transform", "rotate(-90deg);");
});

$('#grid-stripes').hover(
	function(){ $('#gallery-label-stripes').toggleClass('gallery-label-active', '300') },
)

$('#grid-noods').hover(
	function(){ $('#gallery-label-noods').toggleClass('gallery-label-active', '300') },
)