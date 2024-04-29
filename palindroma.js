const parola = prompt("inserisci una parola");

function palindroma(parola) {
    parola = parola.toLowerCase();
    let inizio = 0
    let fine = parola.length - 1;

    while (inizio <= fine) {
        if (parola[inizio] !== parola[fine]) {
            return false;
        }
        inizio++;
        fine--;
    }

    return true
}

if (palindroma(parola)) {
    console.log(parola + " è palindroma. ")
} else {
    console.log(parola + " non è palindroma. ")
}
