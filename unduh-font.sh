#!/bin/sh
# Mengunduh font Baloo 2 (subset latin, woff2) ke fonts/baloo2.woff2. Butuh curl dan internet.
set -e
cd "$(dirname "$0")"
mkdir -p fonts
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36"
CSS=$(curl -fsSL -A "$UA" "https://fonts.googleapis.com/css2?family=Baloo+2:wght@400..800&display=swap")
URL=$(printf '%s\n' "$CSS" | awk '/\/\* latin \*\//{f=1} f&&/url\(/{print;exit}' | sed 's/.*url(\([^)]*\)).*/\1/')
[ -n "$URL" ] || { echo "Gagal menemukan alamat font."; exit 1; }
curl -fsSL -A "$UA" -o fonts/baloo2.woff2 "$URL"
echo "Selesai: fonts/baloo2.woff2 ($(wc -c < fonts/baloo2.woff2) byte)"
