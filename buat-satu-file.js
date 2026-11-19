// Membuat latihan-ulangan-satu-file.html: index.html + soal.js + font, semuanya tertanam di satu berkas.
// Cocok untuk dibuka langsung dari penyimpanan HP (tanpa hosting), karena tidak butuh berkas pendamping.
// Jalankan: node buat-satu-file.js   (ulangi setiap selesai mengubah index.html, soal.js, atau font)
const fs = require("fs"), path = require("path");
const r = (p) => fs.readFileSync(path.join(__dirname, p));
let h = r("index.html").toString("utf8");
const tag = '<script src="soal.js"></script>';
if (!h.includes(tag)) { console.error("Tag soal.js tidak ditemukan di index.html"); process.exit(1); }
h = h.replace(tag, () => "<script>\n" + r("soal.js").toString("utf8") + "\n</script>");
let n = 0;
h = h.replace(/url\((fonts\/[\w.-]+\.woff)\)/g, (m, f) => { n++; return "url(data:font/woff;base64," + r(f).toString("base64") + ")"; });
if (n !== 4) { console.error("Diharapkan 4 font, ditemukan " + n); process.exit(1); }
fs.writeFileSync(path.join(__dirname, "latihan-ulangan-satu-file.html"), h);
console.log("Selesai: latihan-ulangan-satu-file.html (" + Buffer.byteLength(h) + " byte, " + n + " font tertanam)");
