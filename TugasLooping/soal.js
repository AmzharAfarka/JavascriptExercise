const prompt = require("prompt-sync")({ sigint: true });

// soal 1
console.log("Soal 1")
let cerdas4 = "";
for (let cerdas1 = 0; cerdas1 < 4; cerdas1++) {
    cerdas4 += "Cerdas ";
    if (cerdas1 < 3) cerdas4 += "";
}
console.log(cerdas4);

// soal 2
console.log("Soal 2")
let i = 0;
while (i < 5) {
    console.log("Cerdas");
    i++;
}

// soal 3
console.log("Soal 3")
const soal3 = ["A. Cerdas", "B. Cerdas", "C. Cerdas", "D. Cerdas"];
for (let Cerdas2 of soal3) {
    console.log(Cerdas2);
}

// soal 4
console.log("Soal 4")
let soal4 = ['1 2 3 4 5 = 15'];
for (let total1 of soal4) {
    console.log(total1);
}

// soal 5
console.log("soal 5")
let soal5 = ['1 + 2 + 3 + 4 + 5 = 15'];
for (let total2 of soal5) {
    console.log(total2);
}

// soal 6
console.log("Soal 6")
let soal6 = ['1', '2', '3', '4', '5', '--+', '15'];
for (let total3 of soal6) {
    console.log(total3);
}
