# Roadmap: Latihan Ulangan Kelas 1 SD

Status per v0.45. Tanda [x] selesai, [ ] belum.

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
- [x] Fase 27 (v0.33): soal menghitung benda bergambar (otomatis) dan pengulangan berjarak ringan untuk soal yang sering salah
- [x] Fase 28 (v0.33, tanpa perubahan aplikasi): skrip pemeriksa soal `periksa-soal.js` dan uji alur utama `uji/uji-alur.py`
- [x] Fase 29 (v0.34): font Baloo 2 lokal disertakan (offline, tanpa Google Fonts)
- [x] Fase 30 (v0.35): bank soal dipisah ke soal.js
- [x] Fase 31 (v0.35, tanpa perubahan aplikasi): versi satu file (soal dan font tertanam) agar bisa dibuka langsung dari penyimpanan HP
- [x] Fase 32 (v0.36): tombol 🚩 Tandai soal (tidak sesuai materi / terlalu sulit), daftar di Layar pendamping, bisa dibagikan sebagai teks
- [x] Fase 33 (v0.36): soal sendiri di Layar pendamping (tambah, ubah, hapus), ikut latihan dan cadangan
- [x] Fase 34 (v0.37): Mode Ulangan (10 soal campuran, tanpa umpan balik per soal, nilai di akhir)
- [x] Fase 35 (v0.38): Mode Ulangan per mata pelajaran (pilih Matematika, Bahasa Indonesia, Pancasila, atau Campuran)
- [x] Fase 36 (v0.39): teman belajar, karakter anak SD Indonesia dengan 9 gaya (menu, pilih nama, umpan balik, hasil; bisa dipilih atau dimatikan)
- [x] Fase 37 (v0.40): karakter teman belajar di setiap soal
- [x] Fase 38 (v0.41): soal otomatis Bilangan dan bentuk (sebelum/sesudah, besar/kecil, mengenal bentuk)
- [x] Fase 39 (v0.42): soal otomatis Bahasa Indonesia (huruf awal, suku kata hilang, kata sesuai gambar)
- [x] Fase 40 (v0.43): pengecoh Penjumlahan dan Pengurangan dari kesalahan umum anak, Pola kesalahan hitung di Layar pendamping
- [x] Fase 41 (v0.44): grafik Perkembangan per bab di Layar pendamping
- [x] Fase 42 (v0.45): cadangan otomatis ke berkas tiap 5 atau 10 latihan (opsional)

## Berikutnya: uji coba (dilakukan pengguna)
- [ ] Uji dengan 1 anak (anak sendiri) memakai daftar uji coba di README.md
- [ ] Catat soal yang tidak sesuai materi guru, lalu ganti
- [ ] Catat bagian yang terasa membosankan atau sulit bagi anak
- [ ] Periksa apakah pilihan a sampai d dan suara bacaan mudah dipahami

## Usulan berikutnya: unggah soal dari berkas (rencana v0.46)
Pendamping bisa memasukkan banyak soal sekaligus dari berkas CSV (dari Excel atau Google Sheets), tanpa menulis satu per satu. Memakai jalur soal sendiri yang sudah ada (`DB.sd`), jadi soal langsung ikut latihan, Campuran, Mode Ulangan, kunci jawaban, dan cadangan.
- [ ] Templat CSV yang bisa diunduh dari Layar pendamping. Kolom: pelajaran, bab, gambar (boleh kosong), pertanyaan, jawaban benar, pengecoh 1-3, catatan pendamping; pelajaran dan bab ditulis dengan namanya
- [ ] Baca berkas CSV (dengan tanda kutip dan baris baru dalam sel) dan periksa tiap baris dengan aturan yang sama seperti formulir soal sendiri: pertanyaan terisi, empat pilihan terisi dan berbeda, pelajaran dan bab dikenali, batas panjang teks, soal kembar dilewati
- [ ] Layar pratinjau sebelum menyimpan: ringkasan jumlah soal valid dan ditolak beserta alasan per baris (contoh: "baris 9: bab tidak ada"); soal baru tersimpan hanya setelah tombol Simpan
- [ ] Simpan soal valid ke `DB.sd` (teks tetap di-escape saat tampil), batas sekitar 200 soal per unggahan karena penyimpanan browser terbatas
- [ ] Tetap offline dan hanya di Layar pendamping (bisa dikunci PIN); soal bawaan di `soal.js` tidak berubah, mengganti soal bawaan tetap lewat tanda 🚩 dan soal pengganti
- [ ] Tambahkan ke skrip uji (`uji/uji-alur.py`) dan README (cara mengisi templat)

## Saran improvement (v0.36, Tinggi sudah selesai)
Disusun setelah semua saran v0.21 selesai. Prioritas Tinggi mendukung uji coba dengan anak; tetap sesuaikan dengan hasil uji coba.

