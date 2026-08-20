import React, { useState } from 'react';
import { ScreenId } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { 
  GLOBAL_NAV_NODES, 
  PRIMARY_NAV_NODES, 
  SECONDARY_NAV_NODES 
} from '../data/navigation';
import { 
  Building2, 
  MapPin, 
  BedDouble, 
  Phone, 
  Menu, 
  X,
  ExternalLink,
  Info,
  Clock,
  ChevronRight,
  Copy,
  Check,
  CalendarCheck,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Star
} from 'lucide-react';

interface NavbarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: (roomId?: string) => void;
}

/**
 * Desktop nav prioritizes the conversion path (Rooms, Reviews, Facilities,
 * Contact). Lower-priority destinations live in the "More" dropdown to
 * reduce choice overload above the fold.
 */
const DESKTOP_PRIMARY_IDS: ScreenId[] = ['home', 'rooms', 'facilities', 'reviews', 'contact'];
const DESKTOP_MORE_IDS: ScreenId[] = ['directions', 'rules'];

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [infoDrawerOpen, setInfoDrawerOpen] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [secondaryExpanded, setSecondaryExpanded] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);

  const handleNavClick = (id: ScreenId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setInfoDrawerOpen(false);
    setMoreMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(HOTEL_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2200);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        {/* Streamlined Top Micro-Bar */}
        <div className="bg-[#1A365D] text-white text-xs py-1.5 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Left: 24/7 Service Status & Quick Property Info Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 bg-white/5 px-2.5 py-0.5 rounded-full text-[11px] font-normal text-emerald-100/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                24/7 Front Desk
              </span>

              <button
                id="topbar-info-drawer-toggle"
                onClick={() => setInfoDrawerOpen(!infoDrawerOpen)}
                className="inline-flex items-center gap-1 text-[11px] text-slate-200 hover:text-amber-300/90 transition-colors bg-white/5 hover:bg-white/10 px-2.5 py-0.5 rounded-md cursor-pointer"
                title="View quick property details"
              >
                <Info className="w-3 h-3 text-amber-300/70" />
                <span>Property Info</span>
              </button>
            </div>

            {/* Right: Direct Immediate Contact & Verified Rating */}
            <div className="flex items-center gap-3 text-[12px]">
              <a 
                href={`tel:${HOTEL_INFO.phoneRaw}`} 
                className="hover:text-emerald-300/90 transition-colors flex items-center gap-1 font-normal text-slate-200"
                id="topbar-phone-link"
                title="Call 24/7 Front Desk"
              >
                <Phone className="w-3 h-3 text-emerald-400/70" />
                <span>{HOTEL_INFO.phone}</span>
              </a>

              <span className="text-slate-500 hidden sm:inline">•</span>

              <a 
                href={HOTEL_INFO.agodaUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1 text-slate-200 hover:text-amber-300/90 font-normal bg-white/5 border border-white/10 px-2 py-0.5 rounded text-[11px]"
                title="Agoda 8.8 / 10 Exceptional Score"
              >
                <span>Agoda 8.8</span>
                <Star className="w-3 h-3 fill-amber-300/60 text-amber-300/60" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Primary Brand Identity */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
              id="brand-logo-btn"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1A365D] to-[#0E1F35] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="font-bold font-display text-lg tracking-wider text-amber-300">LH</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-[#1A365D] tracking-tight">
                    Lewi House
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-sm">
                    Syariah
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                  Medan Petisah • North Sumatra
                </p>
              </div>
            </button>

            {/* Desktop Navigation Links (prioritized conversion path; overflow in "More") */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary navigation">
              {GLOBAL_NAV_NODES.filter((node) => DESKTOP_PRIMARY_IDS.includes(node.id)).map((item) => {
                const Icon = item.icon;
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-xl text-[13px] font-normal transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-[#1A365D] border border-blue-200 font-medium'
                        : 'text-slate-600 hover:text-[#1A365D] hover:bg-slate-100/80'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                    {item.label}
                  </button>
                );
              })}

              {/* "More" dropdown for lower-priority destinations */}
              <div
                className="relative"
                onMouseEnter={() => setMoreMenuOpen(true)}
                onMouseLeave={() => setMoreMenuOpen(false)}
              >
                <button
                  id="nav-more-menu-btn"
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  aria-haspopup="menu"
                  aria-expanded={moreMenuOpen}
                  className={`px-3.5 py-2 rounded-xl text-[13px] transition-all flex items-center gap-1.5 cursor-pointer ${
                    moreMenuOpen || DESKTOP_MORE_IDS.includes(currentScreen)
                      ? 'bg-blue-50 text-[#1A365D] border border-blue-200 font-medium'
                      : 'text-slate-600 hover:text-[#1A365D] hover:bg-slate-100/80'
                  }`}
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${moreMenuOpen ? 'rotate-180' : ''} ${moreMenuOpen || DESKTOP_MORE_IDS.includes(currentScreen) ? 'text-amber-300' : 'text-slate-500'}`} />
                  <span>More</span>
                </button>

                {moreMenuOpen && (
                  <div
                    role="menu"
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 animate-fadeIn"
                  >
                    {GLOBAL_NAV_NODES.filter((node) => DESKTOP_MORE_IDS.includes(node.id)).map((item) => {
                      const Icon = item.icon;
                      const isActive = currentScreen === item.id;
                      return (
                        <button
                          key={item.id}
                          id={`nav-more-${item.id}`}
                          role="menuitem"
                          onClick={() => handleNavClick(item.id)}
                          className={`w-full flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-left cursor-pointer transition-colors ${
                            isActive ? 'bg-blue-50' : 'hover:bg-slate-50'
                          }`}
                        >
                          <Icon className={`w-4 h-4 mt-0.5 shrink-0 ${isActive ? 'text-[#1A365D]' : 'text-slate-500'}`} />
                          <span>
                            <span className={`block text-[13px] font-semibold ${isActive ? 'text-[#1A365D]' : 'text-slate-800'}`}>
                              {item.label}
                            </span>
                            <span className="block text-[10px] text-slate-500 leading-snug mt-0.5">
                              {item.description}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Right CTA: Single Dominant Primary Booking Path */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                id="header-book-now-btn"
                onClick={() => onOpenBooking()}
                className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-5 py-2.5 rounded-xl text-sm font-extrabold shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>Check Availability</span>
                <CalendarCheck className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Navigation Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                id="mobile-quick-book-btn"
                onClick={() => onOpenBooking()}
                className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm"
              >
                Book Room
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Collapsible Quick Property Info Drawer */}
        {infoDrawerOpen && (
          <div className="bg-slate-900 text-white border-b border-slate-700 shadow-2xl animate-fadeIn">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-400" />
                  <span className="font-display font-bold text-sm text-white">
                    Lewi House Syariah Quick Property Details
                  </span>
                </div>
                <button
                  onClick={() => setInfoDrawerOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                  title="Close Info Drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
                {/* Col 1: Address & GPS */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-300 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>Street Address</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {HOTEL_INFO.address}
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-slate-200 px-2.5 py-1 rounded-md text-[11px] font-medium border border-slate-700 transition-colors cursor-pointer"
                    >
                      {copiedAddress ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400">Address Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy Address</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => handleNavClick('directions')}
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline text-[11px] font-medium cursor-pointer"
                    >
                      <span>Open Map & Route Guide</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Col 2: Check-In & House Rules */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Check-In / Check-Out</span>
                  </div>
                  <div className="space-y-1 text-slate-300">
                    <div>Check-In Time: <strong className="text-amber-300 font-extrabold">{HOTEL_INFO.checkInTime}</strong></div>
                    <div>Check-Out Time: <strong className="text-emerald-300 font-extrabold">{HOTEL_INFO.checkOutTime}</strong></div>
                    <div className="text-emerald-300 font-medium">Front Desk: 24 Hours Active Everyday</div>
                  </div>
                </div>

                {/* Col 3: Syariah Policy & Direct Booking */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-400 font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Syariah Hospitality Standard</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Married couples must present valid identification or marriage documentation upon check-in. Alcohol and smoking are prohibited in rooms.
                  </p>
                  <div className="pt-1 flex items-center gap-2">
                    <a
                      href={HOTEL_INFO.agodaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 py-1 rounded transition-colors"
                    >
                      Agoda (8.8★)
                    </a>
                    <a
                      href={HOTEL_INFO.travelokaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] bg-[#FF5E1F] hover:bg-[#E54B0F] text-white font-bold px-2.5 py-1 rounded transition-colors"
                    >
                      Traveloka
                    </a>
                    <a
                      href={HOTEL_INFO.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-2.5 py-1 rounded transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Progressive Disclosure Drawer Menu (Issue A Fix) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4 animate-fadeIn shadow-xl max-h-[85vh] overflow-y-auto">
            {/* 1. Core Primary Destinations */}
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
                Main Destinations
              </span>
              <div className="grid grid-cols-1 gap-1">
                {PRIMARY_NAV_NODES.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentScreen === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium cursor-pointer transition-colors ${
                        isActive
                          ? 'bg-[#1A365D] text-white font-semibold shadow-xs'
                          : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <span className="text-[10px] bg-[#2B4E7D] px-2 py-0.5 rounded font-bold text-amber-200">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Secondary Informational Pages (Progressive Disclosure) */}
            <div className="border-t border-slate-100 pt-3">
              <button
                onClick={() => setSecondaryExpanded(!secondaryExpanded)}
                className="w-full flex items-center justify-between px-2 py-1 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <span className="uppercase tracking-wider text-[10px] text-slate-500">
                  More Hotel Information ({SECONDARY_NAV_NODES.length})
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${secondaryExpanded ? 'rotate-180' : ''}`} />
              </button>

              {secondaryExpanded && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-2 animate-fadeIn">
                  {SECONDARY_NAV_NODES.map((item) => {
                    const Icon = item.icon;
                    const isActive = currentScreen === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`mobile-nav-${item.id}`}
                        onClick={() => handleNavClick(item.id)}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-pointer ${
                          isActive
                            ? 'bg-slate-100 text-[#1A365D] font-bold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Streamlined Booking CTA with Strict Visual Hierarchy (Issue B Fix) */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              {/* Dominant Primary Action */}
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#FF5E1F] hover:bg-[#E54B0F] text-white py-3 rounded-xl text-sm font-bold text-center flex items-center justify-center gap-2 shadow-sm active:scale-98 transition-all"
              >
                <span>Book Room Instantly</span>
                <ExternalLink className="w-4 h-4" />
              </button>

              {/* Subordinate Secondary Inquiries Action */}
              <a
                href={HOTEL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 py-2 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp 24/7 Front Desk Inquiries</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Persistent Mobile Bottom Navigation Bar for Instant 1-Tap Access */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3 flex items-center justify-around">
        <button
          onClick={() => handleNavClick('home')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg cursor-pointer ${
            currentScreen === 'home' ? 'text-[#1A365D] font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Building2 className={`w-5 h-5 ${currentScreen === 'home' ? 'text-[#1A365D]' : 'text-slate-400'}`} />
          <span className="text-[10px]">Home</span>
        </button>

        <button
          onClick={() => handleNavClick('rooms')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg cursor-pointer ${
            currentScreen === 'rooms' ? 'text-[#1A365D] font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <BedDouble className={`w-5 h-5 ${currentScreen === 'rooms' ? 'text-[#1A365D]' : 'text-slate-400'}`} />
          <span className="text-[10px]">Rooms</span>
        </button>

        {/* Central Prominent Floating Book Button */}
        <button
          onClick={() => onOpenBooking()}
          className="flex flex-col items-center justify-center -mt-5 bg-[#FF5E1F] hover:bg-[#E54B0F] text-white w-12 h-12 rounded-full shadow-lg border-2 border-white cursor-pointer active:scale-95 transition-transform"
          aria-label="Book Room"
        >
          <CalendarCheck className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleNavClick('directions')}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg cursor-pointer ${
            currentScreen === 'directions' ? 'text-[#1A365D] font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <MapPin className={`w-5 h-5 ${currentScreen === 'directions' ? 'text-[#1A365D]' : 'text-slate-400'}`} />
          <span className="text-[10px]">Directions</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg cursor-pointer ${
            mobileMenuOpen ? 'text-[#1A365D] font-bold' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <Menu className="w-5 h-5 text-slate-400" />
          <span className="text-[10px]">Menu</span>
        </button>
      </nav>
    </>
  );
};
