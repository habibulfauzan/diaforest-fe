import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section
      id="features"
      className="relative bg-white/50 px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <span className="font-hand text-primary text-xl">
            Mengapa deteksi dini penting
          </span>
          <h2 className="font-heading text-foreground text-4xl font-bold md:text-5xl">
            Tentang Sistem Ini
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -10 }}
            data-testid="card-feature-accurate"
          >
            <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex h-full flex-col p-0">
                <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
                  <CheckCircle className="text-primary h-32 w-32" />
                </div>
                <div className="flex flex-1 flex-col items-center p-8 text-center">
                  <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
                    Akurasi Tinggi
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Model Random Forest yang dioptimasi dengan akurasi 95,8%
                    (weighted average 96%) berdasarkan dataset 100.000.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -10 }}
            data-testid="card-feature-insights"
          >
            <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex h-full flex-col p-0">
                <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
                  <TrendingUp className="text-primary h-32 w-32" />
                </div>
                <div className="flex flex-1 flex-col items-center p-8 text-center">
                  <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
                    Hasil Informatif
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Memahami status kesehatan Anda dengan penjelasan yang mudah
                    dipahami untuk langkah preventif maupun medis yang tepat.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -10 }}
            data-testid="card-feature-private"
          >
            <div className="bg-card h-full overflow-hidden rounded-[2rem] border-none shadow-lg transition-shadow duration-300 hover:shadow-xl">
              <div className="flex h-full flex-col p-0">
                <div className="bg-secondary/30 flex h-48 items-center justify-center p-8">
                  <Shield className="text-primary h-32 w-32" />
                </div>
                <div className="flex flex-1 flex-col items-center p-8 text-center">
                  <h3 className="font-heading text-foreground mb-3 text-2xl font-bold">
                    Gratis & Privat
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Data kesehatan Anda diproses secara real-time. Tanpa
                    pendaftaran dan sepenuhnya gratis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
