import { daftarAlbum } from "./app.js";

const daftarEl = document.querySelector("#daftar-album-tbody");
const filterEl = document.querySelector("#filter-genre");
const pesanKosongEl = document.querySelector("#pesan-kosong");
const formEl = document.querySelector("#form-tambah-album");

console.log("daftarEl", daftarEl);
console.log("filterEl", filterEl);
console.log("pesanKosongEl", pesanKosongEl);
console.log("formEl", formEl);



function buatBarisAlbum(album) {
  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.scope = "row";
  th.textContent = album.judul;


  const tdBand = document.createElement("td");
  tdBand.textContent = album.band;

  const tdTahun = document.createElement("td");
  tdTahun.textContent = album.tahun;

  const tdGenre = document.createElement("td");
  tdGenre.textContent = album.genre;

  tr.append(th, tdBand, tdTahun, tdGenre);
  return tr;
}




function tandaiTombolAktif(tombolAktif) { 
    filterEl.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

filterEl.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");
  if (!tombol) return;
  const genre = tombol.dataset.genre;
  const terpilih = genre === "semua" ? daftarAlbum : daftarAlbum.filter((album) => album.genre === genre);
  render(terpilih);
  tandaiTombolAktif(tombol);
});