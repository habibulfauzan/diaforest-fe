import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Target,
  Heart,
  Shield,
  TrendingUp,
  Users,
  GraduationCap,
  Database,
  Cpu,
} from 'lucide-react';

const About = () => {
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
              Tentang DiaForest
            </h1>
            <p className="text-muted-foreground">
              Sistem prediksi risiko diabetes berbasis Machine Learning
            </p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card mb-8 overflow-hidden rounded-2xl border-none shadow-lg"
        >
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Misi
              </h2>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Diabetes adalah penyebab utama kematian dan kecacatan, serta
              menimbulkan beban ekonomi dan sosial yang sangat besar. Hampir
              setengah dari penderita diabetes belum terdiagnosis, sehingga
              memperbesar kemungkinan terjadinya komplikasi dan kematian dini.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              DiaForest hadir untuk membantu deteksi dini diabetes dengan
              menyediakan tool prediksi yang mudah diakses oleh tenaga kesehatan
              di layanan primer maupun masyarakat umum. Dengan deteksi dini,
              kita dapat mengurangi risiko komplikasi dan meningkatkan kualitas
              hidup penderita diabetes.
            </p>
          </div>
        </motion.div>

        {/* Research Background */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card mb-8 overflow-hidden rounded-2xl border-none shadow-lg"
        >
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Latar Belakang Penelitian
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sistem ini dikembangkan sebagai bagian dari Tugas Akhir dengan
                judul{' '}
                <strong className="text-foreground">
                  "Implementasi Klasifikasi Penyakit Diabetes Menggunakan
                  Algoritma Random Forest"
                </strong>
              </p>
              <div className="bg-secondary/20 rounded-lg p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">Peneliti:</span>
                    <span className="text-foreground font-semibold">
                      Habibul Fauzan (NIM: 12050112476)
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">Institusi:</span>
                    <span className="text-foreground font-semibold">
                      Universitas Islam Negeri Sultan Syarif Kasim Riau
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">
                      Program Studi:
                    </span>
                    <span className="text-foreground font-semibold">
                      Teknik Informatika
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-muted-foreground">Tahun:</span>
                    <span className="text-foreground font-semibold">2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card mb-8 overflow-hidden rounded-2xl border-none shadow-lg"
        >
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Cpu className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Cara Kerja Sistem
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                PrediksiBetes menggunakan algoritma{' '}
                <strong>Random Forest Classifier</strong>, sebuah metode machine
                learning yang menggabungkan banyak decision tree untuk
                meningkatkan akurasi prediksi.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="font-heading mb-2 font-bold text-blue-900">
                    1. Pengumpulan Data
                  </h4>
                  <p className="text-sm text-blue-800">
                    Anda memasukkan 8 parameter kesehatan: jenis kelamin, usia,
                    riwayat hipertensi, riwayat penyakit jantung, riwayat
                    merokok, BMI, kadar HbA1c, dan kadar gula darah.
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="font-heading mb-2 font-bold text-green-900">
                    2. Pemrosesan Data
                  </h4>
                  <p className="text-sm text-green-800">
                    Data Anda dikirim ke model machine learning yang telah
                    dioptimasi menggunakan hyperparameter tuning untuk akurasi
                    maksimal.
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-4">
                  <h4 className="font-heading mb-2 font-bold text-purple-900">
                    3. Prediksi
                  </h4>
                  <p className="text-sm text-purple-800">
                    Model menganalisis data Anda dan menghasilkan probabilitas
                    risiko diabetes berdasarkan pola yang dipelajari dari
                    100.000 kasus nyata.
                  </p>
                </div>

                <div className="rounded-lg bg-orange-50 p-4">
                  <h4 className="font-heading mb-2 font-bold text-orange-900">
                    4. Hasil
                  </h4>
                  <p className="text-sm text-orange-800">
                    Anda menerima hasil prediksi dengan tingkat risiko (Rendah,
                    Sedang, Tinggi) beserta rekomendasi tindak lanjut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Model Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card mb-8 overflow-hidden rounded-2xl border-none shadow-lg"
        >
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Database className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Detail Model
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-heading text-foreground mb-2 font-bold">
                  Algoritma
                </h4>
                <p className="text-muted-foreground text-sm">
                  Random Forest dengan optimasi hyperparameter menggunakan Grid
                  Search
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-heading text-foreground mb-2 font-bold">
                  Dataset
                </h4>
                <p className="text-muted-foreground text-sm">
                  100.000 data medis pasien dari Kaggle
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-heading text-foreground mb-2 font-bold">
                  Akurasi Target
                </h4>
                <p className="text-muted-foreground text-sm">
                  95,8% (weighted average 96%)
                </p>
              </div>
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-heading text-foreground mb-2 font-bold">
                  Teknik Balancing
                </h4>
                <p className="text-muted-foreground text-sm">
                  SMOTE (Synthetic Minority Over-sampling Technique)
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Trust Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card mb-8 overflow-hidden rounded-2xl border-none shadow-lg"
        >
          <div className="p-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="bg-primary/20 text-primary flex h-12 w-12 items-center justify-center rounded-full">
                <Shield className="h-6 w-6" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Mengapa Percaya Kami?
              </h2>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              Sistem ini dikembangkan berdasarkan tinjauan literatur ekstensif
              terhadap penelitian-penelitian terkini di bidang prediksi diabetes
              menggunakan machine learning.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                {
                  icon: <TrendingUp className="h-5 w-5" />,
                  title: 'Berbasis Penelitian',
                  desc: 'Dikembangkan melalui penelitian akademik yang ketat dengan metodologi ilmiah yang terbukti.',
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: '100% Privat',
                  desc: 'Data Anda tidak disimpan. Semua pemrosesan dilakukan secara real-time.',
                },
                {
                  icon: <Users className="h-5 w-5" />,
                  title: 'Untuk Semua',
                  desc: 'Gratis dan dapat diakses oleh tenaga kesehatan maupun masyarakat umum.',
                },
                {
                  icon: <Heart className="h-5 w-5" />,
                  title: 'Dampak Sosial',
                  desc: 'Membantu deteksi dini diabetes untuk mengurangi komplikasi dan meningkatkan kualitas hidup.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border-border/40 flex items-start gap-3 rounded-lg border p-4"
                >
                  <div className="bg-primary/20 text-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-heading text-foreground mb-1 font-bold">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 rounded-2xl border border-red-200 bg-gradient-to-r from-red-50 to-orange-50 p-6"
        >
          <div className="flex items-start gap-3">
            <Shield className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
            <div>
              <h3 className="font-heading mb-2 font-bold text-red-900">
                Disclaimer Penting
              </h3>
              <p className="text-sm leading-relaxed text-red-800">
                Tool ini{' '}
                <strong>BUKAN pengganti diagnosis medis profesional</strong>.
                Hasil prediksi hanya memberikan estimasi risiko berdasarkan data
                yang dimasukkan. Selalu konsultasikan dengan dokter atau tenaga
                kesehatan profesional untuk diagnosis yang akurat dan penanganan
                yang tepat. Tool ini tidak memberikan saran medis, diagnosis,
                atau perawatan.
              </p>
            </div>
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a href="/app">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-4 font-bold shadow-lg transition-all hover:scale-105">
              Coba Prediksi Sekarang
            </button>
          </a>
          <p className="text-muted-foreground mt-4 text-sm">
            Gratis, cepat, dan privat. Ketahui risiko Anda dalam hitungan detik.
          </p>
        </motion.div>

        {/* References - Daftar Pustaka */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-card border-border/40 mt-12 rounded-2xl border p-8 shadow-lg"
        >
          <h3 className="font-heading text-foreground mb-6 text-2xl font-bold">
            Daftar Pustaka
          </h3>

          <div className="text-muted-foreground space-y-3 text-xs leading-relaxed">
            <p>
              Ahmad, S. M., & Ahmed, N. M. (2023). Classification based on event
              in survival machine learning analysis of cardiovascular disease
              cohort. <em>BMC Cardiovascular Disorders</em>, 23.
              https://doi.org/10.1186/s12872-023-03328-2
            </p>

            <p>
              Ahmed, U., Issa, G. F., Khan, M. A., Aftab, S., Khan, M. F., Said,
              R. A. T., Ghazal, T. M., & Ahmad, M. (2022). Prediction of
              Diabetes Empowered With Fused Machine Learning.{' '}
              <em>IEEE Access</em>, 10, 8529–8538.
              https://doi.org/10.1109/ACCESS.2022.3142097
            </p>

            <p>
              Alpaydin, E. (2021). <em>Machine learning</em>.
              https://doi.org/10.7551/mitpress/13811.001.0001
            </p>

            <p>
              Anisa, N., & Kurniawan, A. (2024). The Diabetes Prediction Using
              Flask and Decision Tree Classifier with Cross-Validation: Prediksi
              Diabetes Menggunakan Flask dan Decision Tree Classifier dengan
              Validasi Silang.{' '}
              <em>Install: Information System and Technology Journal</em>, 1(1),
              35–44. https://doi.org/10.33859/install.v1i1.548
            </p>

            <p>
              Association, A. D. (2013). Diagnosis and classification of
              diabetes mellitus.
              <em>Diabetes Care</em>, 37(Supplement_1), S81–S90.
              https://doi.org/10.2337/dc14-S081
            </p>

            <p>
              Dutta, P., Paul, S., & Kumar, A. (2021). Comparative analysis of
              various supervised machine learning techniques for diagnosis of
              COVID-19. In{' '}
              <em>
                Electronic Devices, Circuits, and Systems for Biomedical
                Applications
              </em>{' '}
              (pp. 521–540). Elsevier.
              https://doi.org/10.1016/B978-0-323-85172-5.00020-4
            </p>

            <p>
              <strong>Fauzan, H.</strong> (2025).{' '}
              <em>
                Implementasi Klasifikasi Penyakit Diabetes Menggunakan Algoritma
                Random Forest
              </em>{' '}
              [Tugas Akhir]. Fakultas Sains dan Teknologi, Universitas Islam
              Negeri Sultan Syarif Kasim Riau, Pekanbaru.
            </p>

            <p>
              Hsu, D. (2022). Overview of machine learning.{' '}
              <em>
                International Journal of Advanced Research in Science,
                Communication and Technology
              </em>
              . https://doi.org/10.48175/ijarsct-4844
            </p>

            <p>
              Iman, Q., & Wijayanto, A. W. (2021). Klasifikasi Rumah Tangga
              Penerima Beras Miskin (Raskin)/Beras Sejahtera (Rastra) di
              Provinsi Jawa Barat Tahun 2017 dengan Metode Random Forest dan
              Support Vector Machine.{' '}
              <em>JUSTIN (Jurnal Sistem dan Teknologi Informasi)</em>, 9(2),
              Article 2. https://doi.org/10.26418/justin.v9i2.44137
            </p>

            <p>
              Janiesch, C., Zschech, P., & Heinrich, K. (2021). Machine learning
              and deep learning.
              <em>Electronic Markets</em>, 31, 685–695.
              https://doi.org/10.1007/s12525-021-00475-2
            </p>

            <p>
              Lal, D., & S, A. V. (2023). Exploring the Efficacy of Machine
              Learning Algorithms for Diabetes Prediction: A Comparative
              Prediction.{' '}
              <em>
                International Journal for Research in Applied Science and
                Engineering Technology
              </em>
              , 11(5), 2904–2910. https://doi.org/10.22214/ijraset.2023.51565
            </p>

            <p>
              Lin, X., Xu, Y., Pan, X., Xu, J., Ding, Y., Sun, X., Song, X.,
              Ren, Y., & Shan, P.-F. (2020). Global, regional, and national
              burden and trend of diabetes in 195 countries and territories: An
              analysis from 1990 to 2025. <em>Scientific Reports</em>, 10(1),
              14790. https://doi.org/10.1038/s41598-020-71908-9
            </p>

            <p>
              Marupura, B., Vaibhav, S. K., V. G., N., & G., S. (2024). Web
              Application for Diabetes Prediction using Machine Learning
              Techniques. <em>WSEAS TRANSACTIONS ON COMPUTERS</em>, 23, 237–244.
              https://doi.org/10.37394/23205.2024.23.23
            </p>

            <p>
              Ong, K. L., Stafford, L. K., McLaughlin, S. A., Boyko, E. J.,
              Vollset, S. E., Smith, A. E., Dalton, B. E., Duprey, J., Cruz, J.
              A., Hagins, H., Lindstedt, P. A., Aali, A., Abate, Y. H., Abate,
              M. D., Abbasian, M., Abbasi-Kangevari, Z., Abbasi-Kangevari, M.,
              ElHafeez, S. A., Abd-Rabu, R., … Vos, T. (2023). Global, regional,
              and national burden of diabetes from 1990 to 2021, with
              projections of prevalence to 2050: A systematic analysis for the
              Global Burden of Disease Study 2021. <em>The Lancet</em>,
              402(10397), 203–234. https://doi.org/10.1016/S0140-6736(23)01301-6
            </p>

            <p>
              Priande, E., & Zamroni, G. M. (2024). Pengembangan Sistem Prediksi
              Harga Mobil Bekas OLX Menggunakan Algorithma Random Forest. 12(1).
            </p>

            <p>
              Putri, S. U., Irawan, E., & Rizky, F. (2021). Implementasi Data
              Mining Untuk Prediksi Penyakit Diabetes Dengan Algoritma C4.5.{' '}
              <em>
                Kesatria: Jurnal Penerapan Sistem Informasi (Komputer Dan
                Manajemen)
              </em>
              , 2(1), Article 1. https://doi.org/10.30645/kesatria.v2i1.56
            </p>

            <p>
              Religia, Y., Nugroho, A., & Hadikristanto, W. (2021). Analisis
              Perbandingan Algoritma Optimasi pada Random Forest untuk
              Klasifikasi Data Bank Marketing.{' '}
              <em>Jurnal RESTI (Rekayasa Sistem Dan Teknologi Informasi)</em>,
              5(1), Article 1. https://doi.org/10.29207/resti.v5i1.2813
            </p>

            <p>
              Samet, S., Laouar, M. R., Bendib, I., & Eom, S. (2022). Analysis
              and Prediction of Diabetes Disease Using Machine Learning Methods.{' '}
              <em>
                International Journal of Decision Support System Technology
              </em>
              , 14(1), 1–19. https://doi.org/10.4018/IJDSST.303943
            </p>

            <p>
              Sarica, A., Cerasa, A., & Quattrone, A. (2017). Random forest
              algorithm for the classification of neuroimaging data in
              alzheimer's disease: A systematic review.
              <em>Frontiers in Aging Neuroscience</em>, Volume 9-2017.
              https://doi.org/10.3389/fnagi.2017.00329
            </p>

            <p>
              Silalahi, A. P., Simanullang, H. G., & Hutapea, M. I. (2023).
              Supervised Learning Metode K-Nearest Neighbor Untuk Prediksi
              Diabetes Pada Wanita.{' '}
              <em>
                METHOMIKA: Jurnal Manajemen Informatika & Komputerisasi
                Akuntansi
              </em>
              , 7(1), Article 1.
              https://doi.org/10.46880/jmika.Vol7No1.pp144-149
            </p>

            <p>
              Silitonga, Y. S. M., Fitri, Z., Karimah, A. D., Hendratno, E. F.,
              Devanka, K. A. A., Puryani, N. Z., Hikmah, W. N., Larasari, A., &
              Satyasari, D. (2024). Pendekatan Kedokteran Keluarga pada Diabetes
              Mellitus dengan Komplikasi Kronis.
            </p>

            <p>
              Siti Kalimah. (2022).{' '}
              <em>
                Klasifikasi Penyakit Diabetes Menggunakan Metode Decision Tree
                dan Random Forest
              </em>{' '}
              [Skripsi]. Universitas Sriwijaya.
              http://repository.unsri.ac.id/id/eprint/81689
            </p>

            <p>
              Soeatmadji, D. W., Rosandi, R., Saraswati, M. R., Sibarani, R. P.,
              & Tarigan, W. O. (2023). Clinicodemographic Profile and Outcomes
              of Type 2 Diabetes Mellitus in the Indonesian Cohort of DISCOVER:
              A 3-Year Prospective Cohort Study.{' '}
              <em>Journal of the ASEAN Federation of Endocrine Societies</em>,
              38(1), 68–74. https://doi.org/10.15605/jafes.038.01.10
            </p>

            <p>
              Wahidin, M., Achadi, A., Besral, B., Kosen, S., Nadjib, M.,
              Nurwahyuni, A., Ronoatmodjo, S., Rahajeng, E., Pane, M., & Kusuma,
              D. (2024). Projection of diabetes morbidity and mortality till
              2045 in Indonesia based on risk factors and NCD prevention and
              control programs. <em>Scientific Reports</em>, 14(1), 5424.
              https://doi.org/10.1038/s41598-024-54563-2
            </p>

            <p>
              Wijoyo, A., Saputra, A. Y., Ristanti, S., Sya'Ban, S. R., Amalia,
              M., & Febriansyah, R. (2024). Pembelajaran Machine Learning. 3(2).
            </p>

            <p>
              Zhang, J., Zhang, Z., Zhang, K., Ge, X., Sun, R., & Zhai, X.
              (2023). Early detection of type 2 diabetes risk: Limitations of
              current diagnostic criteria. <em>Frontiers in Endocrinology</em>,
              14, 1260623. https://doi.org/10.3389/fendo.2023.1260623
            </p>
          </div>

          {/* <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs text-blue-900">
              <strong>Total: 26 referensi</strong> dari berbagai sumber
              terpercaya termasuk jurnal internasional, konferensi, dan
              penelitian tesis/skripsi yang mendukung pengembangan sistem
              prediksi diabetes ini.
            </p>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
