import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  FileCheck,
  AlertCircle,
  CheckCircle,
  Server,
  Database,
} from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: 'Komitmen Privasi Kami',
      icon: <Shield className="h-6 w-6" />,
      content:
        'DiaForest sangat menghormati privasi Anda. Kami memahami bahwa data kesehatan adalah informasi yang sangat pribadi dan sensitif. Kebijakan privasi ini menjelaskan bagaimana kami menangani informasi Anda dengan transparansi penuh.',
    },
    {
      title: 'Data yang Kami Kumpulkan',
      icon: <Eye className="h-6 w-6" />,
      items: [
        {
          label: 'Parameter Kesehatan',
          text: 'Anda memberikan 8 parameter kesehatan untuk prediksi: jenis kelamin, usia, riwayat hipertensi, riwayat penyakit jantung, riwayat merokok, BMI, kadar HbA1c, dan kadar gula darah.',
        },
        {
          label: 'Data Teknis',
          text: 'Data teknis standar seperti alamat IP, jenis browser, dan waktu akses dapat dikumpulkan secara otomatis oleh server untuk tujuan keamanan dan analitik dasar.',
        },
        {
          label: 'Tidak Ada Identitas Pribadi',
          text: 'Kami TIDAK mengumpulkan nama, alamat email, nomor telepon, atau informasi identitas pribadi lainnya. Tidak diperlukan pendaftaran atau login.',
        },
      ],
    },
    {
      title: 'Bagaimana Kami Menggunakan Data Anda',
      icon: <FileCheck className="h-6 w-6" />,
      highlights: [
        {
          icon: <Server className="h-5 w-5 text-blue-600" />,
          title: 'Pemrosesan Real-Time',
          desc: 'Data kesehatan Anda diproses secara langsung oleh model machine learning untuk menghasilkan prediksi.',
          color: 'bg-blue-50',
        },
        {
          icon: <Database className="h-5 w-5 text-red-600" />,
          title: 'Tidak Ada Penyimpanan',
          desc: 'Data kesehatan Anda TIDAK DISIMPAN di database atau server setelah prediksi selesai.',
          color: 'bg-red-50',
        },
        {
          icon: <Lock className="h-5 w-5 text-green-600" />,
          title: 'Transmisi Aman',
          desc: 'Semua komunikasi antara browser Anda dan server kami menggunakan protokol yang aman.',
          color: 'bg-green-50',
        },
      ],
    },
    {
      title: 'Penyimpanan dan Retensi Data',
      icon: <Database className="h-6 w-6" />,
      guarantees: [
        {
          icon: <CheckCircle className="h-5 w-5" />,
          text: 'Data kesehatan Anda dihapus segera setelah prediksi dihasilkan',
          positive: true,
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          text: 'Tidak ada database yang menyimpan informasi medis pribadi Anda',
          positive: true,
        },
        {
          icon: <CheckCircle className="h-5 w-5" />,
          text: 'Hasil prediksi hanya ditampilkan di browser Anda dan tidak disimpan di server',
          positive: true,
        },
        {
          icon: <AlertCircle className="h-5 w-5" />,
          text: 'Log server teknis (IP, waktu akses) mungkin disimpan sementara untuk keamanan sistem',
          positive: false,
        },
      ],
    },
    {
      title: 'Berbagi Data dengan Pihak Ketiga',
      icon: <Lock className="h-6 w-6" />,
      content:
        'Kami TIDAK membagikan, menjual, atau menyewakan data kesehatan pribadi Anda kepada pihak ketiga mana pun. Data Anda tetap privat dan diproses hanya untuk tujuan prediksi yang Anda minta.',
    },
    {
      title: 'Hak Anda',
      icon: <Shield className="h-6 w-6" />,
      rights: [
        'Hak untuk mengetahui data apa yang kami kumpulkan dan bagaimana kami menggunakannya',
        'Hak untuk mengakses tool ini tanpa memberikan identitas pribadi',
        'Hak untuk tidak menggunakan tool ini jika Anda tidak setuju dengan kebijakan privasi',
        'Hak untuk menghubungi kami jika Anda memiliki pertanyaan atau kekhawatiran tentang privasi',
      ],
    },
    {
      title: 'Keamanan Data',
      icon: <Lock className="h-6 w-6" />,
      content:
        'Kami mengimplementasikan langkah-langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses yang tidak sah, perubahan, pengungkapan, atau penghancuran. Namun, tidak ada transmisi melalui internet yang 100% aman, dan kami tidak dapat menjamin keamanan absolut.',
    },
  ];

  const importantNotes = [
    {
      title: 'Ini Bukan Layanan Medis',
      desc: 'PrediksiBetes adalah tool edukasi dan skrining awal, BUKAN layanan medis berlisensi. Kami tidak menyimpan catatan medis atau memberikan saran medis profesional.',
    },
    {
      title: 'HIPAA & GDPR',
      desc: 'Karena kami tidak menyimpan data kesehatan pribadi, regulasi seperti HIPAA (AS) dan GDPR (EU) mungkin tidak berlaku. Namun, kami tetap berkomitmen pada prinsip privasi tertinggi.',
    },
    {
      title: 'Perubahan Kebijakan',
      desc: 'Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan signifikan akan diumumkan di halaman ini.',
    },
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
              Kebijakan Privasi
            </h1>
            <p className="text-muted-foreground">
              Transparansi tentang bagaimana kami menangani data Anda
            </p>
          </div>
        </motion.div>

        {/* Quick Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-blue-50 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-heading mb-3 text-xl font-bold text-green-900">
                Ringkasan Cepat
              </h3>
              <ul className="space-y-2 text-sm text-green-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Data kesehatan Anda diproses secara real-time dan TIDAK
                  DISIMPAN
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Tidak diperlukan pendaftaran atau informasi identitas pribadi
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  Kami TIDAK membagikan data Anda dengan pihak ketiga
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  100% gratis dan privat
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-lg">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                      {section.icon}
                    </div>
                    <h2 className="font-heading text-foreground text-xl font-bold">
                      {section.title}
                    </h2>
                  </div>

                  {section.content && (
                    <p className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.items && (
                    <div className="space-y-3">
                      {section.items.map((item, i) => (
                        <div key={i} className="bg-secondary/10 rounded-lg p-4">
                          <h4 className="font-heading text-foreground mb-1 font-bold">
                            {item.label}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.highlights && (
                    <div className="grid gap-4 md:grid-cols-3">
                      {section.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className={`${highlight.color} rounded-lg p-4`}
                        >
                          <div className="mb-2 flex items-center gap-2">
                            {highlight.icon}
                            <h4 className="font-heading font-bold">
                              {highlight.title}
                            </h4>
                          </div>
                          <p className="text-sm">{highlight.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.guarantees && (
                    <div className="space-y-2">
                      {section.guarantees.map((guarantee, i) => (
                        <div
                          key={i}
                          className={`flex items-start gap-3 rounded-lg p-3 ${
                            guarantee.positive
                              ? 'bg-green-50 text-green-900'
                              : 'bg-yellow-50 text-yellow-900'
                          }`}
                        >
                          <div
                            className={
                              guarantee.positive
                                ? 'text-green-600'
                                : 'text-yellow-600'
                            }
                          >
                            {guarantee.icon}
                          </div>
                          <p className="text-sm">{guarantee.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.rights && (
                    <ul className="space-y-2">
                      {section.rights.map((right, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                          {right}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 space-y-4"
        >
          <h2 className="font-heading text-foreground text-2xl font-bold">
            Catatan Penting
          </h2>
          {importantNotes.map((note, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl border-none p-6 shadow-lg"
            >
              <h3 className="font-heading text-foreground mb-2 font-bold">
                {note.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {note.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card mt-8 rounded-2xl p-6 text-center"
        >
          <h3 className="font-heading text-foreground mb-2 text-xl font-bold">
            Ada Pertanyaan tentang Privasi?
          </h3>
          <p className="text-muted-foreground mb-4 text-sm">
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang kebijakan
            privasi ini atau bagaimana kami menangani data Anda, silakan hubungi
            kami.
          </p>
          <p className="text-muted-foreground text-sm">
            Terakhir diperbarui: Februari 2025
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
