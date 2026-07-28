import { DollarSign, Shield, Truck, Headphones } from 'lucide-react';

const REASONS = [
  {
    icon: DollarSign,
    title: 'Factory Direct Prices',
    desc: 'Save thousands by buying direct from the factory.',
  },
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'High quality pools and equipment built to last. Every kit meets Australian standards.',
  },
  {
    icon: Truck,
    title: 'Australia Wide Delivery',
    desc: 'Fast, safe delivery right to your door anywhere in Australia.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: "We're here to help every step of the way.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-400/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-lime-400 text-sm font-heading font-bold uppercase tracking-wider">Our Advantage</span>
          </div>
          <h2 className="font-heading font-black text-white text-4xl uppercase mb-4">
            Why Choose <span className="text-lime-400">Aussie Factory Direct?</span>
          </h2>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            We're not just selling pool kits. We're delivering the dream of a backyard pool at a price that makes sense.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-navy-800/50 hover:bg-navy-800 border border-navy-700 hover:border-lime-400/40 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-lime-400/10 group-hover:bg-lime-400/20 border border-lime-400/20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <Icon size={26} className="text-lime-400" />
              </div>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wide mb-2">{title}</h3>
              <p className="text-white/60 font-body text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 gap-6 max-w-md mx-auto">
          {[
            { value: '100%', label: 'Australian Delivered' },
            { value: 'FREE', label: 'Quotes Available' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center border border-navy-700 rounded-xl p-6">
              <div className="font-heading font-black text-lime-400 text-3xl mb-1">{value}</div>
              <div className="font-heading font-semibold text-white/70 text-sm uppercase tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
