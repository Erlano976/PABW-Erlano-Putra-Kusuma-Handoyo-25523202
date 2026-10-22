import { ambilAlbum } from "./api.js";
import { isiAlbum, pulihkan, muat } from "./state.js";
import { tampilkanGalat, aturMemuat } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  pulihkan(muat());
  pasangPendengar();  
  aturMemuat(true);
  try {
    isiAlbum(await ambilAlbum()); 
  } catch (galat) {
    tampilkanGalat("Data album gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();