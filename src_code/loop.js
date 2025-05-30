let array = ['a', 'b', 'c']
let element = 'ciao'

console.log(element)

// let index = 0
// while (index < array.length) {
//     let element = array[index];
//     console.log('item', index, element)
//     index++
// }

// do {
//     let element = array[index];
//     console.log('item', index, element)
//     index++ 
// } while (index < array.length);

for (let index = 0; index < array.length; index += 1) {
    element = array[index];
    console.log('item', index, element)
}

array.forEach(element => {
    console.log(element)
});

for (const element of array) {
    console.log(element)
}

let obj = {
    chiave: 'valore',
    chiave1: 'valore1',
    chiave2: false,
    chiave3: 12345,
}

for (const element of obj) {
    console.log(element)
}

for (const key in obj) {
    const element = object[key]
    // element = array[2];
    // element = obj['chiave2'];
    // element = obj.chiave2;
    console.log(element)
}

for (const element of Object.keys(obj)) {
    console.log(element)
}

for (const element of Object.values(obj)) {
    console.log(element)
}