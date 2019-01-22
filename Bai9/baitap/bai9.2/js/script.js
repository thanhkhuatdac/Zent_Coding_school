var check = document.getElementsByClassName('checkbox');
document.getElementsByClassName('check-all')[0].addEventListener('click', function() {
	for (var i = 0; i < check.length; i++) {
		document.getElementsByClassName('check-input')[i].setAttribute("checked", "true");
	}
});
document.getElementsByClassName('unCheck-all')[0].addEventListener('click', function() {
	for (var i = 0; i < check.length; i++) {
		document.getElementsByClassName('check-input')[i].removeAttribute("checked");
	}
});
