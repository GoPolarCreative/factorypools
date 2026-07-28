import { Phone, Mail, MapPin } from 'lucide-react';
import QuoteForm from './QuoteForm';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left: Contact details */}
          <div>
            <div className="inline-flex items-center gap-2 bg-lime-400/20 border border-lime-400/30 rounded-full px-4 py-1.5 mb-4">
              <span className="text-lime-400 text-sm font-heading font-bold uppercase tracking-wider">Get In Touch</span>
            </div>
            <h2 className="font-heading font-black text-white text-4xl uppercase mb-4">
              Let's Build Your<br />
              <span className="text-lime-400">Dream Pool Together</span>
            </h2>
            <p className="text-white/70 font-body text-lg mb-10">
              Have questions about our pool kits, delivery or installation? Our friendly team is here to help you every step of the way.
            </p>

            <div className="space-y-5">
              <a href="tel:1800979764" className="group flex items-center gap-4 bg-navy-800/50 hover:bg-navy-800 border border-navy-700 rounded-xl p-4 sm:p-5 transition-all min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-lime-400/10 group-hover:bg-lime-400/20 rounded-xl flex items-center justify-center transition-colors">
                  <Phone size={22} className="text-lime-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-xs font-body uppercase tracking-wide">Phone</div>
                  <div className="text-white font-heading font-bold text-base sm:text-lg">1800 979 764</div>
                </div>
              </a>
              <a href="mailto:admin@aussiefactorydirectpoolkits.com.au" className="group flex items-center gap-4 bg-navy-800/50 hover:bg-navy-800 border border-navy-700 rounded-xl p-4 sm:p-5 transition-all min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-lime-400/10 group-hover:bg-lime-400/20 rounded-xl flex items-center justify-center transition-colors">
                  <Mail size={22} className="text-lime-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-xs font-body uppercase tracking-wide">Email</div>
                  <div className="text-white font-heading font-bold text-xs sm:text-base whitespace-nowrap overflow-hidden text-ellipsis">admin@aussiefactorydirectpoolkits.com.au</div>
                </div>
              </a>
              <div className="group flex items-center gap-4 bg-navy-800/50 border border-navy-700 rounded-xl p-4 sm:p-5 min-w-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 bg-lime-400/10 rounded-xl flex items-center justify-center">
                  <MapPin size={22} className="text-lime-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-white/50 text-xs font-body uppercase tracking-wide">Service Area</div>
                  <div className="text-white font-heading font-bold text-base sm:text-lg">Australia Wide</div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-navy-800/30 border border-navy-700 rounded-xl p-5">
              <div className="text-white/50 text-xs font-body uppercase tracking-wide mb-1">Business Hours</div>
              <div className="text-white font-heading font-semibold">Monday to Friday, 8am to 5pm</div>
            </div>
          </div>

          {/* Right: Form */}
          <div id="quote" className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8">
            <QuoteForm />
          </div>

        </div>
      </div>
    </section>
  );
}
