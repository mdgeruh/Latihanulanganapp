// Bank soal Latihan Ulangan Kelas 1 SD. Dimuat oleh index.html sebelum kode aplikasi.
// Setelah mengubah berkas ini, jalankan: node periksa-soal.js
// Format soal: [gambar, pertanyaan, [jawaban benar, salah, salah], catatan untuk orang tua]
var D = {
  mtk: {n:"Matematika", i:"🔢", c:"var(--mtk)", q:[
    ["🍎🍎🍎 + 🍎🍎","Berapa jumlah semua apel?",["5","4","6"],"3 ditambah 2 sama dengan 5. Ajak anak menghitung apel satu per satu dengan jari."],
    ["3 + 4","Hasil dari 3 + 4 adalah ...",["7","6","8"],"Mulai dari 4, lalu tambah 3 hitungan: 5, 6, 7."],
    ["🐟🐟🐟🐟🐟🐟","Ada 6 ikan. 2 ikan pergi. Berapa ikan yang tersisa?",["4","3","5"],"6 dikurangi 2 sama dengan 4. Coret 2 ikan, lalu hitung sisanya."],
    ["9 − 5","Hasil dari 9 − 5 adalah ...",["4","5","3"],"Hitung mundur 5 kali dari 9: 8, 7, 6, 5, 4."],
    ["12, ? , 14","Angka yang hilang adalah ...",["13","11","15"],"Urutan bilangan: 12, 13, 14."],
    ["8   15   11","Angka mana yang paling besar?",["15","8","11"],"Bandingkan puluhannya dulu: hanya 15 dan 11 yang punya puluhan, lalu 15 lebih besar dari 11."],
    ["🚲","Roda sepeda berbentuk seperti ...",["lingkaran","segitiga","persegi"],"Roda itu bundar. Bentuk bundar namanya lingkaran."],
    ["6 + 6","Hasil dari 6 + 6 adalah ...",["12","10","11"],"Dua bilangan yang sama: 6 + 6 = 12."],
    ["? , 20","Angka sebelum 20 adalah ...",["19","21","10"],"Sebelum berarti mundur satu angka."],
    ["10 − 3","Hasil dari 10 − 3 adalah ...",["7","6","8"],"Hitung mundur 3 kali dari 10: 9, 8, 7."]
  ]},
  ind: {n:"Bahasa Indonesia", i:"📖", c:"var(--ind)", q:[
    ["🐱","Gambar ini namanya ...",["kucing","kuda","kelinci"],"Ajak anak mengeja pelan: ku-cing."],
    ["BUKU","Huruf pertama kata “BUKU” adalah ...",["B","U","K"],"Huruf pertama ada paling kiri."],
    ["🏀","Kata “bola” dipisah menjadi suku kata ...",["bo-la","b-ola","bol-a"],"Tepuk tangan sesuai ketukan bunyi: bo-la, dua tepukan."],
    ["A   B   K","Mana yang huruf vokal?",["A","B","K"],"Huruf vokal ada lima: a, i, u, e, o."],
    ["🐔","Huruf awal kata “ayam” adalah ...",["A","Y","M"],"Ucapkan “a-yam”, bunyi pertamanya A."],
    ["🌞","Gambar ini namanya ...",["matahari","bulan","bintang"],"Matahari bersinar pada siang hari."],
    ["🧹","Huruf terakhir kata “sapu” adalah ...",["U","S","P"],"Eja pelan: s-a-p-u. Huruf terakhir ada paling kanan."],
    ["👩‍🍳","Kalimat yang benar adalah ...",["Ibu memasak di dapur.","Dapur di memasak ibu.","Memasak dapur ibu di."],"Kalimat dimulai dari siapa, lalu melakukan apa, lalu di mana."],
    ["Aku suka makan nasi_","Tanda baca di akhir kalimat itu adalah ...",[".","?","!"],"Kalimat biasa diakhiri tanda titik."],
    ["🐘 ↔ 🐭","Lawan kata “besar” adalah ...",["kecil","tinggi","panjang"],"Gajah besar, tikus kecil."]
  ]},
  pan: {n:"Pendidikan Pancasila", i:"🦅", c:"var(--pan)", q:[
    ["⭐","Lambang sila pertama adalah ...",["bintang","rantai","pohon beringin"],"Sila 1: Ketuhanan Yang Maha Esa."],
    ["⛓️","Lambang sila kedua adalah ...",["rantai","bintang","kepala banteng"],"Sila 2: Kemanusiaan yang adil dan beradab."],
    ["🌳","Lambang sila ketiga adalah ...",["pohon beringin","padi dan kapas","rantai"],"Sila 3: Persatuan Indonesia."],
    ["🐂","Lambang sila keempat adalah ...",["kepala banteng","bintang","pohon beringin"],"Sila 4: mengambil keputusan bersama dengan musyawarah."],
    ["🌾","Lambang sila kelima adalah ...",["padi dan kapas","rantai","bintang"],"Sila 5: Keadilan sosial bagi seluruh rakyat Indonesia."],
    ["🦅","Lambang negara kita adalah ...",["Garuda Pancasila","singa","harimau"],"Burung Garuda membawa lima lambang sila di dadanya."],
    ["🍚🙏","Sebelum makan kita sebaiknya ...",["berdoa","berlari","tidur"],"Berdoa adalah sikap yang sesuai sila pertama."],
    ["🤕","Temanmu jatuh. Kamu ...",["menolong","menertawakan","pergi"],"Menolong teman sesuai sila kedua."],
    ["🤝","Temanmu berbeda suku. Kamu ...",["berteman baik","menjauhi","mengejek"],"Persatuan: kita berbeda-beda tetapi tetap satu."],
    ["🍰🍰","Kakak dan adik punya 2 kue. Agar adil, kue ...",["dibagi sama rata","diambil kakak semua","diambil adik semua"],"Adil artinya sama-sama mendapat bagian, sesuai sila kelima."]
  ]}
};
// Bab dan soal tambahan. Semua soal pilihan ganda: P(bab, gambar, pertanyaan, [benar, pengecoh, pengecoh, pengecoh], catatan)
function P(b,v,t,o,e){return {b:b,v:v,t:t,o:o,e:e}}
function B(b,v,t,o,e){var x=P(b,v,t,o,e);x.bc=1;return x}
D.mtk.bab=["Penjumlahan","Pengurangan","Bilangan dan bentuk"];D.mtk.m=[0,0,1,1,2,2,2,0,2,1];
D.ind.bab=["Huruf dan suku kata","Mengenal kata","Menulis kalimat","Membaca kalimat"];D.ind.m=[1,0,0,0,0,1,0,2,2,1];
D.pan.bab=["Lambang Pancasila","Sikap sesuai sila"];D.pan.m=[0,0,0,0,0,0,1,1,1,1];
D.mtk.x=[
 P(0,"5 + 3","Hasil dari 5 + 3 adalah ...",["8","7","9","6"],"Mulai dari 5, tambah 3 hitungan: 6, 7, 8."),
 P(0,"🍌🍌🍌🍌 + 🍌🍌🍌","Ada berapa pisang semuanya?",["7","6","8","5"],"4 ditambah 3 sama dengan 7. Hitung pisangnya bersama."),
 P(1,"7 − 2","Hasil dari 7 − 2 adalah ...",["5","4","6","3"],"Hitung mundur 2 dari 7: 6, 5."),
 P(1,"8 − 3","Mana yang benar?",["8 − 3 = 5","8 − 3 = 4","8 − 3 = 6","8 − 3 = 3"],"8 − 3 = 5. Coret 3 benda dari 8, sisanya 5."),
 P(2,"🔺","Gambar ini berbentuk ...",["segitiga","lingkaran","persegi","bintang"],"Segitiga punya tiga sisi dan tiga sudut."),
 P(2,"5   9","Angka mana yang lebih kecil?",["5","9","6","10"],"5 lebih kecil dari 9. Bandingkan dengan menghitung dari 1."),
 P(2,"9 , ?","Angka sesudah 9 adalah ...",["10","8","11","19"],"Setelah 9 adalah 10."),
 P(0,"2 + 7","Hasil dari 2 + 7 adalah ...",["9","8","10","7"],"Mulai dari 7, tambah 2: 8, 9."),
 P(0,"4 + 4","Mana yang benar?",["4 + 4 = 8","4 + 4 = 7","4 + 4 = 6","4 + 4 = 9"],"4 ditambah 4 sama dengan 8."),
 P(1,"🍪🍪🍪🍪🍪🍪🍪🍪","Ada 8 kue, dimakan 3. Sisa berapa kue?",["5","4","6","11"],"8 dikurangi 3 sama dengan 5. Coret 3 kue, lalu hitung sisanya."),
 P(1,"10 − 6","Hasil dari 10 − 6 adalah ...",["4","3","5","16"],"Ingat 4 + 6 = 10, jadi 10 − 6 = 4."),
 P(2,"⭐⭐⭐⭐⭐","Ada berapa bintang?",["5","4","6","3"],"Hitung gambar satu per satu dengan jari."),
 P(2,"11, 12, ?","Angka berikutnya adalah ...",["13","14","10","15"],"Setelah 12 adalah 13.")
,
 P(0,"1 + 8","Hasil dari 1 + 8 adalah ...",["9","8","10","7"],"Mulai dari 8, tambah 1: 9."),
 P(0,"🐥🐥🐥 + 🐥🐥🐥🐥","Ada berapa anak ayam semuanya?",["7","6","8","12"],"3 ditambah 4 sama dengan 7. Hitung bersama."),
 P(0,"5 + 5","Hasil dari 5 + 5 adalah ...",["10","9","11","55"],"Lima ditambah lima sama dengan sepuluh, seperti dua tangan."),
 P(0,"6 + 3","Hasil dari 6 + 3 adalah ...",["9","8","10","3"],"Mulai dari 6, tambah 3: 7, 8, 9."),
 P(0,"🎈🎈🎈🎈🎈","Adi punya 5 balon. Ibu memberi 4 balon lagi. Berapa balon Adi sekarang?",["9","8","10","1"],"5 ditambah 4 sama dengan 9."),
 P(1,"6 − 1","Hasil dari 6 − 1 adalah ...",["5","4","7","6"],"Hitung mundur 1 dari 6: 5."),
 P(1,"🍊🍊🍊🍊🍊🍊🍊","Ada 7 jeruk. 4 jeruk dimakan. Berapa jeruk tersisa?",["3","4","2","11"],"7 dikurangi 4 sama dengan 3. Coret 4 jeruk."),
 P(1,"9 − 9","Hasil dari 9 − 9 adalah ...",["0","9","1","18"],"Jika semua diambil, tidak ada yang tersisa: nol."),
 P(1,"10 − 5","Hasil dari 10 − 5 adalah ...",["5","4","6","15"],"Ingat 5 + 5 = 10."),
 P(1,"🐦🐦🐦🐦🐦","Ada 5 burung. 3 burung terbang. Berapa burung masih di sini?",["2","3","1","8"],"5 dikurangi 3 sama dengan 2."),
 P(2,"🟦","Gambar ini berbentuk ...",["persegi","lingkaran","segitiga","bintang"],"Persegi punya empat sisi sama panjang."),
 P(2,"14   9   20","Angka mana yang paling kecil?",["9","14","20","10"],"9 hanya punya satuan, jadi paling kecil."),
 P(2,"15, 16, ?","Angka berikutnya adalah ...",["17","18","14","15"],"Setelah 16 adalah 17.")
,
 P(0,"3 + 3","Hasil dari 3 + 3 adalah ...",["6","5","7","33"],"Dua bilangan yang sama: 3 + 3 = 6."),
 P(0,"8 + 2","Hasil dari 8 + 2 adalah ...",["10","9","11","6"],"8 ditambah 2 sama dengan 10."),
 P(0,"🍇🍇🍇🍇🍇 + 🍇🍇","Ada berapa anggur semuanya?",["7","6","8","3"],"5 ditambah 2 sama dengan 7."),
 P(0,"4 + 5","Hasil dari 4 + 5 adalah ...",["9","8","10","1"],"Mulai dari 5, tambah 4: 6, 7, 8, 9."),
 P(0,"🚗🚗🚗","Ada 3 mobil di parkiran. Datang 5 mobil lagi. Berapa mobil sekarang?",["8","7","9","2"],"3 ditambah 5 sama dengan 8."),
 P(1,"8 − 4","Hasil dari 8 − 4 adalah ...",["4","3","5","12"],"Hitung mundur 4 dari 8: 7, 6, 5, 4."),
 P(1,"7 − 7","Hasil dari 7 − 7 adalah ...",["0","7","1","14"],"Jika semua diambil, tersisa nol."),
 P(1,"🍩🍩🍩🍩🍩🍩","Ada 6 donat. Adik makan 2 donat. Berapa donat tersisa?",["4","3","5","8"],"6 dikurangi 2 sama dengan 4."),
 P(1,"9 − 6","Hasil dari 9 − 6 adalah ...",["3","2","4","15"],"Ingat 3 + 6 = 9, jadi 9 − 6 = 3."),
 P(1,"10 − 8","Hasil dari 10 − 8 adalah ...",["2","1","3","18"],"Ingat 2 + 8 = 10."),
 P(2,"⚪","Gambar ini berbentuk ...",["lingkaran","persegi","segitiga","bintang"],"Lingkaran bundar dan tidak punya sudut."),
 P(2,"17   12   19","Angka mana yang paling besar?",["19","17","12","11"],"Bandingkan satuannya: 9 lebih besar dari 7 dan 2."),
 P(2,"? , 16","Angka sebelum 16 adalah ...",["15","17","6","14"],"Sebelum berarti mundur satu angka."),
 P(2,"18, 19, ?","Angka berikutnya adalah ...",["20","21","17","10"],"Setelah 19 adalah 20."),
 P(2,"🍕","Potongan pizza ini bentuknya mirip ...",["segitiga","lingkaran","persegi","bintang"],"Potongan pizza punya tiga sisi, mirip segitiga.")
];
D.ind.x=[
 P(0,"🏠","Kata “rumah” dipisah menjadi suku kata ...",["ru-mah","mah-ru","rum-ah","r-umah"],"Ucapkan pelan: ru-mah."),
 P(0,"🐟","Huruf pertama nama gambar ini adalah ...",["I","K","A","N"],"Gambar ikan. Ucapkan “i-kan”, bunyi pertamanya I."),
 P(0,"ba-ju","Ada berapa suku kata pada kata “baju”?",["2","1","3","4"],"Tepuk tangan: ba, ju. Ada dua tepukan."),
 P(1,"👩","Gambar ini namanya ...",["ibu","ayah","kakek","paman"],"Eja: i-b-u."),
 P(1,"🐶","Gambar ini namanya ...",["anjing","kucing","ikan","kambing"],"Minta anak menyebut nama gambar sebelum memilih."),
 P(1,"🌙","Gambar ini namanya ...",["bulan","matahari","bintang","awan"],"Bulan tampak pada malam hari."),
 P(2,"","Kalimat mana yang ditulis dengan benar?",["Ibu pergi ke pasar.","ibu pergi ke pasar","Ibu pergi ke pasar","ibu pergi ke pasar."],"Diawali huruf besar dan diakhiri titik."),
 P(2,"ibu pergi ke pasar","Agar benar, kalimat ini perlu ...",["huruf besar di awal dan titik di akhir","huruf besar di akhir kalimat","tanda tanya di awal kalimat","tidak perlu diubah"],"Awal kalimat harus huruf besar dan akhirnya titik."),
 P(2,"","Kalimat yang benar adalah ...",["Aku makan nasi.","Makan aku nasi.","Nasi makan aku.","Aku nasi makan."],"Kalimat dimulai dari siapa, lalu melakukan apa."),
 P(2,"🔥","Lawan kata “panas” adalah ...",["dingin","hangat","basah","tinggi"],"Tanyakan: kalau panas lawannya apa?"),
 P(0,"🐮","Kata “sapi” dipisah menjadi suku kata ...",["sa-pi","pi-sa","sap-i","s-api"],"Eja: sa-pi. Tepuk tangan dua kali."),
 P(1,"🐰","Gambar ini namanya ...",["kelinci","kucing","kambing","kuda"],"Ucapkan pelan: ke-lin-ci."),
 P(1,"🐘","Gambar ini namanya ...",["gajah","jerapah","badak","singa"],"Eja: g-a-j-a-h.")
,
 P(0,"🥭","Huruf pertama kata “mangga” adalah ...",["M","N","G","A"],"Ucapkan “ma-ngga”, bunyi pertamanya M."),
 P(0,"E   B   C","Mana yang huruf vokal?",["E","B","C","D"],"Huruf vokal: a, i, u, e, o."),
 P(0,"🍌","Kata “pisang” dipisah menjadi suku kata ...",["pi-sang","pis-ang","p-isang","pisa-ng"],"Tepuk tangan: pi, sang."),
 P(1,"🐟","Kata “ikan” terdiri dari ... huruf.",["4","3","5","2"],"Eja: i-k-a-n. Ada empat huruf."),
 P(1,"🐴","Gambar ini namanya ...",["kuda","sapi","kambing","kerbau"],"Ucapkan pelan: ku-da."),
 P(1,"🍎","Gambar ini namanya ...",["apel","jeruk","pisang","mangga"],"Apel berwarna merah."),
 P(1,"🚗","Gambar ini namanya ...",["mobil","motor","sepeda","bus"],"Ucapkan pelan: mo-bil."),
 P(2,"","Kalimat yang benar adalah ...",["Adik minum susu.","Susu minum adik.","Minum susu adik.","Adik susu minum."],"Kalimat dimulai dari siapa, lalu melakukan apa."),
 P(2,"Ayah membaca koran_","Tanda baca di akhir kalimat itu adalah ...",[".","?","!",","],"Kalimat biasa diakhiri tanda titik."),
 P(2,"Kamu sedang apa_","Tanda baca di akhir kalimat itu adalah ...",["?",".","!",","],"Kalimat bertanya diakhiri tanda tanya."),
 P(2,"☀️ ↔ 🌙","Lawan kata “siang” adalah ...",["malam","pagi","sore","bulan"],"Siang terang, malam gelap."),
 P(2,"","Awal kalimat ditulis dengan huruf ...",["besar","kecil","miring","tebal"],"Awal kalimat selalu huruf besar."),
 P(2,"","Mana kalimat yang ditulis dengan benar?",["Kakak membaca buku.","kakak membaca buku","Kakak membaca buku","kakak membaca buku."],"Diawali huruf besar dan diakhiri titik.")
,
 P(0,"🍉","Kata “semangka” dipisah menjadi suku kata ...",["se-mang-ka","sem-ang-ka","s-emangka","semang-ka"],"Tepuk tangan tiga kali: se, mang, ka."),
 P(0,"🦆","Huruf pertama kata “bebek” adalah ...",["B","E","K","D"],"Ucapkan “be-bek”, bunyi pertamanya B."),
 P(0,"U   M   R","Mana yang huruf vokal?",["U","M","R","N"],"Huruf vokal: a, i, u, e, o."),
 P(0,"🍚","Huruf terakhir kata “nasi” adalah ...",["I","N","A","S"],"Eja: n-a-s-i. Huruf terakhir ada paling kanan."),
 P(0,"🌙","Kata “bulan” dipisah menjadi suku kata ...",["bu-lan","bul-an","b-ulan","bula-n"],"Tepuk tangan: bu, lan."),
 P(1,"🚲","Gambar ini namanya ...",["sepeda","mobil","motor","becak"],"Ucapkan pelan: se-pe-da."),
 P(1,"🐭 ↔ 🐘","Lawan kata “kecil” adalah ...",["besar","pendek","sempit","kurus"],"Tikus kecil, gajah besar."),
 P(1,"📚","Gambar ini namanya ...",["buku","tas","pensil","meja"],"Ucapkan pelan: bu-ku."),
 P(1,"🏫","Gambar ini namanya ...",["sekolah","rumah","pasar","masjid"],"Sekolah adalah tempat kita belajar."),
 P(1,"🥛","Gambar ini namanya ...",["susu","teh","kopi","jus"],"Susu berwarna putih."),
 P(2,"","Kalimat yang benar adalah ...",["Ani membaca buku.","Buku Ani membaca.","Membaca buku Ani.","Ani buku membaca."],"Kalimat dimulai dari siapa, lalu melakukan apa."),
 P(2,"Adik tidur di kamar_","Tanda baca di akhir kalimat itu adalah ...",[".","?","!",","],"Kalimat biasa diakhiri tanda titik."),
 P(2,"Siapa namamu_","Tanda baca di akhir kalimat itu adalah ...",["?",".","!",","],"Kalimat bertanya diakhiri tanda tanya."),
 P(2,"🔥 ↔ ❄️","Lawan kata “dingin” adalah ...",["panas","sejuk","basah","beku"],"Es dingin, api panas."),
 P(2,"","Mana kalimat yang ditulis dengan benar?",["Aku bermain bola.","aku bermain bola","Aku bermain bola","aku bermain bola."],"Diawali huruf besar dan diakhiri titik.")
];
D.ind.x=D.ind.x.concat([
 B(3,"Ani punya kucing. Kucing Ani berwarna putih. Namanya Puti.","Apa warna kucing Ani?",["putih", "hitam", "abu-abu", "kuning"],"Minta anak membaca ulang kalimat kedua: kucing Ani berwarna putih."),
 B(3,"Ani punya kucing. Kucing Ani berwarna putih. Namanya Puti.","Siapa nama kucing Ani?",["Puti", "Pipi", "Mimi", "Tuti"],"Jawabannya ada di kalimat terakhir: namanya Puti."),
 B(3,"Budi pergi ke sekolah. Budi naik sepeda. Budi senang.","Budi pergi ke mana?",["sekolah", "pasar", "kebun", "rumah nenek"],"Jawabannya ada di kalimat pertama."),
 B(3,"Budi pergi ke sekolah. Budi naik sepeda. Budi senang.","Budi naik apa?",["sepeda", "motor", "mobil", "perahu"],"Jawabannya ada di kalimat kedua."),
 B(3,"Ibu memasak nasi di dapur. Ayah membaca koran. Adik bermain bola.","Siapa yang memasak nasi?",["Ibu", "Ayah", "Adik", "Kakak"],"Minta anak menunjuk kalimat yang menyebut memasak."),
 B(3,"Ibu memasak nasi di dapur. Ayah membaca koran. Adik bermain bola.","Apa yang dibaca Ayah?",["koran", "buku cerita", "majalah", "surat"],"Jawabannya ada di kalimat kedua."),
 B(3,"Hari ini hujan. Rina membawa payung. Rina tidak basah.","Rina membawa apa?",["payung", "tas", "topi", "sepatu"],"Jawabannya ada di kalimat kedua."),
 B(3,"Hari ini hujan. Rina membawa payung. Rina tidak basah.","Mengapa Rina tidak basah?",["Rina membawa payung", "Hari ini panas", "Rina di rumah", "Rina berlari"],"Hubungkan kalimat kedua dan ketiga: karena membawa payung, Rina tidak basah."),
 B(3,"Di kebun ada bunga. Bunga mawar berwarna merah. Bunga melati berwarna putih.","Apa warna bunga mawar?",["merah", "putih", "kuning", "biru"],"Jawabannya ada di kalimat kedua."),
 B(3,"Di kebun ada bunga. Bunga mawar berwarna merah. Bunga melati berwarna putih.","Bunga apa yang berwarna putih?",["melati", "mawar", "anggrek", "matahari"],"Jawabannya ada di kalimat terakhir."),
 B(3,"Dodi mencuci tangan sebelum makan. Tangan Dodi menjadi bersih.","Kapan Dodi mencuci tangan?",["sebelum makan", "sesudah tidur", "sebelum mandi", "sesudah main"],"Jawabannya ada di kalimat pertama."),
 B(3,"Pak Tani menanam padi di sawah. Padi tumbuh hijau. Nanti padi menjadi beras.","Pak Tani menanam apa?",["padi", "jagung", "cabai", "singkong"],"Jawabannya ada di kalimat pertama.")
]);
D.pan.x=[
 P(0,"🦅","Pancasila memiliki berapa sila?",["5","4","3","6"],"Ada lima sila. Ajak anak menyebutnya sambil menghitung jari."),
 P(0,"⭐","Bintang adalah lambang sila ke ...",["1","2","3","4"],"Ingat: bintang, rantai, pohon beringin."),
 P(0,"🌳","Pohon beringin adalah lambang sila ke ...",["3","2","1","5"],"Pohon beringin adalah lambang sila ketiga."),
 P(1,"🙏","Berdoa sesuai dengan sila ke ...",["1","2","3","5"],"Berdoa sesuai sila pertama. Diskusikan mengapa sikap ini cocok."),
 P(1,"🤥","Berbohong itu perbuatan ...",["tidak baik","baik","hebat","lucu"],"Kita harus jujur."),
 P(1,"🧒👧","Kita boleh berteman dengan ...",["siapa saja","teman satu suku saja","anak laki-laki saja","anak yang pintar saja"],"Persatuan: semua teman, walau berbeda."),
 P(0,"🇮🇩","Dasar negara Indonesia adalah ...",["Pancasila","Merah Putih","Indonesia Raya","Bhinneka Tunggal Ika"],"Pancasila adalah dasar negara kita."),
 P(0,"⭐","Sila pertama berbunyi ...",["Ketuhanan Yang Maha Esa","Kemanusiaan yang adil dan beradab","Persatuan Indonesia","Keadilan sosial bagi seluruh rakyat Indonesia"],"Sila 1: Ketuhanan Yang Maha Esa."),
 P(1,"🗑️","Sampah sebaiknya dibuang ...",["di tempat sampah","di jalan","di sungai","di laci meja"],"Menjaga kebersihan adalah sikap baik."),
 P(1,"🤲","Kita ingin meminjam mainan teman. Kita harus ...",["minta izin dulu","mengambil diam-diam","merebutnya","menyembunyikannya"],"Kita harus meminta izin dan jujur."),
 P(1,"🍬🍬🍬🍬","Empat permen dibagi sama rata untuk 2 anak. Tiap anak dapat berapa?",["2","1","3","4"],"4 dibagi dua sama rata: tiap anak 2. Sesuai sila kelima.")
,
 P(0,"🌾","Padi dan kapas adalah lambang sila ke ...",["5","4","3","1"],"Padi dan kapas lambang sila kelima."),
 P(1,"🤒","Temanmu sakit. Kita sebaiknya ...",["menjenguknya","mengejeknya","menjauhinya","tidak peduli"],"Peduli pada teman sesuai sila kedua."),
 P(1,"🗣️🤝","Saat berbeda pendapat dengan teman, kita ...",["berbicara baik-baik","bertengkar","pergi marah-marah","memukul teman"],"Bermusyawarah sesuai sila keempat.")
,
 P(0,"🐂","Kepala banteng adalah lambang sila ke ...",["4","1","2","3"],"Kepala banteng lambang sila keempat."),
 P(0,"⛓️","Rantai adalah lambang sila ke ...",["2","1","3","5"],"Rantai lambang sila kedua."),
 P(0,"🦅","Di dada Garuda ada ... lambang sila.",["5","3","4","10"],"Ada lima lambang sila di dada Garuda."),
 P(0,"🇮🇩","Bendera negara kita bernama ...",["Merah Putih","Biru Putih","Merah Kuning","Hijau Putih"],"Bendera kita berwarna merah dan putih."),
 P(0,"🌳","Sila ketiga berbunyi ...",["Persatuan Indonesia","Ketuhanan Yang Maha Esa","Kemanusiaan yang adil dan beradab","Keadilan sosial bagi seluruh rakyat Indonesia"],"Sila 3: Persatuan Indonesia."),
 P(1,"👵","Bertemu nenek, kita sebaiknya ...",["menyapa dengan sopan","berteriak","mengejek","pergi saja"],"Bersikap sopan pada orang yang lebih tua."),
 P(1,"🧹","Kelas kotor. Kita sebaiknya ...",["membersihkannya bersama","membiarkannya","mengotorinya","pulang"],"Gotong royong sesuai sila ketiga."),
 P(1,"🙏","Sebelum tidur kita sebaiknya ...",["berdoa","berlari","bermain","berteriak"],"Berdoa sesuai sila pertama."),
 P(1,"🧸","Temanmu tidak punya mainan. Kamu ...",["mau berbagi","tidak peduli","menyembunyikan mainanmu","mengejeknya"],"Berbagi sesuai sila kelima."),
 P(1,"🗳️","Memilih ketua kelas sebaiknya dengan ...",["bermusyawarah","berkelahi","memaksa","berebut"],"Mengambil keputusan bersama sesuai sila keempat.")
];
// Pengecoh ke-4 untuk soal pilihan ganda lama, agar semua soal punya opsi a-d
var EX={
 mtk:["7","5","2","6","12","9","persegi panjang","13","18","9"],
 ind:["kambing","A","bo-l-a","M","I","awan","A","Ibu dapur di memasak.",",","lebar"],
 pan:["kepala banteng","padi dan kapas","bintang","rantai","kepala banteng","banteng","bermain","diam saja","memarahi","dibuang"]
};
Object.keys(EX).forEach(function(k){EX[k].forEach(function(x,i){D[k].q[i][2].push(x)})});
D.mtk.q[5][0]="8   15   11   9";
