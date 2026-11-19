# Ringkasan Proyek: Latihan Ulangan Kelas 1 SD (v0.13)

## Tujuan
Webapp latihan ulangan untuk anak kelas 1 SD, dikerjakan bersama orang tua. Mata pelajaran: Matematika, Bahasa Indonesia, dan Pendidikan Pancasila.

## Status
- Versi aplikasi: v0.13
- Fase 1 sampai 11 selesai; uji coba dengan 1 anak (anak pengguna sendiri) belum dilakukan
- Semua soal pilihan ganda 4 opsi (a sampai d), total 136 soal

## Bank soal
| Pelajaran | Bab (jumlah soal) | Total |
|---|---|---|
| Matematika | Penjumlahan (17); Pengurangan (17); Bilangan dan bentuk (17) | 51 |
| Bahasa Indonesia | Huruf dan suku kata (17); Mengenal kata (17); Menulis kalimat (17) | 51 |
| Pendidikan Pancasila | Lambang Pancasila (17); Sikap sesuai sila (17) | 34 |

## Fitur
- Pilih pelajaran dan bab, atau "Campuran" (soal acak dari semua bab)
- Opsi jawaban diacak, jawaban benar tampil beserta hurufnya
- Suara pembaca soal (menyebut huruf opsi), bisa otomatis
- Skor bintang (nilai per 10), riwayat nilai per bab, grafik, 5 lencana, cetak PDF
- Profil lebih dari satu anak, latihan ulang soal yang sering salah
- Navigasi: tombol Menu dan Bab di layar soal dengan konfirmasi keluar, titik progres per soal, tombol Pilih bab lain di hasil, pintasan keyboard a-d
- Lewati soal: tombol Lewati dulu memindahkan soal ke antrean akhir, lalu dikerjakan setelah soal terakhir
- Layar pendamping: jumlah soal, batas waktu, kecepatan suara, catatan pendamping, kunci jawaban, daftar soal yang perlu didampingi, PIN 4 angka opsional
- Cadangan dan pemulihan data (JSON)
- PWA: bisa dipasang dan jalan offline setelah dibuka sekali lewat HTTPS

## Struktur berkas
| Berkas | Isi |
|---|---|
| index.html | Seluruh aplikasi (soal, tampilan, logika) dalam satu file |
| sw.js | Service worker, cache offline (ulangan-v0.13) |
| manifest.webmanifest | Data PWA |
| icons/ | Ikon 192, 512, dan maskable 512 |
| README.md | Cara pakai, cara menambah soal, changelog |
| ROADMAP.md | Rencana pengembangan |
| SUMMARY.md | Ringkasan ini |

## Data dan penyimpanan
- Soal ada di objek `D` pada index.html: soal dasar di `D.<mapel>.q`, soal tambahan di `D.<mapel>.x` (fungsi `P`)
- Data anak, nilai, pengaturan, dan PIN disimpan di localStorage browser (kunci `ulangan_db`), tanpa server
- Pindah perangkat lewat "Simpan cadangan" dan "Pulihkan cadangan"

## Catatan teknis
- Tanpa framework dan tanpa build; font Baloo 2 dari Google Fonts (hanya tampil saat online)
- PIN hanya pengaman sederhana, bukan keamanan data; jika lupa PIN, hapus data situs (nilai ikut hilang)
- Setelah v0.8, tally soal sulit lama untuk soal tambahan bisa tidak lagi relevan karena isi soalnya berubah
