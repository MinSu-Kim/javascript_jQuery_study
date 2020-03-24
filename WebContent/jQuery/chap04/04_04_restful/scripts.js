$(function(){
	var tbody = $('#tbody');
	$.getJSON('http://localhost:8080/spring5_mvc1_study/api/members', function(people){
		$.each(people, function(i, person){
			var text_no = person.id;
			var text_name = person.name;
			var text_mail = person.email;
			var text_reg = person.registerDateTime;
			
			var tr = $('<tr />');
			var no = $('<td />').text(text_no);
			var name = $('<td />').text(text_name);
			var mail = $('<td />').text(text_mail);
			var regDate = $('<td />').text(text_reg);
			
			tr.append(no);
			tr.append(name);
			tr.append(mail);
			tr.append(regDate);
			tbody.append(tr);
		});
	});
});
