<script setup>
import { state, pilihGenre, aturUlang } from '../state.js'
</script>

<template>
  <div class="filter-baris" id="filter-genre">
    <button type="button" :class="{ aktif: state.genreAktif === 'semua' }" @click="pilihGenre('semua')">Semua</button>
    <button type="button" :class="{ aktif: state.genreAktif === 'Nu Metal' }" @click="pilihGenre('Nu Metal')">Nu Metal</button>
    <button type="button" :class="{ aktif: state.genreAktif === 'Alternative Rock' }" @click="pilihGenre('Alternative Rock')">Alternative Rock</button>
    <button type="button" :class="{ aktif: state.genreAktif === 'Pop Rock' }" @click="pilihGenre('Pop Rock')">Pop Rock</button>
    <button type="button" id="atur-ulang" @click="aturUlang">Atur ulang</button>
  </div>
</template>