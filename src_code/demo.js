let variabile = 0
let condizione = true
const costante = 'ciao'
var globale = ''

variabile = 'oooooo'

// costante = 'ciao'

// if (variabile == '0') {
//     console.log('ciao')
// } else if (condizione) {
//     console.log(`la variabile contiene ${variabile}`)
//     console.log(`la variabile contiene ` + variabile)
// } else if (condizione1) {

// } else {

// }

switch (variabile) {
    case '0':
        console.log('zero')
        break
    
    case 'ciao':
        console.log('ciao')
        break

    default:
        console.log('nessun valore')
        break
}

let value = false
let value2 = 0
let value3 = null
let value4 = undefined
let value5 = ''

if (value || value2 ) {
    console.log('vero')
} else {
    console.log('false')
}