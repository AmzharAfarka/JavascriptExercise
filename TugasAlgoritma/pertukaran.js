const prompt = require('prompt-sync')({sigint : true});

let x = Number(prompt('input angka1:'))
let y = Number(prompt('input angka2:'))

let z = x
x = y
y = z

console.log(`nilai setelah pertukaran: x = ${x}, y = ${y}`)