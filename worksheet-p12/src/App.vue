<script setup>
import { profil } from './data.js'
import { onMounted, watch } from 'vue'
import { state, simpan, muat, pulihkan, isiAlbum } from './state.js'
import { ambilAlbum } from './api.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat()) // pilihan terakhir dari localStorage
  try {
    isiAlbum(await ambilAlbum()) // data album dari api.js
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
  } finally {
    state.memuat = false
  }
})

watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
  <KepalaProfil :profil="profil" />


    <main class="isi">
    <FormKontak />

      <section id="daftar-album" class="utama">
        <h2>Daftar Album Favorit</h2>
        <TombolFilter />
        <DaftarProyek />

      </section>

    </main>

    <footer>
      <p>Erlano Putra Kusuma Handoyo, 25523202, 2026</p>
    </footer>

  </div>
</template>