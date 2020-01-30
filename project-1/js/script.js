$( function() {
	$( "#draggable" ).draggable({ axis: "y" });
} );

$( function() {
	$("#demoDrag").draggable({
          stop: function() {
          	 ("#page3-illo").addClass("illo-show");
          }
	});
});