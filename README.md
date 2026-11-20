# Latihan Ulangan Kelas 1 SD (v0.45)

Webapp satu file untuk latihan ulangan Bahasa Indonesia, Matematika, dan Pendidikan Pancasila. Dikerjakan anak bersama orang tua.

## Cara pakai
Ada dua cara:
1. **Buka langsung (disarankan untuk HP):** buka `latihan-ulangan-satu-file.html`, satu berkas yang sudah memuat soal dan font Baloo 2, jadi tidak butuh berkas lain dan tidak butuh internet. Membuka `index.html` langsung hanya cocok di laptop, karena browser HP sering tidak bisa membaca `soal.js` dan folder `fonts` yang ada di sampingnya, sehingga soal atau font tidak muncul. Cara ini tidak bisa dipasang sebagai aplikasi.
2. **Pasang sebagai aplikasi (PWA):** unggah SEMUA isi zip ini ke hosting HTTPS (misalnya Netlify Drop atau GitHub Pages), lalu buka alamatnya sekali saat online. Android Chrome: menu titik tiga, "Pasang aplikasi". iPhone Safari: Bagikan, "Tambah ke Layar Utama". Setelah itu aplikasi jalan offline.

Data tersimpan di browser perangkat. Untuk memindahkan data ke perangkat lain, pakai "Simpan cadangan" dan "Pulihkan cadangan" di Layar pendamping.

## Daftar uji coba (1 anak)
- Anak bisa memilih pelajaran dan bab tanpa dibantu?
- Tombol dan teks cukup besar, suara bacaan jelas?
- Pilihan a sampai d mudah dibaca dan dipahami anak?
- Soal sesuai materi yang sudah diajarkan guru? Ketuk 🚩 Tandai soal di layar soal, lalu lihat daftarnya di Layar pendamping.
- Apakah anak mau mengulang? Catat bagian yang membosankan atau sulit.

## Pemeriksaan dan uji otomatis (untuk pengembang)
- `node periksa-soal.js`: memeriksa seluruh bank soal di soal.js (4 opsi, tidak ada opsi kembar atau kosong, nomor bab sah, catatan pendamping terisi, tidak ada soal kembar). Jalankan setiap selesai menambah atau mengubah soal. Keluar dengan kode 1 jika ada masalah
- `python3 uji/uji-alur.py [berkas.html]`: uji alur utama di browser (tambah anak, mulai latihan, lewati, jawab, hasil, riwayat, soal sulit diprioritaskan, soal hitung benda, tandai soal, soal sendiri, Mode Ulangan). Perlu `pip install playwright` dan `playwright install chromium`. Alur tombol Lanjut belum diuji lewat klik, hanya lewat fungsi
- Kedua berkas ini tidak dibutuhkan untuk memakai aplikasi dan tidak perlu diunggah ke hosting

## Menambah soal
Soal Penjumlahan dan Pengurangan juga dibuat otomatis oleh fungsi `gen(bab, jumlah)` di index.html; ubah batas angkanya di fungsi itu.

Soal ada di berkas `soal.js` (objek `D`) dan semuanya pilihan ganda dengan 4 opsi (a sampai d). Soal dasar ada di `D.<mapel>.q`: `[gambar, pertanyaan, [benar, pengecoh, pengecoh], catatan]`; pengecoh ke-4 ada di `EX`. Soal tambahan ada di `D.<mapel>.x` memakai fungsi `P(bab, gambar, pertanyaan, [benar, pengecoh1, pengecoh2, pengecoh3], catatan)`. Jawaban benar selalu ditulis pertama; urutan opsi diacak otomatis saat soal tampil. Nomor bab mulai dari 0, nama bab ada di `D.<mapel>.bab`.

