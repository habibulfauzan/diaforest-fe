import { motion } from 'framer-motion';

const FeatureImportance = () => {
  const features = [
    {
      name: 'HbA1c Level',
      description: 'Rata-rata gula darah 2-3 bulan',
      importance: 100,
      color: 'from-blue-500 to-blue-600',
      icon: '🩸',
    },
    {
      name: 'Blood Glucose Level',
      description: 'Kadar gula darah saat ini',
      importance: 85,
      color: 'from-purple-500 to-purple-600',
      icon: '💉',
    },
    {
      name: 'Age (Usia)',
      description: 'Faktor usia pasien',
      importance: 55,
      color: 'from-green-500 to-green-600',
      icon: '👤',
    },
    {
      name: 'BMI',
      description: 'Body Mass Index',
      importance: 35,
      color: 'from-yellow-500 to-yellow-600',
      icon: '⚖️',
    },
    {
      name: 'Smoking History',
      description: 'Riwayat merokok',
      importance: 12,
      color: 'from-orange-500 to-orange-600',
      icon: '🚬',
    },
    {
      name: 'Hypertension',
      description: 'Tekanan darah tinggi',
      importance: 8,
      color: 'from-red-400 to-red-500',
      icon: '💓',
    },
    {
      name: 'Heart Disease',
      description: 'Penyakit jantung',
      importance: 6,
      color: 'from-pink-400 to-pink-500',
      icon: '❤️',
    },
  ];

  return (
    <section
      id="community"
      className="from-secondary/10 to-background relative bg-gradient-to-b px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Apa yang mempengaruhi prediksi
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Feature Importance
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            Urutan fitur berdasarkan tingkat kepentingan dalam model Random
            Forest ini. Semakin tinggi nilai, semakin besar pengaruhnya terhadap
            hasil prediksi diabetes.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="bg-card overflow-hidden rounded-2xl border-none shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-secondary/30 flex h-12 w-12 items-center justify-center rounded-full text-2xl">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-heading text-foreground text-lg font-bold">
                          {idx + 1}. {feature.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-heading text-primary text-2xl font-bold">
                        {feature.importance}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        Importance
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="bg-secondary/20 relative h-4 w-full overflow-hidden rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${feature.importance}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 + 0.3 }}
                      className={`h-full bg-gradient-to-r ${feature.color} rounded-full shadow-lg`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-6"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl">
              💡
            </div>
            <div>
              <h4 className="font-heading mb-2 font-bold text-blue-900">
                Interpretasi Feature Importance
              </h4>
              <p className="text-sm leading-relaxed text-blue-800">
                <strong>HbA1c Level</strong> dan{' '}
                <strong>Blood Glucose Level</strong> adalah indikator terkuat
                untuk memprediksi diabetes karena mereka secara langsung
                mengukur kadar gula dalam darah. <strong>Usia</strong> dan{' '}
                <strong>BMI</strong> juga berperan penting karena terkait dengan
                faktor risiko metabolik. Faktor gaya hidup seperti merokok dan
                kondisi kesehatan lain memiliki pengaruh yang lebih kecil namun
                tetap diperhitungkan dalam model.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureImportance;
