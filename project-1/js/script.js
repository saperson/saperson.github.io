$( function() {
	$( "#draggable" ).draggable({ axis: "y" });
} );

$( function() {
	$('#draggable').on('drag', function() {
		$(this).addClass('dragcomplete');
	});
});
// if top=-330px