/* - set up - */
var sz = screen.height*0.07;
var closedOrOpenImm = 0;
var closedOrOpen = 0;
document.getElementById("dd").setAttribute("width", sz); 
document.getElementById("dd").setAttribute("height", sz); 
document.getElementById("headerLogo").style.height = sz * 0.7;
console.log(sz);

/* - dropdown button function - */
function drawDropDown() {
var a = 35 + (30*closedOrOpen) + "%";
var b = 35 + (15*closedOrOpen) + "%";
var c = 65 - (15*closedOrOpen) + "%";
var d = 65 - (30*closedOrOpen) + "%";
console.log(closedOrOpen);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
document.getElementById('l1').setAttribute('y2', a);
document.getElementById('l2').setAttribute('x1', b);
document.getElementById('l2').setAttribute('x2', c);
document.getElementById('l3').setAttribute('y2', d);
};

/* - toggle open/closed - */
function switchDropDown() {
closedOrOpenImm = 1 - closedOrOpenImm;
console.log(closedOrOpen);
drawDropDown();
};

/* - smooth transition - */
function smooth() {
if (closedOrOpen > closedOrOpenImm) {
closedOrOpen += -0.1;
};
if (closedOrOpen < closedOrOpenImm) {
closedOrOpen +=0.1;
};
};
setInterval(function{smooth()}, 50);
