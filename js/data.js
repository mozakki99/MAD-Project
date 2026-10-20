/**
 * Data Sumber Beranda Madrasah Al-Qur'an Digital (MAD)
 * Disusun dengan struktur modular agar siap dihubungkan ke Headless CMS atau API.
 * Domain: madrasahalquran.id
 */

export const siteConfig = {
  name: "Madrasah Al-Qur'an Digital",
  shortName: "MAD",
  domain: "madrasahalquran.id",
  tagline: "Belajar Al-Qur'an, Lebih Mudah dan Terarah.",
  description: "Lembaga pembelajaran Al-Qur'an digital dengan kurikulum bertahap, bimbingan talaqqi bersanad, dan ruang halaqah intensif yang fleksibel bagi santri di seluruh penjuru.",
  whatsappNumber: "6281234567890",
  whatsappMessage: "Assalamu'alaikum, saya ingin konsultasi penempatan kelas di MAD.",
  email: "salam@madrasahalquran.id",
  address: "Graha Al-Qur'an Digital, Jakarta & Pembelajaran Daring Terintegrasi"
};

export const programCategories = [
  {
    id: "tajwid-teori",
    title: "Tajwid Teori Bersanad",
    arabic: "علم التجويد النظري",
    badge: "Matan Klasik",
    summary: "Bedah tuntas kaidah tajwid dari matan Tuhfatul Athfal dan Al-Jazariyyah bersama pengajar bersanad resmi hingga bait-bait mutasyabihat.",
    highlights: ["Kajian matan bait per bait", "Ujian teori dan ijazah sanad", "Materi audio visual rekaman"],
    icon: "book-scroll",
    targetSection: "kelas-terbuka"
  },
  {
    id: "tajwid-praktik",
    title: "Tajwid Praktik",
    arabic: "التطبيق العملي للتجوid",
    badge: "Halaqah Talaqqi",
    summary: "Fokus penerapan kaidah tajwid secara langsung ayat per ayat dengan koreksi detail makharijul huruf dan shifatul huruf.",
    highlights: ["Satu santri satu giliran baca", "Koreksi vokal miring dan imalah", "Latihan konsistensi madd"],
    icon: "microphone-mic",
    targetSection: "kelas-terbuka"
  },
  {
    id: "tahsin-quran",
    title: "Tahsin Al-Qur'an",
    arabic: "تحسين تلاوة القرآن",
    badge: "Pemula & Lanjutan",
    summary: "Bimbingan perbaikan bacaan mushaf secara bertahap mulai dari kelancaran dasar, hukum mad, hingga kesempurnaan tartil.",
    highlights: ["Evaluasi tingkat kelancaran", "Kelompok kecil maksimal 10 orang", "Target khatam setoran bimbingan"],
    icon: "quran-open",
    targetSection: "kelas-terbuka"
  },
  {
    id: "bahasa-arab",
    title: "Bahasa Arab Al-Qur'an",
    arabic: "لغة القرآن الكريم",
    badge: "Kaidah & Pemahaman",
    summary: "Kuasai tata bahasa Arab (Nahwu dan Shorof) dengan fokus langsung pada kosakata dan struktur kalimat dalam ayat-ayat Al-Qur'an.",
    highlights: ["I'rab ayat-ayat pilihan", "Kamus kosa kata tematik Al-Qur'an", "Latihan terjemah mandiri"],
    icon: "arabic-alphabet",
    targetSection: "kelas-terbuka"
  },
  {
    id: "khat-kaligrafi",
    title: "Khat & Kaligrafi",
    arabic: "فن الخط العربي",
    badge: "Seni Mushaf",
    summary: "Pelajari kaidah proporsional penulisan huruf Arab gaya Naskhi dan Tsuluts untuk menulis mushaf dan kaidah ornamen klasik.",
    highlights: ["Kaidah titik mizan penulisan", "Koreksi goresan qalam", "Portofolio karya akhir bersertifikat"],
    icon: "quill-feather",
    targetSection: "kelas-terbuka"
  }
];

