//Take the contents of the sonnet div and place it in a variable

var sonnet = document.getElementById("sonnet").innerHTML;
	//console.log(sonnet);

//Find and output the starting position of the word "orphans"

var orphans = sonnet.indexOf("orphans");
	console.log('index of orphans:', orphans);

//Output the number of characters in the sonnet

var sonnetLength = sonnet.length;
	console.log('sonnet\'s length:', sonnetLength);

//Replace the first occurance of the string "winter" with "yuletide"

sonnet = sonnet.replace("winter", "yuletide");
//console.log(sonnet);

//Replace all occurances of the string "the" with "a large"

sonnet = sonnet.replace(/the/g, "a large");
//console.log(sonnet);

//Set the content of the sonnet div with the new string

//var newSonnet = document.getElementById("sonnet");
//	newSonnet.innerHTML = sonnet;
