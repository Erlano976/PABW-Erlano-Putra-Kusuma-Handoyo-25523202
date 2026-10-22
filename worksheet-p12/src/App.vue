<script setup>
import { profil } from './data.js'
import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'
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