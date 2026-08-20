import React, { useState } from 'react';
import { NEARBY_LANDMARKS, HOTEL_INFO } from '../data/hotelData';
import { LandmarkItem } from '../types';
import { 
  MapPin, 
  Navigation, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Layers, 
  Compass, 
  Info,
  Clock,
  Car
} from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkItem | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [mapStyle, setMapStyle] = useState<'streets' | 'minimal' | 'satellite'>('streets');
  const [showRoutes, setShowRoutes] = useState<boolean>(true);

  const handleZoom = (delta: number) => {
    setZoomLevel(prev => Math.min(Math.max(prev + delta, 0.8), 1.6));
  };

  const handleReset = () => {
    setZoomLevel(1);
    setSelectedLandmark(null);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col">
      {/* Map Control Header */}
      <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
            <Navigation className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wide flex items-center gap-2">
              Medan Petisah Area Map
              <span className="text-[10px] bg-amber-400 text-slate-900 font-bold px-1.5 py-0.5 rounded">
                Live Interactive
              </span>
            </h4>
            <p className="text-xs text-slate-300">Jl. Sei Bahkapuran No. 16A, Sei Sikambing D</p>
          </div>
        </div>

        {/* View toggles & zoom */}
        <div className="flex items-center gap-2">
          {/* Map style selector */}
          <div className="flex bg-slate-800 p-0.5 rounded-lg border border-slate-400 text-xs">
            <button
              onClick={() => setMapStyle('streets')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                mapStyle === 'streets' ? 'bg-[#1A365D] text-white font-semibold' : 'text-white hover:text-white font-medium'
              }`}
            >
              Street
            </button>
            <button
              onClick={() => setMapStyle('satellite')}
              className={`px-2.5 py-1 rounded-md transition-colors ${
                mapStyle === 'satellite' ? 'bg-[#1A365D] text-white font-semibold' : 'text-white hover:text-white font-medium'
              }`}
            >
              Terrain
            </button>
          </div>

          <div className="flex items-center gap-1 bg-slate-800 px-1 py-1 rounded-lg border border-slate-400">
            <button
              onClick={() => handleZoom(0.2)}
              className="p-1 text-white hover:bg-slate-600 rounded transition-colors"
              title="Zoom In"
              aria-label="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleZoom(-0.2)}
              className="p-1 text-white hover:bg-slate-600 rounded transition-colors"
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={handleReset}
              className="p-1 text-white hover:bg-slate-600 rounded transition-colors"
              title="Reset View"
              aria-label="Reset map"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <a
            href={HOTEL_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="open-google-maps-btn"
            className="bg-[#1A365D] hover:bg-[#2B4E7D] border border-white/80 text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all shadow-xs"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Visual Simulated Interactive Canvas */}
      <div className="relative w-full h-[400px] sm:h-[460px] bg-slate-100 overflow-hidden select-none">
        {/* Background Map Graphic Canvas */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out origin-center"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {mapStyle === 'satellite' ? (
            /* Terrain / Satellite styled aesthetic grid */
            <div className="absolute inset-0 bg-[#1e2a22]">
              {/* Pattern overlays */}
              <div 
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage: `radial-gradient(#2d4a3e 2px, transparent 2px), radial-gradient(#1f3b2f 2px, #1e2a22 2px)`,
                  backgroundSize: '32px 32px',
                  backgroundPosition: '0 0, 16px 16px',
                }}
              />
            </div>
          ) : (
            /* Street Map Graphic Canvas */
            <div className="absolute inset-0 bg-[#F4F1EA]">
              {/* City Blocks Pattern */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>
          )}

          {/* Render Vector Roads of Medan Petisah */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hotelPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF5E1F" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Main Thoroughfare: Jl. Gatot Subroto (Medan) */}
            <path
              d="M -20 180 Q 250 160 500 170 T 1100 190"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#475569' : '#FFFFFF'}
              strokeWidth="24"
              strokeLinecap="round"
            />
            <path
              d="M -20 180 Q 250 160 500 170 T 1100 190"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#94A3B8' : '#CBD5E1'}
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M -20 180 Q 250 160 500 170 T 1100 190"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="2"
              strokeDasharray="8,6"
            />

            {/* Connecting Avenue: Jl. Gajah Mada */}
            <path
              d="M 120 480 Q 280 340 450 250 T 700 80"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#475569' : '#FFFFFF'}
              strokeWidth="18"
            />
            <path
              d="M 120 480 Q 280 340 450 250 T 700 80"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#64748B' : '#E2E8F0'}
              strokeWidth="14"
            />

            {/* Jl. Sei Sikambing */}
            <path
              d="M 420 170 L 460 270 L 490 440"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#475569' : '#FFFFFF'}
              strokeWidth="14"
            />
            <path
              d="M 420 170 L 460 270 L 490 440"
              fill="none"
              stroke={mapStyle === 'satellite' ? '#64748B' : '#E2E8F0'}
              strokeWidth="10"
            />

            {/* Alleyway / Street: Jl. Sei Bahkapuran (Location of Lewi House) */}
            <path
              d="M 460 270 L 530 255 L 560 260"
              fill="none"
              stroke="#FDE68A"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M 460 270 L 530 255 L 560 260"
              fill="none"
              stroke="#D97706"
              strokeWidth="2"
              strokeDasharray="4,4"
            />

            {/* Route guideline from Medan Train Station to Lewi House */}
            {showRoutes && (
              <path
                d="M 780 130 Q 640 150 490 170 T 460 270 L 530 255"
                fill="none"
                stroke="#2563EB"
                strokeWidth="4"
                strokeDasharray="6,6"
                className="animate-pulse"
              />
            )}
          </svg>

          {/* Road Name Badges */}
          <div className="absolute top-[34%] left-[12%] text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded shadow-xs">
            Jl. Gatot Subroto
          </div>
          <div className="absolute top-[68%] left-[28%] text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded shadow-xs rotate-[-25deg]">
            Jl. Gajah Mada
          </div>
          <div className="absolute top-[48%] left-[41%] text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded shadow-xs rotate-[70deg]">
            Jl. Sei Sikambing
          </div>
          <div className="absolute top-[52%] left-[54%] text-[9px] font-extrabold text-amber-900 uppercase tracking-wider bg-amber-200/90 px-1.5 py-0.5 rounded border border-amber-400">
            Jl. Sei Bahkapuran
          </div>

          {/* Primary Hotel Marker: LEWI HOUSE SYARIAH */}
          <div 
            className="absolute top-[53%] left-[53%] -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group"
            onClick={() => setSelectedLandmark(null)}
          >
            {/* Ripple Pulse Rings */}
            <div className="absolute -inset-4 rounded-full bg-[#FF5E1F]/20 animate-ping" />
            <div className="absolute -inset-2 rounded-full bg-[#FF5E1F]/30" />
            
            {/* Center Pin Card */}
            <div className="relative bg-[#1A365D] text-white p-2.5 rounded-xl shadow-xl border-2 border-amber-400 flex items-center gap-2 transform group-hover:scale-110 transition-transform">
              <div className="w-8 h-8 rounded-lg bg-[#FF5E1F] flex items-center justify-center text-white shadow-sm font-bold">
                <MapPin className="w-5 h-5 fill-white" />
              </div>
              <div className="pr-1 text-left">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-xs tracking-tight text-white whitespace-nowrap">
                    Lewi House Syariah
                  </span>
                  <span className="text-[9px] bg-amber-400 text-slate-950 px-1 rounded font-bold">HERE</span>
                </div>
                <p className="text-[10px] text-amber-200 font-medium">Jl. Sei Bahkapuran No. 16A</p>
              </div>
            </div>
          </div>

          {/* Surrounding Landmark Markers */}
          {NEARBY_LANDMARKS.map((lm) => {
            const isSelected = selectedLandmark?.id === lm.id;
            return (
              <button
                key={lm.id}
                onClick={() => setSelectedLandmark(lm)}
                className={`absolute z-10 transition-all transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 ${
                  isSelected ? 'scale-110 z-30' : ''
                }`}
                style={{ top: `${lm.coords.y}%`, left: `${lm.coords.x}%` }}
                title={`${lm.name} (${lm.distance})`}
              >
                <div className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-xs font-semibold shadow-md ${
                  isSelected 
                    ? 'bg-emerald-700 text-white border-emerald-400 ring-2 ring-emerald-300' 
                    : 'bg-white text-slate-800 border-slate-500 hover:bg-slate-50'
                }`}>
                  <span className="text-emerald-600 font-bold">📍</span>
                  <span className="text-[11px] whitespace-nowrap">{lm.name}</span>
                  <span className="text-[9px] text-slate-500 bg-slate-100 px-1 rounded">{lm.driveTime}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend / Quick Route Helper Overlay */}
        <div className="absolute bottom-3 left-3 z-20 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-xl border border-slate-400 shadow-md text-xs space-y-1 max-w-[260px]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-1">
            <span className="font-bold text-slate-800 text-[11px]">Map Guide</span>
            <button
              onClick={() => setShowRoutes(!showRoutes)}
              className="text-[10px] text-blue-700 hover:underline font-semibold"
            >
              {showRoutes ? 'Hide Route line' : 'Show Route line'}
            </button>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5E1F] inline-block"></span>
            <span>Lewi House Syariah</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
            <span>Nearby Medan Hubs</span>
          </div>
          <p className="text-[10px] text-slate-600 italic pt-0.5">
            50m quiet zone off Jl. Sei Sikambing
          </p>
        </div>

        {/* Selected Landmark Info Card Overlay */}
        {selectedLandmark && (
          <div className="absolute top-3 right-3 z-30 bg-white p-4 rounded-xl border border-slate-200 shadow-xl max-w-xs animate-fadeIn">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  {selectedLandmark.category}
                </span>
                <h5 className="font-bold text-slate-900 text-sm mt-1">{selectedLandmark.name}</h5>
              </div>
              <button 
                onClick={() => setSelectedLandmark(null)}
                className="text-slate-600 hover:text-slate-900 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-600 mt-1 mb-2.5 leading-relaxed">{selectedLandmark.description}</p>
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 bg-slate-50 p-2 rounded-lg mb-3">
              <span className="flex items-center gap-1">
                <Car className="w-3.5 h-3.5 text-blue-600" />
                {selectedLandmark.driveTime}
              </span>
              <span className="text-slate-500">|</span>
              <span>{selectedLandmark.distance} from hotel</span>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedLandmark.name + ' Medan')}&origin=Lewi+House+Syariah+Medan`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1A365D] hover:bg-[#2B4E7D] text-white text-xs font-bold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Get Directions in Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>

      {/* Footer bar with quick copy address */}
      <div className="bg-slate-50 border-t border-slate-200 px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
          <span className="font-medium">
            <strong>Address:</strong> {HOTEL_INFO.address}
          </span>
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(HOTEL_INFO.address);
            alert('Alamat Lewi House Syariah berhasil disalin ke clipboard!');
          }}
          className="text-blue-700 hover:text-blue-900 font-bold hover:underline cursor-pointer"
        >
          Copy Address
        </button>
      </div>
    </div>
  );
};
