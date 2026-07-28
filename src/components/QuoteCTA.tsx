import { ChevronRight, Phone, Mail } from 'lucide-react';

export default function QuoteCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/98566e2c-19b4-4085-9744-faa22f7eca56.png"
          alt="Beautiful pool with outdoor entertaining area at twilight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading font-black text-white text-3xl md:text-5xl uppercase leading-tight mb-4">
          Ready to Build Your<br />
          <span className="text-lime-400">Dream Backyard Pool?</span>
        </h2>
        <p className="text-white/80 font-body text-lg mb-8 max-w-2xl mx-auto">
          Get your free, no-obligation quote today and discover how much you can save with a factory direct fibreglass pool kit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-lime-400 hover:bg-lime-300 text-navy-900 font-heading font-bold uppercase tracking-wide px-10 py-4 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Get Your Free Quote
            <ChevronRight size={20} />
          </button>
          <a
            href="tel:1800979764"
            className="border-2 border-white/40 hover:border-lime-400 text-white hover:text-lime-400 font-heading font-bold uppercase tracking-wide px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-200"
          >
            <Phone size={18} />
            1800 979 764
          </a>
          <a
            href="mailto:admin@aussiefactorydirectpoolkits.com.au"
            className="border-2 border-white/40 hover:border-lime-400 text-white hover:text-lime-400 font-heading font-bold uppercase tracking-wide px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-all duration-200 text-sm whitespace-nowrap"
          >
            <Mail size={18} />
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