export const keunggulanList = [
  {
    number: "01",
    title: "Pembelajaran Online Terjadwal",
    description: "Pertemuan tatap layar interaktif via Zoom berkualitas tinggi dilengkapi rekaman materi seumur hidup dan forum diskusi halaqah.",
    icon: "video-interactive"
  },
  {
    number: "02",
    title: "Materi Terstruktur & Rapi",
    description: "Kurikulum disusun berjenjang mulai dari tingkat dasar hingga matan lanjutan dengan modul panduan PDF dan audio makhraj.",
    icon: "layers-structure"
  },
  {
    number: "03",
    title: "Bimbingan Pengajar Bersanad",
    description: "Diasuh langsung oleh para asatidz dan hafizhah yang memiliki silsilah sanad tilawah qira'ah 'Ashim riwayat Hafsh muttashil.",
    icon: "certificate-seal"
  },
  {
    number: "04",
    title: "Program Berjenjang Berkelanjutan",
    description: "Evaluasi berkala setiap akhir bab dengan sertifikat kelulusan resmi, rapor kemajuan bacaan, dan rekomendasi tingkatan berikutnya.",
    icon: "stairs-progression"
  }
];

export const kelasBukaList = [
  {
    id: "kelas-matan-jazariyyah",
    parentProgram: "Tajwid Teori Bersanad",
    programId: "tajwid-teori",
    title: "Dauroh Matan Al-Jazariyyah",
    batch: "Angkatan IV",
    method: "Zoom Live + Setoran Audio",
    schedule: "Setiap Sabtu & Ahad, 06.00 WIB",
    duration: "8 Pekan (16 Pertemuan)",
    instructor: "Ustadz Hilman Fawwaz, Lc., Al-Hafizh (Sanad Riwayat Hafsh)",
    quota: "Halaqah Khusus (Sisa 4 Kursi)",
    price: "Rp 350.000",
    originalPrice: "Rp 500.000",
    status: "Pendaftaran Dibuka",
    isRecommended: true,
    description: "Dauroh intensif mengkaji matan Manzhumah Al-Muqaddimah fima yajibu 'ala qari-ihi an ya'lamah (Al-Jazariyyah) karya Imam Ibnul Jazari secara mendalam beserta penjelasannya.",
    syllabus: [
      "Mukaddimah dan biografi Imam Ibnul Jazari",
      "Kajian Makharijul Huruf (17 tempat keluar huruf)",
      "Sifatul Huruf (Lazimah dan 'Aridhah)",
      "Bab At-Tarqiq wa At-Tafkhim",
      "Ahkam Al-Madd wa Al-Qashr",
      "Ujian Matan dan Ijazah Sanad bagi yang berhak"
    ]
  },
  {
    id: "kelas-tahsin-dewasa",
    parentProgram: "Tahsin Al-Qur'an",
    programId: "tahsin-quran",
    title: "Tahsin Tilawah Dewasa Tingkat Dasar",
    batch: "Halaqah Reguler Angkatan VII",
    method: "Talaqqi Google Meet Interaktif",
    schedule: "Senin & Rabu Malam, 20.00 WIB",
    duration: "10 Pekan (20 Pertemuan)",
    instructor: "Ustadzah Fatimah Azzahra, S.Ag., Al-Hafizhah",
    quota: "Maksimal 8 Santri per Halaqah",
    price: "Rp 275.000",
    originalPrice: "Rp 350.000",
    status: "Pendaftaran Dibuka",
    isRecommended: false,
    description: "Bimbingan bacaan santai namun disiplin bagi ikhwan dan akhwat dewasa yang ingin membenahi kelancaran membaca Al-Qur'an dari awal.",
    syllabus: [
      "Penyempurnaan vokal fathah, kasrah, dan dhammah",
      "Pengenalan hukum nun sukun dan tanwin",
      "Latihan praktis panjang pendek (mad asli 2 harakat)",
      "Koreksi bacaan surat-surat pendek Juz 30",
      "Evaluasi akhir kelancaran membaca"
    ]
  },
  {
    id: "kelas-tajwid-praktik",
    parentProgram: "Tajwid Praktik",
    programId: "tajwid-praktik",
    title: "Laboratorium Makharij & Shifatul Huruf",
    batch: "Halaqah Intensif Akhir Pekan",
    method: "Koreksi 1-on-1 Bergiliran",
    schedule: "Sabtu Sore, 16.00 WIB",
    duration: "6 Pekan (12 Pertemuan)",
    instructor: "Ustadz M. Ridwan An-Nadwi, Al-Hafizh",
    quota: "Tersedia 6 Kursi",
    price: "Rp 320.000",
    originalPrice: "Rp 400.000",
    status: "Pendaftaran Dibuka",
    isRecommended: false,
    description: "Fokus melatih organ bicara untuk menghasilkan bunyi huruf hijaiyyah sesuai kaidah para ulama qira'at tanpa berlebih-lebihan.",
    syllabus: [
      "Praktik pelafalan huruf tenggorokan (Halq)",
      "Latihan huruf lidah (Lisan) bagian pangkal, tengah, dan ujung",
      "Pemisahan sifat Hams dan Jahr",
      "Pencegahan kesalahan umum (Lahn Jaliyy dan Khafiyy)"
    ]
  },
  {
    id: "kelas-bahasa-arab-quran",
    parentProgram: "Bahasa Arab Al-Qur'an",
    programId: "bahasa-arab",
    title: "Nahwu Praktis Memahami Ayat Pilihan",
    batch: "Angkatan II",
    method: "Kelas Interaktif + Lembar Kerja Santri",
    schedule: "Selasa & Kamis, 19.30 WIB",
    duration: "8 Pekan (16 Pertemuan)",
    instructor: "Ustadz Ahmad Farhan, Lc., M.Hum.",
    quota: "Tersedia 10 Kursi",
    price: "Rp 300.000",
    originalPrice: "Rp 420.000",
    status: "Pendaftaran Dibuka",
    isRecommended: false,
    description: "Pendekatan langsung mengkaji susunan kalimat Al-Qur'an sehingga santri dapat merasakan keindahan makna firman Allah saat shalat dan tilawah.",
    syllabus: [
      "Mengenal Isim, Fi'il, dan Huruf dalam Surat Al-Fatihah",
      "Kaidah Mubtada' dan Khabar dalam ayat-ayat akidah",
      "Tanda-tanda I'rab yang sering muncul",
      "Praktik bedah kosa kata Juz 'Amma"
    ]
  },
  {
    id: "kelas-khat-naskhi",
    parentProgram: "Khat & Kaligrafi",
    programId: "khat-kaligrafi",
    title: "Kaidah Penulisan Khat Naskhi Standar Mushaf",
    batch: "Angkatan III",
    method: "Video Panduan + Koreksi Tugas Berkala",
    schedule: "Ahad Pagi, 09.00 WIB",
    duration: "6 Pekan (6 Tugas Praktik)",
    instructor: "Ustadz Syarif Hidayatullah, S.Sn. (Khattat Berlisensi)",
    quota: "Sisa 5 Kursi",
    price: "Rp 260.000",
    originalPrice: "Rp 350.000",
    status: "Pendaftaran Dibuka",
    isRecommended: false,
    description: "Pelatihan seni tulis huruf Arab dengan kaidah proporsi titik mizan, melatih kehalusan goresan untuk penyalinan ayat-ayat suci.",
    syllabus: [
      "Persiapan qalam dan tinta ramah kertas",
      "Huruf tunggal alif sampai ya dengan ukuran titik",
      "Kaidah sambungan huruf di awal, tengah, dan akhir",
      "Penulisan basmalah dan ayat Al-Fatihah"
    ]
  },
  {
    id: "kelas-tuhfatul-athfal",
    parentProgram: "Tajwid Teori Bersanad",
    programId: "tajwid-teori",
    title: "Syarah Matan Tuhfatul Athfal",
    batch: "Halaqah Sore Angkatan V",
    method: "Zoom Live + Ujian Tulis Daring",
    schedule: "Senin & Kamis, 16.30 WIB",
    duration: "6 Pekan (12 Pertemuan)",
    instructor: "Ustadzah Maryam Zulaikha, Al-Hafizhah",
    quota: "Segera Dibuka",
    price: "Rp 250.000",
    originalPrice: "Rp 325.000",
    status: "Segera Dibuka",
    isRecommended: false,
    description: "Gerbang pertama mempelajari teori tajwid bersanad melalui bait syair karya Al-Imam Al-Jamzuri yang ringkas dan mudah dihafal.",
    syllabus: [
      "Mukaddimah dan keutamaan menuntut ilmu qira'at",
      "Hukum Nun Sukun dan Tanwin",
      "Hukum Mim dan Nun Bertasydid serta Mim Sukun",
      "Hukum Lam Ta'rif dan Lam Fi'il",
      "Al-Mitslain, Al-Mutaqaribain, dan Al-Mutajanisain",
      "Pembagian Mad dan Ahkamuhu"
    ]
  }
];

