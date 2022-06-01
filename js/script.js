// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// RACCOLTA DATI E CREAZIONE DELLE VARIABILI
// Chiedo all'utente di inserire il numero di chilometri che vuole percorrere
let kmTrip = parseInt( prompt('Inserisci i Km che vuoi percorrere') );
console.log(kmTrip);

// Chiedo all'utente di inserire la sua età
let ageUser = parseInt( prompt('Inserisci la tua età') );
console.log(ageUser);

// Creo variabile per tariffa al kilometro
const ratePerKm = 0.21;
console.log(ratePerKm);

// LOGICA
// Calcolo del prezzo pieno del biglietto moltiplicando kmTrip per ratePerKm


// Calcolo dei prezzi scontati in base all'età
// SE l'età è inferiore a 18 ALLORA sottrai al prezzo piano del biglietto lo sconto del 20%
// SE l'età è superiore a 65 ALLORA sottrai al prezzo piano del biglietto lo sconto del 40%


// STAMPO IL PREZZO CON UN ARROTONDAMENTO AL CENTESIMO DI EURO

