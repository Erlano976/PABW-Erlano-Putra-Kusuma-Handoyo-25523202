import { saring } from "./data.js";

export const daftarEl = document.querySelector("#daftar-album-tbody");
export const filterEl = document.querySelector("#filter-genre");
export const formEl = document.querySelector("#form-tambah-album");
export const aturUlangEl = document.querySelector("#atur-ulang");
export const inputJudul = document.querySelector("#judul-album");
export const inputBand = document.querySelector("#penyanyi-band");
export const inputTahun = document.querySelector("#tahun-rilis");
export const tombolSimpan = formEl.querySelector("button[type=submit]");

const pesanKosongEl = document.querySelector("#pesan-kosong");
const muatEl = document.querySelector("#muat");


function buatBarisAlbum(album, favorit) {
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










  const tdFavorit = document.createElement("td");
  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.className = "favorit";
  tombol.dataset.id = album.id;
  tombol.setAttribute("aria-label", "Tandai sebagai favorit");
  tombol.textContent = favorit.includes(album.id) ? "★" : "☆";
  tdFavorit.append(tombol);

  tr.append(th, tdBand, tdTahun, tdGenre, tdFavorit);
  return tr;
}

function tandaiTombolAktif(genreAktif) {
  filterEl.querySelectorAll("button[data-genre]").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.genre === genreAktif);
  });
}

export function render(state) {
  daftarEl.textContent = "";
  
  const tampil = saring(state.daftarAlbum, state.genreAktif);

  if (tampil.length === 0) {
    pesanKosongEl.textContent = "Tidak ada album yang cocok dengan filter ini.";
    pesanKosongEl.hidden = false;
  } else {
    pesanKosongEl.hidden = true;
    const fragment = document.createDocumentFragment();
    tampil.forEach((album) => fragment.append(buatBarisAlbum(album, state.favorit)));
    daftarEl.append(fragment);
  }

  tandaiTombolAktif(state.genreAktif);
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  daftarEl.textContent = "";
  pesanKosongEl.textContent = pesan;
  pesanKosongEl.hidden = false;
}

export function tandaiGalat(input, pesan) {
  input.setAttribute("aria-invalid", "true");
  const pesanEl = input.closest(".form-kolom")?.querySelector(".pesan-galat");
  if (pesanEl) pesanEl.textContent = pesan;
}

export function bersihkanGalat(input) {
  input.removeAttribute("aria-invalid");
}

export function periksaForm() {
  let sah = true;

  if (inputJudul.value.trim() === "") {
    tandaiGalat(inputJudul, "Judul album wajib diisi.");
    sah = false;
  } else {
    bersihkanGalat(inputJudul);
  }

  if (inputBand.value.trim() === "") {
    tandaiGalat(inputBand, "Nama penyanyi/band wajib diisi.");
    sah = false;
  } else {
    bersihkanGalat(inputBand);
  }

  const tahun = Number(inputTahun.value);
  if (inputTahun.value.trim() === "" || tahun < 1900 || tahun > 2026) {
    tandaiGalat(inputTahun, "Isi tahun antara 1900 dan 2026.");
    sah = false;
  } else {
    bersihkanGalat(inputTahun);
  }

  tombolSimpan.disabled = !sah;
  return sah;
}