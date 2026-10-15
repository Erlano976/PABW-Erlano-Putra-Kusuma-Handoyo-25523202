import { ambilAlbum } from './api.js';
import { render, aturMemuat, tampilkanGalat, pasangFilter } from './dom.js';

export const profil = {
  nama: "Erlano Putra Kusuma Handoyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahAlbum: 4
};

export const daftarAlbum = [
  { judul: "Adrenaline", band: "Deftones", tahun: 1995, genre: "Nu Metal", favorit: true },
  { judul: "Living Things", band: "Linkin Park", tahun: 2012, genre: "Alternative Rock", favorit: true },
  { judul: "Significant Other", band: "Limp Bizkit", tahun: 1999, genre: "Nu Metal", favorit: true },
  { judul: "Harmonium", band: "Vanessa Carlton", tahun: 2004, genre: "Pop Rock", favorit: false }
];

export function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

async function muat() {
  aturMemuat(true); 
  try {
    const daftar = await ambilAlbum();
    pasangFilter(daftar); 
    render(daftar); 
  } catch (galat) {
    tampilkanGalat("Data album gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error(galat.message); 
  } finally {
    aturMemuat(false);
  }
}

muat();



