# Latihan Ulangan Kelas 1 SD (v0.15)

Webapp satu file untuk latihan ulangan Bahasa Indonesia, Matematika, dan Pendidikan Pancasila. Dikerjakan anak bersama orang tua.

## Cara pakai
Ada dua cara:
1. **Buka langsung:** buka `index.html` di browser HP/laptop. Tidak perlu internet (font rounded hanya tampil jika online). Cara ini tidak bisa dipasang sebagai aplikasi.
2. **Pasang sebagai aplikasi (PWA):** unggah SEMUA isi zip ini ke hosting HTTPS (misalnya Netlify Drop atau GitHub Pages), lalu buka alamatnya sekali saat online. Android Chrome: menu titik tiga, "Pasang aplikasi". iPhone Safari: Bagikan, "Tambah ke Layar Utama". Setelah itu aplikasi jalan offline.

Data tersimpan di browser perangkat. Untuk memindahkan data ke perangkat lain, pakai "Simpan cadangan" dan "Pulihkan cadangan" di Layar pendamping.

## Daftar uji coba (1 anak)
- Anak bisa memilih pelajaran dan bab tanpa dibantu?
- Tombol dan teks cukup besar, suara bacaan jelas?
- Pilihan a sampai d mudah dibaca dan dipahami anak?
- Soal sesuai materi yang sudah diajarkan guru? Catat yang perlu diganti.
- Apakah anak mau mengulang? Catat bagian yang membosankan atau sulit.

## Menambah soal
Soal ada di bagian `D` pada file HTML dan semuanya pilihan ganda dengan 4 opsi (a sampai d). Soal dasar ada di `D.<mapel>.q`: `[gambar, pertanyaan, [benar, pengecoh, pengecoh], catatan]`; pengecoh ke-4 ada di `EX`. Soal tambahan ada di `D.<mapel>.x` memakai fungsi `P(bab, gambar, pertanyaan, [benar, pengecoh1, pengecoh2, pengecoh3], catatan)`. Jawaban benar selalu ditulis pertama; urutan opsi diacak otomatis saat soal tampil. Nomor bab mulai dari 0, nama bab ada di `D.<mapel>.bab`.

## Roadmap
- [x] Fase 1: MVP, skor bintang, suara pembaca soal, mode pendamping
- [x] Fase 2: bank soal per bab dan 4 tipe soal baru
- [x] Fase 3: layar pendamping dengan PIN opsional (atur jumlah soal, batas waktu, suara; kunci jawaban; ringkasan soal yang perlu didampingi)
- [x] Fase 4: profil anak, riwayat nilai, lencana, grafik, latihan ulang soal sulit, cetak PDF
- [x] Fase 5: PWA (bisa dipasang dan offline), cadangan data
- [ ] Uji coba dengan 1 anak, yaitu anak pengguna sendiri (dilakukan pengguna)

## Layar pendamping
Dari menu utama, ketuk "Layar pendamping" untuk mengatur jumlah soal (5/10/semua), batas waktu (tanpa/5/10 menit), kecepatan suara, dan baca soal otomatis. Di layar yang sama ada daftar soal yang paling sering salah dan kunci jawaban semua soal. Pengaturan tersimpan di browser.

## PIN Layar pendamping
Di Layar pendamping, bagian "PIN pendamping" untuk memasang PIN 4 angka. Jika aktif, layar itu (kunci jawaban, pengaturan, dan tombol catatan pendamping) tidak bisa dibuka tanpa PIN. PIN ini hanya pengaman sederhana untuk anak, bukan keamanan data. Jika lupa PIN, satu-satunya cara adalah menghapus data situs di pengaturan browser (nilai ikut terhapus), jadi simpan cadangan data dulu.

## Dokumen
- `ROADMAP.md`: rencana pengembangan
- `SUMMARY.md`: ringkasan proyek, bank soal, fitur, dan struktur berkas

