import { Phone, Mail, MapPin } from 'lucide-react';

const SERVICES = [
  'Essential Pool Kit',
  'Premium Pool Kit',
  'Complete Pool Kit',
  'Pool Shells',
  'Filtration Systems',
  'Pool Accessories',
];

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Pool Kits', href: '#pool-kits' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const handleNav = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/AFDLogo.png" alt="Aussie Factory Direct Pool Kits" className="h-16 w-auto mb-4 bg-white rounded-lg p-2" />
            <p className="text-white/60 font-body text-sm leading-relaxed mb-4">
              Premium fibreglass pool kits supplied factory direct across Australia. Cut out the middleman and save thousands on your dream backyard pool.
            </p>
            <div className="text-xs text-white/40 font-body uppercase tracking-wide">The Fibreglass Pool Group Pty Ltd</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4 text-lime-400">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <button onClick={() => handleNav(l.href)} className="text-white/60 hover:text-lime-400 font-body text-sm transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4 text-lime-400">Our Products</h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button onClick={() => handleNav('#pool-kits')} className="text-white/60 hover:text-lime-400 font-body text-sm transition-colors text-left">
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm uppercase tracking-wide mb-4 text-lime-400">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:1800 983 887" className="flex items-start gap-3 text-white/60 hover:text-lime-400 transition-colors">
                  <Phone size={16} className="text-lime-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">1800 983 887</span>
                </a>
              </li>
              <li>
                <a href="mailto:admin@aussiefactorydirectpoolkits.com.au" className="flex items-start gap-3 text-white/60 hover:text-lime-400 transition-colors">
                  <Mail size={16} className="text-lime-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm break-all">admin@aussiefactorydirectpoolkits.com.au</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={16} className="text-lime-400 mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm">Delivering Australia Wide</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 font-body text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Aussie Factory Direct Pool Kits. All rights reserved.
          </p>
          <p className="text-white/40 font-body text-xs">
            Website by <a href="https://www.itscold.com.au" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-300 font-semibold transition-colors">Go Polar</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
