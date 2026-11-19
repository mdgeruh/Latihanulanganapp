# Roadmap: Latihan Ulangan Kelas 1 SD

Status per v0.32. Tanda [x] selesai, [ ] belum.

## Selesai
- [x] Fase 1 (v0.1): MVP, skor bintang, suara pembaca soal, mode pendamping
- [x] Fase 2 (v0.2-v0.3): bank soal per bab, soal campuran
- [x] Fase 3 (v0.4-v0.6): layar pendamping, batas waktu, kunci jawaban, PIN opsional
- [x] Fase 4 (v0.2, v0.6): profil anak, riwayat nilai, lencana, grafik, latihan ulang soal sulit, cetak PDF
- [x] Fase 5 (v0.5): PWA (bisa dipasang dan offline), cadangan data
- [x] Fase 6 (v0.7-v0.8): semua soal pilihan ganda 4 opsi (a sampai d), 67 soal
- [x] Fase 7 (v0.9): bank soal 96 (minimal 12 per bab), nilai per bab di halaman progres
- [x] Fase 8 (v0.10): bank soal 136 (17 per bab)
- [x] Fase 9 (v0.11): navigasi interaktif (Menu/Bab, konfirmasi keluar, titik progres, tombol di layar hasil, pintasan keyboard)
- [x] Fase 10 (v0.12): lewati soal dan kembali ke soal yang dilewati setelah soal terakhir
- [x] Fase 11 (v0.13): perbaikan tampilan (tombol lebih besar, lencana huruf a-d, tanda benar/salah, umpan balik menempel, layar lebar)
- [x] Fase 12 (v0.14): tampilan tablet (kolom lebih lebar, kartu berderet, teks dan tombol lebih besar)
- [x] Fase 13 (v0.15): tablet landscape (layar soal dua kolom, progres berderet), orientasi bebas, sentuh dan mouse lebih nyaman
- [x] Fase 14 (v0.16): tombol ? untuk melihat versi dan perubahan terakhir
- [x] Fase 15 (v0.17-v0.21): penyempurnaan tablet (layar soal landscape muat, home dan pilih bab rapi, layar isi nama, tombol ? di pojok kanan atas)
- [x] Fase 16 (v0.22): peringatan gagal simpan, pengingat cadangan, penyimpanan permanen, pemberitahuan versi baru, pesan suara id-ID tidak ada, dokumen disinkronkan
- [x] Fase 17 (v0.23): soal Matematika otomatis untuk Penjumlahan dan Pengurangan
- [x] Fase 18 (v0.24): bab Membaca kalimat (12 soal bacaan pendek)
- [x] Fase 19 (v0.25): target harian, hari berturut-turut, stiker
- [x] Fase 20 (v0.26): efek suara pendek (bisa dimatikan)
- [x] Fase 21 (v0.27): ringkasan 7 hari untuk orang tua
- [x] Fase 22 (v0.28): perbaikan baca soal otomatis
- [x] Fase 23 (v0.29): pilihan jumlah soal 5/10/15/20/semua
- [x] Fase 24 (v0.30): ID soal tetap berdasarkan isi
- [x] Fase 25 (v0.31): ukuran huruf, kontras mode gelap dan terang, label pembaca layar
- [x] Fase 26 (v0.32): dukungan font lokal (berkas font perlu dipasang pengguna)

## Berikutnya: uji coba (dilakukan pengguna)
- [ ] Uji dengan 1 anak (anak sendiri) memakai daftar uji coba di README.md
- [ ] Catat soal yang tidak sesuai materi guru, lalu ganti
- [ ] Catat bagian yang terasa membosankan atau sulit bagi anak
- [ ] Periksa apakah pilihan a sampai d dan suara bacaan mudah dipahami

## Saran improvement (v0.21, belum diputuskan)
Urutan prioritas: Tinggi dikerjakan dulu, tetapi tetap sesuaikan dengan hasil uji coba.

### Tinggi (data dan keandalan)
- [x] Peringatan jika penyimpanan gagal: `simpanDB` kini menelan error tanpa kabar, sehingga nilai bisa hilang diam-diam (mode privat, memori penuh)
- [x] Minta penyimpanan permanen (`navigator.storage.persist`) dan pengingat cadangan berkala (misalnya tiap 2 minggu atau setelah 10 latihan)
- [x] Pemberitahuan "versi baru tersedia" saat service worker diperbarui; saat ini versi baru baru tampil setelah aplikasi dibuka ulang
- [x] Rapikan dokumen: README (bagian Roadmap berhenti di Fase 5) dan SUMMARY (masih v0.16) disamakan dengan versi terbaru

### Sedang (belajar dan motivasi anak)
- [x] Soal berulang: bank 17 per bab cepat habis. Matematika dibuat otomatis (Penjumlahan dan Pengurangan selesai; Bilangan dan bentuk belum) (penjumlahan dan pengurangan angka acak dalam batas materi kelas 1) agar tidak pernah sama
- [ ] Prioritaskan soal yang sering salah di latihan biasa (pengulangan berjarak ringan), bukan hanya lewat tombol latihan ulang
- [x] Soal membaca: bacaan 2-3 kalimat lalu pertanyaan (Bahasa Indonesia, 12 soal)
- [ ] Soal bergambar menghitung benda
- [x] Penguat semangat: target harian, rangkaian hari berlatih, stiker
- [x] Efek suara pendek (ada opsi matikan)
- [x] Suara bacaan: cek ketersediaan suara id-ID (`getVoices`) dan beri pesan jelas jika perangkat tidak punya, sebab sekarang tombol baca bisa diam tanpa penjelasan

### Sedang (pendamping)
- [x] Ringkasan mingguan untuk orang tua: bab yang perlu diulang, bisa dibagikan sebagai teks
- [x] Jumlah soal sesuai keinginan (15, 20) selain 5/10/semua
- [x] Beri ID tetap pada soal agar catatan soal sulit tidak rusak saat isi soal diubah (kasus lama setelah v0.8)

### Rendah (teknis dan aksesibilitas)
- [ ] Pisahkan bank soal dari index.html (misalnya soal.js) agar mudah diedit; tambahkan skrip pemeriksa soal (4 opsi, tidak ada opsi kembar, jawaban benar ada)
- [ ] Pasang berkas font Baloo 2 di folder fonts (kode sudah siap; jalankan unduh-font.sh atau ikuti fonts/PETUNJUK.txt)
- [x] Aksesibilitas: label ARIA, opsi ukuran huruf, kontras diperiksa (mode gelap dan terang)
- [ ] Uji otomatis ringan untuk alur utama (mulai latihan, jawab, lewati, hasil)

## Usulan lama (belum diputuskan, tergantung hasil uji coba)
- [ ] Menambah bank soal lagi bila 17 soal per bab masih cepat berulang
- [ ] Menyesuaikan soal dan bab dengan buku atau materi guru yang dipakai
- [ ] Memperbarui pengecoh yang terlalu mudah ditebak berdasarkan catatan uji coba

## Catatan
- Urutan di bagian Usulan mengikuti hasil uji coba; ubah bila temuan di lapangan berbeda
