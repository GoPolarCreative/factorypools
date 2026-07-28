import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import PoolKits from './components/PoolKits';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import QuoteCTA from './components/QuoteCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-body bg-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <PoolKits />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        <QuoteCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
