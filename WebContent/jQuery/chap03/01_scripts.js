$(function(){
	$('#div1').css('border', '3px solid red');
	$('#div2').css('background', 'pink');
	$('#div3').css('opacity', 0.5);
	$('#div4').css({
		'border':'3px solid red',
		'background': 'pink',
		'opacity': 0.5
	});
	
	$('#div5').show(500);
	$('#div6').hide(500);
	
	$('#div7').width(100);
	$('#div8').height(150).width(200);
});