$(function() {

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
	}

	function addActiveClass() {
		if ( $('body.home') ){
				$('.home-link').addClass('active');
		} else if ( $('body.resources') ){
			$('.resources-link').addClass('active');
		}
	}

	function initialize() {
		showNav();
		addActiveClass();
	}

	$(initialize());

});