var closedOrOpen = 0;
var sz = screen.height * 0.1;

document.getElementById('dd').setAttribute("width", sz); 
document.getElementById('dd').setAttribute("height", sz);
console.log(sz);

function switchDropDown() {
	closedOrOpen = 1 - closedOrOpen;
	if (closedOrOpen == 1) {
		document.getElementById('l1').setAttribute('class','open');
		document.getElementById('l2').setAttribute('class', 'open');
		document.getElementById('l3').setAttribute('class', 'open');
		document.getElementById('dropdownTab').setAttribute('class', 'open');
		document.getElementById('overlay').setAttribute('class', 'open');
	}
	if (closedOrOpen == 0) {
		document.getElementById('l1').removeAttribute("class");
		document.getElementById('l2').removeAttribute("class");
		document.getElementById('l3').removeAttribute("class");
		document.getElementById('dropdownTab').removeAttribute("class");
		document.getElementById('overlay').removeAttribute("class");
	}

};
