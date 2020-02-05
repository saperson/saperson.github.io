$( function() {
	$( "#draggable" ).draggable({ axis: "y", containment: "parent" });
} );

// $( function() {
// 	$( "#draggable" ).draggable({
// 		stop: function() {
// 			$("#sunset-img").css("background-color", "#F09C48");
// 		}
// 	});
// });

$( function() {
	$( "#draggable" ).draggable({
		stop: function() {
			$("#sunset-img").css("background", "linear-gradient(rgba(255,107,237,1) 0%, rgba(255,159,39,1) 100%)");
			$("#page3lines-container").css("background", "linear-gradient(rgba(255,107,237,1) 0%, rgba(255,159,39,1) 100%)");
		}
	});
});