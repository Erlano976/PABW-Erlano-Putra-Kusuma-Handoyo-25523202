<script setup>
import { ref } from 'vue'

const judul = ref('')
const band = ref('')
const tahun = ref('')
const galatJudul = ref('')
const galatBand = ref('')
const galatTahun = ref('')
const nonaktif = ref(false)

function periksa() {
  galatJudul.value = judul.value.trim() === '' ? 'Judul album wajib diisi.' : ''
  galatBand.value = band.value.trim() === '' ? 'Nama penyanyi/band wajib diisi.' : ''
  const t = Number(tahun.value)
  galatTahun.value = (String(tahun.value).trim() === '' || t < 1900 || t > 2026)
    ? 'Isi tahun antara 1900 dan 2026.' : ''
  const sah = !galatJudul.value && !galatBand.value && !galatTahun.value
  nonaktif.value = !sah
  return sah
}

function kirim() {
  if (!periksa()) return
  judul.value = ''
  band.value = ''
  tahun.value = ''
  nonaktif.value = false
}
</script>

<template>
  <section id="tambah-album" class="sisi">
    <h2>Tambah Album Baru</h2>
    <form id="form-tambah-album" @submit.prevent="kirim">
      <div class="form-kolom">
        <label for="judul-album">Judul album</label>
        <input type="text" id="judul-album" name="judul-album" v-model="judul" @input="periksa" :aria-invalid="galatJudul ? 'true' : null" required>
        <span class="pesan-galat">{{ galatJudul }}</span>
      </div>
      <div class="form-kolom">
        <label for="penyanyi-band">Penyanyi/Band</label>
        <input type="text" id="penyanyi-band" name="penyanyi-band" v-model="band" @input="periksa" :aria-invalid="galatBand ? 'true' : null" required>
        <span class="pesan-galat">{{ galatBand }}</span>
      </div>
      <div class="form-kolom">
        <label for="tahun-rilis">Tahun rilis</label>
        <input type="number" id="tahun-rilis" name="tahun-rilis" v-model="tahun" @input="periksa" :aria-invalid="galatTahun ? 'true' : null">
        <span class="pesan-galat">{{ galatTahun }}</span>
      </div>
      <button type="submit" :disabled="nonaktif">Simpan</button>
    </form>
  </section>
</template>
