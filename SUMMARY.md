# Ringkasan Proyek: Latihan Ulangan Kelas 1 SD (v0.35)

## Tujuan
Webapp latihan ulangan untuk anak kelas 1 SD, dikerjakan bersama orang tua. Mata pelajaran: Matematika, Bahasa Indonesia, dan Pendidikan Pancasila.

## Status
- Versi aplikasi: v0.35
- Fase 1 sampai 31 selesai; uji coba dengan 1 anak (anak pengguna sendiri) belum dilakukan
- Semua soal pilihan ganda 4 opsi (a sampai d), total 148 soal tetap, ditambah soal otomatis

## Bank soal
| Pelajaran | Bab (jumlah soal) | Total |
|---|---|---|
| Matematika | Penjumlahan (17); Pengurangan (17); Bilangan dan bentuk (17) | 51 |
| Bahasa Indonesia | Huruf dan suku kata (17); Mengenal kata (17); Menulis kalimat (17); Membaca kalimat (12) | 63 |
| Pendidikan Pancasila | Lambang Pancasila (17); Sikap sesuai sila (17) | 34 |

## Fitur
- Soal Penjumlahan dan Pengurangan ditambah soal otomatis (angka acak sampai 20) lewat `gen()`; tidak masuk kunci jawaban dan catatan soal sulit
- Soal Bilangan dan bentuk ditambah soal menghitung benda bergambar otomatis (1 sampai 10) lewat `genHitung()`; tidak masuk kunci jawaban dan catatan soal sulit
- Pengulangan berjarak ringan: sekitar 30 persen soal latihan biasa diambil dari soal yang sering salah (`prioritas()`)
- Target latihan harian, hari berturut-turut, dan stiker koleksi (satu per hari saat target tercapai)
- Efek suara pendek (nada buatan lewat Web Audio) yang bisa dimatikan di Layar pendamping
- Ringkasan 7 hari untuk orang tua (di Layar pendamping) dengan tombol Bagikan sebagai teks
- Ukuran huruf (Normal/Besar/Sangat besar) di Layar pendamping; kontras warna dan label pembaca layar diperbaiki
- Pilih pelajaran dan bab, atau "Campuran" (soal acak dari semua bab)
- Opsi jawaban diacak, jawaban benar tampil beserta hurufnya
- Suara pembaca soal (menyebut huruf opsi), bisa otomatis
- Skor bintang (nilai per 10), riwayat nilai per bab, grafik, 5 lencana, cetak PDF
- Profil lebih dari satu anak, latihan ulang soal yang sering salah
- Navigasi: tombol Menu dan Bab di layar soal dengan konfirmasi keluar, titik progres per soal, tombol Pilih bab lain di hasil, pintasan keyboard a-d
- Lewati soal: tombol Lewati dulu memindahkan soal ke antrean akhir, lalu dikerjakan setelah soal terakhir
- Layar pendamping: jumlah soal (5/10/15/20/semua), batas waktu, kecepatan suara, catatan pendamping, kunci jawaban, daftar soal yang perlu didampingi, PIN 4 angka opsional
- Tombol ? di menu dan layar pilih anak: menampilkan versi aplikasi dan perubahan terakhir
- Cadangan dan pemulihan data (JSON)
- PWA: bisa dipasang dan jalan offline setelah dibuka sekali lewat HTTPS

## Struktur berkas
| Berkas | Isi |
|---|---|
| index.html | Aplikasi (tampilan dan logika) |
| latihan-ulangan-satu-file.html | Versi satu berkas (aplikasi, soal, font tertanam) untuk dibuka langsung di HP; hasil `node buat-satu-file.js` |
| buat-satu-file.js | Pembuat versi satu berkas, hanya untuk pengembang |
| soal.js | Bank soal (objek `D`), dimuat index.html |
| sw.js | Service worker, cache offline (ulangan-v0.35) |
| manifest.webmanifest | Data PWA |
| fonts/ | Font Baloo 2 lokal (baloo2-400/500/700/800.woff), lisensi OFL.txt, CATATAN.txt |
| icons/ | Ikon 192, 512, dan maskable 512 |
| periksa-soal.js | Pemeriksa bank soal (`node periksa-soal.js`), hanya untuk pengembang |
| uji/uji-alur.py | Uji alur utama dengan Playwright, hanya untuk pengembang |
| README.md | Cara pakai, cara menambah soal, changelog |
| ROADMAP.md | Rencana pengembangan |
| SUMMARY.md | Ringkasan ini |

## Data dan penyimpanan
- Soal ada di objek `D` pada soal.js: soal dasar di `D.<mapel>.q`, soal tambahan di `D.<mapel>.x` (fungsi `P`)
- Data anak, nilai, pengaturan, dan PIN disimpan di localStorage browser (kunci `ulangan_db`), tanpa server
- Pindah perangkat lewat "Simpan cadangan" dan "Pulihkan cadangan"

## Catatan teknis
- Tanpa framework dan tanpa build (index.html dan soal.js harus diunggah bersama); font Baloo 2 dari folder fonts (tampil juga saat offline, tanpa Google Fonts)
- PIN hanya pengaman sederhana, bukan keamanan data; jika lupa PIN, hapus data situs (nilai ikut hilang)
- ID soal dibuat dari isi soal (fungsi `semuaId`); `migrasi` mengubah catatan lama berbasis urutan ke ID baru sekali (penanda `idv` di data)
