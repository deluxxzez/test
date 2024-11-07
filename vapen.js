// Constante prijs per vape
const prijsPerVape = 16;

// Functie om het weekresultaat te berekenen
function berekenWeekResultaat() {
    const inkomen = parseFloat(document.getElementById('inkomen').value) || 0;
    const vapesPerWeek = parseFloat(document.getElementById('vapesPerWeek').value) || 0;
    const weekUitgave = vapesPerWeek * prijsPerVape;

    const saldo = (inkomen / 4) - weekUitgave;

    document.getElementById('resultaat').textContent = saldo < 0
        ? `Waarschuwing! Je gaat €${Math.abs(saldo).toFixed(2)} in de min per week`
        : `€${weekUitgave.toFixed(2)} per week aan vapes, saldo voor de rest van de week is: €${saldo.toFixed(2)}`;
    document.getElementById('resultaat').classList.toggle('negatief', saldo < 0);
}

// Functie om het maandresultaat te berekenen
function berekenMaandResultaat() {
    const inkomen = parseFloat(document.getElementById('inkomen').value) || 0;
    const vapesPerWeek = parseFloat(document.getElementById('vapesPerWeek').value) || 0;
    const maandUitgave = vapesPerWeek * prijsPerVape * (52/12);

    const saldo = inkomen - maandUitgave;

    document.getElementById('resultaat').textContent = saldo < 0
        ? `Waarschuwing! Je gaat €${Math.abs(saldo).toFixed(2)} in de min per maand`
        : `€${maandUitgave.toFixed(2)} per maand aan vapes, saldo voor de rest van de maand: €${saldo.toFixed(2)}`;
    document.getElementById('resultaat').classList.toggle('negatief', saldo < 0);
}

// Functie om het jaarresultaat te berekenen
function berekenJaarResultaat() {
    const inkomen = parseFloat(document.getElementById('inkomen').value) || 0;
    const vapesPerWeek = parseFloat(document.getElementById('vapesPerWeek').value) || 0;
    const jaarUitgave = vapesPerWeek * prijsPerVape * 52;

    const saldo = (inkomen * 12) - jaarUitgave;

    document.getElementById('resultaat').textContent = saldo < 0
        ? `Waarschuwing! Je gaat €${Math.abs(saldo).toFixed(2)} in de min per jaar`
        : `€${jaarUitgave.toFixed(2)} per jaar aan vapes, saldo voor het hele jaar: €${saldo.toFixed(2)}`;
    document.getElementById('resultaat').classList.toggle('negatief', saldo < 0);
}

// Event listeners toevoegen aan de knoppen
document.getElementById('weekKnop').addEventListener('click', berekenWeekResultaat);
document.getElementById('maandKnop').addEventListener('click', berekenMaandResultaat);
document.getElementById('jaarKnop').addEventListener('click', berekenJaarResultaat);