## Roadmap
- [x] Fase 1: MVP, skor bintang, suara pembaca soal, mode pendamping
- [x] Fase 2: bank soal per bab dan 4 tipe soal baru
- [x] Fase 3: layar pendamping dengan PIN opsional (atur jumlah soal, batas waktu, suara; kunci jawaban; ringkasan soal yang perlu didampingi)
- [x] Fase 4: profil anak, riwayat nilai, lencana, grafik, latihan ulang soal sulit, cetak PDF
- [x] Fase 5: PWA (bisa dipasang dan offline), cadangan data
- [x] Fase 6-27: lihat ROADMAP.md
- [ ] Uji coba dengan 1 anak, yaitu anak pengguna sendiri (dilakukan pengguna)

## Layar pendamping
Dari menu utama, ketuk "Layar pendamping" untuk mengatur jumlah soal (5/10/15/20/semua), batas waktu (tanpa/5/10 menit), kecepatan suara, dan baca soal otomatis. Di layar yang sama ada daftar soal yang paling sering salah dan kunci jawaban semua soal. Pengaturan tersimpan di browser.

## Teman belajar (v0.39)
Karakter anak SD Indonesia berseragam merah putih, digambar dengan SVG di dalam `index.html` (tanpa berkas gambar, jalan offline, ikut mode gelap dan terang).
- Tokoh (`KT`): Budi, Sari (kuncir dua), Aisyah (berjilbab), Rangga (berkacamata)
- Gaya/pose (`KP`): melambai, melompat gembira, jempol, angkat tangan, bersemangat, berpikir, membaca buku, hormat, memegang bintang
- Tampil di: menu (ketuk karakter untuk ganti gaya), layar pilih nama, umpan balik setelah menjawab (benar: gembira/jempol/angkat tangan/bintang, salah: bersemangat), dan hasil latihan (sesuai nilai)
- Pengaturan: Layar pendamping, **Teman belajar** (Acak, salah satu tokoh, atau Tanpa)
- Menambah gaya: tambahkan satu baris di `KP` (posisi siku dan tangan, wajah, benda) lalu nama gaya di `PO`; menambah tokoh: satu baris di `KT`
- Fungsi: `kar(tokoh, gaya, lebar, potong)` mengembalikan SVG; `potong` = hanya tubuh bagian atas

## Mode Ulangan (v0.37, per pelajaran sejak v0.38)
Di menu utama, ketuk **📝 Mode Ulangan**, lalu pilih **Matematika**, **Bahasa Indonesia**, **Pendidikan Pancasila**, atau **Campuran** (ketiganya, dibagi rata). Tiap kartu menampilkan nilai terbaik ulangan pelajaran itu. Isinya 10 soal acak dari seluruh bab pelajaran yang dipilih (Matematika termasuk soal otomatis). Cara kerjanya seperti ulangan sungguhan:
- Setelah memilih jawaban, pilihan hanya tersorot (tidak ada tanda benar/salah, tidak ada efek suara benar/salah). Pilihan boleh diganti sebelum mengetuk **Lanjut**.
- Titik progres hanya menandai soal yang sudah dijawab, tanpa warna benar/salah. **Lewati dulu** tetap ada.
- Nilai dan daftar soal yang salah (dengan jawaban benar dan catatan) baru tampil di akhir, tanpa perlu mengaktifkan catatan pendamping.
- Jumlah soal selalu 10 (tidak mengikuti pengaturan jumlah soal). Batas waktu mengikuti pengaturan; bila waktu habis, jawaban yang sudah dipilih tetap dihitung.
- Soal yang ditandai 🚩 "Tidak sesuai materi" tidak ikut Mode Ulangan.
- Di layar hasil ada **Ulangi ulangan** (pelajaran yang sama) dan **Pilih pelajaran lain**.
- Jawaban salah tetap masuk catatan soal sulit. Nilai tersimpan di riwayat (jenis `uji`, dengan bidang `m` berisi pelajaran; riwayat v0.37 tanpa `m` dianggap Campuran) dan tampil di Progres (bagian Mode Ulangan, rata-rata per pelajaran) dan Ringkasan 7 hari. Ada lencana baru **Ikut Mode Ulangan**. Mode Ulangan tidak dihitung sebagai pelajaran untuk lencana "Coba 3 pelajaran".

