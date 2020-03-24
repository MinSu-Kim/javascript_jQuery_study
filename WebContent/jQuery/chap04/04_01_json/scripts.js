$(function(){
	var tbody = $('#tbody');
	$.getJSON('http://192.168.137.1:8080/spring5_mvc1_study/api/members', function(people){
		$.each(people, function(i, person){
			var text_no = person.id;
			var text_name = person.name;
			var text_mail = person.email;
			var text_regDate = person.registerDateTime;
			
			var tr = $('<tr />');
			var no = $('<td />').text(text_no);
			var name = $('<td />').text(text_name);
			var mail = $('<td />').text(text_mail);
			var reg = $('<td/>').text(text_regDate);
			tr.append(no);
			tr.append(name);
			tr.append(mail);
			tr.append(reg);
			tbody.append(tr);
		});
	});
});
