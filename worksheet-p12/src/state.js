import { reactive } from 'vue'
export const state = reactive({
  genreAktif: 'semua', daftarAlbum: [], favorit: [], memuat: true, galat: ''
})


const KUNCI = "pabw-p11";
const VERSI = 2;

export function simpan(state) {
  const isi = { versi: VERSI, genreAktif: state.genreAktif, favorit: state.favorit };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}


export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); 
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); 
    return null;
  }
}


export function pulihkan(isi) {
  if (!isi) return;
  state.genreAktif = isi.genreAktif;
  state.favorit = isi.favorit;
}


export function isiAlbum(daftar) {
  state.daftarAlbum = daftar
}

export function pilihGenre(genre) {
  state.genreAktif = genre
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) return;
  state.favorit = [...state.favorit, id];
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.genreAktif = "semua";
  state.favorit = []
}
