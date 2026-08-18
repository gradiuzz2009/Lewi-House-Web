import React from 'react';
import { ScreenId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { GLOBAL_NAV_NODES } from '../data/navigation';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (screen: ScreenId) => {
    onNavigate(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0E1F35] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-display font-extrabold text-lg shadow-md">
                LH
              </div>
              <div>
                <span className="font-display font-extrabold text-xl text-white tracking-tight">
                  Lewi House
                </span>
                <span className="ml-2 text-[10px] uppercase font-bold tracking-widest bg-emerald-900/80 text-emerald-300 px-2 py-0.5 rounded">
                  Syariah
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Affordable, clean, and peaceful syariah accommodation in Medan Petisah. Equipped with 24-hour service, split AC, and free high-speed Wi-Fi.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1 text-xs bg-slate-800/90 text-amber-300 px-2.5 py-1 rounded-md border border-slate-700 font-semibold">
                ⭐️ 4.8 / 5.0 Rating
              </span>
              <span className="inline-flex items-center gap-1 text-xs bg-slate-800/90 text-emerald-400 px-2.5 py-1 rounded-md border border-slate-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Syariah Certified
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (Canonical Standard Labels) */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm tracking-wide uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {GLOBAL_NAV_NODES.map((node) => (
                <li key={node.id}>
                  <button 
                    onClick={() => handleNav(node.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-300 hover:underline"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-400" />
                    <span>{node.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm tracking-wide uppercase">
              Location & Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phoneRaw}`} className="text-white hover:underline font-semibold">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Front Desk: 24 Hours Open Everyday</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Booking & Reservation with Clear Visual Hierarchy */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-sm tracking-wide uppercase">
              Book Your Stay
            </h4>
            <p className="text-xs text-slate-400">
              Guaranteed best available rates with instant confirmation and 24-hour check-in.
            </p>
            <div className="space-y-2.5 pt-1">
              {/* Single Dominant Primary Booking Path */}
              <button
                onClick={onOpenBooking}
                className="w-full bg-[#FF5E1F] hover:bg-[#E54B0F] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
              >
                <span>Book Online (Agoda 8.8★ / Traveloka)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              {/* Subordinate Secondary Inquiries Path */}
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-200 font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
              >
                <span>WhatsApp 24/7 Front Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Lewi House Syariah Medan. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Check-In: 14:00 WIB</span>
            <span>•</span>
            <span>Check-Out: 12:00 WIB</span>
            <span>•</span>
            <span>Medan Petisah, North Sumatra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
