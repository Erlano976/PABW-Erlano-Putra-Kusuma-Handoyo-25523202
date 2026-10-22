// js/data.js: sisa P8 yang tidak diambil dari server
export const profil = {
  nama: "Erlano Putra Kusuma Handoyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahAlbum: 4
}


export function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}


export const formatKeahlian = (daftar) => daftar.join(" · ");


export function saring(daftar, genre) {
  return genre === "semua" ? daftar : daftar.filter((album) => album.genre === genre);
}