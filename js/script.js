const userName = prompt('Qual è il tuo nome?');
const userNameRST = userName.trim();

const userLastName = prompt('Qual è il tuo cognome?');
const userLastNameRST = userLastName.trim();

const userFavColor = prompt('Infine qual è il tuo colore preferito?');
const userFavColorRST = userFavColor.trim();

const magicNumber = 23;

const pwdPre = userNameRST + userLastNameRST + userFavColorRST + magicNumber;
const pwdLowerCase = pwdPre.toLowerCase();

console.log(pwdLowerCase);

