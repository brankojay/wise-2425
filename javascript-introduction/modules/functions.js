// Funktionen
function sayMyName(name, lastname) {
	return `Der Name ist ${name} ${lastname}`;
};

// Arrow Syntax
const whatsMyCar = (carname) => {
    if (typeof carname === "string") {
        console.log(`Mein Auto ist ein ${carname}`);
    } else {
        console.log("Dieses Programm kann nur Strings verarbeiten...");
    }
};

// Async / await Funktion
async function giveMeARandomPokemon() {
    // Zufallszahl zwischen 0 und 100
    const randomId = Math.ceil(Math.random() * 100);

    // try / catch Block, um Fehler abzufangen
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    try {
        // fetch an eine offene Schnittstelle
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        const randomPokemonRequest = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const randomPokemonData = await randomPokemonRequest.json();

        console.log(`Dein Random Pokemon ist ${randomPokemonData.name.toUpperCase()}`);
    } catch (error) {
        console.error("[RANDOM POKEMON]: Da ist leider etwas schief gelaufen", error);
    }
};

export {
    sayMyName,
    whatsMyCar,
    giveMeARandomPokemon
};
