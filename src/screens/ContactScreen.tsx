import React, { useState } from 'react';
import { ScreenId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Room Inquiry & Availability');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = `Halo Lewi House Syariah,%0A%0ASaya ${encodeURIComponent(name)} (${encodeURIComponent(phone)}) ingin menanyakan tentang: ${encodeURIComponent(subject)}.%0A%0APesan: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/6282168819722?text=${waText}`, '_blank');
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage('');
    }, 4000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1A365D] border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
          <Phone className="w-3.5 h-3.5 text-[#1A365D]" />
          <span>24/7 Guest Assistance</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#1A365D] tracking-tight">
          Get in Touch with Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Have questions about room availability, syariah verification, late night check-in, or route directions? We are here to assist 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1A365D] text-white rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="font-display font-bold text-xl text-white">
              Lewi House Syariah Medan
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Quiet syariah accommodation in Medan Petisah, minutes from Plaza Medan Fair and Stasiun Medan.
            </p>

            <div className="space-y-4 text-xs pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white">Address:</h5>
                  <p className="text-slate-300 mt-0.5">{HOTEL_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white">Telephone / WhatsApp:</h5>
                  <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-amber-300 hover:underline font-bold block mt-0.5">
                    {HOTEL_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-300 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-white">Operating Hours:</h5>
                  <p className="text-slate-300 mt-0.5">Front Desk: 24 Hours Non-Stop Everyday</p>
                  <p className="text-slate-300">Check-In: 14:00 WIB • Check-Out: 12:00 WIB</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 flex flex-col gap-2.5">
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp (Instant Reply)</span>
              </a>

              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white/15 hover:bg-white/25 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all border border-white/20"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-6">
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900">
              Send us a Message
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill in the form below and we will connect you directly to our front desk team.
            </p>
          </div>

          {sent ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-display font-bold text-lg text-emerald-900">Message Sent!</h4>
              <p className="text-xs text-emerald-800">
                Your inquiry has been routed to our WhatsApp reception channel. Our staff will reply promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Budi Santoso"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0812-9876-5432"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="e.g. budi@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden bg-white"
                  >
                    <option value="Room Inquiry & Availability">Room Inquiry & Availability</option>
                    <option value="Late Check-in Notice">Late Night Check-in Notice</option>
                    <option value="Directions & Location Help">Directions & Location Help</option>
                    <option value="Syariah Policy Verification">Syariah Policy Verification</option>
                    <option value="Group / Extended Stay">Group / Extended Stay</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Type your question or request here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl p-3 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1A365D] hover:bg-[#2B4E7D] text-white font-bold py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Front Desk</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
