/**
 * 
 */

$(function(){
	$('#div1').text('text메서드에서의 내용 바꿔쓰기');
	$('#div2').html('html메서드에서의 내용 바꿔쓰기');
	$('#div3').text('<strong>text메서드</strong>에서의 내용 바꿔쓰기');
	$('#div4').html('<strong>text메서드</strong>에서의 내용 바꿔쓰기');
});

$(function(){
	$('#div5').empty();
});

$(function(){
	$('#changeThis').attr('src', 'img2.gif');
});

$(function(){
	$('#input1').val('텍스트 필드값을 다시 썼습니다.');
	$('#textarea1').val('텍스트영역값을 다시 썼습니다.');
	$('#select1').val('seoul');
	$('#select2').val(['seogu', 'donggu']);
});

$(function(){
	$('#div6').addClass('box');
	$('#div7').removeClass('box');
	$('#div8').addClass('alert');
	$('#div9').removeClass('alert');
});