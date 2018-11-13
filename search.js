indow.onload =function() {

	word = document.getElementsByTagName('input')[0];
	button = document.getElementsByTagName('input')[1];
	getAll = document.getElementsByTagName('input')[2];

	button.onclick =function() {
		ajaxFunction(); 
		searchRequest();
	}