$(function(){
/*	$('#div1').fadeIn(1000, function(){
		alert('페이드인 완료');
	});*/
	$('#div1').fadeIn(1000);
	$('#div2').fadeOut(1500);
	
	$('#div3').slideDown(1500);
	$('#div4').slideUp(1500, function(){
		alert("slideUp complete");
	});
});