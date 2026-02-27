import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Apple,
  Activity,
  Moon,
  Droplets,
  Scale,
  Heart,
  Target,
  TrendingDown,
} from 'lucide-react';

const Explore = () => {
  const preventionTips = [
    {
      title: 'Pola Makan Sehat',
      icon: <Apple className="h-6 w-6" />,
      description:
        'Diet seimbang adalah salah satu cara paling efektif untuk mencegah atau mengelola diabetes.',
      tips: [
        'Pilih karbohidrat kompleks seperti nasi merah, oat, atau gandum utuh',
        'Perbanyak sayuran non-tepung (bayam, kangkung, brokoli)',
        'Batasi minuman manis dan pilih air putih',
        'Konsumsi protein tanpa lemak (ikan, ayam, kacang-kacangan)',
        'Perhatikan porsi makan untuk menjaga berat badan ideal',
        'Kurangi makanan olahan dan lemak trans',
        'Makan dengan teratur untuk menghindari lonjakan gula darah',
      ],
      color: 'bg-green-100',
      iconColor: 'text-green-600',
    },
    {
      title: 'Aktivitas Fisik',
      icon: <Activity className="h-6 w-6" />,
      description:
        'Olahraga teratur membantu mengontrol berat badan, menggunakan glukosa sebagai energi, dan membuat sel lebih sensitif terhadap insulin.',
      tips: [
        'Target minimal 150 menit aktivitas sedang per minggu',
        'Kombinasikan olahraga aerobik (jalan kaki, berenang, bersepeda)',
        'Tambahkan latihan kekuatan 2-3 kali seminggu',
        'Ambil jeda jalan kaki singkat sepanjang hari',
        'Gunakan tangga daripada lift bila memungkinkan',
        'Temukan aktivitas yang Anda sukai agar konsisten',
        'Mulai perlahan dan tingkatkan intensitas secara bertahap',
      ],
      color: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Manajemen Berat Badan',
      icon: <Scale className="h-6 w-6" />,
      description:
        'Menurunkan bahkan 5-10% berat badan dapat secara signifikan mengurangi risiko diabetes jika Anda kelebihan berat badan.',
      tips: [
        'Tetapkan target penurunan berat badan yang realistis',
        'Catat asupan makanan dan kalori Anda',
        'Kombinasikan diet dan olahraga untuk hasil terbaik',
        'Fokus pada perubahan gaya hidup yang berkelanjutan',
        'Rayakan kemenangan kecil di sepanjang jalan',
        'Cari dukungan dari keluarga, teman, atau profesional',
        'Bersabar - penurunan berat badan bertahap lebih berkelanjutan',
      ],
      color: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Tidur Berkualitas',
      icon: <Moon className="h-6 w-6" />,
      description:
        'Kurang tidur dapat mempengaruhi hormon yang mengatur gula darah dan meningkatkan risiko diabetes.',
      tips: [
        'Target 7-9 jam tidur per malam',
        'Jaga jadwal tidur yang konsisten',
        'Buat rutinitas waktu tidur yang santai',
        'Hindari layar 1 jam sebelum tidur',
        'Jaga kamar tidur sejuk, gelap, dan tenang',
        'Batasi kafein dan makan berat sebelum tidur',
        'Tangani gangguan tidur seperti sleep apnea',
      ],
      color: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Manajemen Stres',
      icon: <Heart className="h-6 w-6" />,
      description:
        'Stres kronis dapat meningkatkan kadar gula darah dan berkontribusi pada pilihan gaya hidup yang tidak sehat.',
      tips: [
        'Praktikkan mindfulness atau meditasi setiap hari',
        'Coba latihan pernapasan dalam',
        'Lakukan hobi yang Anda nikmati',
        'Terhubung dengan teman dan keluarga yang suportif',
        'Pertimbangkan yoga atau tai chi',
        'Cari bantuan profesional jika diperlukan',
        'Ambil istirahat dan praktikkan perawatan diri',
      ],
      color: 'bg-pink-100',
      iconColor: 'text-pink-600',
    },
    {
      title: 'Hidrasi',
      icon: <Droplets className="h-6 w-6" />,
      description:
        'Tetap terhidrasi membantu ginjal membuang kelebihan gula darah dan mendukung kesehatan secara keseluruhan.',
      tips: [
        'Minum air sepanjang hari',
        'Target 8 gelas (sekitar 2 liter) air per hari',
        'Batasi minuman manis dan alkohol',
        'Minum air sebelum, selama, dan setelah berolahraga',
        'Simpan botol air bersama Anda',
        'Makan makanan kaya air (mentimun, semangka)',
        'Pantau warna urin - kuning pucat adalah ideal',
      ],
      color: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
    },
  ];

  const actionPlan = [
    {
      title: 'Minggu Ini',
      icon: <Target className="h-5 w-5" />,
      actions: [
        'Jadwalkan pemeriksaan dengan dokter',
        'Mulai mencatat makanan yang dikonsumsi',
        'Jalan kaki 15 menit setiap hari',
        'Ganti satu minuman manis dengan air putih',
      ],
    },
    {
      title: 'Bulan Ini',
      icon: <TrendingDown className="h-5 w-5" />,
      actions: [
        'Lakukan pemeriksaan lab (HbA1c, gula darah, profil lipid)',
        'Bangun rutinitas olahraga teratur',
        'Pelajari cara membaca label nutrisi',
        'Kurangi porsi makan secara bertahap',
      ],
    },
    {
      title: 'Tahun Ini',
      icon: <Heart className="h-5 w-5" />,
      actions: [
        'Capai dan pertahankan berat badan sehat',
        'Bangun kebiasaan sehat yang berkelanjutan',
        'Lakukan skrining kesehatan tahunan',
        'Ajak keluarga dan teman untuk bergabung',
      ],
    },
  ];

  return (
    <div className="from-secondary/10 via-background to-primary/5 min-h-screen bg-gradient-to-br p-6">
      <div className="mx-auto max-w-5xl">
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
              Pencegahan & Gaya Hidup
            </h1>
            <p className="text-muted-foreground">
              Tips praktis untuk mengurangi risiko diabetes Anda
            </p>
          </div>
        </motion.div>

        {/* Prevention Tips */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {preventionTips.map((tip, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-card h-full overflow-hidden rounded-2xl border-none shadow-lg">
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`${tip.color} ${tip.iconColor} flex h-12 w-12 items-center justify-center rounded-full`}
                    >
                      {tip.icon}
                    </div>
                    <h2 className="font-heading text-foreground text-xl font-bold">
                      {tip.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                  <ul className="space-y-2">
                    {tip.tips.map((t, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground flex items-start gap-2 text-sm"
                      >
                        <span className={`${tip.iconColor} mt-1 font-bold`}>
                          ✓
                        </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Plan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-card mb-12 overflow-hidden rounded-2xl border-none shadow-lg">
            <div className="p-8">
              <h2 className="font-heading text-foreground mb-6 text-3xl font-bold">
                Rencana Aksi Anda
              </h2>
              <p className="text-muted-foreground mb-8">
                Langkah kecil mengarah pada perubahan besar. Beginilah cara memulainya:
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                {actionPlan.map((plan, idx) => (
                  <div
                    key={idx}
                    className="bg-secondary/10 rounded-xl p-6"
                  >
                    <div className="mb-4 flex items-center gap-2">
                      <div className="bg-primary/20 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                        {plan.icon}
                      </div>
                      <h3 className="font-heading text-foreground font-bold">
                        {plan.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {plan.actions.map((action, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2 text-sm"
                        >
                          <span className="text-primary mt-1">•</span>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Important Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-secondary/10 mb-12 rounded-2xl p-8 text-center"
        >
          <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
            Ingat
          </h3>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-relaxed">
            Pencegahan adalah perjalanan, bukan tujuan. Setiap pilihan sehat yang 
            Anda buat hari ini adalah investasi untuk masa depan Anda. Konsultasikan 
            dengan dokter sebelum membuat perubahan signifikan pada diet atau rutinitas 
            olahraga Anda.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="/app">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-bold shadow-lg transition-all hover:scale-105">
              Cek Tingkat Risiko Anda
            </button>
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            Ketahui risiko Anda untuk mengambil tindakan preventif
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Explore;
