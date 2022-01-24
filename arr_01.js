

/*
Aufgabe:

<html><head></head><body><h1></h1><p></p></body></html>
	
---->

<html>
	<head>
	</head>
	<body>
		<h1>
        </h1>
		<p>
        </p>
	</body>
</html>

--> return : "\n"  
--> Tab: "\t"

Verwenden Sie dafür die untenstehenden Arrays
*/

const controls = ["<", "</", ">"];
const tags = ["html","head","head","body","h1","h1","p","p","body","html"];
let stack = [];


// Modul: Ausgabe | Test
function output(outputData) {
    console.log(outputData);
}
