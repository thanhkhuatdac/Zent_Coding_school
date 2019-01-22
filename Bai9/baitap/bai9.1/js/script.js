var section = document.getElementsByClassName('section');
var tab = document.getElementsByClassName('tab');
for (var i = 0; i < section.length; i++) {
	document.getElementsByClassName('tab')[i].addEventListener("click", function() {
		var active = document.getElementsByClassName('active')[0];
		active.classList.remove('active');
		var styleLink = document.getElementsByClassName('style')[0];
		styleLink.classList.remove('style');
		this.classList.add('style');
		this.nextElementSibling.classList.add('active');
	});
}
