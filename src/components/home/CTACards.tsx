import { motion } from 'framer-motion';
import { Activity, BookOpen, Compass } from 'lucide-react';

const CTACards = () => {
  const ctaItems = [
    {
      id: 'cta-start-app',
      title: 'Mulai Prediksi',
      description:
        'Dapatkan hasil prediksi risiko diabetes personal Anda hanya dalam hitungan detik.',
      href: '/app',
      testId: 'button-cta-app',
      icon: <Activity className="text-primary h-8 w-8" />,
    },
    {
      id: 'cta-guide',
      title: 'Pelajari Diabetes',
      description:
        'Memahami diabetes, faktor risiko, dan pentingnya deteksi dini untuk kesehatan yang lebih baik.',
      href: '/guide',
      testId: 'button-cta-guide',
      icon: <BookOpen className="text-primary h-8 w-8" />,
    },
    {
      id: 'cta-explore',
      title: 'Tips Pencegahan',
      description:
        'Temukan perubahan gaya hidup, kebiasaan sehat, dan sumber daya untuk mengurangi risiko diabetes.',
      href: '/explore',
      testId: 'button-cta-explore',
      icon: <Compass className="text-primary h-8 w-8" />,
    },
  ];

  return (
    <section id="cta" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-4 text-center"
        >
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Siap Cek Kesehatan Anda?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Pilih langkah Anda dan mulai perjalanan menuju hidup lebih sehat
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ctaItems.map((cta, idx) => (
            <motion.div
              key={cta.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-card flex h-full flex-col items-center gap-4 rounded-[2rem] p-8 text-center shadow-lg transition-shadow hover:shadow-xl"
            >
              <div className="bg-primary/15 flex h-16 w-16 items-center justify-center rounded-full">
                {cta.icon}
              </div>
              <h3 className="font-heading text-foreground text-2xl font-bold">
                {cta.title}
              </h3>
              <p className="text-muted-foreground flex-1">{cta.description}</p>
              <a href={cta.href}>
                <button
                  data-testid={cta.testId}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer rounded-full px-6 py-2 text-sm font-bold shadow-md transition-colors"
                >
                  Mulai Sekarang
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTACards;
