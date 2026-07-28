export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Single image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/Image_5.png"
              alt="Beautiful backyard fibreglass pool at sunset"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-lime-600 text-sm font-heading font-bold uppercase tracking-wider">About Us</span>
            </div>
            <h2 className="font-heading font-black text-navy-900 text-4xl uppercase leading-tight mb-6">
              Welcome to Aussie<br />
              <span className="text-lime-500">Factory Direct</span><br />
              Pool Kits
            </h2>
            <p className="text-navy-700 font-body text-lg leading-relaxed mb-6">
              We supply high quality fibreglass pool kits direct from the factory to you, cutting out the middleman so you save thousands. Our kits include everything you need for a stunning, long-lasting pool that you can install yourself or with your own trades.
            </p>
            <p className="text-navy-600 font-body mb-8">
              Australia wide delivery. Premium products. Unbeatable value.
            </p>

            <button
              onClick={() => document.querySelector('#pool-kits')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-navy-900 hover:bg-navy-800 text-white font-heading font-bold uppercase tracking-wide px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              View Our Pool Kits
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
