// Intro JavaScript - Variablen

// Datentyp - Zeichenketten (Strings)
const firstGreeting = "Immer noch Hallo Welt";
let secondGreeting = "Der zweite Gruß";

secondGreeting = "Und der dritte";

console.log("Variable mit const: ", firstGreeting);
console.log("Variable mit let: ", secondGreeting);
console.log("Zusammenfügen von mehreren Zeichenketten", firstGreeting + " " + secondGreeting);
console.log("Typprüfung auf String (Zeichenkette)", typeof firstGreeting === "string");
console.log("Typprüfung auf String (Zeichenkette)", typeof firstGreeting === "number");
console.log("Anwendung der Methode 'charAt'", secondGreeting.charAt(8));

// Datentyp - Zahlen (Integer/Float)
const currentYear = 2024;
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

// Sonderfälle - automatische Typumwandlung (Type Coersion)
console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting + currentYear);
console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting - currentYear);
console.log("Mischung aus Zeichenketten und Zahlen", "3000" - currentYear);
console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting * currentYear);
console.log("Mischung aus Zeichenketten und Zahlen", firstGreeting / currentYear);

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

// Datentyp Array
const foodList = ["Burger", "Fries", "Cola"]; 
console.log("Datentyp Array", foodList);
console.log("Datentyp Array", foodList[3]);
console.log("Datentyp Array - Länge eines Arrays", foodList.length);

const mixedList = [23, "Fries", true, ["Burger", "Fries", "Cola"]]; 
console.log("Datentyp Array", mixedList);
console.log("Datentyp Array - Länge eines Arrays", mixedList.length);
console.log("Datentyp Array - Adressieren im verschachtelten Array", mixedList[3][1]);
console.log("Datentyp Array - Länge eines Arrays im verschachtelten Array", mixedList[3].length);
console.log("Datentyp Array - Länge eines String im verschachtelten Array", mixedList[1].length);

// Prüfung auf Typen - typeof Operator
console.log("Datentyp Array - Typprüfung", typeof foodList[3] === "undefined");

Datentyp Objekt

const spongeCakeRecipe = {
	name: "Schwammkuchen",
	duration: 60,
	categories: ["Cakes", "Kids", "Sweet"],
	comments: [
		{
			userId: "232322-23233",
			comment: "Nice!"
		},
		{
			userId: "1232434-23233",
			comment: "Yummi!"
		}
	]
};

console.log("Datentyp Objekt - Rezept", spongeCakeRecipe);
console.log("Datentyp Objekt - Rezept - Ansprechen eines bestimmen Schlüssels", spongeCakeRecipe.categories);
console.log("Datentyp Objekt - Rezept - Alternativ zum Ansprechen eines bestimmen Schlüssels", spongeCakeRecipe["comments"]);
console.log("Datentyp Objekt - Rezept - Ansprechen eines bestimmen Schlüssels", spongeCakeRecipe.comments[0].comment);

spongeCakeRecipe.difficulty = "easy"
console.log("Datentyp Objekt - Rezept - Hinzufügen von Schlüsseln", spongeCakeRecipe);
console.log("Datentyp Objekt - Rezept - Schlüssel den es nicht gibt", spongeCakeRecipe.something);

spongeCakeRecipe.name = "Update: Schwammkuchen";
console.log("Datentyp Objekt - Rezept - Ändern von Schlüsseln", spongeCakeRecipe);

delete spongeCakeRecipe.duration;
console.log("Datentyp Objekt - Rezept - Löschen von Schlüsseln", spongeCakeRecipe);

// Funktionen
function sayMyName(name, lastname) {
	return `Der Name ist ${name} ${lastname}`;
};

console.log(sayMyName("Andy", "Junginger"));
const myName = sayMyName("Berta", "Mops");

console.log(myName);

const spongeCakeRecipe = {
	name: "Schwammkuchen",
	duration: 60,
	showDifficulty: function (value) {
		return `Das Rezept ist ${value}`;
	},
	categories: ["Cakes", "Kids", "Sweet"],
	comments: [
		{
			userId: "232322-23233",
			comment: "Nice!"
		},
		{
			userId: "1232434-23233",
			comment: "Yummi!"
		}
	]
};

console.log(spongeCakeRecipe.showDifficulty("einfach"));

let myCar;
setTimeout(function() {
	myCar = "Opel";
}, 3000);

const whatsMyCar = () => {
	console.log(myCar);
};


