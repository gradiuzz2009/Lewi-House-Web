import React from 'react';
import {
  OTA_PLATFORMS,
  HOTEL_INFO,
  buildOtaDeepLink,
  getDefaultStayDates,
} from '../data/hotelData';
import { ExternalLink, BadgeCheck, Phone } from 'lucide-react';

interface OTADeepLinksProps {
  checkIn?: string; // YYYY-MM-DD override
  checkOut?: string; // YYYY-MM-DD override
  adults?: number;
}

/**
 * OTA Deep-Link Hub — lets visitors jump straight from the website into a
 * reservation flow on Traveloka, Agoda, tiket.com, or Booking.com with their
 * stay dates and guest count already prefilled in the deep link.
 */
export const OTADeepLinks: React.FC<OTADeepLinksProps> = ({
  checkIn,
  checkOut,
  adults,
}) => {
  const defaults = getDefaultStayDates();
  const ci = checkIn || defaults.checkIn;
  const co = checkOut || defaults.checkOut;
  const guests = adults || 2;

  const nights = Math.max(
    1,
    Math.round((new Date(co).getTime() - new Date(ci).getTime()) / 86400000)
  );

  return (
    <section id="ota-deep-links" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FF5E1F] bg-orange-50 border border-orange-200/70 px-3 py-1 rounded-md">
              <BadgeCheck className="w-3.5 h-3.5" />
              Reserve on Your Favorite Platform
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#1A365D] tracking-tight mt-2">
              Book Lewi House Directly via OTA
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Jump straight to our listing on Traveloka, Agoda, tiket.com, or
              Booking.com — stay dates and guests are prefilled for a faster
              reservation.
            </p>
          </div>
          <div className="text-left md:text-right shrink-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Quick Search
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-1">
              {ci} → {co} · {nights} night{nights > 1 ? 's' : ''} · {guests} guest{guests > 1 ? 's' : ''}
            </div>
          </div>
        </div>

        {/* OTA Brand Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          {OTA_PLATFORMS.map((platform) => {
            const deepLink = buildOtaDeepLink(platform.id, {
              checkIn: ci,
              checkOut: co,
              adults: guests,
            });
            return (
              <a
                key={platform.id}
                id={`ota-deeplink-${platform.id}`}
                href={deepLink}
                target="_blank"
                rel="noopener noreferrer"
                title={`Reserve on ${platform.name} (${ci} → ${co})`}
                className={`group flex flex-col justify-between rounded-2xl border p-4 sm:p-5 transition-all duration-200 cursor-pointer ${
                  platform.featured
                    ? 'border-red-200 bg-red-50/40 hover:border-red-300 hover:shadow-lg'
                    : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 shrink-0 rounded-xl ${platform.brandBg} ${platform.brandText} flex items-center justify-center font-display font-extrabold text-lg shadow-sm`}
                    >
                      {platform.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="font-display font-bold text-sm sm:text-base text-slate-900 truncate">
                        {platform.name}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-0.5 line-clamp-2">
                        {platform.tagline}
                      </div>
                    </div>
                  </div>
                  {platform.rating && (
                    <div className="shrink-0 text-right">
                      <div className="text-lg font-display font-extrabold text-emerald-600">
                        {platform.rating}
                      </div>
                      <div className="text-[9px] uppercase tracking-wide font-bold text-slate-400">
                        {platform.ratingLabel}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-[#1A365D] group-hover:text-[#FF5E1F] transition-colors">
                    Check Rates & Reserve
                  </span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#1A365D] group-hover:text-white text-slate-500 flex items-center justify-center transition-colors">
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3 text-[11px] text-slate-600">
          <span className="text-center sm:text-left">
            Rates shown on each platform may vary slightly. Syariah policy
            applies to every reservation channel.
          </span>
          <a
            href={HOTEL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-700 hover:text-emerald-800 hover:underline whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            Or reserve via WhatsApp 24/7
          </a>
        </div>
      </div>
    </section>
  );
};
