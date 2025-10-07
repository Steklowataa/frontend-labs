const fs = require('fs');
const path = require('path');

const firstNames = ["Anna", "Piotr", "Katarzyna", "Tomasz", "Agnieszka", "Marcin", "Joanna", "Krzysztof", "Małgorzata", "Andrzej"];
const lastNames = ["Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kowalczyk", "Kamiński", "Lewandowski", "Zieliński", "Szymański", "Woźniak"];   

const numberOfItems = parseInt(process.argv[2], 10) || 10; 

if (isNaN(numberOfItems) || numberOfItems <= 0) {
    console.error("Proszę podać prawidłową, dodatnią liczbę jako argument.");
    process.exit(1);
}

const data = [];

for (let i = 1; i <= numberOfItems; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 50) + 18; 

    data.push({
        id: i,
        firstName: firstName,
        lastName: lastName,
        age: age
    });
}


const fileContent = `export const data = ${JSON.stringify(data, null, 4)};`;

const outputPath = path.join(__dirname, 'module-data.js');

//node src/lab01/module-data-generator.cjs 5
fs.writeFile(outputPath, fileContent, 'utf8', (err) => {
    if (err) {
        console.error("Wystąpił błąd podczas zapisu pliku:", err);
        return;
    }
    console.log(`Plik module-data.js z ${numberOfItems} obiektami został pomyślnie wygenerowany w katalogu lab01!`);
});
