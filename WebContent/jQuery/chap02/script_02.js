$(function() {
	//id selector
	$('#cat').css('background', 'pink');
	$('#dog').css('background', 'yellowgreen');
	//class selector
	$('.man').css('background', 'lightblue');
	$('.woman').css('background', 'yellow'); 
	//element selector
	$('p').css('background', 'lightgray');
	$('h1').css('color', 'red');
	// ancestor descendant
	$('div strong').css('color', 'red');
	$('li strong').css('color', 'blue');
});