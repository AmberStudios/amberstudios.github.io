//A simple script that loads things that are universal on all pages.


//var navBlock = document.createElement( 'navigation' );

var url = "../legacyHeader.html";
var xmlHTTP = new XMLHttpRequest();

xmlHTTP.open("GET", url, false);
xmlHTTP.send();

//navBlock.innerHTML = xmlHTTP.responseText;
//navBlock.innerHTML = 'This demo DIV block was inserted into the page using JavaScript.';

var navBlock = xmlHTTP.responseText

containBlock = document.getElementById( "navcontainer" )

containBlock.appendChild(navBlock)
