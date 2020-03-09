$(function(){
	$('.carousel').slick({
	arrows: true,
	appendArrows: $('.carousel'),
	prevArrow: $('.left'),
    nextArrow: $('.right'),
	dots: false,
	slidesToShow: 1,
	centerMode: true,
	});
});

$( function() {
	$('#draggable-insert').draggable({ axis: 'y' });
} );

$(".draggable-lid").click(function(){
	$(this).animate({ transform: 'rotate(-90deg)'}, 500) ;
});

$('#grid-stripes').hover(
	function(){ $('#gallery-label-stripes').toggleClass('gallery-label-active', 100) },
)

$('#grid-noods').hover(
	function(){ $('#gallery-label-noods').toggleClass('gallery-label-active', 100) },
)

$('#grid-gold').hover(
	function(){ $('#gallery-label-gold').toggleClass('gallery-label-active', 100) },
)

$('#grid-gaming').hover(
	function(){ $('#gallery-label-gaming').toggleClass('gallery-label-active', 100) },
)

$('#grid-brown').hover(
	function(){ $('#gallery-label-brown').toggleClass('gallery-label-active', 100) },
)

$('#grid-iridescent').hover(
	function(){ $('#gallery-label-iridescent').toggleClass('gallery-label-active', 100) },
)

$('#grid-weave').hover(
	function(){ $('#gallery-label-weave').toggleClass('gallery-label-active', 100) },
)

$('#grid-wood').hover(
	function(){ $('#gallery-label-wood').toggleClass('gallery-label-active', 100) },
)

$('#grid-leprechaun').hover(
	function(){ $('#gallery-label-leprechaun').toggleClass('gallery-label-active', 100) },
)