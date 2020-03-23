$(function() {

	$('.accordion').each(function() {

		// jQuery객체를 준비
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');

		// 우선은 모든 dd를 닫음
		allDd.hide();

		// dt의 커서를 변경 클릭할 수 있도록
		allDt.css('cursor', 'pointer');

		// 이벤트를 설정
		allDt.click(function() {

			var dt = $(this);
			var dd = dt.next(); // 다음의 요소를 취득

			// 클릭된 것만을 열기
			allDd.hide();
			dd.show();

			// 모든 Dt의 커서를 클릭할 수 있도록 변경(손모양)
			allDt.css('cursor', 'pointer');
			// 선택된 dt는 커서를 클릭할 수 없게 (기본으로 돌림)(포인터모양)
			dt.css('cursor', 'default');

		});

	});

});
