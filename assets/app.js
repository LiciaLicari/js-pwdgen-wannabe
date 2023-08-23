/* 

consegna: Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23 


Strumenti:
        prompt
        const
        getElementById
        console.log

    Pseudo Codice:
        - Richiedo all'user il suo nome
        - Richiedo all'user il suo cognome
        - Richiedo all'user il suo colore preferito
        - Genero la psw concatenando le stringhe. Aggiungo '23' alla fine
        - Scrivo il risultato in console
        - Scrivo il srisultato in pagina

        BONUS
        - Aggiungo key
        - Sommo key al numero 23
        - Genero la nuova psw
*/ 

const userName = prompt('Inserisci il tuo nome: ');
const userSurname = prompt('Inserisci il tuo cognome: ');
const userFavoriteColor = prompt('Inserisci il tuo colore preferito: ');
const currentYear = 23;
const secretKey = 365;
let finalCode = 23 + 365;
console.log(finalCode);


const passwordElement = document.getElementById('password');

const password = `${userName}${userSurname}${userFavoriteColor}${finalCode}`;

console.log(password);
passwordElement.innerHTML = `La tua nuova password è: ${password}`;
