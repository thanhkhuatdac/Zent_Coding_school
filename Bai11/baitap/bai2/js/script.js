$(document).ready(function () {
	$('.add').click(function () {
		var val = $('.input').val();
		if (!val) {
			alert('Vui lòng nhập nội dung');
		} else {
			var content = `<tr>
								<td class="item" onclick="selectToDo(this)">`+ `<i class="fas fa-check hidden"></i> ` + val +`</td>
								<td class="icon"><i class="fas fa-times" onclick="delToDo(this)"></i></td>
							</tr>`;
			$('.content').append(content);
			$('.input').val('');
			$('.input').focus();
		}
	});

	
});

function selectToDo(x) {
	var valueTd = $(x).html();
	var _this = x.closest('tr');
	$(_this).addClass('color');
	$(_this).find('i').removeClass('hidden');
}

function delToDo(x) {
	x.closest('tr').remove();
}