## Tandai soal bermasalah (v0.36)
Di layar soal ada tombol kecil **🚩 Tandai soal** (tidak ada pada soal otomatis: penjumlahan, pengurangan, dan hitung benda). Ketuk, lalu pilih **Tidak sesuai materi** atau **Terlalu sulit**. Pilih lagi untuk mengganti alasan, atau **Hapus tanda** untuk membatalkan. Daftar soal ditandai ada di Layar pendamping (bagian "Soal ditandai"): tiap soal punya tombol Hapus tanda, dan tombol **Bagikan daftar** mengirim atau menyalin daftar sebagai teks (mis. untuk dikirim ke pengembang). Soal yang ditandai tetap muncul di latihan; tanda hanya catatan.

## Soal sendiri (v0.36)
Di Layar pendamping, ketuk **Kelola soal sendiri** untuk menulis soal sesuai buku guru tanpa membuka kode:
- Pilih pelajaran dan bab, tulis pertanyaan, jawaban benar, dan 3 pengecoh (keempatnya harus berbeda). Gambar emoji dan catatan pendamping boleh kosong; bila kosong, catatan otomatis berbunyi "Jawaban yang benar adalah ...".
- **Simpan dan tambah lagi** memudahkan memasukkan banyak soal berurutan dengan pelajaran dan bab yang sama.
- Soal sendiri bisa diubah atau dihapus (hapus perlu ketukan kedua). Urutan pilihan diacak otomatis saat tampil, seperti soal bawaan.
- Soal sendiri ikut muncul di latihan, soal campuran, kunci jawaban, dan catatan soal sulit. Teks ditampilkan apa adanya (tanda < > & aman).
- Disimpan di browser (`ulangan_db`, kunci `sd`) dan ikut **Simpan cadangan**. **Pulihkan cadangan** menggabungkan soal sendiri dan tanda: soal dengan ID sama yang lebih baru menimpa, soal yang sudah dihapus di perangkat ini bisa muncul lagi bila ada di cadangan.
- Soal sendiri tidak diperiksa oleh `periksa-soal.js` (itu hanya untuk soal.js); formulir sudah memeriksa pertanyaan terisi, 4 pilihan terisi dan berbeda, serta soal kembar.
- Soal bawaan di soal.js tidak bisa diubah dari aplikasi; bila ada soal bawaan yang tidak cocok, tandai dengan 🚩 lalu tulis soal pengganti sendiri.

## PIN Layar pendamping
Di Layar pendamping, bagian "PIN pendamping" untuk memasang PIN 4 angka. Jika aktif, layar itu (kunci jawaban, pengaturan, dan tombol catatan pendamping) tidak bisa dibuka tanpa PIN. PIN ini hanya pengaman sederhana untuk anak, bukan keamanan data. Jika lupa PIN, satu-satunya cara adalah menghapus data situs di pengaturan browser (nilai ikut terhapus), jadi simpan cadangan data dulu.

## Dokumen
- `ROADMAP.md`: rencana pengembangan
- `SUMMARY.md`: ringkasan proyek, bank soal, fitur, dan struktur berkas

## Versi dan perubahan terakhir
Ketuk tombol **?** di menu utama (sebelah "Pendamping") atau di layar pilih nama anak untuk melihat versi aplikasi dan daftar perubahan terakhir. Daftar ini ada di variabel `CHG` pada index.html; tambahkan entri baru di bagian paling atas setiap rilis dan ubah `VER`.

## Changelog

### v0.45
- **Cadangan otomatis ke berkas** lewat `cadOto()`: pengaturan di Layar pendamping (`DB.cfg.cao`: 0 mati, 5 atau 10 latihan); setiap layar hasil menambah hitungan (`DB.cfg.cac`), dan saat tercapai berkas `cadangan-latihan-ulangan-TANGGAL.json` diunduh otomatis. Bergantung pada browser: bila unduhan otomatis diblokir, muncul pesan dan cadangan manual tetap bisa dipakai
- `sw.js`: cache `ulangan-v0.45`

