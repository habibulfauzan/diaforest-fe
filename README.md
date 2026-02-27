# DiaForest - Sistem Prediksi Risiko Diabetes

Aplikasi web prediksi risiko diabetes berbasis Random Forest Machine Learning.

## 📋 Deskripsi Proyek

DiaForest (Diabetes + Random Forest) adalah sistem prediksi risiko diabetes yang dikembangkan sebagai bagian dari Tugas Akhir dengan judul **"Implementasi Klasifikasi Penyakit Diabetes Menggunakan Algoritma Random Forest"** di Universitas Islam Negeri Sultan Syarif Kasim Riau.

### Peneliti

- **Nama**: Habibul Fauzan
- **NIM**: 12050112476
- **Program Studi**: Teknik Informatika
- **Institusi**: UIN Sultan Syarif Kasim Riau
- **Tahun**: 2025

## 🎯 Tujuan

Sistem ini dikembangkan untuk:

1. Membantu deteksi dini diabetes pada masyarakat umum dan tenaga kesehatan
2. Mengatasi masalah hampir 50% penderita diabetes yang belum terdiagnosis
3. Menyediakan tool prediksi yang mudah diakses, gratis, dan privat
4. Mengimplementasikan model Random Forest dengan akurasi tinggi (target 92%)

## ✨ Fitur Utama

- **Prediksi Risiko Diabetes**: Input 8 parameter kesehatan untuk mendapatkan prediksi risiko
- **Akurasi Tinggi**: Model Random Forest dengan akurasi 95,835% (weighted avg 96%)
- **Privasi Terjamin**: Data tidak disimpan, pemrosesan real-time
- **Gratis & Mudah**: Tanpa registrasi, hasil dalam hitungan menit
- **Edukasi Kesehatan**: Informasi lengkap tentang diabetes dan pencegahan
- **Responsif**: Desain modern yang berfungsi di semua perangkat

## 🛠️ Teknologi yang Digunakan

### Frontend

- **Framework**: Astro 5 (hybrid rendering)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript 5.9

### Backend

- **Framework**: Flask (Python)
- **ML Algorithm**: Random Forest Classifier
- **Libraries**: scikit-learn, pandas, numpy
- **Data Balancing**: SMOTE

## 📊 Model Machine Learning

- **Algoritma**: Random Forest Classifier
- **Dataset**: 100.000 data medis dari Kaggle (96.146 setelah pembersihan duplikat)
- **Akurasi Model**: **95,835%** (Weighted Average: 96%)
- **Optimasi**: Grid Search untuk hyperparameter tuning (270 kombinasi parameter)
- **Teknik Balancing**: SMOTE (Synthetic Minority Over-sampling Technique)

### Hasil Evaluasi Model

**Dataset Testing**: 20.000 sampel (80/20 split)

| Metrik        | Kelas 0 (Tidak Diabetes) | Kelas 1 (Diabetes) | Weighted Avg |
| ------------- | ------------------------ | ------------------ | ------------ |
| **Precision** | 98%                      | 76%                | **96%**      |
| **Recall**    | 98%                      | 75%                | **96%**      |
| **F1-Score**  | 98%                      | 75%                | **96%**      |
| **Support**   | 18.300 sampel            | 1.700 sampel       | 20.000       |

### Feature Importance (Urutan Kepentingan)

1. **HbA1c Level** - Faktor paling penting
2. **Blood Glucose Level** - Faktor kedua terpenting
3. **Age (Usia)** - Pengaruh sedang
4. **BMI** - Pengaruh sedang
5. **Smoking History** - Pengaruh kecil
6. **Hypertension** - Pengaruh minimal
7. **Heart Disease** - Pengaruh minimal

### Parameter Input (9 Input Data)

1. Jenis Kelamin
2. Usia
3. Riwayat Hipertensi
4. Riwayat Penyakit Jantung
5. Riwayat Merokok
6. Berat Badan (kg)
7. Tinggi Badan (cm) - _BMI dihitung otomatis oleh sistem_
8. Kadar HbA1c
9. Kadar Gula Darah

**Catatan**: Sistem otomatis menghitung BMI dari berat dan tinggi badan untuk kemudahan pengguna.

## 🚀 Cara Menjalankan

### Prasyarat

- Node.js (v18 atau lebih baru)
- npm atau pnpm
- Backend API berjalan di `http://localhost:7860/predict`

### Instalasi

```bash
# Clone repository
git clone <repository-url>
cd frontend

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env dan sesuaikan PUBLIC_API_URL jika diperlukan
```

### Development

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:4321`

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Struktur Proyek

```
frontend/
├── src/
│   ├── components/
│   │   ├── HomePage.tsx         # Landing page
│   │   ├── PredictionApp.tsx    # Form prediksi utama
│   │   ├── GuidePage.tsx        # Panduan diabetes
│   │   ├── ExplorePage.tsx      # Tips pencegahan
│   │   ├── FaqPage.tsx          # FAQ
│   │   ├── AboutPage.tsx        # Tentang proyek
│   │   └── PrivacyPage.tsx      # Kebijakan privasi
│   ├── layouts/
│   │   └── Layout.astro         # Layout global
│   ├── pages/
│   │   ├── index.astro          # Homepage
│   │   ├── app.astro            # Halaman prediksi
│   │   ├── guide.astro
│   │   ├── explore.astro
│   │   ├── faq.astro
│   │   ├── about.astro
│   │   └── privacy.astro
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   └── types/
│       └── prediction.ts        # TypeScript interfaces
├── .env                         # Environment variables
└── package.json
```

## 🎨 Desain Sistem

### Warna Utama

- **Primary**: Merah muda lembut (#E8A598)
- **Secondary**: Hijau mint (#C5E8DA)
- **Accent**: Kuning hangat
- **Background**: Krem lembut

### Font

- **Heading**: Fredoka (bold, rounded)
- **Body**: Nunito (clean, readable)
- **Handwriting**: Patrick Hand (casual accents)

## 🔒 Privasi & Keamanan

- ✅ **Tidak ada penyimpanan data**: Data kesehatan diproses secara real-time
- ✅ **Tanpa registrasi**: Tidak memerlukan login atau informasi pribadi
- ✅ **Tidak ada tracking**: Kami tidak melacak aktivitas pengguna
- ✅ **Hasil privat**: Hanya ditampilkan di browser, tidak disimpan di server

## ⚠️ Disclaimer

**PENTING**: Tool ini BUKAN pengganti diagnosis medis profesional. Hasil prediksi hanya memberikan estimasi risiko berdasarkan data yang dimasukkan. Selalu konsultasikan dengan dokter atau tenaga kesehatan profesional untuk diagnosis yang akurat dan penanganan yang tepat.

## 📄 Lisensi

Proyek ini dikembangkan untuk tujuan akademik dan edukasi.

## 👤 Kontak

Untuk pertanyaan atau informasi lebih lanjut tentang penelitian ini, silakan hubungi:

**Habibul Fauzan**

- Institusi: UIN Sultan Syarif Kasim Riau
- Program Studi: Teknik Informatika

---

Dibuat dengan ❤️ untuk kesehatan Indonesia yang lebih baik.
