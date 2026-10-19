import {
  filterEl,
  formEl,
  aturUlangEl,
  daftarEl,
  inputJudul,
  inputBand,
  inputTahun,
  tombolSimpan,
  periksaForm
} from "./dom.js";
import { pilihGenre, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  filterEl.addEventListener("click", (event) => {
    const tombol = event.target.closest("button[data-genre]");
    if (!tombol) return;
    pilihGenre(tombol.dataset.genre);
  });

  
  daftarEl.addEventListener("click", (event) => {
    const tombol = event.target.closest(".favorit");
    if (!tombol) return;
    tambahFavorit(Number(tombol.dataset.id));
  });

  aturUlangEl.addEventListener("click", aturUlang);

  
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
}