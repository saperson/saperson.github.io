// $(window).scroll(function() {

// 	if ($(this).scrollTop() > 500 && $(this).scrollTop() < 550){
// 		$("#page1").css('visibility', 'hidden');
// 		$("#page2").css('visibility', 'visible');
// 	}
// 	else if ($(this).scrollTop() > 550 ){
// 			$("#page1").css('visibility', 'visible');
// 			$("#page2").css('visibility', 'hidden');
// 	} 
// 	else {
// 		$("#page1").css('visibility', 'visible');
// 		$("#page2").css('visibility', 'hidden');
// 	}

// });

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
  var data = ev.dataTransfer.getData("Text");
  ev.target.appendChild(document.getElementById(data));
  ev.preventDefault();
}