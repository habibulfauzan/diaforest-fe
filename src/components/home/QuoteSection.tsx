import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section
      id="wisdom"
      className="bg-secondary/20 flex items-center justify-center px-6 py-24 text-center"
    >
      <motion.div
        className="relative max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AlertCircle className="text-primary mx-auto mb-6 h-16 w-16" />
        <h3
          data-testid="text-quote"
          className="font-hand text-foreground/80 text-3xl leading-relaxed md:text-4xl"
        >
          Hampir setengah dari penderita diabetes belum terdiagnosis (Soeatmadji
          et al., 2023). Deteksi dini adalah kunci pencegahan komplikasi.
        </h3>

        <div className="font-heading text-primary mt-8 font-bold">
          Lindungi kesehatan Anda mulai hari ini
        </div>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
