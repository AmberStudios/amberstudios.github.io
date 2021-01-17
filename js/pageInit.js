//A simple script that loads things that are universal on all pages.

//load navBar
var url = "../navBar.html";
var xmlHTTP = new XMLHttpRequest();

xmlHTTP.open( 'GET', url, false );
xmlHTTP.send();

var navBlock = xmlHTTP.responseText

var div = document.getElementById( 'navcontainer' )

div.insertAdjacentHTML( 'afterbegin', navBlock );

//insert background
var url = "../img/watermarkBG.svg";
var xmlHTTP = new XMLHttpRequest();

xmlHTTP.open( 'GET', url, false );
xmlHTTP.send();

var bg = xmlHTTP.responseText

var div = document.getElementById( 'WMbackground' )

div.insertAdjacentHTML( 'afterbegin', bg );
