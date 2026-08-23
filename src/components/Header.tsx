import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pool Kits', href: '#pool-kits' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Quote', href: '#quote' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (!menuOpen) {
        if (y > lastY && y > 120) setHidden(true);
        else setHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      {/* Top bar */}
      <div className="bg-navy-950 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-end items-center gap-6">
          <a href="tel:1800 983 997" className="flex items-center gap-2 text-white text-sm hover:text-lime-400 transition-colors font-body">
            <Phone size={14} className="text-lime-400" />
            <span>1800 983 997</span>
          </a>
          <a href="mailto:admin@aussiefactorydirectpoolkits.com.au" className="flex items-center gap-2 text-white text-sm hover:text-lime-400 transition-colors font-body">
            <Mail size={14} className="text-lime-400" />
            <span>admin@aussiefactorydirectpoolkits.com.au</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => handleNav('#home')} className="flex-shrink-0">
          <img
            src="/AFDLogo.png"
            alt="Aussie Factory Direct Pool Kits"
            className="h-24 w-auto"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm font-heading font-semibold text-navy-900 hover:text-lime-600 uppercase tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:1800 983 997"
            className="ml-4 bg-lime-400 hover:bg-lime-300 text-navy-900 font-heading font-bold text-sm uppercase tracking-wide px-5 py-2.5 rounded transition-all duration-200 flex items-center gap-2"
          >
            <Phone size={14} />
            1800 983 997
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <a href="tel:1800 983 997" className="bg-lime-400 text-navy-900 p-2 rounded">
            <Phone size={18} />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-navy-900 p-2">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4 shadow-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-6 py-3 text-navy-900 hover:text-lime-600 hover:bg-gray-50 font-heading font-semibold uppercase text-sm tracking-wide transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 pt-3 space-y-2">
            <a href="mailto:admin@aussiefactorydirectpoolkits.com.au" className="flex items-center gap-2 text-navy-900 text-sm font-body">
              <Mail size={14} className="text-lime-600" />
              admin@aussiefactorydirectpoolkits.com.au
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
