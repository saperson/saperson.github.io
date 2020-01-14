function showNav() {

	$('#header').html(
		`
		<h1>Sam Person</h1>
		<nav id="topnav">
			<ul>
			<li class="home-link"><a href="index.html">Home</a></li>
			<li class="resources-link"><a href="resources.html">Resources</a></li>
			</ul>
		</nav>
		
		`
	);

	// $('#topnav').html(

	// `
	// <ul>
	// 	<li class="home-link"><a href="index.html">Home</a></li>
	// 	<li class="resources-link"><a href="resources.html">Resources</a></li>
	// </ul>
	// `
	// );

}

// function addActiveClass() {

// 	if ( $('body.favorite-foods') ){		
// 		$('.favorite-foods-link').addClass('active'); {
// }	else if ( $('body.resources') ){
// 		$('.resources-link').addClass('active'); {
// }

function initialize() {
	showNav();
	// addActiveClass();
}

$(initialize());