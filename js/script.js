/*
Snack 1
A:
Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
- Età
- Media punti fatti per partita
- Percentuale di successo per tiri da 3 punti
- Codice giocatore
Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
- l'età deve essere compresa tra 18 e 40
- la media punti fatti per partita deve essere compresa tra 0 e 50
- la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
- il codice giocatore deve essere formato da 3 lettere maiuscole casuali (array di lettere) e 3 cifre casuali
Stampare poi Codice giocatore, Media punti e percentuale tiri da 3 punti.
*/



const giocatore = {
    eta: randomNumber(18, 40),
    mediaPunti: randomNumber(0, 50),
    trePunti: randomNumber(0, 100),
    codiceGiocatore: generaCodice()
};

console.log(`Codice giocatore: ${giocatore.codiceGiocatore}, media punti: ${giocatore.mediaPunti}`);

//funzioni 
function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generaCodice() {
    const lettere = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    let caratteri = '';
    let numeri = '';
    for (let i = 0; i < 3; i++) {
        caratteri += lettere[randomNumber(0, lettere.length - 1)];
        numeri += randomNumber(0, 9);
    }
    return caratteri + numeri;
};

/*
B: Creare un array di 10 giocatori di basket, con le regole sopra indicate
Dopo aver creato l'array, stampa codice giocatore e media punti per ogni giocatore.

*/



const giocatori = [];

for (let i = 0; i < 10; i++) {
    giocatori.push({
        eta: randomNumber(18, 40),
        mediaPunti: randomNumber(0, 50),
        trePunti: randomNumber(0, 100),
        codiceGiocatore: generaCodice()
    });
}


console.table(giocatori);

giocatori.forEach((giocatore) => {
    console.log(`Codice giocatore:${giocatore.codiceGiocatore} | Media punti: ${giocatore.mediaPunti}`);
});





/*
Crea un array composto da 10 automobili. 
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
- Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
- Infine stampa separatamente i 3 array.
*/

const auto = [
    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "benzina"
    },

    {
        marca: "Opel",
        modello: "B",
        alimentazione: "diesel"
    },

    {
        marca: "Toyota",
        modello: "C",
        alimentazione: "elettrico"
    },

    {
        marca: "Renault",
        modello: "D",
        alimentazione: "benzina"
    },

    {
        marca: "Fiat",
        modello: "E",
        alimentazione: "benzina"
    },

    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "benzina"
    },

    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "benzina"
    },

    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "benzina"
    },

    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "benzina"
    },

    {
        marca: "Ferrari",
        modello: "A",
        alimentazione: "GPL"
    },

],



    autoBenzina = auto.filter(automobile => {
        return automobile.alimentazione === "benzina";
    });

autoDiesel = auto.filter(automobile => {
    return automobile.alimentazione === "diesel";
});

altraAlimentazione = auto.filter(automobile => {
    return automobile.alimentazione !== "benzina" && automobile.alimentazione !== "diesel";
});

console.log(autoBenzina);
console.log(autoDiesel);
console.log(altraAlimentazione);

/*
// Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
// Crea un nuovo array inserendo per ogni persona 
una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
*/

const persone = [
    {
        nome: "Mario",
        cognome: "Rossi",
        eta: 29,
    },

    {
        nome: "Giovanni",
        cognome: "Verdi",
        eta: 33,
    },

    {
        nome: "Luigi",
        cognome: "Verdi",
        eta: 14,
    },

    {
        nome: "Marco",
        cognome: "Neri",
        eta: 17,
    },

    {
        nome: "Sergio",
        cognome: "Sergi",
        eta: 21,
    },
],

    guidatori = [];

persone.forEach((e) => {
    if (e.eta >= 18) {
        guidatori.push({
            frase: `$(e.nome)$(e.cognome) può guidare`,
        })
    }
});

console.log(guidatori);


/* SNACK 1
A partire da un array di stringhe, 
crea un secondo array formattando 
le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

*/

array = ['pippo', 'PLUTO', 'Paperino'];

const newArray =

    array.map((e) => e.toLowerCase()).map((e) => `${e[0].toUpperCase()}${e.substring(1)}`);


console.log(newArray);


/*
SNACK 4 -> VUE
Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false)
Andiamo a stampare nome cognome e numero dentro una lista.
Fare in modo poi che i contatti non attivi (attivo: false)
siano stampati di colore rosso mentre gli altri normalmente di nero.
Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona
di cui è stato cliccato il numero
*/

const app = new Vue({
    el: "#app",
    data: {
        contatti: [
            {
                nome: "Mario",
                cognome: "Rossi",
                numero: 3385747886,
                attivo: true,
            },
            {
                nome: "Fabio",
                cognome: "Verdi",
                numero: 3395574832,
                attivo: false,
            },
            {
                nome: "Giovanni",
                cognome: "Neri",
                numero: 3339191957,
                attivo: true,
            },


        ]
    },
    methods: {
        cliccaNumero(index) {
            console.log(this.contatti[index].cognome)
        }

    }

});

