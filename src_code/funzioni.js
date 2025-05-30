
// function saluta(nome) {
//   return "Ciao, " + nome + "!";
// }
// let saluta2 = function (nome) {
//   return "Ciao, " + nome + "!";
// }
// saluta3 = (nome) => {
//   return "Ciao, " + nome + "!";
// }

// let messaggio = saluta("Luca");
// console.log(messaggio);



// function saluta(nome, callback) {
//   console.log("Ciao, " + nome);
//   callback();
// }

// function fineSaluto() {
//   console.log("Saluto completato.");
// }

// saluta("Giulia", fineSaluto);



// function fintaApiCallback(callback) {
//   console.log("Chiamata all'API (callback)...");
//   setTimeout(() => {
//     const dati = { nome: "Mario", eta: 30 };
//     console.log('dentro timeout')
//     callback(dati);
//   }, 2000);
// }

// function gestisciRisposta(err, dati) {
//     if (err) {
//         console.error('errore',err)
//     } else { 
//         console.log("Dati ricevuti:", dati);
//     }
// }


// console.log('ciao prima')
// fintaApiCallback(gestisciRisposta);
// console.log('ciao dopo')


//  function controllaNumero(numero) {
//   return new Promise((resolve, reject) => {
//     if (numero > 10) {
//       resolve("Numero valido!");
//     } else {
//       reject("Numero troppo basso.");
//     }
//   });
// }

// controllaNumero(15)
//   .then((messaggio) => {
//     console.log("Successo:", messaggio);
//   })
//   .catch((errore) => {
//     console.log("Errore:", errore);
//   });








// function fintaApiPromise() {
//   console.log("Chiamata all'API (Promise)...");
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const successo = true;
//       if (successo) {
//         resolve({ nome: "Lucia", ruolo: "Admin" });
//       } else {
//         reject("Errore nel recupero dati");
//       }
//     }, 2000);
//   });
// }


// console.log('prima')
// fintaApiPromise()
//   .then((dati) => {
//     console.log("Dati ricevuti:", dati);
// console.log('dopo')
//   })
//   .catch((errore) => {
//     console.log("Errore:", errore);
//   });




function attendiSecondi(secondi) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Tempo trascorso: " + secondi + " secondi");
    }, secondi * 1000);
  });
}

async function esegui() {
    try {
        console.log("Inizio attesa...");
        let messaggio = await attendiSecondi(2);
        console.log(messaggio);
        console.log("Fine attesa."); 
    } catch (error) {
        console.error('ERRORE QUI:', error.toString())
    }
 
}

esegui();


