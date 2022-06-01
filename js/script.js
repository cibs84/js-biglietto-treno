// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// INPUT - RACCOLTA DATI E CREAZIONE DELLE VARIABILI
// Chiedo all'utente di inserire il numero di chilometri che vuole percorrere
const kmTrip = parseInt( prompt('Inserisci i Km che vuoi percorrere') );

// Chiedo all'utente di inserire la sua età
const ageUser = parseInt( prompt('Inserisci la tua età') );

// Creo costante per tariffa al kilometro
const ratePerKm = 0.21;

// LOGICA - CALCOLO DEL PREZZO CON EVENTUALE SCONTO E ARROTONDAMENTO AL CENTESIMO DI EURO
// Calcolo del prezzo pieno del biglietto moltiplicando 'i chilometri da percorrere' per 'la tariffa al chilometro'
let ticketPrice = kmTrip * ratePerKm;

// Calcolo dei prezzi scontati in base all'età
// SE l'età è inferiore a 18 ALLORA sottrai al prezzo piano del biglietto lo sconto del 20%
// SE l'età è superiore a 65 ALLORA sottrai al prezzo piano del biglietto lo sconto del 40%
if (ageUser < 18) {
    ticketPrice = ticketPrice * 0.8;
} else if (ageUser > 65) {
    ticketPrice = ticketPrice * 0.6;
}

// Arrotondo il prezzo del biglietto al centesimo di euro
ticketPrice = ticketPrice.toFixed(2);

// OUTPUT - STAMPO IL PREZZO DEL BIGLIETTO
document.getElementById('price').innerHTML = "Il prezzo del tuo biglietto è di €" + ticketPrice;
