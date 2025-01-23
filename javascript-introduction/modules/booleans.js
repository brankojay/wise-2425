function showBooleanExamples() {
	// Datentyp - Boolean (Wahrheitswerte)
	const myTrueValue = true;
	const myFalseValue = false;

	console.log("Datentyp Boolean - true", myTrueValue);
	console.log("Datentyp Boolean - false", myFalseValue);

	// Vergleichsoperatoren
	// Vergleich auf Gleichheit
	console.log("Datentyp Boolean - true === false", myTrueValue === myFalseValue);
	console.log("Datentyp Boolean - 1 === 2", 1 === 2);
	console.log("Datentyp Boolean - 1 === '1'", 1 === "1");

	// Vergleich auf Ungleichheit
	console.log("Datentyp Boolean - 1 !== 2", 1 !== 2);

	// Vergleich auf Größer / Kleiner
	console.log("Datentyp Boolean - 1 < 2", 1 < 2);
	console.log("Datentyp Boolean - 1 > 2", 1 > 2);

	// Vergleich auf Größer gleich / Kleiner gleich
	console.log("Datentyp Boolean - 1 <= 2", 1 <= 2);
	console.log("Datentyp Boolean - 1 >= 2", 1 >= 2);
};

export default showBooleanExamples;

