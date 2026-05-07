// Selfwork Oggetti 3


// Crea un oggetto bowling con le seguenti caratteristiche:
// una proprietà che comprenda una lista di giocatori
//  con un nome
//  e i relativi punteggi


// diverse funzionalità tra cui:

// creare 10 punteggi casuali per ogni giocatore:

// Suggerimento: questo metodo dovra’ ciclare tutti i giocatori
// presenti nell’oggetto bowling, 
// e aggiungere ad ogni proprieta’ scores:
// 
// dieci punteggi casuali ad ogni giocatore


// Per generare un punteggio casuale da 1 a 10
//  → Math.floor(Math.random() * (10 - 1 +1) + 1)


// trovare il punteggio finale per ogni giocatore:
// Suggerimento: ordinare l’array in ordine Decrescente 
// (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
// 
//ggiungere un nuovo giocatore e creare 10 punti casuali anche per lui
// determinare il vincitore

                                                    // EXTRA:
// Crea un metodo per stilare la classifica finale dei giocatori

// DATI DI PARTENZA:
// let bowling = {
//     'players': [
//         {'name': 'Livio', 'scores': []},
//         {'name': 'Paola', 'scores': []},
//         {'name': 'Filippo', 'scores': []},
//         {'name': 'Giuseppe', 'scores': []}
//     ],
//     ...
// }





//INIZIO
//Inizializza l'oggetto giocatori e bowling( creo propietà con 1 array.)
// Contenenti array:  nome e lista punteggi vuota.

let bowling = {
    players: [
        { name: 'Livio', scores: [], totalScore: 0 },
        { name: 'Paola', scores: [], totalScore: 0 },
        { name: 'Filippo', scores: [], totalScore: 0 },
        { name: 'Giuseppe', scores: [], totalScore: 0 }
    ],



  //generare 10 passaggi casuali. 10 PUNTEGGI CASUALI per giocatore


  // USO MATEMATICO DI E ; con ciclo 'scores' ; popolo array  di ogni patrtecipante!!



setScores: function () {

        this.players.forEach(player => {


            for (let i = 0; i < 10; i++) {



                let randomScore = Math.floor(Math.random() * (10 - 1 + 1) + 1);




                player.scores.push(randomScore);
            }

        });

    },


// CALCOLO DEI TOTALI ED ORDINO CLASSIFICA ( SOMMA DEI PUNTEGGI // ORDINO ARRAY, SCELTA: Decrescenza.)

  //matematica: calcolo del punteggio -

calculateFinalScores: function () {

        this.players.forEach(player => {

            player.totalScore = player.scores.reduce((acc, curr) => acc + curr, 0);

        });

    },

 
    // Ordina i giocatori in ordine decrescente
    ranking: function () {

        this.players.sort((a, b) => b.totalScore - a.totalScore);

    },




    //  aggiungi giocatore e generare i suoi punti

    addPlayer: function(newName) {
        let newPlayer = {'name': newName, 'scores': [], 
            'totalScore': 0
        
        };
        
        // Generiamo subito i 10 punti per iniziare

        for (let i = 0; i < 10; i++) {
            
            let randomScore = Math.floor(Math.random() * (10 - 1 + 1) + 1);

            newPlayer.scores.push(randomScore);

        }

        // Calcola il totale
        newPlayer.totalScore = newPlayer.scores.reduce((acc, curr) => acc + curr, 0);

        // Inserisce il nuovo giocatore
        this.players.push(newPlayer);

    },

    // Determina il vincitore
    getWinner: function () {

        this.ranking();

        let winner = this.players[0];

        console.log(`Il vincitore è ${winner.name} con ${winner.totalScore} punti!`);

    }
};




// ESECUZIONE

bowling.setScores();

bowling.calculateFinalScores();

bowling.addPlayer('Marco');

bowling.ranking();

console.log(bowling.players);

bowling.getWinner();
