//A simple script that loads things that are universal on all pages.


var navBlock = document.createElement( 'div' );

var url = window.location.hostname,"/legacyHeader.html";
var xmlHTTP = new XMLHttpRequest();

xmlHTTP.open("GET", url, false);
xmlHTTP.send();

//navBlock.innerHTML = xmlHTTP.responseText;
navBlock.innerHTML = 'This demo DIV block was inserted into the page using JavaScript.';

containBlock = document.getElementById( "navcontainer" )

containblock.appendChild(navBlock)
