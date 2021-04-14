/* **Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

var pariDispari = prompt("scegli pari o dispari");
var numero_utente = parseInt(prompt("scegli un numero da 1 a 5"));
var numero_cpu = random(1,5);
var risultato = somma(numero_utente, numero_cpu)

console.log("La tua scelta è " + pariDispari);
console.log("Il tuo numero è " + numero_utente);
console.log("Il numero del cpu è " + numero_cpu);
console.log("La somma fa " + risultato);
console.log(vittoria(pariDispari, risultato))



function random (min , max){
 var numero_rdm = Math.floor(Math.random() * ((max + 1) - min)) + min;
 return numero_rdm
};

function somma (n1, n2){
  var sum = n1 + n2;
  if(sum % 2 === 0){
    return sum + ", questa somma di numeri è pari"
  }else{
    return sum + ", questa somma di numeri è dispari"
  };
};

function vittoria (scelta,cifra){
  if(cifra % 2 === 0 && scelta == "pari"){
    return "HAI VINTO"
  }else if(cifra % 2 !==0 && scelta == "pari"){
    return "HAI PERSO"
  }else if(cifra % 2 ===0 && scelta == "dispari"){
    return "HAI PERSO"
  }else if(cifra % 2 !== 0 && scelta == "dispari"){
    return "HAI VINTO"
  }
}

