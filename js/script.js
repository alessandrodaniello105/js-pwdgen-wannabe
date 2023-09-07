//1. + 2.
// const userName = prompt('Qual è il tuo nome?');
// const userNameRST = userName.trim();

// const userLastName = prompt('Qual è il tuo cognome?');
// const userLastNameRST = userLastName.trim();

// const userFavColor = prompt('Infine qual è il tuo colore preferito?');
// const userFavColorRST = userFavColor.trim();

//1.
let userName, userLastName, userFavColor, pwdPre

//2.
userName = prompt('Qual è il tuo nome?');
const userNameRST = userName.trim().replace(/ /g, "");

userLastName = prompt('Qual è il tuo cognome?');
const userLastNameRST = userLastName.trim().replace(/ /g, "");

userFavColor = prompt('Infine qual è il tuo colore preferito?');
const userFavColorRST = userFavColor.trim().replace(/ /g, "");


//3.
const magicNumber = 23;

//4.
pwdPre = userNameRST + userLastNameRST + userFavColorRST + magicNumber;
const pwdGenerated = pwdPre.toLowerCase();

/*
//5.
Stampo il messaggio selezionando l'h1 tramite l'id e gli assegno la mia variabile ottenuta
*/
document.getElementById('pwdOutput').innerHTML = pwdGenerated;