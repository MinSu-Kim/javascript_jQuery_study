$(function(){
	var tbody = $('#tbody');
	$.ajax({
		url: 'data.json',
		dataType: 'json',
		success: function(people){
			console.log(people);
			$.each(people, function(i, person){
				var tr = $('<tr />');
				var no = $('<td />').text(person.no);
				var name = $('<td />').text(person.name);
				var mail = $('<td />').text(person.mail);
				tr.append(no);
				tr.append(name);
				tr.append(mail);
				tbody.append(tr);
			});
		}
	});
});
