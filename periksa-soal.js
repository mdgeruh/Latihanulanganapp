// Pemeriksa bank soal. Jalankan: node periksa-soal.js
// Membaca soal.js. Memeriksa: 4 opsi, tidak ada opsi kembar, jawaban benar ada, nomor bab sah, teks tidak kosong, ID soal unik.
const fs = require("fs"), vm = require("vm");
const js = fs.readFileSync(__dirname + "/soal.js", "utf8");
const cx = vm.createContext({});
vm.runInContext(js + "\nthis.D=D;", cx); // pengecoh ke-4 dari EX sudah digabung oleh soal.js
const D = cx.D;
let err = 0, total = 0;
const bad = (m) => { err++; console.log("  X " + m); };
for (const k of Object.keys(D)) {
  const d = D[k], nb = d.bab.length, seen = new Set();
  console.log(d.n + " (" + nb + " bab)");
  const cek = (lbl, bab, t, opsi, e, v) => {
    total++;
    if (!t || !String(t).trim()) bad(lbl + ": pertanyaan kosong");
    if (!(bab >= 0 && bab < nb)) bad(lbl + ": nomor bab tidak sah (" + bab + ")");
    if (!opsi || opsi.length !== 4) bad(lbl + ": opsi bukan 4 (" + (opsi ? opsi.length : 0) + ") - " + t);
    else {
      if (new Set(opsi.map(String)).size !== 4) bad(lbl + ": ada opsi kembar - " + t);
      if (opsi.some((o) => !String(o).trim())) bad(lbl + ": ada opsi kosong - " + t);
    }
    if (!e || !String(e).trim()) bad(lbl + ": catatan pendamping kosong - " + t);
    const kunci = (v || "") + "|" + t + "|" + (opsi && opsi[0]); // gambar ikut dihitung
    if (seen.has(kunci)) bad(lbl + ": soal kembar - " + t);
    seen.add(kunci);
  };
  d.q.forEach((x, i) => {
    // soal dasar: [gambar, pertanyaan, [benar, pengecoh, pengecoh, (EX)], catatan]
    cek(k + ".q[" + i + "]", d.m[i], x[1], x[2], x[3], x[0]);
  });
  d.x.forEach((x, j) => cek(k + ".x[" + j + "]", x.b, x.t, x.o, x.e, x.v));
}
console.log("\n" + total + " soal diperiksa, " + err + " masalah");
process.exit(err ? 1 : 0);
