const prompt = require('prompt-sync')({sigint : true});

let diulang = true;
do {

    let waktu = Number(prompt("Masukkan waktu dalam detik: "));
    let jam = parseInt(waktu / 3600);
    let sisa = waktu % 3600;
    let menit = parseInt(sisa / 60);
    let sisa1 = sisa % 60;

    console.log(`${jam} jam, ${menit} menit, ${sisa1} detik`);
    
    let Hari = Number(prompt("Masukkan Hari: "));
    let Tahun= parseInt(Hari / 365);
    let sisaTahun = Tahun % 365;
    let Bulan = parseInt(Hari / 30);
    let sisaBulan = sisa % 30;

    console.log(`${Tahun} Tahun, ${Bulan} Bulan, ${sisaBulan} Hari`);
    
    jawab = prompt(`diulang (y/n)?`);
    diulang = jawab == "y" || jawab == "Y" ? true : false;
} while (diulang = true);