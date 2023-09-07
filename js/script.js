//1. + 2.
// const userName = prompt('Qual è il tuo nome?');
// const userNameRST = userName.trim();

// const userLastName = prompt('Qual è il tuo cognome?');
// const userLastNameRST = userLastName.trim();

// const userFavColor = prompt('Infine qual è il tuo colore preferito?');
// const userFavColorRST = userFavColor.trim();

//1.
const userName = prompt('Qual è il tuo nome?').trim().replaceAll(" ", "");
const userLastName = prompt('Qual è il tuo cognome?').trim().replaceAll(" ", "");
const userFavColor = prompt('Infine qual è il tuo colore preferito?').trim().replaceAll(" ", "");

//2.
// const userNameRST = userName;
// const userLastNameRST = userLastName
// const userFavColorRST = userFavColor


//3.
const magicNumber = 23;
const pwdPre = userName + userLastName + userFavColor + magicNumber;

//4.
const pwdGenerated = pwdPre.toLowerCase();

/*
//5.
Stampo il messaggio selezionando l'h1 tramite l'id e gli assegno la mia variabile ottenuta
*/
document.getElementById('pwdOutput').innerHTML = pwdGenerated;