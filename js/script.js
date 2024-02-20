const ageUser = parseInt(prompt('Inserisci la tua età'));
const kmTravel = parseInt(prompt('Inserisci i chilometri da percorrere'));
const priceKm = 0.21;
let ticketPrice = kmTravel * priceKm;
const adultAge = 18;
let message;

// Calcolo Sconti
if (ageUser < adultAge) {
  ticketPrice = ticketPrice - (ticketPrice / 100 * 20);
  message = 
  `
  Visto che hai ${ageUser} anni<br>
  hai diritto al 20% di sconto!<br>
  Il prezzo del tuo biglietto è di:<br>
  <strong>${ticketPrice.toFixed(2)} €</strong>
  ` 
} else if (ageUser >= 65) {
  ticketPrice = ticketPrice - (ticketPrice / 100 * 40);
  message = 
  `
  Visto che hai ${ageUser} anni<br>
  hai diritto al 40% di sconto!<br>
  il prezzo del tuo biglietto è di:<br>
  <strong>${ticketPrice.toFixed(2)} €</strong>
  ` 
} else {
  message = 
  `
  Visto che hai ${ageUser} anni <br>
  il prezzo del tuo biglietto è di:<br>
  <strong>${ticketPrice.toFixed(2)} €</strong>
  ` 
}

document.getElementById('output').innerHTML = message;