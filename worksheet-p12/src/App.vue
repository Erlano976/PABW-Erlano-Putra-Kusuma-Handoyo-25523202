<template>
  <div class="page">

    <header>
      <div class="header-baris navbar">
        <h1>Koleksi Album Favorit Saya dari yang Paling Bagus</h1>
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

    <main class="isi">
      <section id="tambah-album" class="sisi">
        <h2>Tambah Album Baru</h2>
        <form action="/simpan" method="post" id="form-tambah-album">
          <div class="form-kolom">
            <label for="judul-album">Judul album</label>
            <input type="text" id="judul-album" name="judul-album" required>
            <span class="pesan-galat">Judul album wajib diisi</span>
          </div>
          <div class="form-kolom">
            <label for="penyanyi-band">Penyanyi/Band</label>
            <input type="text" id="penyanyi-band" name="penyanyi-band" required>
            <span class="pesan-galat">Penyanyi/Band wajib diisi</span>
          </div>
          <div class="form-kolom">
            <label for="tahun-rilis">Tahun rilis</label>
            <input type="number" id="tahun-rilis" name="tahun-rilis">
            <span class="pesan-galat">Tahun rilis tidak valid</span>
          </div>
          <button type="submit">Simpan</button>
        </form>
      </section>

      <section id="daftar-album" class="utama">
        <h2>Daftar Album Favorit</h2>

        <div class="filter-baris" id="filter-genre">
          <button type="button" data-genre="semua" class="aktif">Semua</button>
          <button type="button" data-genre="Nu Metal">Nu Metal</button>
          <button type="button" data-genre="Alternative Rock">Alternative Rock</button>
          <button type="button" data-genre="Pop Rock">Pop Rock</button>
          <button type="button" id="atur-ulang">Atur ulang</button>
        </div>

        <p id="pesan-kosong" hidden>Tidak ada album yang cocok dengan filter ini.</p>

        <p id="muat" hidden>Memuat data...</p>

        <div class="table-wrap">
          <table>
            <caption>Album musik favorit saya</caption>
            <thead>
              <tr>
                <th scope="col">Judul Album</th>
                <th scope="col">Penyanyi/Band</th>
                <th scope="col">Tahun Rilis</th>
                <th scope="col">Genre</th>
              </tr>
            </thead>
            <tbody id="daftar-album-tbody">
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
      </section>

    </main>

    <footer>
      <p>Erlano Putra Kusuma Handoyo, 25523202, 2026</p>
    </footer>

  </div>
</template>