$( function() {
	$( "#draggable" ).draggable({ axis: "y", containment: "parent" });
} );

$( function() {
	$( "#draggable" ).draggable({
		stop: function() {
			$("#sunset-img").css("background-image", "url(images/background2.svg)");
			$("#page3lines-container").css("background-image", "url(images/background2.svg)");
			$("#page3lines").css("transition", "3s all");
			$("#page3lines").css("opacity", "1");
			$("#sun").attr("src","images/sun2.svg");
			$("#hill").attr("src","images/hill2.svg");
			$( "#draggable" ).draggable({disabled:true});
			$( "#draggable" ).removeClass('draggable');
		}
	});
});