export const caraBelajarSteps = [
  {
    step: "01",
    title: "Pilih Program & Kelas",
    description: "Tentukan cabang ilmu yang ingin dipelajari, baik tajwid teori, tahsin tilawah, maupun bahasa Al-Qur'an sesuai jadwal yang Anda miliki.",
    note: "Tersedia tes penempatan bacaan gratis bagi yang ragu memilih tingkatan."
  },
  {
    step: "02",
    title: "Daftar Online & Verifikasi",
    description: "Isi data diri melalui formulir digital, lakukan konfirmasi, dan bergabung ke ruang pengumuman halaqah resmi Madrasah Al-Qur'an Digital.",
    note: "Konfirmasi pendaftaran otomatis terhubung dengan admin halaqah via WhatsApp."
  },
  {
    step: "03",
    title: "Mulai Belajar & Talaqqi",
    description: "Ikuti sesi tatap layar interaktif, unduh modul panduan, dan mulailah menyetorkan bacaan untuk dibimbing langsung oleh pengajar.",
    note: "Akses rekaman materi dan grup diskusi aktif selama masa bimbingan."
  }
];

export const ebooksList = [
  {
    id: "ebook-panduan-tahsin",
    title: "Pedoman Praktis Tartil Bacaan Al-Qur'an",
    author: "Tim Asatidz MAD",
    category: "Panduan Santri",
    pages: "64 Halaman",
    summary: "Ringkasan kaidah makharij dan sifat huruf hijaiyyah dilengkapi ilustrasi anatomi artikulasi suara yang jelas dan mudah dipahami pembaca mandiri.",
    coverAccent: "maroon",
    fileSize: "4.8 MB PDF"
  },
  {
    id: "ebook-matan-jazariyyah",
    title: "Matan Al-Jazariyyah: Teks Arab & Terjemah Harfiah",
    author: "Tahqiq & Syarah Ringkas Tim Kurikulum MAD",
    category: "Matan Bersanad",
    pages: "48 Halaman",
    summary: "Naskah bait-bait Manzhumah Al-Jazariyyah dengan harakat lengkap, terjemahan bahasa Indonesia yang runtut, dan catatan kaki istilah qira'at.",
    coverAccent: "emerald",
    fileSize: "3.2 MB PDF"
  },
  {
    id: "ebook-kosa-kata-quran",
    title: "80% Kosa Kata Al-Qur'an yang Sering Diulang",
    author: "Divisi Bahasa Arab MAD",
    category: "Bahasa Arab",
    pages: "92 Halaman",
    summary: "Daftar frekuensi kata Al-Qur'an yang disusun secara tematik untuk membantu santri memahami arti bacaan shalat dan tilawah harian.",
    coverAccent: "gold",
    fileSize: "6.1 MB PDF"
  },
  {
    id: "ebook-adab-penghafal",
    title: "Untaian Adab Pembawa & Penuntut Al-Qur'an",
    author: "Ringkasan At-Tibyan Imam An-Nawawi",
    category: "Tazkiyatun Nufus",
    pages: "56 Halaman",
    summary: "Petunjuk adab batin dan lahiriah dalam berinteraksi dengan mushaf, etika berguru kepada muqri, serta keutamaan menghidupkan malam dengan Al-Qur'an.",
    coverAccent: "darkbrown",
    fileSize: "2.9 MB PDF"
  }
];

