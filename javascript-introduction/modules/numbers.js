import {firstGreeting} from "./strings.js";

const currentYear = 2024;

function showNumberExamples() {
	// Datentyp - Zahlen (Integer/Float)
	const halfOfFive = 2.5;
	const calculationResult = currentYear * 2;
	console.log("Datentyp Zahl/Integer", currentYear);
	console.log("Datentyp Fließkommazahl/Float", halfOfFive);
	console.log("Multiplikation bei Deklaration", calculationResult);

	// Arithmetische Operatoren:
	// +, -, *, /
	console.log("Datentyp Zahl - Addition", currentYear + halfOfFive);
	console.log("Datentyp Zahl - Subtraktion", currentYear - halfOfFive);
	console.log("Datentyp Zahl - Multiplikation", currentYear * halfOfFive);
	console.log("Datentyp Zahl - Division", currentYear / halfOfFive);
};

function showArithmeticExamples() {
	let existing = 23;
	existing = existing * 2;
	console.log("Rechenoperation mit bestehendem Wert", existing);

	let existing2 = 23;
	existing2 *= 2;
	console.log("Rechenoperation mit bestehendem Wert (Kurzschreibweise)", existing2);

	// Arithmetische Operatoren:
	let myIncrement = 1;
	myIncrement = myIncrement + 1;
	console.log("Inkrement ohne Kurzschreibweise", myIncrement);

	myIncrement = myIncrement++;
	console.log("Inkrement mit Kurzschreibweise", myIncrement);
};

function showCoercionExamples() {
	
	// Sonderfälle - automatische Typumwandlung (Type Coersion)
	console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting + currentYear);
	console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting - currentYear);
	console.log("Mischung aus Zeichenketten und Zahlen", "3000" - currentYear);
	console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting * currentYear);
	console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting / currentYear);
};

export {
	showNumberExamples,
	showArithmeticExamples,
	showCoercionExamples
};

