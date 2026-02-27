import { motion } from 'framer-motion';
import { Activity, BookOpen, Users, Lock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="from-secondary/5 via-background to-primary/5 border-border/40 relative border-t bg-gradient-to-br px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
          {/* Left Column: Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-3"
          >
            <div className="flex items-center gap-3">
              <Activity className="text-primary h-7 w-7" />
              <h3 className="font-heading text-foreground text-lg font-bold">
                DiaForest
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Sistem prediksi diabetes berbasis Machine Learning untuk deteksi
              dini dan pencegahan.
            </p>
            <p className="text-muted-foreground text-xs">
              Tugas Akhir - UIN Sultan Syarif Kasim Riau
            </p>
          </motion.div>

          {/* Center Column: Links by Category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Learn */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Pelajari</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/guide"
                  data-testid="link-footer-guide"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Tentang Diabetes
                </a>
                <a
                  href="/faq"
                  data-testid="link-footer-faq"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Dukungan</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/about"
                  data-testid="link-footer-about-community"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Tentang Kami
                </a>
              </div>
            </div>

            {/* Legal */}
            {/* <div className="space-y-3">
              <div className="text-primary flex items-center gap-2">
                <Lock className="h-5 w-5" />
                <span className="font-heading text-sm font-bold">Legal</span>
              </div>
              <div className="flex flex-col gap-2 pl-7">
                <a
                  href="/privacy"
                  data-testid="link-footer-privacy"
                  className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                >
                  Kebijakan Privasi
                </a>
              </div>
            </div> */}
          </motion.div>

          {/* Right Column: CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="space-y-2">
              <h4 className="font-heading text-foreground font-bold">
                Mulai Prediksi Sekarang
              </h4>
            </div>
            <a href="/app" className="w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-footer-cta"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full rounded-full px-6 py-3 font-bold shadow-lg transition-all hover:shadow-xl"
              >
                Mulai Sekarang
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-border/40 my-8 border-t" />

        {/* Bottom: Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground/60 flex flex-col items-center justify-between gap-4 text-center text-xs md:flex-row"
        >
          <div className="space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Habibul Fauzan - UIN Sultan
              Syarif Kasim Riau
            </p>
            {/* <p className="text-muted-foreground/50 text-[10px]">
              Berdasarkan Tugas Akhir:{' '}
              <span className="italic">
                Implementasi Klasifikasi Penyakit Diabetes Menggunakan Algoritma
                Random Forest
              </span>
            </p> */}
          </div>
          <p className="flex items-center justify-center gap-1">
            Dibuat dengan <Heart className="h-3 w-3 text-red-400" /> untuk
            kesehatan Anda
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
