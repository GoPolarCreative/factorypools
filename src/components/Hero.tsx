import { CheckCircle, ChevronRight, Phone, Mail } from 'lucide-react';
import QuoteForm from './QuoteForm';

const BENEFITS = [
  'Factory Direct Prices',
  'Premium Quality Pool Shells',
  'Australia Wide Delivery',
  'Build It Yourself or Use Your Trades',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-40 md:pt-52 pb-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/ae016648-046d-4abf-8dca-c1191a778ca4.png"
          alt="Beautiful fibreglass swimming pool"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Headline + Benefits */}
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-400/40 rounded-full px-4 py-1.5 mb-6">
              <span className="text-lime-400 text-sm font-heading font-bold uppercase tracking-wider">We Deliver. You Build. You Save.</span>
            </div>
            <h1 className="font-heading font-black text-white uppercase leading-tight mb-4">
              <span className="block text-4xl md:text-5xl xl:text-6xl">Save Thousands</span>
              <span className="block text-4xl md:text-5xl xl:text-6xl text-lime-400">On Your New Pool</span>
              <span className="block text-2xl md:text-3xl xl:text-4xl mt-2">With Our DIY Pool Kits</span>
            </h1>
            <p className="text-white/80 font-body text-lg mb-8 max-w-lg">
              Premium fibreglass pool kits supplied factory direct across Australia. Cut out the middleman and save thousands on a stunning, long-lasting pool.
            </p>
            <ul className="space-y-3 mb-8">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white font-body">
                  <CheckCircle size={20} className="text-lime-400 flex-shrink-0" />
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-lime-400 hover:bg-lime-300 text-navy-900 font-heading font-bold uppercase tracking-wide px-8 py-4 rounded flex items-center gap-2 transition-all duration-200 hover:scale-105"
              >
                Get Your Free Quote
                <ChevronRight size={18} />
              </button>
              <a
                href="tel:1800 983 887"
                className="border-2 border-white/50 hover:border-lime-400 text-white hover:text-lime-400 font-heading font-bold uppercase tracking-wide px-8 py-4 rounded flex items-center gap-2 transition-all duration-200"
              >
                <Phone size={18} />
                1800 983 887
              </a>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div id="quote-form" className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <QuoteForm />
            <div className="mt-5 pt-5 border-t border-gray-100 grid grid-cols-2 gap-3">
              <a href="tel:1800 983 887" className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white rounded-lg px-3 py-2.5 transition-colors">
                <Phone size={16} className="text-lime-400 flex-shrink-0" />
                <div>
                  <div className="font-heading font-bold text-xs">1800 983 887</div>
                  <div className="text-white/60 text-xs font-body">Call us now</div>
                </div>
              </a>
              <a href="mailto:admin@aussiefactorydirectpoolkits.com.au" className="flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white rounded-lg px-3 py-2.5 transition-colors">
                <Mail size={16} className="text-lime-400 flex-shrink-0" />
                <div>
                  <div className="font-heading font-bold text-xs">Email Us</div>
                  <div className="text-white/60 text-xs font-body">Quick response</div>
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 30C1200 70 960 10 720 40C480 70 240 20 0 50L0 80Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
