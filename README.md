Tech Stack:
- React (Vite) + TypeScript
- React Router DOM
- Tailwind CSS

Autentikasi (Mock):
- Pada aplikasi ini, proses autentikasi disimulasikan di sisi frontend (mock authentication).
- Alasan Menggunakan Mock Auth
- Meskipun dokumentasi API menyediakan endpoint /api/login dan /api/logout, endpoint tersebut tidak dapat diakses secara publik dan mengembalikan respons 404 Not Found ketika dipanggil dari frontend.
- Agar tetap dapat menampilkan alur autentikasi yang lengkap, saya menerapkan mock authentication untuk menunjukkan:
- Alur login
- Penyimpanan token
- Protected route
- Proses logout

Alur Autentikasi:
- User mengisi email dan password
- Service login melakukan simulasi request (delay)
- Token JWT palsu dikembalikan
- Token disimpan di localStorage
- Protected route dapat diakses
- Logout menghapus token dan redirect ke halaman login

Routing & Layout:
- AuthLayout:
  - Digunakan untuk halaman /login
  - Full page layout
  - Tanpa navbar
- AppLayout:
  - Digunakan setelah login
  - Menggunakan navbar
  - Route dilindungi dengan protected route

Pages:
- Login Page (/login)
- Input email & password
- Show / hide password
- Loading & error state

Event List Page (/events):
- Fetch data event dari API
- Menampilkan judul dan tanggal event
- Loading, empty, dan error state

Event Detail Page (/events/:id):
- Menampilkan detail event
- Simulasi join event

Cara Menjalankan Aplikasi:
- npm install
- npm run dev

Pertanyaan Wajib:
1. Bagian tersulit apa dari sisi frontend?

Bagian tersulit adalah menentukan pendekatan autentikasi ketika endpoint login yang disediakan tidak dapat diakses secara publik.
Saya perlu memastikan alur login, protected route, dan UX tetap berjalan dengan baik tanpa backend autentikasi yang aktif.

2. Jika diberi waktu 1 minggu, apa yang akan kamu tingkatkan?

Mengganti mock auth dengan backend autentikasi nyata

Menambahkan refresh token dan token expiration handling

Mengelola auth state secara global (Context / Zustand)

Meningkatkan polish UI dan animasi

Menambahkan unit test dan integration test

3. Asumsi UX apa yang kamu ambil?

Proses login harus sederhana dan cepat

Halaman login dibuat full page tanpa distraksi (tanpa navbar)

Gambar di halaman login disembunyikan di mobile untuk performa

User selalu mendapatkan feedback melalui loading, empty, dan error state

Halaman dilindungi agar tidak bisa diakses tanpa login

Kesimpulan

Aplikasi ini berfokus pada struktur frontend yang rapi, alur autentikasi yang jelas, serta UX yang konsisten.
Mock authentication digunakan secara sengaja untuk tetap menunjukkan alur autentikasi lengkap ketika backend tidak tersedia secara publik.
