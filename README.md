# Kopi Malas

Website Kopi Malas Tanggul, dibuat dengan React, TypeScript, Vite, dan Tailwind CSS 4.

## Jalankan di lokal

Butuh Node.js 20.19+ atau 22.12+.

~~~bash
npm ci
npm run dev
~~~

Buka alamat yang ditampilkan Vite, biasanya http://localhost:5173.

~~~bash
npm run typecheck
npm run build
npm run preview
~~~

## Konten dan kontak

Konten halaman berada di `src/App.tsx`. Varian kopi, nomor WhatsApp, dan alamat dapat diperbarui di sana. Foto hero berada di `public/images/hero-coffee.jpg`.

Harga tidak ditampilkan karena data harga pada situs sebelumnya berisi layanan salon. Tombol pesanan menyusun pesan WhatsApp dan meminta pengunjung mengonfirmasi sendiri pengirimannya. Tidak ada backend pemesanan.
