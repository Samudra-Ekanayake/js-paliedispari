function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

let numero = getRndInteger (1, 5);
console.log(numero)

function sommaParidispari (numUtente, Numcomputer) {
    let somma = numUtente + Numcomputer;
    if(somma % 2 === 0) {
        return "pari";
    } else {
        "dispari;"
    }
    console.log(somma)

}
    
