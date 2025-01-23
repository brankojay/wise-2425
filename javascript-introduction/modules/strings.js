const firstGreeting = "Immer noch Hallo Welt";

export {
	firstGreeting
};

function showStringExamples () {
	// Datentyp - Zeichenketten (Strings)
	let secondGreeting = "Der zweite Gruß";
	secondGreeting = "Und der dritte";

	console.log("Variable mit const: ", firstGreeting);
	console.log("Variable mit let: ", secondGreeting);
	console.log("Zusammenfügen von mehreren Zeichenketten", firstGreeting + " " + secondGreeting);
	console.log("Typprüfung auf String (Zeichenkette)", typeof firstGreeting === "string");
	console.log("Typprüfung auf String (Zeichenkette)", typeof firstGreeting === "number");
	console.log("Anwendung der Methode 'charAt'", secondGreeting.charAt(8));
};

export default showStringExamples;

