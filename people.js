// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.


// 1. Importa la tua funzione da names.js
const nomeCompleto = require("./names.js");
// console.log(nomeCompleto("omar","esposito"))


// 2. Importa la tua funzione da hobbies.js
const hobby = require("./hobbies.js");



// 3. Crea una funzione che non ha parametri.
function noParametri(){
    return {nomeCompleto:nomeCompleto("omar","esposito"), hobby:hobby("calcio","palestra","pc")}
}

console.log(noParametri())