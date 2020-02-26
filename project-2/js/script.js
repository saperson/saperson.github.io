$(function(){
	$('.carousel').slick({
	arrows: false,
	dots: true,
	slidesToShow: 1,
	centerMode: true,
	});
});

// $(function() {
// 	$("a").click(function() {
// 		// remove classes from all
// 		$("a").removeClass("active");
// 		// add class to the one we clicked
// 		$(this).addClass("active");
// 	});
// });

$(document).ready(function () {
		$(".nav a").click(function () {
			var id = $(this).attr("id");

			$('#' + id).siblings().find(".active").removeClass("active");
			$('#' + id).addClass("active");
			localStorage.setItem("selectedolditem", id);
		});

		var selectedolditem = localStorage.getItem('selectedolditem');

		if (selectedolditem != null) {
			$('#' + selectedolditem).siblings().find(".active").removeClass("active");
			$('#' + selectedolditem).addClass("active");
		}
});

$( function() {
	$( "#draggable-insert" ).draggable({ axis: "y", containment: "parent" });
} );

// var dragging = false

// $(function() {
// var target = $('#target')
// target.mousedown(function() {
// 	dragging = true
// })
// $(document).mouseup(function() {
// 	dragging = false
// })
// $(document).mousemove(function(e) {
// 	if (dragging) {
// 		var mouse_x = e.pageX;
// 		var mouse_y = e.pageY;
// 		var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
// 		var degree = (radians * (180 / Math.PI) * -1) + 90;
// 		target.css('transform', 'rotate(' + degree + 'deg)');
// 		target.css('transform-origin', '0% 40%');
// 	}
// })