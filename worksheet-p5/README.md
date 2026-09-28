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

## Catatan penggunaan AI

p3 - Tidak memakai AI.
p4 - Menentukan warna yang cocok atau sesuai dan membantu mengerjakan worksheet 4
kemudian saya sesuaikan lagi.
p5 - Membantu dan memandu dalam mengerjakan lembar kerja, serta sedikit perbaikan dari worksheet sebelumnya.
