import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Ingredients from '@/components/Ingredients';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Ingredients />
      <News />
      <Footer />
    </div>
  );
}
