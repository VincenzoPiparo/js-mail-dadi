// Mail:

// Chiedi all’utente la sua email,
const emailUser = prompt ('Enter your mail')
console.log(emailUser)
// controlla che sia nella lista di chi può accedere,
const listEmail = [ 'vincenzo97@gmail.com', 'luca87@gmail.it', 'salvo99@msn.com', 'elisa98@hotmail.it', 'diego.kal@gmail.it' ]
console.log(listEmail)

for ( let i = 0; i < listEmail.length; i++) {
// stampa un messaggio appropriato sull’esito del controllo.
    if (emailUser === listEmail[i]) {
        alert('Your email is in the list')
    } else {
        alert ('Your email is not in the list')
    }
}