### Tinggi (mendukung uji coba)
- [x] Tandai soal bermasalah: tombol kecil untuk orang tua di layar soal ("tidak sesuai materi" atau "terlalu sulit"); daftarnya tampil di Layar pendamping dan bisa dibagikan sebagai teks
- [x] Tambah atau ubah soal dari Layar pendamping (v0.36: soal sendiri; soal bawaan diganti dengan menandainya lalu menulis soal pengganti): soal sendiri sesuai buku guru, tersimpan di browser dan ikut cadangan (tanpa membuka kode)

### Sedang (belajar dan motivasi)
- [x] Mode Ulangan (v0.37): 10 soal campuran tanpa umpan balik per soal, nilai di akhir
- [x] (v0.43) Pengecoh dari kesalahan umum anak (mis. Pengurangan: hasil penjumlahan atau angka tertukar) agar catatan soal sulit menunjukkan letak kesalahan
- [x] (v0.41) Soal otomatis lain untuk Bilangan dan bentuk: bilangan sebelum atau sesudah, lebih banyak atau lebih sedikit, mengenal bentuk (lingkaran, persegi, segitiga) dengan gambar
- [x] (v0.42) Soal Bahasa Indonesia otomatis: huruf awal, melengkapi suku kata yang hilang, memilih kata sesuai gambar

### Rendah
- [x] (v0.44) Grafik perkembangan per bab untuk orang tua di Layar pendamping
- [x] (v0.45) Cadangan otomatis ke berkas setiap beberapa latihan (opsional)

## Saran improvement (v0.21, semua selesai kecuali yang tercatat di bawah)
Urutan prioritas: Tinggi dikerjakan dulu, tetapi tetap sesuaikan dengan hasil uji coba.

### Tinggi (data dan keandalan)
- [x] Peringatan jika penyimpanan gagal: `simpanDB` kini menelan error tanpa kabar, sehingga nilai bisa hilang diam-diam (mode privat, memori penuh)
- [x] Minta penyimpanan permanen (`navigator.storage.persist`) dan pengingat cadangan berkala (misalnya tiap 2 minggu atau setelah 10 latihan)
- [x] Pemberitahuan "versi baru tersedia" saat service worker diperbarui; saat ini versi baru baru tampil setelah aplikasi dibuka ulang
- [x] Rapikan dokumen: README (bagian Roadmap berhenti di Fase 5) dan SUMMARY (masih v0.16) disamakan dengan versi terbaru

### Sedang (belajar dan motivasi anak)
- [x] Soal berulang: bank 17 per bab cepat habis. Matematika dibuat otomatis (Penjumlahan, Pengurangan, dan menghitung benda di Bilangan dan bentuk selesai) (penjumlahan dan pengurangan angka acak dalam batas materi kelas 1) agar tidak pernah sama
- [x] Prioritaskan soal yang sering salah di latihan biasa (pengulangan berjarak ringan), bukan hanya lewat tombol latihan ulang
- [x] Soal membaca: bacaan 2-3 kalimat lalu pertanyaan (Bahasa Indonesia, 12 soal)
- [x] Soal bergambar menghitung benda
- [x] Penguat semangat: target harian, rangkaian hari berlatih, stiker
- [x] Efek suara pendek (ada opsi matikan)
- [x] Suara bacaan: cek ketersediaan suara id-ID (`getVoices`) dan beri pesan jelas jika perangkat tidak punya, sebab sekarang tombol baca bisa diam tanpa penjelasan

### Sedang (pendamping)
- [x] Ringkasan mingguan untuk orang tua: bab yang perlu diulang, bisa dibagikan sebagai teks
- [x] Jumlah soal sesuai keinginan (15, 20) selain 5/10/semua
- [x] Beri ID tetap pada soal agar catatan soal sulit tidak rusak saat isi soal diubah (kasus lama setelah v0.8)

### Rendah (teknis dan aksesibilitas)
- [x] Pisahkan bank soal dari index.html ke soal.js dan skrip pemeriksa soal (selesai v0.35)
- [x] Pasang berkas font Baloo 2 di folder fonts (selesai v0.34)
- [x] Aksesibilitas: label ARIA, opsi ukuran huruf, kontras diperiksa (mode gelap dan terang)
- [x] Uji otomatis ringan untuk alur utama (mulai latihan, jawab, lewati, hasil)

## Usulan lama (belum diputuskan, tergantung hasil uji coba)
- [ ] Menambah bank soal lagi bila 17 soal per bab masih cepat berulang
- [ ] Menyesuaikan soal dan bab dengan buku atau materi guru yang dipakai
- [ ] Memperbarui pengecoh yang terlalu mudah ditebak berdasarkan catatan uji coba

## Catatan
- Urutan di bagian Usulan mengikuti hasil uji coba; ubah bila temuan di lapangan berbeda
