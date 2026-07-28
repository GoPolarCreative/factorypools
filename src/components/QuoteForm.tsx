import { useState } from 'react';
import { Loader2, CheckCircle, ChevronRight, Check } from 'lucide-react';

const UPGRADE_OPTIONS = [
  'Heat Pump',
  'Automatic Pool Cleaner',
  'LED Lights',
  'Fully Automatic Equipment',
] as const;

const EMPTY_FORM = {
  name: '', phone: '', email: '',
  propertyAddress: '', poolSize: '', deliveryDate: '',
  message: '',
};

const EMPTY_UPGRADES = UPGRADE_OPTIONS.reduce(
  (acc, key) => ({ ...acc, [key]: false }),
  {} as Record<string, boolean>,
);

export default function QuoteForm({ idPrefix = '' }: { idPrefix?: string }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [upgrades, setUpgrades] = useState<Record<string, boolean>>(EMPTY_UPGRADES);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '41dc8f06-09ee-47af-9fd8-68e21a2a1379',
          subject: 'New Contact Form Enquiry - Aussie Factory Direct Pool Kits',
          from_name: form.name,
          ...form,
          upgrades: Object.keys(upgrades).filter((k) => upgrades[k]).join(', ') || 'None',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm(EMPTY_FORM);
        setUpgrades(EMPTY_UPGRADES);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <CheckCircle size={72} className="text-lime-500 mx-auto mb-4" />
        <h3 className="font-heading font-extrabold text-navy-900 text-2xl mb-2 uppercase">Enquiry Sent</h3>
        <p className="text-navy-700 font-body mb-6">Thanks for your enquiry. Our team will be in touch shortly.</p>
        <button onClick={() => setStatus('idle')} className="bg-lime-400 text-navy-900 font-heading font-bold uppercase px-6 py-3 rounded-lg hover:bg-lime-300 transition-colors">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <>
      <h3 className="font-heading font-extrabold text-navy-900 text-2xl uppercase mb-2">Request Your Free Quote</h3>
      <p className="text-navy-600 font-body text-sm mb-6">Fill in the form below and we'll get back to you within one business day.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Full Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Phone <span className="text-red-500">*</span></label>
            <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="Your phone"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
          </div>
          <div>
            <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Email <span className="text-red-500">*</span></label>
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="Your email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Property Address</label>
          <input type="text" name="propertyAddress" value={form.propertyAddress} onChange={handleChange} placeholder="Street, Suburb, State, Postcode"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Pool Size</label>
            <input type="text" name="poolSize" value={form.poolSize} onChange={handleChange} placeholder="e.g. 6m x 3m"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
          </div>
          <div>
            <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Preferred Delivery Date</label>
            <input type="date" name="deliveryDate" value={form.deliveryDate} onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all" />
          </div>
        </div>
        <div>
          <label className="block text-navy-800 font-heading font-semibold text-sm mb-2">Upgrades</label>
          <div className="grid grid-cols-2 gap-3">
            {UPGRADE_OPTIONS.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setUpgrades((prev) => ({ ...prev, [label]: !prev[label] }))}
                className={`flex items-center gap-2 border rounded-lg px-3 py-2.5 text-left text-sm font-body transition-all ${
                  upgrades[label]
                    ? 'border-lime-400 bg-lime-400/10 text-navy-900'
                    : 'border-gray-200 text-navy-600 hover:border-lime-400/50'
                }`}
              >
                <span className={`flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all ${
                  upgrades[label] ? 'border-lime-400 bg-lime-400 text-navy-900' : 'border-gray-300'
                }`}>
                  {upgrades[label] && <Check size={14} strokeWidth={3} />}
                </span>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-navy-800 font-heading font-semibold text-sm mb-1">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your project..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-navy-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all resize-none" />
        </div>
        {status === 'error' && <p className="text-red-500 text-sm font-body">Something went wrong. Please try again or call us.</p>}
        <button type="submit" disabled={status === 'loading'}
          className="w-full bg-lime-400 hover:bg-lime-300 disabled:opacity-70 text-navy-900 font-heading font-bold uppercase tracking-wide py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02]">
          {status === 'loading' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Submit Enquiry <ChevronRight size={18} /></>}
        </button>
      </form>
    </>
  );
}
