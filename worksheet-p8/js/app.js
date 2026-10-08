const profil = {
  nama: "Erlano Putra Kusuma Handoyo",
  peran: "Mahasiswa Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
  jumlahAlbum: 4
};

const daftarAlbum = [
  { judul: "Adrenaline", band: "Deftones", tahun: 1995, genre: "Nu Metal", favorit: true },
  { judul: "Living Things", band: "Linkin Park", tahun: 2012, genre: "Alternative Rock", favorit: true },
  { judul: "Significant Other", band: "Limp Bizkit", tahun: 1999, genre: "Nu Metal", favorit: true },
  { judul: "Harmonium", penyanyi: "Vanessa Carlton", tahun: 2004, genre: "Pop Rock", favorit: false }
];

function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

const formatKeahlian = (daftar) => daftar.join(" · ");

console.log(buatPerkenalan(profil));
console.log(formatKeahlian(profil.keahlian));

console.table(profil.keahlian);
console.table(daftarAlbum);

const albumFavorit = daftarAlbum.filter((album) => album.favorit);
console.table(albumFavorit);

const albumDicari = daftarAlbum.find((album) => album.judul === "Adrenaline");
console.log(albumDicari);

const judulAlbumList = daftarAlbum.map((album) => album.judul);
console.log(judulAlbumList);