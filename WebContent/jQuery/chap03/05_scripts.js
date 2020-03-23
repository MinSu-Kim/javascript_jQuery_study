/**
 * 
 */
$(function(){
	var basket = $('#basket');
	var apple = $('#apple');
	var banana = $('#banana');
	var orange = $('#orange');
	
	basket.append(apple);
	basket.append(banana);
	basket.append(orange);
});

$(function(){
	var basket = $('#basket2');
	var apple = $('#apple2');
	var banana = $('#banana2');
	var orange = $('#orange2');
	
	apple.appendTo(basket);
	banana.appendTo(basket);
	orange.appendTo(basket);
});

$(function(){
	var basket = $('#basket3');
	var apple = $('#apple3');
	var banana = $('#banana3');
	var orange = $('#orange3');
	
	basket.append(apple, banana, orange);
});

$(function(){
	var basket = $('#basket4');
	var apple = $('#apple4');
	var banana = $('#banana4');
	var orange = $('#orange4');
	
	basket.prepend(apple);
	basket.prepend(banana);
	basket.prepend(orange);
});

$(function(){
	/*다 같은 방법*/
	var div1 = $('#div1');
	var img1 = $('<img src="img1.gif" alt=""/>');
//	$('<img src="img1.gif" alt=""/>').appendTo(div1);
//	div1.append('<img src="img1.gif" alt=""/>');
//	$('#div1').append('<img src="img1.gif" alt=""/>');
//	$('<img src="img1.gif" alt=""/>').appendTo('#div1');
//	div1.append(img1);
	img1.appendTo(div1);
});


$(function(){
	$('#div2').remove();
});