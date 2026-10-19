const daftarEl = document.querySelector("#daftar-album-tbody");
const filterEl = document.querySelector("#filter-genre");
const pesanKosongEl = document.querySelector("#pesan-kosong");
const formEl = document.querySelector("#form-tambah-album");
const muatEl = document.querySelector("#muat");

console.log("daftarEl", daftarEl);
console.log("filterEl", filterEl);
console.log("pesanKosongEl", pesanKosongEl);
console.log("formEl", formEl);
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

export function render(daftar) {
  daftarEl.textContent = "";
  
  if (daftar.length === 0) { 
    pesanKosongEl.textContent = "Belum ada album.";
    pesanKosongEl.hidden = false;
    return;
  }
  
  pesanKosongEl.hidden = true;
  
  const fragment = document.createDocumentFragment();
  daftar.forEach((album) => fragment.append(buatBarisAlbum(album)));
  daftarEl.append(fragment);
}

export function aturMemuat(aktif) {
  muatEl.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  daftarEl.textContent = "";
  pesanKosongEl.textContent = pesan;
  pesanKosongEl.hidden = false;
}




function tandaiTombolAktif(tombolAktif) { 
    filterEl.querySelectorAll("button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

export function pasangFilter(daftar) {
  filterEl.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const genre = tombol.dataset.genre;
    const terpilih = genre === "semua" ? daftar : daftar.filter((album) => album.genre === genre);
    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

const inputJudul = document.querySelector("#judul-album");
const inputBand = document.querySelector("#penyanyi-band");
const inputTahun = document.querySelector("#tahun-rilis");
const tombolSimpan = formEl.querySelector("button[type=submit]");

function tandaiGalat(input, pesan) {
  input.setAttribute("aria-invalid", "true");
  const pesanEl = input.closest(".form-kolom")?.querySelector(".pesan-galat");
  if (pesanEl) pesanEl.textContent = pesan;
}


function bersihkanGalat(input) {
  input.removeAttribute("aria-invalid");
}



function periksaForm() {
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

[inputJudul, inputBand, inputTahun].forEach((input) => {
  input.addEventListener("input", periksaForm);
});

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!periksaForm()) {
    const kolomBermasalah = [inputJudul, inputBand, inputTahun].find(
      (input) => input.getAttribute("aria-invalid") === "true"
    );
    kolomBermasalah?.focus();
    return;
  }

  formEl.reset();
  tombolSimpan.disabled = false;
});