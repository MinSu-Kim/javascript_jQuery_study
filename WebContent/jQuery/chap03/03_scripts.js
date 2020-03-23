/**
 * 
 */
$(function(){
	$('#div1').animate({
		top:200,
		left:400,
		width:200,
		height:150,
		marginLeft:100
	}, 2000, function(){
		alert('애니메이션 종료');
	});
});