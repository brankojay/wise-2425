// Funktionen
export function sayMyName(name, lastname) {
	return `Der Name ist ${name} ${lastname}`;
};

export const whatsMyCar = (carname) => {
    if (typeof carname === "string") {
        console.log(`Mein Auto ist ein ${carname}`);
    } else {
        console.log("Dieses Programm kann nur Strings verarbeiten...");
    }
};
