// Cek koneksi file
console.log("=== FILE SCRIPT.JS BERHASIL TERHUBUNG ===");

// 1. Array of Objects (5 Data)
const daftarPemain = [
  { nama: "Kylian Mbappé", posisi: "Forward", gol: 28, assist: 10 },
  { nama: "Vinícius Júnior", posisi: "Winger", gol: 21, assist: 12 },
  { nama: "Jude Bellingham", posisi: "Midfielder", gol: 19, assist: 8 },
  { nama: "Rodrygo", posisi: "Winger", gol: 15, assist: 9 },
  { nama: "Luka Modrić", posisi: "Midfielder", gol: 4, assist: 7 }
];

// 2. Perulangan & Menampilkan Data ke Console
console.log("\nDaftar Pemain:");
daftarPemain.forEach((pemain, index) => {
  console.log(`${index + 1}. ${pemain.nama} (${pemain.posisi}) - ${pemain.gol} Gol, ${pemain.assist} Assist`);
});

// 3. Function Menghitung Total Gol
function hitungTotalGol(data) {
  let total = 0;
  for (const item of data) {
    if (item.gol > 0) {
      total += item.gol;
    }
  }
  return total;
}

// 4. Function Filter Top Scorer (Gol > 15)
function filterTopScorer(data) {
  return data.filter(item => item.gol > 15);
}

// Menampilkan Hasil Pengolahan
console.log("\nTotal Gol Seluruh Pemain:", hitungTotalGol(daftarPemain));
console.log("Pemain Top Scorer (Gol > 15):", filterTopScorer(daftarPemain));