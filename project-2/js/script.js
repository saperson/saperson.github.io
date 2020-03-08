$(function(){
	$('.carousel').slick({
	arrows: false,
	dots: false,
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
	function(){ $('#gallery-label-stripes').toggleClass('gallery-label-active') },
)

$('#grid-noods').hover(
	function(){ $('#gallery-label-noods').toggleClass('gallery-label-active') },
)

$('#grid-gold').hover(
	function(){ $('#gallery-label-gold').toggleClass('gallery-label-active') },
)

$('#grid-gaming').hover(
	function(){ $('#gallery-label-gaming').toggleClass('gallery-label-active') },
)

$('#grid-brown').hover(
	function(){ $('#gallery-label-brown').toggleClass('gallery-label-active') },
)

$('#grid-iridescent').hover(
	function(){ $('#gallery-label-iridescent').toggleClass('gallery-label-active') },
)

$('#grid-weave').hover(
	function(){ $('#gallery-label-weave').toggleClass('gallery-label-active') },
)

$('#grid-wood').hover(
	function(){ $('#gallery-label-wood').toggleClass('gallery-label-active') },
)

$('#grid-leprechaun').hover(
	function(){ $('#gallery-label-leprechaun').toggleClass('gallery-label-active') },
)