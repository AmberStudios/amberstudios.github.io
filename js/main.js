var sz = screen.height*0.12;
var ddButton = "<svg width='" + sz + "px'> <line x1='25%' y1='25%' x2='75%' y2='25%' style='stroke-width:2;stroke:rgb(255,255,255);'/><line x1='25%' y1='50%' x2='75%' y2='50%' style='stroke-width:2;stroke:rgb(255,255,255);'/><line x1='25%' y1='100%' x2='75%' y2='100%' style='stroke-width:2;stroke:rgb(255,255,255);'/></svg>";
document.getElementById('dd').innerHTML = ddButton;
window.alert(ddButton);
