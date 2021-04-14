/* **Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var parola = prompt("inserisci una parola");
console.log(palindroma(parola));

function palindroma (stringa){

  if (stringa === stringa.split('').reverse().join('')){
    return stringa + " è un parola palindroma";
  }else {
   return stringa + " non è una parola palindroma";
  }
  
}
