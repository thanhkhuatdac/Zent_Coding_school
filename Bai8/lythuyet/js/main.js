document.getElementById('get-id').style.color = 'blue';
document.getElementById('get-id').setAttribute("name","quynh");

document.getElementById('clickMe').addEventListener('click', function() {
	document.getElementsByClassName('get-class')[1].style.color = 'red';
	console.log(document.getElementById('get-id').getAttribute("name"));
});

var i = 1;
document.getElementById('button-add').addEventListener('click', function() {
	var val = document.getElementById('add-me');
	var input = document.getElementById('content');
	input.innerHTML += `<tr id="`+ i +`">
				<td>` + val.value + `</td>` +
				`<td><button type="button" onclick="funcDel(` + i + `)">Xoa</button></td>
			</tr>`
	val.value = '';
	i++;
});

function funcDel(id) {
	document.getElementById(id).remove();
}