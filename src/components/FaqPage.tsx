import { motion } from 'framer-motion';
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apa itu tool prediksi diabetes ini?',
      answer:
        'Tool ini adalah sistem prediksi berbasis Machine Learning yang menggunakan algoritma Random Forest untuk menganalisis faktor risiko diabetes Anda. Tool ini dikembangkan sebagai bagian dari penelitian Tugas Akhir di UIN Sultan Syarif Kasim Riau dan menggunakan dataset 100.000 kasus nyata untuk menghasilkan prediksi dengan akurasi hingga 95,8%.',
    },
    {
      question: 'Apakah hasil prediksi ini akurat?',
      answer:
        'Model prediksi ini telah dioptimasi menggunakan teknik hyperparameter tuning dan mencapai tingkat akurasi 95,835% (weighted average 96%) pada dataset testing 20.000 sampel. Model menunjukkan precision 98% dan recall 98% untuk kelas tidak diabetes, serta precision 76% dan recall 75% untuk kelas diabetes. Namun, PENTING untuk dipahami bahwa ini BUKAN diagnosis medis. Hasil prediksi ini hanya memberikan estimasi risiko berdasarkan data yang Anda masukkan. Untuk diagnosis yang akurat dan penanganan yang tepat, selalu konsultasikan dengan dokter atau tenaga kesehatan profesional.',
    },
    {
      question: 'Data apa saja yang diperlukan untuk prediksi?',
      answer:
        'Tool ini memerlukan input data kesehatan: (1) Jenis Kelamin, (2) Usia, (3) Riwayat Hipertensi, (4) Riwayat Penyakit Jantung, (5) Riwayat Merokok, (6) Berat Badan (kg), (7) Tinggi Badan (cm) - BMI akan dihitung otomatis, (8) Kadar HbA1c, dan (9) Kadar Gula Darah. Data seperti HbA1c dan gula darah dapat Anda peroleh dari hasil pemeriksaan medis atau cek lab rutin.',
    },
    {
      question: 'Apakah saya harus membayar untuk menggunakan tool ini?',
      answer:
        'Tidak, ini sepenuhnya GRATIS dan tidak memerlukan pendaftaran. Ini adalah proyek penelitian akademik yang bertujuan untuk membantu masyarakat dalam deteksi dini diabetes.',
    },
    {
      question: 'Apa itu HbA1c dan bagaimana cara mendapatkannya?',
      answer:
        'HbA1c (Hemoglobin Terglikasi) adalah tes yang mengukur rata-rata kadar gula darah Anda selama 2-3 bulan terakhir. Anda bisa mendapatkan nilai HbA1c melalui tes darah di laboratorium, puskesmas, klinik, atau rumah sakit.',
    },
    {
      question: 'Bagaimana cara menghitung BMI saya?',
      answer:
        'Anda TIDAK perlu menghitung BMI sendiri! BMI akan otomatis dihitung ketika Anda memasukkan berat badan (kg) dan tinggi badan (cm). BMI dihitung dengan rumus: Berat Badan (kg) dibagi Tinggi Badan (meter) kuadrat.',
    },
    {
      question:
        'Apa yang harus saya lakukan jika hasil prediksi saya menunjukkan risiko tinggi?',
      answer:
        'Jika prediksi menunjukkan risiko sedang hingga tinggi, sangat disarankan untuk: (1) SEGERA berkonsultasi dengan dokter untuk pemeriksaan lebih lanjut, (2) Jangan panik - hasil ini adalah peringatan dini, bukan diagnosis, (3) Mulai perubahan gaya hidup sehat (diet seimbang, olahraga teratur, tidur cukup), (4) Lakukan pemeriksaan lab lengkap (HbA1c, gula darah puasa, profil lipid).',
    },
    {
      question: 'Seberapa sering saya harus mengecek risiko diabetes?',
      answer:
        'Jika Anda memiliki faktor risiko (usia >45 tahun, kelebihan berat badan, riwayat keluarga diabetes), skrining direkomendasikan setiap 1-2 tahun. Jika hasil sebelumnya menunjukkan prediabetes, harus memantau lebih sering (setiap 3-6 bulan) dengan konsultasi dokter. Untuk yang berisiko rendah, pemeriksaan rutin tahunan sudah cukup.',
    },
    {
      question: 'Algoritma apa yang digunakan dalam tool ini?',
      answer:
        'Tool ini menggunakan algoritma Random Forest Classifier, sebuah metode machine learning yang menggabungkan banyak decision tree untuk meningkatkan akurasi prediksi. Model telah dioptimasi menggunakan teknik Grid Search untuk hyperparameter tuning dan menggunakan SMOTE (Synthetic Minority Over-sampling Technique) untuk menangani ketidakseimbangan data.',
    },
    // {
    //   question: 'Apakah tool ini dapat mendeteksi diabetes tipe 1 dan tipe 2?',
    //   answer:
    //     'Tool ini dirancang terutama untuk prediksi diabetes tipe 2, yang merupakan 90-95% dari kasus diabetes dan sangat dipengaruhi oleh faktor gaya hidup. Diabetes tipe 1 adalah penyakit autoimun yang biasanya muncul pada anak-anak dan remaja, dan tidak dapat diprediksi dengan faktor risiko yang sama.',
    // },
  ];

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex items-center gap-4"
        >
          <a href="/">
            <button className="hover:bg-secondary/20 rounded-full p-2 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </button>
          </a>
          <div>
            <h1 className="font-heading text-foreground text-4xl font-bold">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-muted-foreground">
              Temukan jawaban untuk pertanyaan umum
            </p>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-md transition-shadow hover:shadow-lg">
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="hover:bg-secondary/10 flex w-full items-start justify-between gap-4 p-6 text-left transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <h3 className="font-heading text-foreground font-bold">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`text-muted-foreground h-5 w-5 flex-shrink-0 transition-transform ${
                      openIndex === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-border/20 border-t px-6 pt-4 pb-6"
                  >
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-card rounded-2xl p-8">
            <h2 className="font-heading text-foreground mb-3 text-2xl font-bold">
              Masih ada pertanyaan?
            </h2>
            <p className="text-muted-foreground mb-6">
              Untuk pertanyaan medis, selalu konsultasikan dengan tenaga
              kesehatan profesional.
            </p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <a href="/app">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-bold shadow-lg transition-all hover:scale-105">
                  Mulai Prediksi
                </button>
              </a>
              <a href="/about">
                <button className="border-primary text-primary hover:bg-primary/10 rounded-full border-2 px-8 py-3 font-bold transition-all">
                  Tentang Kami
                </button>
              </a>
            </div>
            <p className="text-muted-foreground/60 mt-6 text-xs italic">
              Sistem ini berdasarkan penelitian: Fauzan, H. (2025). Implementasi
              Klasifikasi Penyakit Diabetes Menggunakan Algoritma Random Forest.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
