const prompt = require('prompt-sync')({sigint : true});

let x = Number(prompt('input angka1:'))
let y = Number(prompt('input angka2:'))

let z = x
x = y
y = z

console.log(`nilai setelah pertukaran: x = ${x}, y = ${y}`)

// tanpa variabel ketiga
x = x + y
y = x - y
x = x - y

console.log(`nilai setelah pertukaran tanpa variabel ketiga: x = ${x}, y = ${y}`)

// tanpa variabel ketiga (xor)

x = x ^ y
y = x ^ y
x = x ^ y

console.log(`nilai setelah pertukaran tanpa variabel ketiga (xor): x = ${x}, y = ${y}`)

// pertukaran 3 variabel

let temp = x;
x = y;        
y = z;        
z = temp;     

console.log(`x = ${x}, y = ${y}, z = ${z}`);
