const ageUser = parseInt(prompt('Inserisci la tua età'));
const kmTravel = parseInt(prompt('Inserisci i chilometri da percorrere'));
const priceKm = 0.21;
let ticketPrice = kmTravel * priceKm;
const adultAge = 18;

// Calcolo Sconti
if (ageUser < adultAge) {
  ticketPrice = ticketPrice - (ticketPrice / 100 * 20);
} else if (ageUser >= 65) {
  ticketPrice = ticketPrice - (ticketPrice / 100 * 40);
}

document.getElementById('output').innerHTML = 
`
Visto che hai ${ageUser} anni <br>
il prezzo del tuo biglietto è di:<br>
<strong>${ticketPrice.toFixed(2)} €</strong>
` 