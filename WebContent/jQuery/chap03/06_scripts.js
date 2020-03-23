/**
 * 
 */

$(function(){
	$('#div1').click(function(){
		$('#div1').text('클릭되었습니다.');
	});
});

$(function(){
	$('#div2').mouseenter(function(){
		$('#div2').text('마우스 포인터가 위에 있습니다.');
	});
	$('#div2').mouseleave(function(){
		$('#div2').text('마우스 포인터가 벗어났습니다.');
	});
});

$(function(){
	$('#div3').hover(function(){
		$('#div3').text('마우스 포인터가 위에 있습니다.');
	}, function(){
		$('#div3').text('마우스 포인터가 벗어났습니다.');
	});
});

$(function(){
/*	
	$('#input1').focus(function(){
		$('#input1').addClass('active');
	});
	$('#input1').blur(function(){
		$('#input1').removeClass('active');
	});

$('#input1')부분이 두 번 호출됨
*/
	var element = $('#input1');
	element.focus(function(){
		element.addClass('active');
	});
	element.blur(function(){
		element.removeClass('active');
	});
});

$(function(){
	$('.clickTest').click(function(){
		$(this).text('클릭되었습니다');
	});
});

$(function(){
//	$('.animal').each(function(){
//		var name = $(this).text();
//		alert(name);
//	});
});

$(function(){
	var div4 = $('#div4');
	alert(div4.width());
	alert(div4.height());
	alert(div4.css('font-size'));
});