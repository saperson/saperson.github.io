$( function() {
	$( "#draggable" ).draggable({ axis: "y" });
} );

$( function() {
	$( "#draggable" ).draggable({
		stop: function() {
			$("#page3illo").css("background-color", "red");
		}
	});
});