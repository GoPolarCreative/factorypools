const STEPS = [
  {
    num: 1,
    title: 'Pick a Pool',
    subtitle: null,
    desc: 'Choose from a range of fibreglass pool designs to suit your lifestyle and backyard.',
    image: '/images/1.png',
    imageAlt: 'Fibreglass pool shell',
  },
  {
    num: 2,
    title: 'Pick Equipment',
    subtitle: 'Standard or Premium',
    desc: 'Choose your filtration system – reliable standard or upgraded premium options.',
    image: '/images/2.png',
    imageAlt: 'Pool filtration equipment',
  },
  {
    num: 3,
    title: 'Pick a Heater',
    subtitle: null,
    desc: 'Select the perfect heater to enjoy your pool all year round.',
    image: '/images/3.png',
    imageAlt: 'Pool heat pumps',
  },
  {
    num: 4,
    title: 'Pick a Robot',
    subtitle: null,
    desc: 'Add a robotic cleaner for sparkling clean water with minimal effort.',
    image: '/images/4.png',
    imageAlt: 'Robotic pool cleaner',
  },
  {
    num: 5,
    title: 'Add Your Details',
    subtitle: null,
    desc: 'Add your name, address and email to receive your personalised quote.',
    image: '/images/5.png',
    imageAlt: 'Online quote form on laptop and phone',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="font-heading font-black uppercase text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-lime-500">5 Simple Steps</span>{' '}
            <span className="text-navy-900">to Your New Pool</span>
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {STEPS.map(({ num, title, subtitle, desc, image, imageAlt }) => (
            <div
              key={num}
              className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step number badge + title row */}
              <div className="flex items-center gap-3 mb-4 w-full">
                <div className="w-10 h-10 flex-shrink-0 bg-lime-400 rounded-full flex items-center justify-center shadow-md">
                  <span className="font-heading font-black text-navy-900 text-xl leading-none">{num}</span>
                </div>
                <div className="text-left">
                  <p className="font-heading font-black text-navy-900 uppercase text-sm leading-tight">{title}</p>
                  {subtitle && (
                    <p className="font-heading font-black text-navy-900 uppercase text-sm leading-tight">{subtitle}</p>
                  )}
                </div>
              </div>

              {/* Product image */}
              <div className="w-full flex items-center justify-center bg-white rounded-xl p-4 mb-4 min-h-[140px]">
                <img
                  src={image}
                  alt={imageAlt}
                  className="max-h-32 max-w-full object-contain"
                />
              </div>

              {/* Description */}
              <p className="text-navy-600 font-body text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.querySelector('#quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-lime-400 hover:bg-lime-300 text-navy-900 font-heading font-bold uppercase tracking-wide px-10 py-4 rounded-lg transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
          >
            Get Your Personalised Quote
          </button>
        </div>

        {/* Brochure image */}
        <div className="mt-10 flex justify-center">
          <img
            src="/images/Picture1.jpg"
            alt="5 simple steps to your new pool"
            className="w-full max-w-3xl rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
