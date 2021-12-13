let dropdowns = 2

function dropdown(index) {
    if (document.getElementById("chevron" + index).style.cssText == "") {
        document.getElementById("chevron" + index).style.cssText = "transform: rotate(180deg)";
        document.getElementById("dropdown" + index).style.cssText = "display: flex";
        for (var i = 1; i < dropdowns + 1; i++) {
            if (index != i) {
                document.getElementById("chevron" + i).style.cssText = "";
                document.getElementById("dropdown" + i).style.cssText = "display: none";
            }
        }
    }
    else {
        document.getElementById("chevron" + index).style.cssText = "";
        document.getElementById("dropdown" + index).style.cssText = "display: none";
    }
}