### v0.44
- **Perkembangan per bab** di Layar pendamping lewat `grafikBab()`: batang mini nilai 8 latihan terakhir tiap bab yang sudah dicoba, rata-rata, jumlah latihan, dan tanda ▲ ▼ = (3 nilai terakhir dibanding 3 sebelumnya, perlu minimal 4 latihan)
- `sw.js`: cache `ulangan-v0.44`

### v0.43
- **Pengecoh dari kesalahan umum anak** (soal otomatis Penjumlahan dan Pengurangan) lewat `pengecoh()`: operasi tertukar, memilih salah satu angka soal, selisih satu, selisih sepuluh, angka puluhan-satuan tertukar. Tiap pengecoh diberi jenis (`q.h`)
- Jenis kesalahan dicatat per anak (`p.kk`, ikut cadangan) dan tampil di Layar pendamping sebagai **Pola kesalahan hitung**; dengan Catatan pendamping aktif, jawaban salah diberi petunjuk jenis kesalahannya
- `sw.js`: cache `ulangan-v0.43`

### v0.42
- **Soal otomatis Bahasa Indonesia** lewat `genKata()` (daftar `KATA`: gambar dan suku kata): huruf awal kata bergambar, melengkapi suku kata yang hilang (bab Huruf dan suku kata), dan memilih kata yang cocok dengan gambar (bab Mengenal kata); ikut di Campuran Bahasa Indonesia dan Mode Ulangan; tidak masuk kunci jawaban dan catatan soal sulit. Menambah kata: satu baris di `KATA`
- `sw.js`: cache `ulangan-v0.42`

### v0.41
- **Soal otomatis Bilangan dan bentuk** lewat `genBentuk()`: bilangan sebelum/sesudah (1-10), bilangan paling besar/kecil (1-20), dan mengenal bentuk bergambar (lingkaran, persegi, segitiga); ikut di bab Bilangan dan bentuk, Campuran Matematika, dan Mode Ulangan; tidak masuk kunci jawaban dan catatan soal sulit
- `sw.js`: cache `ulangan-v0.41`

### v0.40
- **Karakter di setiap soal**: `qkTk()` menampilkan teman belajar (gaya berganti per soal) di atas gambar soal, juga di Mode Ulangan; mengikuti pilihan Teman belajar
- `sw.js`: cache `ulangan-v0.40`

### v0.39
- **Teman belajar**: 4 karakter anak SD Indonesia dengan 9 gaya (lihat bagian Teman belajar); tampil di menu, layar pilih nama, umpan balik jawaban, dan hasil; pilihan di Layar pendamping (`DB.cfg.tk`, -1 acak, 0-3 tokoh, 9 tanpa)
- `sw.js`: cache `ulangan-v0.39`. Bank soal tidak berubah (148 soal)

### v0.38
- **Mode Ulangan per mata pelajaran**: ketuk Mode Ulangan di menu, lalu pilih Matematika, Bahasa Indonesia, Pendidikan Pancasila, atau Campuran. Layar pilihan baru `pilihUj()` dengan nilai terbaik per kartu; `mulaiUj(m)` menerima kode pelajaran (kosong = campuran)
- Layar hasil: nama pelajaran di judul dan warna pelajaran, **Ulangi ulangan** tetap di pelajaran yang sama, tombol baru **Pilih pelajaran lain**
- Riwayat ulangan menyimpan bidang `m` (pelajaran); Progres menampilkan rata-rata ulangan per pelajaran
- `sw.js`: cache `ulangan-v0.38`. Bank soal bawaan tidak berubah (148 soal)
- `uji/uji-alur.py`: uji baru untuk pilihan pelajaran, 10 soal berbeda dari tiap pelajaran, hasil dan riwayat per pelajaran, ulangi, nilai terbaik di kartu, Progres per pelajaran. Semua uji lolos pada index.html dan versi satu file

