const bowling = {
  giocatori: [
    { nome: "Livio", punteggi: [] },
    { nome: "Paola", punteggi: [] },
    { nome: "Filippo", punteggi: [] },
    { nome: "Giuseppe", punteggi: [] }
  ],

  // Genera un numero casuale da 1 a 10
  generaPunteggioCasuale() {
    return Math.floor(Math.random() * 10) + 1;
  },

  // Crea 10 punteggi casuali per OGNI giocatore
  genera10PunteggiPerTutti() {
    console.log("Sto generando 10 punteggi per ogni giocatore...");

    this.giocatori.forEach(giocatore => {
      giocatore.punteggi = []; 

      for (let i = 0; i < 10; i++) {
        giocatore.punteggi.push(this.generaPunteggioCasuale());
      }

      console.log(`Punteggi di ${giocatore.nome}:`, giocatore.punteggi);
    });

    console.log("Generazione punteggi finita.\n");
  },

  // Calcola il totale di un singolo giocatore (somma dell'array)
  calcolaTotale(giocatore) {
    return giocatore.punteggi.reduce((somma, valore) => somma + valore, 0);
  },

  // Stampa i totali di tutti, cosi vedo output chiaro
  stampaTotali() {
    console.log("Totali dei giocatori:");
    this.giocatori.forEach(giocatore => {
      console.log(`- ${giocatore.nome}: totale = ${this.calcolaTotale(giocatore)}`);
    });
    console.log("");
  },

  // Aggiunge un nuovo giocatore e gli genera subito 10 punteggi
  aggiungiGiocatore(nomeNuovo) {
    console.log(`Aggiungo un nuovo giocatore: ${nomeNuovo}`);

    const nuovoGiocatore = { nome: nomeNuovo, punteggi: [] };

    for (let i = 0; i < 10; i++) {
      nuovoGiocatore.punteggi.push(this.generaPunteggioCasuale());
    }

    console.log(`Punteggi di ${nuovoGiocatore.nome}:`, nuovoGiocatore.punteggi);

    this.giocatori.push(nuovoGiocatore);
    console.log("Giocatore aggiunto.\n");
  },

  // EXTRA: crea classifica finale (ordinata per totale decrescente)
  creaClassifica() {
    console.log("Creo la classifica (dal migliore al peggiore)...");

    // Copio l'array per non rovinare l'ordine originale
    const copia = [...this.giocatori];

    copia.sort((a, b) => this.calcolaTotale(b) - this.calcolaTotale(a));

    return copia;
  },

  // Determina vincitore (primo della classifica)
  determinaVincitore() {
    const classifica = this.creaClassifica();
    const vincitore = classifica[0];

    console.log(
      `Vincitore: ${vincitore.nome} con ${this.calcolaTotale(vincitore)} punti!\n`
    );

    return vincitore;
  },

  // Stampa classifica in modo leggibile
  stampaClassifica() {
    const classifica = this.creaClassifica();

    console.log("CLASSIFICA FINALE:");
    classifica.forEach((g, indice) => {
      console.log(
        `${indice + 1}) ${g.nome} - totale: ${this.calcolaTotale(g)} - punteggi: ${g.punteggi.join(", ")}`
      );
    });

    console.log("");
  }
};

// ESECUZIONE (step by step, cosi vedi tutto in console)
bowling.genera10PunteggiPerTutti();
bowling.stampaTotali();

bowling.aggiungiGiocatore("Marco");
bowling.stampaTotali();

bowling.stampaClassifica();
bowling.determinaVincitore();