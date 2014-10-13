document.addEventListener("keydown", function(e) {
	var nodeName = e.target.nodeName.toLowerCase();
    if (e.which === 8) {
    	if ((nodeName === 'input' && e.target.type === 'text') || nodeName === 'textarea' || (nodeName === 'input' && e.target.type === 'email') || (nodeName === 'input' && e.target.type === 'password')) {    
    	} else {
    		e.preventDefault();
    	}
    }
});