export const artikelList = [
  {
    id: "artikel-pentingnya-sanad",
    title: "Mengapa Belajar Tajwid Butuh Sanad Talaqqi?",
    category: "Ushul Tajwid",
    readTime: "4 Menit Baca",
    date: "18 Oktober 2026",
    summary: "Menelaah posisi sanad dalam menjaga kemurnian pengucapan huruf Al-Qur'an sebagaimana diturunkan kepada Rasulullah shallallahu 'alaihi wa sallam.",
    contentPreview: "Al-Qur'an diturunkan secara lisan (musyafahah). Teori dalam buku hanyalah perantara, sedangkan hakikat bacaan berada pada bimbingan guru yang mendengar dan membenahi secara langsung."
  },
  {
    id: "artikel-lahn-jali-khafi",
    title: "Mengenal Perbedaan Lahn Jaliyy dan Lahn Khafiyy Saat Tilawah",
    category: "Kaidah Tilawah",
    readTime: "5 Menit Baca",
    date: "14 Oktober 2026",
    summary: "Ulasan praktis mengenai jenis kekeliruan dalam membaca Al-Qur'an yang dapat merusak makna dan cara melatih kepekaan telinga untuk menghindarinya.",
    contentPreview: "Sebagian pembaca kerap tidak menyadari pergeseran harakat atau perubahan makhraj tipis. Di sinilah pentingnya mengenali batas-batas kekeliruan nyata dan tersembunyi."
  },
  {
    id: "artikel-tips-istiqamah-quran",
    title: "Langkah Sederhana Menjaga Rutinitas Tilawah di Tengah Kesibukan",
    category: "Nasihat Santri",
    readTime: "3 Menit Baca",
    date: "10 Oktober 2026",
    summary: "Metode mengikat komitmen satu juz per hari dengan membagi waktu shalat lima waktu serta tips memilih mushaf yang nyaman untuk perjalanan.",
    contentPreview: "Kunci keberlanjutan interaksi bersama Al-Qur'an bukanlah durasi yang sporadis, melainkan keteraturan yang dijaga dengan penuh kecintaan dan doa perlindungan."
  }
];

