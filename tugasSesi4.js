const pendapatanHarian = 500000; 
let uangJasa;
let uangKomisi;

if (pendapatanHarian <= 200000) {
  uangJasa = 10000;
  uangKomisi = pendapatanHarian * 0.1;
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
  uangJasa = 20000;
  uangKomisi = pendapatanHarian * 0.15;
} else if (pendapatanHarian > 500000) {
  uangJasa = 30000;
  uangKomisi = pendapatanHarian * 0.2;
}

const totalPendapatan = uangJasa + uangKomisi;

console.log(`Pendapatan Harian: Rp. ${pendapatanHarian}`);
console.log(`Uang Jasa: Rp. ${uangJasa}`);
console.log(`Uang Komisi: Rp. ${uangKomisi}`);
console.log(`Total Pendapatan: Rp. ${totalPendapatan}`);