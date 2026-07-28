const IMAGES = [
  { src: '/images/Image_2.png', alt: 'Pool with glass fencing and outdoor entertaining area at dusk' },
  { src: '/images/Image_3.png', alt: 'Pool with water feature wall and tropical landscaping' },
  { src: '/images/Image_4.png', alt: 'Pool with illuminated water feature and outdoor dining at night' },
  { src: '/images/Image_5 copy.png', alt: 'Pool at sunset with timber deck and lush garden lighting' },
  { src: '/images/496238857_1282621497201535_1546139421524957870_n.jpg', alt: 'Pool with glass fencing and outdoor entertaining at dusk' },
  { src: '/images/Image_7.png', alt: 'Pool with water feature and illuminated garden at twilight' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-lime-600 text-sm font-heading font-bold uppercase tracking-wider">Inspiration</span>
          </div>
          <h2 className="font-heading font-black text-navy-900 text-4xl uppercase mb-4">
            Project <span className="text-lime-500">Gallery</span>
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
