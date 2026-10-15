// js/api.js
const ALAMAT = 'data/proyek.json';
 
export async function ambilAlbum() {
  const respons = await fetch(ALAMAT);
  console.log('status', respons.status, 'ok', respons.ok);
  if (!respons.ok) {
    throw new Error('status ' + respons.status);
  }
  return respons.json();
}

// js/app.js, sementara (diganti perakit di lembar D)
import { ambilProyek } from './api.js';
ambilProyek().then((daftar) => console.log(daftar));
