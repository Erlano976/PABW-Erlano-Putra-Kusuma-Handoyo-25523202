# PABW -- Erlano Putra Kusuma HAndoyo -- 25523202

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya
 
Topik halaman saya: koleksi Album Musik.
 
- Judul halaman: Koleksi Album Musik Saya
- Deskripsi: Koleksi aalbum musik yang sering saya dengarkan beserta genre dan tahun rilisnya
- Tautan navigasi: Home, daftar album, tambah album
- Dua bagian utama: Daftar album, tambah album
- Kolom tabel: judul album, penyanyi/band, tahun rilis, genre
- Kolom form: judul album, prnyanyi/band, tahun rilis
- Gambar: koleksi-album.webp

## Pertemuan 4 — Design token halaman profil
 
- Berkas gaya yang akan dibuat: tokens.css, base.css,
  layout.css, komponen.css, tema.css
- Warna utama: #5B21B6 (ungu), dipilih karena sesuai dengan nuansa musik rock/nu metal 
 
### Token yang saya tetapkan
 
| Token | Nilai | Untuk apa |
|---|---|---|
| --color-primary | #5B21B6 | tombol, tautan, penanda |
| --color-fg | #0F172A | warna teks utama |
| --color-bg | #F8FAFC | latar halaman |
| --color-bg | #A78BFA | outline papan input |
| --radius-md | 0.5rem | sudut tombol dan kartu |
| --space-4 | 1rem | jarak standar antar elemen |
 
Kriteria selesai saya: mengubah --color-primary di satu baris
harus mengubah warna tombol, tautan, judul, dan garis fokus.

## Pertemuan 5 — Layout Modern: Flexbox dan Grid

Penyusunan tata letak halaman menggunakan CSS Grid dan Flexbox.

- Kerangka Utama: Menggunakan Grid 3 baris (header, isi, footer) dengan tinggi minimal penuh layar
- Tata Letak Isi: Menggunakan Grid 2 kolom (sidebar 16rem untuk form dan 1fr untuk konten utama)
- Galeri Album: Menggunakan Grid adaptif (auto-fit) agar jumlah kolom menyesuaikan lebar layar secara otomatis
- Navbar & Kartu: Menggunakan Flexbox untuk menyusun isi menu dan tombol secara sejajar ke samping
- Kartu Sorotan: Menggunakan grid-column: span 2 agar posisinya mengambil 2 kolom sekaligus
- Keamanan Layar: Menambahkan min-width: 0 agar teks tidak keluar dari kotak saat dibuka di layarhp maupun laptop

## Pertemuan 6 — Reaponsif Mobile-First

## Pertemuan 8 — Membuat Halaman Profil yang Datanya Bergerak
Data sebagai variabe
- profil — object: nama, peran, daftar keahlian
- jumlahAlbum — satu nilai angka
- daftarAlbum — array of object (judul, band, tahun, genre, favorit)
- tampilkanSemua — let

Dua fungsi murni
- buatPerkenalan({ nama, peran })
- formatKeahlian(daftar)

## Pertemuan 9 — Memasang Data ke Halaman dan Menanggapi Pengguna
Elemen DOM yang diambil
- daftarEl - wadah tabel (#daftar-album-tbody)
- filterEl - wadah tombol filter (#filter-genre)
- pesanKosongEl - elemen pesan saat data kosong (#pesan-kosong)
- formEl - form tambah album (#form-tambah-album)

Fungsi manipulasi DOM & render
- buatBarisAlbum(album) - membuat elemen tr baru menggunakan createElement
- render(daftar) - mengosongkan wadah, menangani status kosong, dan merender ulang
- tandaiTombolAktif(tombol) - mengelola kelas aktif pada tombol filter

Interaktivitas & Validasi
- Event Delegation - satu pendengar klik di induk (#filter-genre) untuk menyaring album
- Validasi Form - preventDefault, pembersihan spasi (trim), aria-invalid, dan penanganan galat per kolom


## Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON
- data/album.json - data album, JSON murni (id, judul, band, tahun, genre, favorit)
- js/api.js - satu-satunya berkas yang memakai fetch; ALAMAT ditulis di satu tempat; mengekspor ambilProyek()
- js/app.js - perakit: muat() memanggil ambilProyek(), pasangFilter(), render()
- js/dom.js - seluruh sentuhan ke halaman: render(), aturMemuat(), tampilkanGalat(), pasangFilter()

Alur data & Penanganan Galat
- respons.ok diperiksa sebelum badan balasan dibaca; satu try/catch di api.js dan satu di app.js
- respons.json() mengubah teks menjadi nilai; JSON.stringify mengubah nilai menjadi teks
- Empat keadaan antarmuka: memuat, berhasil, gagal, dan kosong


## Pertemuan 11 — Membagi Satu Berkas Menjadi Lima yang Jelas Tugasnya
- js/data.js - objek profil dan fungsi murni (buatPerkenalan, formatKeahlian, saring)
- js/state.js - objek state tunggal, fungsi pengubah, serta simpan, muat, pulihkan, dan aturUlang
- js/dom.js - pemilih DOM, render(state), buatKartu(proyek, favorit), aturMemuat(), dan tampilkanGalat()
- js/events.js - pemasangan seluruh pendengar peristiwa lewat pasangPendengar()
- js/app.js - perakit utama: mengimpor modul dan menjalankan fungsi mulai()


## Pertemuan 12 — Dari Berkas Lepas ke Proyek Komponen yang Dibangun
- Versi perkakas: Node.js v24.22.0, npm 11.19.1
- worksheet-p12 - proyek Vue + Vite yang dibuat dari folder kosong dengan npm create vite
- src/main.js - mengimpor enam berkas CSS
- src/App.vue - komponen induk memuat empat komponen, menjalankan onMounted dan watch
- src/components/KepalaProfil.vue - header satu-satunya yang menerima props
- src/components/TombolFilter.vue - tombol genre dan tombol atur ulang
- src/components/DaftarProyek.vue - tabel album, tombol favorit, serta keadaan memuat, gagal, dan kosong
- src/components/FormKontak.vue - formulir tambah album dengan validasi P9
- src/state.js - state memakai reactive() tidak ada lagi render(state)
- src/api.js dan src/data.js - dipindahkan dari P10 dan P11

Alur data & Build
- onMounted memulihkan simpanan dari localStorage lalu mengambil data lewat api.js, watch menyimpan setiap state berubah
- npm run build menghasilkan dist/, npm run preview menjalankannya
- .gitignore memuat node_modules/ dan dist/, package-lock.json ikut di-commit

## Catatan penggunaan AI

p3 - Tidak memakai AI.
p4 - Menentukan warna yang cocok atau sesuai dan membantu mengerjakan worksheet 4
kemudian saya sesuaikan lagi.
p5 - Membantu dan memandu dalam mengerjakan lembar kerja, serta sedikit perbaikan dari worksheet sebelumnya.
p6 - 
p8 - Membantu dalam mengerjakan worksheet, seperti apa yang harus dicek dan bagaimana cara mengeceknya.
P9 - Membantu dalam menyusun fungsi event delegation closest "button".
P10 - Membantu memahami alur fetch dan penanganan galat.
P11 - Menyusun pengelolaan state terpusat agar antarmuka murni digambar dari objek state.
P12 - 
