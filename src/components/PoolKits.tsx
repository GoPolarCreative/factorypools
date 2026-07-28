import { ChevronRight } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'Premium Fibreglass Pool Shells',
    description: 'Factory-direct fibreglass pool shells in a range of shapes and sizes, built to last and ready to install.',
    image: '/images/Image_3.png',
  },
  {
    name: 'Hayward Filtration Equipment & Heat Pumps',
    description: 'Genuine Hayward filtration systems and energy-efficient heat pumps to keep your pool crystal clear and comfortable year-round.',
    image: '/images/Screenshot_2026-07-26_073624.png',
  },
];

export default function PoolKits() {
  return (
    <section id="pool-kits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-lime-600 text-sm font-heading font-bold uppercase tracking-wider">Our Products</span>
          </div>
          <h2 className="font-heading font-black text-navy-900 text-4xl uppercase mb-4">
            Our <span className="text-lime-500">Products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PRODUCTS.map(({ name, description, image }) => (
            <div
              key={name}
              className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={image} alt={name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/40" />
              </div>

              <div className="p-8 bg-white">
                <h3 className="font-heading font-black text-2xl uppercase mb-3 text-navy-900">{name}</h3>
                <p className="font-body text-navy-600 text-base mb-6">{description}</p>

                <button
                  onClick={() => document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full font-heading font-bold uppercase tracking-wide py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] bg-navy-900 hover:bg-navy-800 text-white"
                >
                  Get a Quote
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