### v0.37
- **Mode Ulangan** di menu: 10 soal campuran dari semua pelajaran tanpa umpan balik benar/salah per soal; pilihan tersorot dan bisa diganti sebelum Lanjut; nilai dan soal yang salah tampil di akhir. Fungsi baru `mulaiUj()` dan `ujCatat()`; riwayat memakai jenis `uji` (tidak dihitung sebagai pelajaran di lencana)
- Soal yang ditandai "tidak sesuai materi" tidak ikut Mode Ulangan
- Nilai Mode Ulangan tampil di Progres dan Ringkasan 7 hari (termasuk teks bagikan); lencana baru "Ikut Mode Ulangan" (total 6 lencana)
- Waktu habis di Mode Ulangan: jawaban yang sudah dipilih tetap dihitung
- `sw.js`: cache `ulangan-v0.37`. Bank soal bawaan tidak berubah (148 soal)
- `uji/uji-alur.py`: tambah uji Mode Ulangan (10 soal, tiga pelajaran, tanpa tanda benar/salah, ganti pilihan, nilai akhir, riwayat, lencana, waktu habis, soal bertanda tidak ikut). Semua uji lolos pada index.html dan versi satu file

### v0.36
- Tombol 🚩 **Tandai soal** di layar soal: alasan "Tidak sesuai materi" atau "Terlalu sulit". Daftar soal ditandai ada di Layar pendamping, bisa dihapus tandanya satu per satu dan dibagikan sebagai teks. Soal otomatis tidak bisa ditandai. Data di `DB.fl` (ikut cadangan)
- **Soal sendiri** di Layar pendamping: tambah, ubah, hapus soal pilihan ganda 4 opsi (pelajaran, bab, pertanyaan, jawaban benar, 3 pengecoh, emoji dan catatan opsional), termasuk "Simpan dan tambah lagi". Data di `DB.sd` (ikut cadangan); ikut tampil di latihan, kunci jawaban, dan catatan soal sulit (ID berawalan `sd:`)
- Pulihkan cadangan kini juga menggabungkan soal sendiri dan tanda (fungsi `mergeExtra`), dengan pemeriksaan bentuk data agar cadangan rusak dilewati
- `sw.js`: cache `ulangan-v0.36`. Bank soal bawaan (soal.js) tidak berubah (148 soal)
- `uji/uji-alur.py`: tambah uji tandai soal, soal sendiri (validasi, teks aman, ubah, hapus, gabung cadangan). Semua uji lolos pada index.html dan versi satu file

### v0.35
- Versi satu file: `latihan-ulangan-satu-file.html` berisi index.html, soal.js, dan keempat font (tertanam base64), sekitar 260 KB. Dibuat oleh `node buat-satu-file.js`; ulangi perintah itu setiap selesai mengubah index.html, soal.js, atau font. Sudah diuji sendirian di folder kosong tanpa berkas lain: font termuat dan semua uji alur lolos. Tidak memakai service worker, jadi tidak bisa dipasang sebagai PWA
- Bank soal dipindah dari index.html ke `soal.js` (objek `D`, fungsi `P` dan `B`, pengecoh ke-4 `EX`); isinya identik dengan v0.34 (148 soal, diperiksa otomatis). index.html memuatnya lewat `<script src="soal.js">` sebelum kode aplikasi
- `soal.js` masuk daftar cache offline di `sw.js` (ulangan-v0.35). Saat mengunggah ke hosting, `soal.js` harus ikut diunggah bersama index.html
- `periksa-soal.js` kini membaca `soal.js`

### v0.34
- Font Baloo 2 disertakan di folder `fonts` (Regular 400, Medium 500, Bold 700, ExtraBold 800; subset huruf Latin, format WOFF, sekitar 140 KB total) dengan lisensi OFL (`fonts/OFL.txt`)
- `@font-face` "Baloo 2 Lokal" kini memakai empat berkas `baloo2-<tebal>.woff`; tautan Google Fonts dihapus, jadi aplikasi tidak lagi meminta apa pun ke internet saat dibuka
- Keempat berkas font masuk daftar cache offline di `sw.js` (ulangan-v0.34), sehingga tersimpan sejak pembukaan pertama
- `unduh-font.sh` dan `fonts/PETUNJUK.txt` dihapus karena tidak dibutuhkan lagi; diganti `fonts/CATATAN.txt`
- `uji/uji-alur.py` ditambah dua pemeriksaan: font terpasang dan tidak ada permintaan ke internet

