document.addEventListener("keydown", function(e) {
	if (e.which === 8) {
		var nodeName = e.target.nodeName.toLowerCase();
		if !(nodeName === 'input' && ~['text', 'email', 'password', 'search'].indexOf(e.target.type) || ~['textarea', 'div'].indexOf(nodeName)) {
			e.preventDefault();
		}
	}
});
