/* - set up - */
var sz = screen.height*0.07;
document.getElementById("dd").setAttribute("width", sz); 
document.getElementById("dd").setAttribute("height", sz); 
console.log(sz);
var closedOrOpen = 0;
document.getElementById("headerLogo").style.height = sz * 0.7;

/* - dropdown button function - */
function drawDropDown() {
var a = 35 + 30*closedOrOpen;
var b = 35 + 15*closedOrOpen;
var c = 65 - 15*closedOrOpen;
var d = 65 - 30*closedOrOpen;
var ddButton = `<line x1='35%' y1='35%' x2='65%' y2='${a}%' style='stroke-width:5;stroke:rgb(255,255,255);'/><line x1='${b}%' y1='50%' x2='${c}%' y2='50%' style='stroke-width:5;stroke:rgb(255,255,255);'/><line x1='35%' y1='65%' x2='65%' y2=' ${d}%' style='stroke-width:5;stroke:rgb(255,255,255);'/>`
document.getElementById('dd').innerHTML = ddButton
};