export const faqList = [
  {
    question: "Apakah santri yang belum lancar membaca boleh mendaftar?",
    answer: "Tentu saja. Madrasah Al-Qur'an Digital memiliki program Tahsin Tilawah Tingkat Dasar yang dirancang khusus untuk santri yang masih terbata-bata atau ingin membenahi pengucapan huruf dari pondasi awal. Pengajar membimbing dengan sabar dan metode bertahap."
  },
  {
    question: "Bagaimana sistem halaqah online dijalankan di MAD?",
    answer: "Pembelajaran diselenggarakan secara tatap layar langsung menggunakan ruang Zoom berkapasitas terbatas (6 sampai 10 santri per halaqah). Setiap santri mendapat giliran menyetorkan bacaan satu per satu secara langsung (talaqqi) dan menerima catatan koreksi di akhir pertemuan."
  },
  {
    question: "Apakah peserta akan mendapatkan rekaman jika berhalangan hadir?",
    answer: "Ya, seluruh rekaman sesi kajian teori dan pembahasan kelas diarsipkan dengan rapi di portal santri sehingga dapat diputar ulang kapan saja selama masa bimbingan aktif."
  },
  {
    question: "Apakah tersedia sertifikat atau ijazah sanad setelah selesai?",
    answer: "Santri yang menyelesaikan seluruh kurikulum kelas reguler akan mendapatkan Sertifikat Kelulusan resmi dari MAD. Khusus kelas dauroh matan tajwid bersanad, ijazah sanad muttashil diberikan kepada santri yang memenuhi syarat kelulusan ujian hafalan matan dan ujian praktik talaqqi."
  },
  {
    question: "Bagaimana cara melakukan tes penempatan jika saya ragu memilih kelas?",
    answer: "Anda dapat menekan tombol 'Konsultasi Kelas' di bagian atas halaman. Tim kurikulum MAD akan memandu Anda mengirimkan rekaman audio tilawah pendek (1 sampai 2 menit) untuk kemudian diberikan rekomendasi kelas yang paling tepat tanpa dipungut biaya."
  }
];