### Perkakas pengembang (tanpa perubahan aplikasi, Fase 28)
- Ditambah `periksa-soal.js` dan `uji/uji-alur.py` (lihat bagian Pemeriksaan dan uji otomatis). Pemeriksa menemukan 0 masalah pada 148 soal; kunci soal kembar memperhitungkan gambar, sebab soal tanda baca yang sama dengan kalimat berbeda sah

### v0.33
- Soal baru di Matematika, bab Bilangan dan bentuk: menghitung benda bergambar (1 sampai 10 benda, 10 jenis gambar). Dibuat otomatis oleh `genHitung(jumlah)`, 8 soal per latihan bab ini (4 di Campuran); tidak masuk kunci jawaban dan catatan soal sulit. Daftar gambar ada di `BENDA`
- Pengulangan berjarak ringan: di latihan biasa (per bab maupun Campuran), sekitar 30 persen soal diambil dari soal yang sering salah (fungsi `prioritas`), sisanya acak seperti biasa. Soal yang sudah dijawab benar berulang kali turun dari daftar itu
- Gambar hitung punya label khusus untuk pembaca layar (`al`), mis. "Gambar soal: 5 apel"
- Versi cache offline dinaikkan ke ulangan-v0.33
### v0.32
- Dukungan font di dalam aplikasi: `@font-face` "Baloo 2 Lokal" membaca `fonts/baloo2.woff2` atau `fonts/baloo2.ttf`; berkas font disertakan mulai v0.34
- Tanpa berkas font, tampilan sama seperti sebelumnya (font Google saat online, font sistem saat offline); font dari folder tersimpan otomatis di cache offline setelah dibuka sekali saat online
- Versi cache offline dinaikkan ke ulangan-v0.32

### v0.31
- Pilihan Ukuran huruf (Normal, Besar 115%, Sangat besar 130%) di Layar pendamping; berlaku untuk semua layar aplikasi
- Kontras warna: tombol berwarna di mode gelap memakai teks gelap (sebelumnya putih di warna pastel, sulit dibaca); teks umpan balik benar/salah di mode terang dibuat lebih gelap (kontras di atas 4,5:1)
- Label pembaca layar: gambar soal, pilihan jawaban ("Pilihan a: ..."), bilah kemajuan, dan tombol pengaturan (aria-pressed)
- Versi cache offline dinaikkan ke ulangan-v0.31

### v0.30
- ID soal kini dibuat dari isi soal (gambar + pertanyaan + jawaban benar), bukan dari urutan; catatan soal sulit tidak rusak lagi saat soal ditambah, dihapus, atau diurutkan ulang
- Catatan soal sulit lama dan berkas cadangan lama diubah otomatis ke ID baru sekali saja
- Bila teks pertanyaan, gambar, atau jawaban benar suatu soal diubah, soal itu dianggap soal baru (catatan salahnya mulai dari nol); mengubah pengecoh atau catatan pendamping tidak memengaruhi
- Versi cache offline dinaikkan ke ulangan-v0.30

### v0.29
- Pilihan jumlah soal di Layar pendamping: 5, 10, 15, 20, atau semua (sebelumnya 5, 10, semua)
- Versi cache offline dinaikkan ke ulangan-v0.29

### v0.28
- Perbaikan baca soal otomatis: bila suara sebelumnya masih berjalan, dihentikan dulu lalu soal baru dibacakan setelah jeda 150 ms (Chrome sering membuang suara jika dihentikan dan dimulai pada saat yang sama); suara bahasa Indonesia dipilih langsung bila ada
- Versi cache offline dinaikkan ke ulangan-v0.28

