// Gioco dei dadi:

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const diceUser = Math.floor(Math.random() * 6) + 1;
console.log(diceUser)

const dicePc = Math.floor(Math.random() * 6) + 1;
console.log(dicePc)

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (diceUser > dicePc){
    alert('The winner is the User')
} else {
    alert('The winner is the PC')
}