## Changelog
### v0.15
- Tablet landscape (layar 1000 px ke atas): layar soal dua kolom, soal dan gambar di kiri, pilihan jawaban dan umpan balik di kanan; kolom aplikasi 1180 px
- Tablet landscape pendek (tinggi di bawah 760 px): ukuran gambar, judul, dan opsi disesuaikan agar soal, pilihan, dan tombol Lanjut muat tanpa menggulir
- Progres: kartu pelajaran berderet (2-3 kolom), lencana 5 kolom di layar lebar
- Aplikasi terpasang boleh diputar (orientasi bebas, sebelumnya hanya potret)
- Area sentuh lebih lapang (jarak titik progres, tombol, kolom nama), efek sorot saat memakai mouse atau trackpad, tanpa kilatan ketuk dan tanpa zoom ganda
- Tepi layar aman untuk perangkat dengan takik di mode landscape
- Versi cache offline dinaikkan ke ulangan-v0.15
### v0.14
- Tampilan tablet (layar 720 px ke atas): kolom 880 px, teks dan tombol lebih besar (minimal 56 px)
- Kartu pelajaran, bab, dan nama anak tersusun berderet dengan ikon besar di atas; pilihan jawaban 2 kolom dengan huruf a-d lebih besar
- Gambar soal, bintang, grafik, dan lencana (3 kolom) diperbesar; tombol besar dibatasi lebarnya agar tidak terlalu lebar
- Versi cache offline dinaikkan ke ulangan-v0.14
### v0.13
- Perbaikan tampilan: tombol kecil (Menu, Bab, Bacakan, Lewati, pilihan pengaturan) diperbesar menjadi minimal 48 px
- Pilihan jawaban memakai lencana huruf a-d bulat; jawaban benar/salah diberi tanda ✓/✗ selain warna
- Umpan balik dan tombol Lanjut menempel di bawah layar sehingga tidak perlu menggulir
- Garis buku tulis di latar lebih lembut, sorotan fokus keyboard lebih jelas, teks tombol di mode gelap lebih terbaca
- Layar lebar (tablet/laptop): kolom lebih lebar dan pilihan jawaban 2 kolom
- Berkas sw.js yang kosong diisi ulang; versi cache offline ulangan-v0.13
### v0.12
- Tombol "⏭ Lewati dulu" di layar soal: soal yang dilewati dipindah ke antrean akhir dan muncul lagi setelah soal terakhir (diberi tanda "dilewati tadi" dan titik putus-putus kuning)
- Tombol Lewati hanya tampil sebelum menjawab dan tidak tampil di soal terakhir; pintasan keyboard S
- Soal yang dilewati tidak dihitung salah; jika waktu habis, hanya soal yang sudah dijawab yang dinilai
- Versi cache offline dinaikkan ke ulangan-v0.12
### v0.11
- Layar soal: tombol Menu dan Bab (kembali ke pilihan bab), dengan konfirmasi "Keluar dari latihan?" jika latihan sudah berjalan
- Penanda titik per soal (hijau benar, oranye salah, cincin kuning soal saat ini) untuk latihan sampai 20 soal; lebih dari itu tetap bilah
- Layar hasil: tombol baru "Pilih bab lain" dan "Menu"
- Animasi masuk antar layar (otomatis mati jika perangkat meminta gerakan dikurangi)
- Pintasan keyboard: tombol a-d atau 1-4 untuk memilih jawaban
- Versi cache offline dinaikkan ke ulangan-v0.11
### v0.10
- Bank soal bertambah dari 96 menjadi 136 soal (17 soal per bab), semua pilihan ganda 4 opsi
- Versi cache offline dinaikkan ke ulangan-v0.10
### v0.9.1
- Uji coba cukup dengan 1 anak (anak pengguna sendiri), bukan 3-5 anak; README, ROADMAP.md, dan SUMMARY.md disesuaikan (tanpa perubahan pada aplikasi)
### v0.9
- Bank soal bertambah dari 67 menjadi 96 soal (minimal 12 soal per bab), semua pilihan ganda 4 opsi
- Halaman progres menampilkan rata-rata nilai per bab (termasuk Campuran) di tiap pelajaran
- Versi cache offline dinaikkan ke ulangan-v0.9
### v0.8.1
- Menambah `ROADMAP.md` dan `SUMMARY.md` (tanpa perubahan pada aplikasi)
### v0.8
- Semua soal kini pilihan ganda a sampai d: 37 soal isian angka, susun huruf/kata, menjodohkan, dan benar/salah diubah menjadi pilihan ganda (total tetap 67 soal)
- Soal tambahan memakai fungsi `P` (menggantikan `I`, `U`, `J`, `T`); kode tampilan isian, susun, dan jodoh serta gayanya dihapus
- Beberapa soal diganti isinya agar cocok sebagai pilihan ganda; nomor soal tetap, tetapi catatan "soal sulit" lama untuk soal tambahan bisa tidak lagi relevan
- Versi cache offline dinaikkan ke ulangan-v0.8
### v0.7
- Semua soal pilihan ganda kini punya 4 opsi berlabel a sampai d (benar/salah berlabel a dan b)
- Jawaban benar ditampilkan beserta hurufnya, dan suara pembaca soal menyebut huruf opsi
- Satu soal Matematika diubah gambarnya (menambah angka 9) agar cocok dengan opsi baru
### v0.6.1
- Kotak centang "Mode pendamping orang tua" dihapus dari menu utama; pengaturannya hanya ada di Layar pendamping ("Catatan pendamping saat latihan")
- Tombol Layar pendamping di menu utama diperkecil menjadi tombol "Pendamping" di baris bawah
### v0.6
- PIN opsional untuk Layar pendamping; "Catatan pendamping saat latihan" dipindah ke dalam layar itu
- Bank soal bertambah dari 51 menjadi 67 soal
- Versi cache offline dinaikkan agar aplikasi terpasang ikut diperbarui
### v0.5
- PWA: manifest, ikon, service worker (offline setelah dibuka sekali di HTTPS)
- Simpan dan pulihkan cadangan data (JSON) di Layar pendamping
- Daftar uji coba di README
### v0.4
- Layar pendamping: pengaturan jumlah soal, batas waktu, kecepatan suara, baca otomatis
- Pengatur waktu hitung mundur saat latihan; jika habis, hasil dihitung dari soal yang sudah dijawab
- Daftar soal yang perlu didampingi dan kunci jawaban per bab
### v0.3
- Soal dikelompokkan per bab, plus pilihan "Campuran" (10 soal acak)
- Bank soal bertambah dari 30 menjadi 51 soal
- Tipe soal baru: isian angka, susun huruf/suku kata, menjodohkan, benar/salah bergambar
- Nilai dihitung per 10 supaya sesi bab dengan jumlah soal berbeda tetap sebanding
### v0.2
- Profil anak, riwayat nilai, 5 lencana, grafik, latihan ulang soal sulit, cetak PDF
### v0.1
- Prototipe pertama (Fase 1)
