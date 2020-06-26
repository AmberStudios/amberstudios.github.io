var closedOrOpen = 0;

function switchDropDown() {
closedOrOpen = 1 - closedOrOpen;
if (closedOrOpen == 1) {
	document.getElementById('l1').setAttribute('class','open');
	document.getElementById('l2').setAttribute('class', 'open');
	document.getElementById('l3').setAttribute('class', 'open');
}
if (closedOrOpen == 0) {
	document.getElementById('l1').removeAttribute("class");
	document.getElementById('l2').removeAttribute("class");
	document.getElementById('l3').removeAttribute("class");
}

};
