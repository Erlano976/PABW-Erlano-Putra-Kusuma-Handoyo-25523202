<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarAlbum, state.genreAktif))
</script>

<template>
  <p v-if="state.memuat">Memuat data...</p>
  <p v-else-if="state.galat">{{ state.galat }}</p>
  <p v-else-if="tampil.length === 0">Tidak ada album yang cocok dengan filter ini.</p>

  <div class="table-wrap">
    <table>
      <caption>Album musik favorit saya</caption>
      <thead>
        <tr>
          <th scope="col">Judul Album</th>
          <th scope="col">Penyanyi/Band</th>
          <th scope="col">Tahun Rilis</th>
          <th scope="col">Genre</th>
          <th scope="col">Favorit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="album in tampil" :key="album.id">
          <th scope="row">{{ album.judul }}</th>
          <td>{{ album.band }}</td>
          <td>{{ album.tahun }}</td>
          <td>{{ album.genre }}</td>
          <td>
            <button type="button" class="favorit" aria-label="Tandai sebagai favorit" @click="tambahFavorit(album.id)">
              {{ state.favorit.includes(album.id) ? '★' : '☆' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>Galeri Kartu Album</h3>
  <div class="galeri">
    <article class="kartu sorotan">
      <div class="kartu__isi">
        <h4 class="kartu__judul">Adrenaline (Featured)</h4>
        <p>Deftones · 1995</p>
        <p>Album debut legendaris Nu Metal yang sangat berpengaruh.</p>
      </div>
      <div class="kartu__kaki">
        <span class="tag">Nu Metal</span>
        <button type="button">Putar</button>
      </div>
    </article>

    <article class="kartu">
      <div class="kartu__isi">
        <h4 class="kartu__judul">Living Things</h4>
        <p>Linkin Park · 2012</p>
      </div>
      <div class="kartu__kaki">
        <span class="tag">Alt Rock</span>
        <button type="button">Putar</button>
      </div>
    </article>

    <article class="kartu">
      <div class="kartu__isi">
        <h4 class="kartu__judul">Significant Other</h4>
        <p>Limp Bizkit · 1999</p>
      </div>
      <div class="kartu__kaki">
        <span class="tag">Nu Metal</span>
        <button type="button">Putar</button>
      </div>
    </article>

    <article class="kartu">
      <div class="kartu__isi">
        <h4 class="kartu__judul">Harmonium</h4>
        <p>Vanessa Carlton · 2004</p>
      </div>
      <div class="kartu__kaki">
        <span class="tag">Pop Rock</span>
        <button type="button">Putar</button>
      </div>
    </article>
  </div>

  <figure>
    <img src="/koleksi-album.webp"
         alt="Rak berisi kumpulan album musik favorit saya yang tersusun berjajar"
         width="640" height="360" loading="lazy">
    <figcaption>Sebagian koleksi album musik favorit saya</figcaption>
  </figure>
</template>
