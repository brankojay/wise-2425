const showObjectExamples = () => {
    // Datentyp Objekt
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
};

export default showObjectExamples;
