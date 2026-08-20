import React from 'react';
import { ScreenId } from '../types';
import { HOUSE_RULES, HOTEL_INFO, FAQS } from '../data/hotelData';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Clock, 
  IdCard, 
  Ban, 
  VolumeX, 
  HelpCircle, 
  Phone,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface RulesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const RulesScreen: React.FC<RulesScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const getRuleIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-rose-600" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-blue-600" />;
      case 'IdCard':
        return <IdCard className="w-6 h-6 text-indigo-600" />;
      case 'Ban':
        return <Ban className="w-6 h-6 text-amber-600" />;
      case 'VolumeX':
        return <VolumeX className="w-6 h-6 text-purple-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-20 animate-fadeIn">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-emerald-50/60 text-slate-600 border border-emerald-100 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
          <span>Syariah Guidelines & Policies</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#1A365D] tracking-tight leading-tight">
          House Rules & Syariah Policy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          To ensure a peaceful, safe, and family-friendly stay for all guests, please review our house regulations below.
        </p>
      </div>

      {/* Syariah Highlight Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-50 rounded-3xl p-8 sm:p-10 lg:p-12 border border-amber-200 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-bold shrink-0 shadow-md">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-2 py-0.5 rounded">
              Pasangan Suami Istri / Married Couples
            </span>
            <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              Wajib Menunjukkan Bukti Pernikahan Sah
            </h3>
            <p className="text-xs sm:text-sm text-slate-800 leading-[1.6] max-w-2xl">
              Sebagai penginapan syariah, pasangan lawan jenis yang menginap dalam 1 kamar wajib melampirkan <strong>Buku Nikah / Surat Nikah / KTP dengan alamat yang sama</strong> saat registrasi check-in di resepsionis.
            </p>
          </div>
        </div>
      </div>

      {/* 5 Core House Rules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HOUSE_RULES.map((rule) => (
          <div
            key={rule.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                  {getRuleIcon(rule.icon)}
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-900 text-white px-2.5 py-1 rounded-md shadow-xs">
                  {rule.badge}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-slate-900">
                  {rule.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium mt-1 leading-relaxed">
                  {rule.summary}
                </p>
              </div>

              <p className="text-xs text-slate-700 leading-[1.6] pt-1">
                {rule.details}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Standard Hotel Regulation</span>
            </div>
          </div>
        ))}
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/80 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A365D] bg-blue-50 px-3 py-1 rounded-md">
            FAQ
          </span>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1A365D] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Clear answers to common questions about stay requirements in Lewi House Syariah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <h4 className="font-bold text-sm text-slate-900 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-700 pl-6 leading-[1.6]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Still have questions banner */}
      <div className="bg-[#1A365D] text-white rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-display font-bold text-xl text-white">Have a special inquiry?</h3>
          <p className="text-xs text-slate-200 mt-1 leading-relaxed">Our front desk team is happy to assist you anytime via WhatsApp or Phone.</p>
        </div>
        <a
          href={HOTEL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/5 hover:bg-white/15 text-white border-2 border-white/60 hover:border-white/90 font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Chat WhatsApp (+62 821-6881-9722)</span>
        </a>
      </div>

      {/* Bottom Booking Conversion Banner */}
      <div className="bg-gradient-to-r from-[#FF5E1F] to-[#E54B0F] rounded-3xl p-8 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-10 -mt-10 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-white/90 bg-white/20 px-2.5 py-1 rounded-full border border-white/30">
            Rules Read & Ready?
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
            Confirm Your Peaceful Stay Today
          </h3>
          <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-xl">
            Reviewed our syariah guidelines? Secure your clean, quiet room now with instant online booking.
          </p>
        </div>
        <button
          id="rules-book-room-btn"
          onClick={onOpenBooking}
          className="relative z-10 w-full sm:w-auto bg-white hover:bg-slate-100 text-[#E54B0F] px-8 py-4 rounded-xl font-extrabold text-sm shadow-2xl transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>Book Room</span>
          <ShieldCheck className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
