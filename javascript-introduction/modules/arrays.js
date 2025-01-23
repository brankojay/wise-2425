function showArrayExamples() {
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
};

export default showArrayExamples;