### v0.27
- Ringkasan 7 hari di Layar pendamping: jumlah latihan, hari aktif, rata-rata nilai (dibanding minggu lalu), rata-rata per pelajaran dengan tanda naik/turun, dan satu bab yang paling perlu diulang
- Tombol Bagikan ringkasan: membuka menu bagikan perangkat, atau menyalin teks bila tidak tersedia
- Versi cache offline dinaikkan ke ulangan-v0.27

### v0.26
- Efek suara pendek (nada buatan, tanpa berkas suara): benar, salah (lembut), hasil bagus (nilai 5 ke atas), dan stiker baru
- Pengaturan Efek suara Hidup/Mati di Layar pendamping (awal: hidup); di iPhone suara baru berbunyi setelah anak mengetuk layar, dan tombol silent perangkat bisa membisukannya
- Versi cache offline dinaikkan ke ulangan-v0.26

### v0.25
- Target latihan per hari (Mati/1/2/3, awal 2) di Layar pendamping; menu menampilkan kemajuan hari ini dan jumlah hari berturut-turut
- Stiker baru (maksimal satu per hari) saat target tercapai; koleksi tampil di Progres dan stiker baru muncul di layar hasil
- Riwayat nilai disimpan sampai 120 latihan per anak (sebelumnya 60)
- Versi cache offline dinaikkan ke ulangan-v0.25

### v0.24
- Bab baru Bahasa Indonesia: Membaca kalimat, 12 soal dengan bacaan 2-3 kalimat lalu pertanyaan; suara pembaca membacakan bacaan lebih dulu
- Soal bacaan dibuat dengan `B(bab, bacaan, pertanyaan, [benar, pengecoh1, pengecoh2, pengecoh3], catatan)` di `D.ind.x`
- Versi cache offline dinaikkan ke ulangan-v0.24

### v0.23
- Soal Penjumlahan dan Pengurangan ditambah 10 soal otomatis tiap latihan (angka acak sampai 20, pengecoh dekat jawaban); di Campuran Matematika ditambah 5 + 5
- Soal otomatis tidak masuk kunci jawaban, catatan soal sulit, dan latihan ulang (soalnya berubah tiap kali)
- Versi cache offline dinaikkan ke ulangan-v0.23

### v0.22
- Peringatan jika data gagal disimpan; pengingat cadangan jika lebih dari 2 minggu (dan minimal 10 latihan); penyimpanan dimintakan permanen
- Pemberitahuan "Versi baru tersedia" dengan tombol Muat ulang
- Pesan jelas jika perangkat tidak punya suara bahasa Indonesia
- Versi cache offline dinaikkan ke ulangan-v0.22

### v0.21
- Tombol ? dipindah ke pojok kanan atas layar (menu dan layar pilih anak)
- Versi cache offline dinaikkan ke ulangan-v0.21

### v0.20
- Layar isi nama anak: kolom nama dan tombol Tambah lebih besar dan jelas di tablet; tombol ? di tengah bawah
- Versi cache offline dinaikkan ke ulangan-v0.20

### v0.19
- Halaman home tablet: tombol latihan ulang dan progres selebar kartu dan berdampingan; tombol bawah dirapikan
- Versi cache offline dinaikkan ke ulangan-v0.19

### v0.18
- Tampilan home dan pilih bab di tablet dirapikan: teks tidak keluar dari kartu, kartu sama tinggi
- Versi cache offline dinaikkan ke ulangan-v0.18

### v0.17
- Layar soal di tablet landscape muat tanpa teks terpotong; ukuran menyesuaikan tinggi layar
- Versi cache offline dinaikkan ke ulangan-v0.17

### v0.16
- Tombol ? di menu utama dan layar pilih nama anak: jendela berisi versi aplikasi, perubahan terakhir, dan perubahan sebelumnya (dapat dilipat)
- Jendela ditutup lewat tombol Tutup, ketuk di luar jendela, atau Esc; pintasan jawaban a-d tidak aktif selama jendela terbuka
- Versi cache offline dinaikkan ke ulangan-v0.16
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
