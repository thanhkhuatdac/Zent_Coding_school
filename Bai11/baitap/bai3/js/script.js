function add(x) {
	$(x).next().removeClass('hidden');
	$(x).addClass('hidden');
	$(x).prev().removeClass('hidden');
}

function minus(x) {
	$(x).siblings('.content').addClass('hidden');
	$(x).addClass('hidden');
	$(x).next().removeClass('hidden');
}