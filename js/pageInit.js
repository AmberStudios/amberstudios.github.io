//A simple script that loads things that are universal on all pages.

var navBlock = document.createElement( 'div' );

var url = "http://amberstudios.github.io/legacyHeader.html";
var xmlHTTP = new XMLHttpRequest();

xmlHTTP.open("GET", url, false);
xmlHTTP.send();

//navblock.innerHTML = xmlHTTP.responseText;
navblock.innerHTML = 'This demo DIV block was inserted into the page using JavaScript.';

containBlock = document.getElementById( 'navContainer' )

containblock.appendChild(navBlock)
