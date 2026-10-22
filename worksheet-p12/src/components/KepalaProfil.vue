// src/components/KepalaProfil.vue
<script setup>
const props = defineProps({
  profil: { type: Object, required: true }
})
</script>

<template>
  <header>
    <div class="header-baris navbar">
      <h1>{{ props.profil.nama }}</h1>
      <p>{{ props.profil.peran }}</p>
      <nav aria-label="Navigasi utama">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#daftar-album">Daftar Album</a></li>
          <li><a href="#tambah-album">Tambah Album</a></li>
        </ul>
      </nav>

      <div>
        <input type="checkbox" id="tema" class="pengalih-tema">
        <label for="tema" class="tombol-tema"> Mode Gelap</label>
      </div>
    </div>
  </header>
</template>
