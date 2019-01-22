var size = 100;
document.getElementsByClassName('large')[0].addEventListener('click', function() {
	size += 40;
	document.getElementsByClassName("content")[0].style.fontSize = size+"%";
});
document.getElementsByClassName('small')[0].addEventListener('click', function() {
	size -= 40;
	document.getElementsByClassName("content")[0].style.fontSize = size+"%";
});
document.getElementsByClassName('default')[0].addEventListener('click', function() {
	location.reload();
});