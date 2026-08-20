import React from 'react';
import { ScreenId } from '../types';
import { FACILITIES_DATA, HOTEL_INFO } from '../data/hotelData';
import { 
  Sparkles, 
  Wind, 
  Wifi, 
  Clock, 
  Car, 
  ShieldCheck, 
  Droplets, 
  Check, 
  ExternalLink,
  Phone,
  ArrowRight
} from 'lucide-react';

interface FacilitiesScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const FacilitiesScreen: React.FC<FacilitiesScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Wind':
        return <Wind className="w-6 h-6" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6" />;
      case 'Clock':
        return <Clock className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 sm:pt-16 sm:pb-24 space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-1.5 bg-blue-50/50 text-slate-500 border border-blue-100/80 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase">
          <Sparkles className="w-3 h-3 text-slate-400" />
          <span>Hotel Amenities & Services</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#1A365D] tracking-tight leading-[1.05]">
          Our Hotel Facilities
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Everything you need for a comfortable, convenient, and wallet-friendly stay in Medan.
        </p>
      </div>

      {/* 6 Facilities Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12 sm:pb-20">
        {FACILITIES_DATA.map((fac) => (
          <div
            key={fac.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 overflow-hidden">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                {/* Semi-transparent dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-slate-950/95 text-white ring-1 ring-white/25 border border-slate-800 text-[11px] font-extrabold px-3 py-1 rounded-lg shadow-lg backdrop-blur-sm">
                  {fac.tag}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A365D] flex items-center justify-center font-bold">
                  {getIcon(fac.iconName)}
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">
                  {fac.title}
                </h3>
                <p className="text-sm text-slate-800 leading-[1.6]">
                  {fac.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                <Check className="w-4 h-4" />
                <span>Complimentary for all staying guests</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Micro-Conversion: Check Available Rooms */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs">
        <div className="text-center sm:text-left">
          <h4 className="font-display font-bold text-base text-slate-900">Liked our facilities?</h4>
          <p className="text-xs text-slate-600 mt-0.5">
            See real-time room types, nightly rates, and syariah booking policies.
          </p>
        </div>
        <button
          onClick={() => onNavigate('rooms')}
          className="bg-[#1A365D] hover:bg-[#2B4E7D] text-white font-extrabold px-7 py-3.5 rounded-xl text-xs flex items-center gap-2 transition-all hover:shadow-lg cursor-pointer whitespace-nowrap shadow-md ring-1 ring-[#1A365D]/30"
        >
          <span>Check Available Rooms</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Additional Hospitality Perks */}
      <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-6">
        <h3 className="font-display font-bold text-xl text-[#1A365D]">
          Additional Value & In-Room Comforts
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-1">
            <h5 className="font-bold text-slate-900">💧 Daily Mineral Water</h5>
            <p className="text-slate-700 leading-[1.6]">2 complimentary sealed bottles in every room.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-1">
            <h5 className="font-bold text-slate-900">🧕 Sajadah on Request</h5>
            <p className="text-slate-700 leading-[1.6]">Prayer mats & Qibla directional indicator in room.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-1">
            <h5 className="font-bold text-slate-900">🚿 Hot Water Showers</h5>
            <p className="text-slate-700 leading-[1.6]">Reliable water heaters with fresh bath towels.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-1">
            <h5 className="font-bold text-slate-900">🍜 Nearby Culinary Delivery</h5>
            <p className="text-slate-700 leading-[1.6]">Easy GrabFood/GoFood reception pickup.</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-[#1A365D] text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-display font-bold text-2xl text-white">
            Enjoy essential comforts at the best price.
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Rates starting from Rp 168.000 / night with 24-hour reception service in Medan Petisah.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-8 py-3.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-98"
        >
          <span>Book Room Online</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
