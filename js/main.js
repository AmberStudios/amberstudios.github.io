/* - set up - */
var sz = screen.height*0.07;
document.getElementById("dd").setAttribute("width", sz); 
document.getElementById("dd").setAttribute("height", sz); 
console.log(sz);
var closedOrOpen = 1;
document.getElementById("headerLogo").style.height = sz * 0.7;

/* - dropdown button function - */
function drawDropDown() {
var a = 35 + 30*closedOrOpen;
var b = 35 + 15*closedOrOpen;
var c = 65 - 15*closedOrOpen;
var d = 65 - 30*closedOrOpen;
document.getElementById('l1').setAttribute('y2', a + '%');
document.getElementById('l2').setAttribute('x1', b  + '%');
document.getElementById('l2').setAttribute('x2', c  + '%');
document.getElementById('l3').setAttribute('y2', d  + '%');
};
drawDropDown();
