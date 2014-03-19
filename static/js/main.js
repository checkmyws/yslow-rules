var clickTag = function(tag) {
	if (tag === 'all') {
		$('.rule').show();
	} else {
		$('.rule').hide();
		$('.tag-'+tag).show();
	}
}
