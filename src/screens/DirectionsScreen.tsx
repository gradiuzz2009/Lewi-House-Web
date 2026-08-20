import React, { useState } from 'react';
import { ScreenId, TransitRoute } from '../types';
import { HOTEL_INFO, TRANSIT_ROUTES, NEARBY_LANDMARKS } from '../data/hotelData';
import { InteractiveMap } from '../components/InteractiveMap';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Train, 
  Plane, 
  Bus, 
  Car, 
  Clock, 
  DollarSign, 
  Info,
  Compass,
  Building,
  Utensils,
  ShoppingBag,
  Sparkles,
  HeartPulse
} from 'lucide-react';

interface DirectionsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const DirectionsScreen: React.FC<DirectionsScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedRouteId, setSelectedRouteId] = useState<string>(TRANSIT_ROUTES[0].id);
  const [copiedAddress, setCopiedAddress] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const activeRoute = TRANSIT_ROUTES.find((r) => r.id === selectedRouteId) || TRANSIT_ROUTES[0];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(HOTEL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Shopping':
        return <ShoppingBag className="w-4 h-4 text-purple-600" />;
      case 'Culinary':
        return <Utensils className="w-4 h-4 text-amber-600" />;
      case 'Transit':
        return <Train className="w-4 h-4 text-blue-600" />;
      case 'Hospital':
        return <HeartPulse className="w-4 h-4 text-rose-600" />;
      case 'Worship':
        return <Building className="w-4 h-4 text-emerald-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 animate-fadeIn">
      {/* 1. Header Title & Subtitle */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-50/60 text-slate-600 border border-blue-100 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide">
          <Navigation className="w-3.5 h-3.5 text-slate-500" />
          <span>Location & Travel Guide</span>
        </div>
        <h1 className="font-display font-black text-4xl sm:text-6xl text-[#1A365D] tracking-tight leading-tight">
          Find Your Way to Peace & Comfort
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Located in the heart of Medan Petisah, tucked away for a quiet night's sleep.
        </p>
      </div>

      {/* 2. BENTO GRID: Interactive Map + Getting Here + Help Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20">
        {/* Left / Main Bento Item: Interactive Map (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <InteractiveMap />
        </div>

        {/* Right Bento Column: Getting Here Summary + 24/7 Front Desk Card (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card: Getting Here Quick Overview */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-display font-bold text-base text-slate-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#1A365D]" />
                Getting Here
              </h3>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Medan Petisah
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-slate-600">
              <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl">
                <Train className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-800">From Medan Train Station</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    <strong className="font-extrabold text-blue-700">~10 mins drive</strong> • <strong className="font-extrabold text-slate-900">3.8 km</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl">
                <Plane className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-slate-800">From Kualanamu Airport (KNO)</h5>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    <strong className="font-extrabold text-purple-700">~45–60 mins</strong> via Toll Road
                  </p>
                </div>
              </div>

              {/* Local Landmark Note */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-3.5 text-xs text-amber-950 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-900">
                  <Info className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Local Landmark Note</span>
                </div>
                <p className="text-[11px] text-amber-800 leading-relaxed">
                  Located <strong>50 meters behind the main Sei Sikambing road</strong> on Jl. Sei Bahkapuran No. 16A for extra quietness and privacy. Look for the Lewi House Syariah signage.
                </p>
              </div>
            </div>

            <button
              onClick={handleCopyAddress}
              id="copy-address-directions-btn"
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              {copiedAddress ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Alamat Berhasil Disalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-600" />
                  <span>Copy Complete Address</span>
                </>
              )}
            </button>
          </div>

          {/* Card: Need Help Finding Us? */}
          <div className="bg-gradient-to-br from-[#1A365D] to-[#0E1F35] text-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h4 className="font-display font-bold text-sm text-amber-300">
                Need Help Finding Us?
              </h4>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              Our 24-hour reception staff is ready to guide your driver or prepare your check-in key.
            </p>

            <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-xl border border-white/40 space-y-1">
              <div className="text-[10px] uppercase font-bold text-amber-300">24/7 Front Desk Phone</div>
              <div className="font-display font-extrabold text-base text-white tracking-wide">
                {HOTEL_INFO.phone}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${HOTEL_INFO.phoneRaw}`}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>

              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/50 hover:border-white/80 font-bold py-2 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 3. STEP-BY-STEP TRANSIT ROUTES FINDER */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#1A365D] bg-blue-50 px-3 py-1 rounded-md">
            Route Finder
          </span>
          <h2 className="font-display font-black text-xl sm:text-3xl text-[#1A365D] tracking-tight mt-2">
            Detailed Step-by-Step Directions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Choose your starting point in Medan to view exact driving directions and transit estimates.
          </p>
        </div>

        {/* Route selector tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {TRANSIT_ROUTES.map((route) => {
            const isSelected = route.id === selectedRouteId;
            return (
              <button
                key={route.id}
                id={`tab-${route.id}`}
                onClick={() => setSelectedRouteId(route.id)}
                className={`p-3 rounded-xl border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1A365D] text-white border-[#1A365D] shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className={`p-2 rounded-lg ${isSelected ? 'bg-white/20 text-amber-300' : 'bg-white text-slate-700'}`}>
                  {route.iconType === 'train' && <Train className="w-4 h-4" />}
                  {route.iconType === 'plane' && <Plane className="w-4 h-4" />}
                  {route.iconType === 'bus' && <Bus className="w-4 h-4" />}
                  {route.iconType === 'car' && <Car className="w-4 h-4" />}
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold truncate">{route.origin.split('(')[0]}</div>
                  <div className={`text-[10px] font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-600'}`}>
                    {route.duration}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Route Details Card */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-6">
          {/* Summary Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <h4 className="font-display font-bold text-lg text-slate-900">
                {activeRoute.origin}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">Direct commute to Lewi House Syariah (Medan Petisah)</p>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium">
                ⏱️ <strong>{activeRoute.duration}</strong> ({activeRoute.distance})
              </div>
              <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-200 font-medium text-emerald-700">
                💰 Est. <strong>{activeRoute.estimatedCost}</strong>
              </div>
            </div>
          </div>

          {/* Sequential Steps */}
          <div className="space-y-3">
            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
              Step-by-Step Directions:
            </h5>
            <ol className="space-y-3">
              {activeRoute.steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs">
                  <span className="w-6 h-6 rounded-full bg-[#1A365D] text-amber-300 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed pt-0.5">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Pro-Tip Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-900">
            <Info className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
            <div>
              <strong>Traveler Tip:</strong> {activeRoute.tips}
            </div>
          </div>
        </div>
      </section>

      {/* 4. NEARBY LANDMARKS & CULINARY ATTRACTIONS */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E1F] bg-orange-50 px-3 py-1 rounded-md">
              Medan Petisah Surroundings
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1A365D] tracking-tight mt-2">
              Nearby Landmarks & Culinary Spots
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Top attractions, shopping malls, and foodie favorites located right around Lewi House Syariah.
            </p>
          </div>
        </div>

        {/* 6 Landmark Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARBY_LANDMARKS.map((lm) => (
            <div
              key={lm.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getCategoryIcon(lm.category)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {lm.category}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                    {lm.driveTime}
                  </span>
                </div>

                <div>
                  <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-[#1A365D] transition-colors">
                    {lm.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {lm.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-700 font-bold">{lm.distance} from hotel</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(lm.name + ' Medan')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 hover:underline"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. QUICK BOOKING CALLOUT */}
      <section className="bg-slate-100 rounded-2xl p-8 border border-slate-200 text-center space-y-4">
        <h3 className="font-display font-bold text-xl text-[#1A365D]">
          Arriving in Medan Today?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          Need assistance or want to check late-night room availability? Our 24-hour reception is just a phone call away.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <button
            onClick={onOpenBooking}
            className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white font-extrabold px-6 py-3 rounded-xl text-xs flex items-center gap-2 shadow-md ring-2 ring-orange-200 cursor-pointer"
          >
            <span>Book Room on Traveloka</span>
            <ExternalLink className="w-4 h-4" />
          </button>
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-emerald-50 text-emerald-800 border-2 border-emerald-600 hover:border-emerald-700 font-bold px-6 py-3 rounded-xl text-xs flex items-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Chat WhatsApp (+62 821-6881-9722)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
