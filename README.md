# MAD Project: Madrasah Al-Qur'an Digital

Website resmi Madrasah Al-Qur'an Digital (MAD) untuk domain `madrasahalquran.id`.
Dibangun dengan estetika **Warm Minimalist Premium**, mengedepankan keterbacaan tinggi, kemudahan navigasi bagi calon santri, serta optimasi tampilan mobile-first.

---

## Karakteristik Desain

- **Gaya Visual**: Warm Minimalist Premium
- **Palet Warna**:
  - Cream: `#F8F3EB` (Latar kanvas lembut)
  - Ivory: `#FFFCF7` (Latar kartu dan modul)
  - Dark Brown: `#432219` (Teks utama dan bingkai klasik)
  - Maroon: `#762D31` (Aksen wibawa dan CTA primer)
  - Gold: `#C8A77C` (Sentuhan ornamen dan status fokus)
  - Emerald: `#075447` (Lencana sanad dan ketenangan belajar)
- **Aksesibilitas**: Memenuhi standar kontras WCAG AA (> 8:1) dan bebas ketergantungan JavaScript berat.
- **Dukungan Tema**: Light Mode dan Dark Mode dengan sinkronisasi sistem dan penyimpanan lokal.

---

## Struktur Halaman Beranda

1. **Sticky Navbar**: Logo MAD, tautan navigasi, tombol tema terang/gelap, CTA pendaftaran, dan menu mobile drawer.
2. **Hero Section**: Headline utama, deskripsi lembaga, tombol aksi, dan visual kubah ayat tartil (QS. Al-Muzzammil: 4).
3. **Program MAD (Mau Belajar Apa?)**: 5 kategori ilmu (Tajwid Teori Bersanad, Tajwid Praktik, Tahsin Al-Qur'an, Bahasa Arab, serta Khat & Kaligrafi).
4. **Mengapa Belajar di MAD?**: 4 pilar keunggulan sistem halaqah online.
5. **Kelas yang Sedang Dibuka**: Filter tab kategori kelas interaktif dan kartu halaqah aktif dengan modal silabus lengkap.
6. **Cara Mulai Belajar**: Alur 3 tahapan (Pilih Kelas, Daftar Online, Mulai Belajar) dengan tampilan linimasa vertikal di mobile.
7. **Perpustakaan Digital MAD**: 4 e-book kurikulum dengan pratinjau sampul dan opsi unduh.
8. **Artikel & Faedah**: Wawasan ringkas tajwid, adab mushaf, dan motivasi tilawah.
9. **Mengenal MAD**: Narasi profil dan 4 nilai komitmen lembaga.
10. **FAQ (Accordion)**: Tanya jawab seputar syarat kelas, sistem rekaman, dan sertifikat sanad.
11. **CTA Penutup & Footer**: Ajakan pendaftaran, saluran kontak resmi WhatsApp, email, dan hak cipta.
12. **Mobile Quick Action Bar**: Bilah aksi mengambang di bawah layar smartphone untuk mempermudah pendaftaran dan konsultasi.

---

## Struktur Direktori

```
.
├── index.html            # Halaman utama semantik dan aksesibel
├── DESIGN.md             # Dokumentasi token desain dan liveliness dials
├── vercel.json           # Konfigurasi perutean Vercel
├── .gitignore            # Berkas pengecualian git
├── css/
│   └── styles.css        # Sistem desain CSS modular, token, dan responsif
├── js/
│   ├── data.js           # Struktur data konten mandiri (siap CMS)
│   └── app.js            # Logika tema, filter tab, drawer, dan modal
└── scripts/
    └── server.mjs        # Server lokal pengujian mandiri
```

---

## Cara Menjalankan Secara Lokal

Cukup jalankan perintah berikut menggunakan Node.js:

```bash
node scripts/server.mjs
```

Lalu buka peramban di `http://localhost:3000`.

---

## Lisensi & Hak Cipta

(c) 2026 Madrasah Al-Qur'an Digital (MAD). Hak Cipta Dilindungi Undang-Undang.
