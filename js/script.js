// Mail:

// Chiedi all’utente la sua email,
const emailUser = prompt ('Enter your mail')
console.log(emailUser)
// controlla che sia nella lista di chi può accedere,
const listEmail = [ 'vincenzo97@gmail.com', 'luca87@gmail.it', 'salvo99@msn.com', 'elisa98@hotmail.it', 'diego.kal@gmail.it' ]
console.log(listEmail)

if (emailUser === listEmail) {
    alert('Your email is in the list')
} else {
    alert ('Your email is not in the list')
}
// stampa un messaggio appropriato sull’esito del controllo.

// Gioco dei dadi:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?