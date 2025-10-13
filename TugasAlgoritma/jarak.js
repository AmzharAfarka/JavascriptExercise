const prompt = require('prompt-sync')({sigint : true});

// konversi jarak cm ke km dan m ke km
let diulang = true;
do {
    let jarak_cm = Number(prompt("Masukkan jarak dalam cm: "));
    let cm_ke_km = Number(jarak_cm / 100000);
    let sisa_cm = Number(jarak_cm % 100000);
    let m = Number(sisa_cm / 1000);
    let sisa_m = Number(m % 1000);
    

    console.log(`jarak cm: ${jarak_cm.toFixed(2)} di konversi ke km menjadi: ${cm_ke_km.toFixed(2)} km dan sisanya adalah: ${sisa_cm} cm`);
    console.log(`jarak m: ${sisa_cm.toFixed(2)} di konversi ke km menjadi: ${m.toFixed(2)} km dan sisanya adalah: ${sisa_m.toFixed(2)} m`);

    let jawab = prompt(`diulang (y/n)?`);
    diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);

    
    