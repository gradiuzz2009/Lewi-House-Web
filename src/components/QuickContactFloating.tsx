import React, { useState } from 'react';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, MessageCircle, X, ChevronUp, MapPin } from 'lucide-react';

interface QuickContactFloatingProps {
  onOpenBooking: () => void;
}

export const QuickContactFloating: React.FC<QuickContactFloatingProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-18 lg:bottom-6 right-4 sm:right-6 z-30 flex flex-col items-end gap-2">
      {/* Expanded mini contact drawer */}
      {expanded && (
        <div className="bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 mb-2 w-72 animate-fadeIn space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-bold text-xs text-slate-800">24/7 Front Desk Online</span>
            </div>
            <button 
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Need directions, room availability, or late check-in help at Lewi House Syariah?
          </p>

          <div className="space-y-2 pt-1">
            {/* Primary Action */}
            <button
              onClick={() => {
                setExpanded(false);
                onOpenBooking();
              }}
              className="w-full bg-[#FF5E1F] hover:bg-[#E54B0F] text-white font-bold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <span>Book Room Online</span>
            </button>

            {/* Secondary Contact Actions */}
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`tel:${HOTEL_INFO.phoneRaw}`}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-1.5 px-3 rounded-xl text-[11px] flex items-center justify-center gap-1.5 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call +62 821-6881-9722</span>
            </a>
          </div>
        </div>
      )}

      {/* Main floating action toggle */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 transition-all transform hover:scale-105 cursor-pointer font-bold text-xs"
          id="floating-help-btn"
        >
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
          <span className="hidden sm:inline">24/7 Front Desk</span>
          <span className="sm:hidden text-[11px]">Help</span>
        </button>
      </div>
    </div>
  );
};
