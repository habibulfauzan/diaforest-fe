import { motion } from 'framer-motion';
import {
  CheckCircle,
  Lock,
  Clock,
  Users,
  Activity,
  Shield,
  TrendingUp,
  Heart,
} from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center overflow-hidden px-6 pb-12 md:flex-row md:px-12 lg:px-24"
    >
      {/* Decorative Blobs */}
      <div className="bg-primary/10 absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full blur-3xl" />
      <div className="bg-accent/30 absolute right-[-5%] bottom-[10%] -z-10 h-[400px] w-[400px] rounded-full blur-3xl" />

      <div className="relative z-10 w-full space-y-8 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-hand text-primary mb-4 inline-block -rotate-2 text-2xl">
            Deteksi Dini Diabetes
          </span>
          <h1 className="font-heading text-foreground mb-6 text-5xl leading-[1.1] font-bold md:text-7xl">
            Ketahui{' '}
            <span className="text-primary relative inline-block">
              Status Diabetes
              <svg
                className="text-accent absolute -bottom-1 left-0 -z-10 h-3 w-full"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                />
              </svg>
            </span>
            <br />
            Sejak Dini
          </h1>
          <p className="text-muted-foreground md:text-md max-w-md text-sm leading-relaxed">
            Sistem deteksi dini diabetes berbasis algoritma Random Forest dengan
            akurasi 95,8%. Hasil dalam hitungan detik, gratis, dan mudah
            digunakan.
          </p>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {[
              {
                icon: CheckCircle,
                label: 'Akurasi 95,8%',
                color: 'text-purple-600',
              },
              { icon: Lock, label: 'Privat & Gratis', color: 'text-green-600' },
              { icon: Clock, label: 'Cepat', color: 'text-blue-600' },
              {
                icon: Users,
                label: 'Mudah Digunakan',
                color: 'text-orange-600',
              },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="bg-secondary/30 border-border/40 flex items-center justify-center gap-2 rounded-full border px-3 py-2"
              >
                <badge.icon
                  className={`h-4 w-4 flex-shrink-0 ${badge.color}`}
                />
                <span className="text-foreground text-xs font-semibold">
                  {badge.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mt-12 w-full md:mt-0 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10"
        >
          <div className="from-primary/20 to-secondary/30 flex h-auto w-full items-center justify-center rounded-[3rem] bg-gradient-to-br p-16 shadow-2xl">
            <Activity className="text-primary h-64 w-64 opacity-50" />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="bg-card absolute -bottom-8 -left-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:left-10"
          >
            <div className="rounded-full bg-green-100 p-2 text-green-600">
              <CheckCircle size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">Machine Learning</p>
              <p className="text-muted-foreground text-xs">Random Forest</p>
            </div>
          </motion.div>

          {/* Second Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="bg-card absolute -top-4 -right-4 flex max-w-[200px] items-center gap-3 rounded-2xl p-4 shadow-lg md:-right-8"
          >
            <div className="rounded-full bg-blue-100 p-2 text-blue-600">
              <Shield size={20} />
            </div>
            <div>
              <p className="text-sm font-bold">100% Aman</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
