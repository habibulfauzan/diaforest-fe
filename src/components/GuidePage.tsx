import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Heart,
  AlertCircle,
  Activity,
  TrendingUp,
  Info,
} from 'lucide-react';

const Guide = () => {
  const sections = [
    {
      title: 'Apa Itu Diabetes?',
      description:
        'Diabetes mellitus merupakan penyakit metabolik kronis yang ditandai dengan kadar glukosa darah yang tinggi (hiperglikemia) akibat gangguan pada produksi insulin, kerja insulin, atau keduanya (WHO).',
      icon: <Heart className="h-6 w-6" />,
      content: [
        // {
        //   subtitle: 'Diabetes Tipe 1',
        //   text: 'Penyakit autoimun di mana pankreas tidak memproduksi insulin yang cukup dan memerlukan pemberian insulin setiap hari. Pada tahun 2017, terdapat 9 juta orang dengan diabetes tipe 1, dengan mayoritas tinggal di negara-negara berpenghasilan tinggi (American Diabetes Association, 2013).',
        // },
        // {
        //   subtitle: 'Diabetes Tipe 2',
        //   text: 'Tipe yang paling umum, mewakili 90-95% dari semua kasus diabetes. Tipe ini ditandai dengan resistensi insulin dan defisiensi insulin relatif. Meskipun dahulu hanya ditemukan pada orang dewasa, kini diabetes tipe 2 juga semakin sering terjadi pada anak-anak (American Diabetes Association, 2013).',
        // },
        // {
        //   subtitle: 'Prediabetes',
        //   text: 'Kadar gula darah lebih tinggi dari normal tetapi belum cukup tinggi untuk didiagnosis sebagai diabetes. Kondisi ini dapat dibalikkan dengan perubahan gaya hidup.',
        // },
      ],
    },
    {
      title: 'Situasi Diabetes di Indonesia',
      description:
        'Prevalensi diabetes di Indonesia terus meningkat. Berdasarkan penelitian, prevalensi diabetes meningkat dari 9,19% pada tahun 2020 (18,69 juta kasus) menjadi proyeksi 16,09% pada tahun 2045 (40,7 juta kasus) jika tidak ada intervensi (Wahidin et al., 2024).',
      icon: <AlertCircle className="h-6 w-6" />,
      highlights: [
        {
          label: 'Tahun 2020',
          value: '18,69 juta kasus',
          color: 'text-yellow-600',
        },
        {
          label: 'Proyeksi 2045',
          value: '40,7 juta kasus',
          color: 'text-red-600',
        },
        {
          label: 'Belum Terdiagnosis',
          value: '~50%',
          color: 'text-orange-600',
        },
      ],
      note: 'Hampir setengah dari individu dengan diabetes belum terdiagnosis, sehingga memperbesar kemungkinan terjadinya komplikasi dan kematian dini (Soeatmadji et al., 2023).',
    },
    {
      title: 'Komplikasi Diabetes',
      description:
        'Diabetes berpotensi menimbulkan berbagai komplikasi serius jika kadar gula darah tidak terkontrol dengan baik. Penyebab umum komplikasi ini adalah kadar gula darah yang tidak terkontrol dengan baik (Silitonga et al., 2024).',
      icon: <AlertCircle className="h-6 w-6" />,
      complications: [
        'Penyakit jantung dan stroke',
        'Kerusakan saraf (neuropati)',
        'Gagal ginjal',
        'Kebutaan (retinopati diabetik)',
        'Hipertensi',
        'Gangren (dapat menyebabkan amputasi)',
      ],
    },
    // {
    //   title: 'Memahami Hasil Tes',
    //   description:
    //     'Metrik kesehatan kunci yang menunjukkan risiko diabetes. Pemeriksaan rutin membantu mendeteksi masalah sejak dini.',
    //   icon: <Activity className="h-6 w-6" />,
    //   metrics: [
    //     {
    //       name: 'HbA1c (Hemoglobin Terglikasi)',
    //       normal: 'Di bawah 5,7%',
    //       prediabetes: '5,7% - 6,4%',
    //       diabetes: '6,5% atau lebih',
    //       description: 'Menunjukkan rata-rata gula darah selama 2-3 bulan',
    //     },
    //     {
    //       name: 'Gula Darah Puasa',
    //       normal: 'Di bawah 100 mg/dL',
    //       prediabetes: '100 - 125 mg/dL',
    //       diabetes: '126 mg/dL atau lebih',
    //       description: 'Diukur setelah puasa 8 jam',
    //     },
    //     {
    //       name: 'BMI (Indeks Massa Tubuh)',
    //       normal: '18,5 - 24,9',
    //       overweight: '25 - 29,9',
    //       obese: '30 atau lebih',
    //       description: 'Rasio berat badan terhadap tinggi badan',
    //     },
    //   ],
    // },
    {
      title: 'Kapan Harus ke Dokter?',
      description:
        'Jangan menunggu gejala muncul. Deteksi dini dan intervensi adalah kunci untuk mencegah komplikasi.',
      icon: <TrendingUp className="h-6 w-6" />,
      warnings: [
        'Jika hasil prediksi menunjukkan risiko sedang hingga tinggi',
        'Jika memiliki riwayat keluarga diabetes',
        'Jika mengalami gejala: rasa haus berlebihan, sering buang air kecil, penurunan berat badan tanpa sebab, kelelahan, penglihatan kabur',
        'Jika berusia di atas 45 tahun (skrining direkomendasikan)',
        'Jika kelebihan berat badan dengan faktor risiko lain',
        'Untuk pemeriksaan rutin meskipun merasa sehat',
      ],
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
              Memahami Diabetes
            </h1>
            <p className="text-muted-foreground">
              Informasi penting tentang diabetes dan deteksi dini
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-lg">
                <div className="p-8">
                  {/* Title */}
                  <div className="mb-4 flex items-center gap-4">
                    <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="font-heading text-foreground text-2xl font-bold">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {section.description}
                  </p>

                  {/* Content */}
                  {section.content && (
                    <div className="space-y-4">
                      {section.content.map((item, i) => (
                        <div key={i} className="bg-secondary/10 rounded-lg p-4">
                          {/* <h3 className="font-heading text-foreground mb-2 font-bold">
                            {item.subtitle}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {item.text}
                          </p> */}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Highlights */}
                  {section.highlights && (
                    <div>
                      <div className="mb-4 grid gap-4 md:grid-cols-3">
                        {section.highlights.map((highlight, i) => (
                          <div
                            key={i}
                            className="bg-secondary/10 rounded-lg p-4 text-center"
                          >
                            <div className="text-muted-foreground mb-1 text-xs font-medium">
                              {highlight.label}
                            </div>
                            <div
                              className={`${highlight.color} text-2xl font-bold`}
                            >
                              {highlight.value}
                            </div>
                          </div>
                        ))}
                      </div>
                      {section.note && (
                        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
                          <p className="text-sm text-orange-900">
                            {/* <strong>Catatan:</strong> */}
                            {section.note}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Complications */}
                  {section.complications && (
                    <div className="grid gap-2 md:grid-cols-2">
                      {section.complications.map((complication, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-900"
                        >
                          <AlertCircle className="h-4 w-4 flex-shrink-0 text-red-600" />
                          {complication}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Memahami Hasil Tes */}
                  {/* {section.metrics && (
                    <div className="space-y-4">
                      {section.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="border-border/40 rounded-lg border p-4"
                        >
                          <div className="mb-2 flex items-start justify-between">
                            <h3 className="font-heading text-foreground font-bold">
                              {metric.name}
                            </h3>
                            <Info className="text-muted-foreground h-4 w-4" />
                          </div>
                          <p className="text-muted-foreground mb-3 text-xs">
                            {metric.description}
                          </p>
                          <div className="grid gap-2 text-sm md:grid-cols-3">
                            <div className="rounded bg-green-50 p-2">
                              <span className="block text-xs font-medium text-green-700">
                                Normal
                              </span>
                              <span className="text-green-900">
                                {metric.normal}
                              </span>
                            </div>
                            <div className="rounded bg-yellow-50 p-2">
                              <span className="block text-xs font-medium text-yellow-700">
                                {metric.prediabetes
                                  ? 'Prediabetes'
                                  : 'Berlebih'}
                              </span>
                              <span className="text-yellow-900">
                                {metric.prediabetes || metric.overweight}
                              </span>
                            </div>
                            <div className="rounded bg-red-50 p-2">
                              <span className="block text-xs font-medium text-red-700">
                                {metric.diabetes ? 'Diabetes' : 'Obesitas'}
                              </span>
                              <span className="text-red-900">
                                {metric.diabetes || metric.obese}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )} */}

                  {/* Warnings */}
                  {section.warnings && (
                    <ul className="space-y-3">
                      {section.warnings.map((warning, i) => (
                        <li
                          key={i}
                          className="bg-secondary/10 text-foreground flex items-start gap-3 rounded-lg p-3 text-sm"
                        >
                          <AlertCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                          {warning}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
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
          <a href="/app">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-bold shadow-lg transition-all hover:scale-105">
              Mulai Prediksi Sekarang
            </button>
          </a>
        </motion.div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-secondary/10 border-border/40 mt-8 rounded-2xl border p-4"
        ></motion.div>
      </div>
    </div>
  );
};

export default Guide;
