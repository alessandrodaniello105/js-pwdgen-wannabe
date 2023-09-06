const userName = prompt('Qual è il tuo nome?');

const userLastName = prompt('Qual è il tuo cognome?');

const userFavColor = prompt('Infine qual è il tuo colore preferito?');

const magicNumber = 23;

const semipwd = userName + userLastName + userFavColor + magicNumber;
const pwdLowerCase = semipwd.toLowerCase();

console.log(pwdLowerCase);

