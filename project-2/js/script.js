$(function(){
	$('.carousel').slick({
	arrows: false,
	dots: false,
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