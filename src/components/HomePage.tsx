import Navigation from './home/Navigation';
import Hero from './home/Hero';
import Features from './home/Features';
import FeatureImportance from './home/FeatureImportance';
import QuoteSection from './home/QuoteSection';
import CTACards from './home/CTACards';
import Footer from './home/Footer';

export default function Home() {
  return (
    <div className="bg-background selection:bg-primary/20 selection:text-primary-foreground min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <QuoteSection />
      <CTACards />
      <FeatureImportance />
      <Footer />
    </div>
  );
}

// Export Footer untuk kompatibilitas dengan kode yang mungkin sudah mengimportnya
export { default as Footer } from './home/Footer';
