import React, { useState } from 'react';
import { ScreenId, RoomType } from '../types';
import { ROOMS_DATA, HOTEL_INFO, PROPERTY_GALLERY_PHOTOS } from '../data/hotelData';
import { ImageGallery } from '../components/ImageGallery';
import { 
  BedDouble, 
  Check, 
  ShieldCheck, 
  Users, 
  User,
  ExternalLink, 
  Sparkles, 
  Images, 
  X,
  Phone,
  Maximize2,
  Camera
} from 'lucide-react';

interface RoomsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const RoomsScreen: React.FC<RoomsScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [filterCapacity, setFilterCapacity] = useState<number | 'all'>('all');
  const [previewGalleryRoom, setPreviewGalleryRoom] = useState<RoomType | null>(null);

  const filteredRooms = ROOMS_DATA.filter((r) => {
    if (filterCapacity === 'all') return true;
    return r.capacity === filterCapacity;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1A365D] border border-blue-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
          <BedDouble className="w-3.5 h-3.5 text-[#1A365D]" />
          <span>Accommodations & Nightly Rates</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#1A365D] tracking-tight">
          Clean & Economical Rooms in Medan
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Every room is equipped with individual air conditioning, high-speed Wi-Fi, private hot showers, and prayer facilities.
        </p>
      </div>

      {/* Responsive Room Capacity Filter Bar (Issue B Fix) */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Filter by Guest Capacity:</span>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Showing <strong>{filteredRooms.length}</strong> of {ROOMS_DATA.length} room types</span>
          </div>
        </div>

        {/* Filter Pills with Full Responsive Flex-Wrap Layout (Zero Hidden Overflow) */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            id="filter-all-rooms"
            onClick={() => setFilterCapacity('all')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              filterCapacity === 'all'
                ? 'bg-[#1A365D] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>All Rooms</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              filterCapacity === 'all' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {ROOMS_DATA.length}
            </span>
          </button>

          <button
            id="filter-solo-room"
            onClick={() => setFilterCapacity(1)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              filterCapacity === 1
                ? 'bg-[#1A365D] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>1 Solo Guest</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              filterCapacity === 1 ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {ROOMS_DATA.filter((r) => r.capacity === 1).length}
            </span>
          </button>

          <button
            id="filter-double-room"
            onClick={() => setFilterCapacity(2)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              filterCapacity === 2
                ? 'bg-[#1A365D] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>2 Guests (Couples/Friends)</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              filterCapacity === 2 ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {ROOMS_DATA.filter((r) => r.capacity === 2).length}
            </span>
          </button>

          <button
            id="filter-triple-room"
            onClick={() => setFilterCapacity(3)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              filterCapacity === 3
                ? 'bg-[#1A365D] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>3 Family Guests</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
              filterCapacity === 3 ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {ROOMS_DATA.filter((r) => r.capacity === 3).length}
            </span>
          </button>
        </div>
      </div>

      {/* Rooms Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
          >
            <div>
              {/* Photo Area */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                {/* Multi-stop semi-transparent dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />

                {room.popular && (
                  <div className="absolute top-4 left-4 bg-[#FF5E1F] text-white text-xs font-bold px-3 py-1 rounded-lg shadow-md z-10">
                    ★ Most Booked
                  </div>
                )}

                <button
                  onClick={() => setPreviewGalleryRoom(room)}
                  className="absolute top-4 right-4 bg-slate-950/80 hover:bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg backdrop-blur-md flex items-center gap-1.5 transition-colors cursor-pointer z-10 border border-white/20 shadow-md"
                >
                  <Images className="w-3.5 h-3.5" />
                  <span>{room.gallery.length} Photos</span>
                </button>

                {/* Bottom Overlay Price & Room Info */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10 bg-slate-950/65 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg">
                  <div>
                    <span className="text-[10px] text-amber-300 font-semibold block uppercase tracking-wider">{room.roomSize} • {room.bedType}</span>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white drop-shadow-sm leading-tight">
                      {room.name}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    {room.originalPrice && (
                      <span className="text-[10px] text-slate-300 line-through block">
                        Rp {room.originalPrice.toLocaleString('id-ID')}
                      </span>
                    )}
                    <div className="font-display font-extrabold text-base sm:text-lg text-amber-300">
                      Rp {room.pricePerNight.toLocaleString('id-ID')}
                      <span className="text-xs text-slate-200 font-normal"> / night</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Body */}
              <div className="p-6 space-y-5">
                <p className="text-xs text-slate-600 leading-relaxed">
                  {room.tagline}
                </p>

                {/* Key Specs Bar */}
                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100 text-slate-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Capacity: <strong>{room.capacity} Person{room.capacity > 1 ? 's' : ''}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-purple-600" />
                    <span>Size: <strong>{room.roomSize}</strong></span>
                  </div>
                </div>

                {/* Amenities List */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Included Room Amenities:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Syariah notice note */}
                {room.syariahNotice && (
                  <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 flex items-start gap-2.5 text-xs text-amber-900">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong>Policy:</strong> {room.syariahNotice}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="p-6 pt-0 flex flex-wrap gap-2">
              <button
                id={`room-book-agoda-${room.id}`}
                onClick={() => onOpenBooking(room.id)}
                className="flex-1 min-w-[130px] bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                title="Book on Agoda (8.8/10 Score)"
              >
                <span>Book on Agoda</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <button
                id={`room-book-traveloka-${room.id}`}
                onClick={() => onOpenBooking(room.id)}
                className="flex-1 min-w-[120px] bg-[#FF5E1F] hover:bg-[#E54B0F] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <span>Traveloka</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/6282168819722?text=Halo%20Lewi%20House%20Syariah,%20saya%20tertarik%20dengan%20kamar%20${encodeURIComponent(room.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                title="Ask on WhatsApp"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Property & Room Photo Showcase Gallery */}
      <div className="pt-4">
        <ImageGallery
          id="rooms-property-gallery"
          title="All Property & Room Photos"
          subtitle="Browse detailed images of our comfortable beds, air conditioners, clean bathrooms, and secure amenities."
          onOpenBooking={() => onOpenBooking()}
          showCategoryFilters={true}
        />
      </div>

      {/* House Rules Teaser Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
            Syariah Hospitality Standard
          </span>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
            Booking as a Couple or Family?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            Please prepare proof of marriage (Buku Nikah / Surat Nikah / same address KTP) during check-in to comply with our peaceful syariah house standards.
          </p>
        </div>
        <button
          onClick={() => onNavigate('rules')}
          className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3 rounded-xl font-bold text-xs whitespace-nowrap transition-colors cursor-pointer"
        >
          Read Full House Rules →
        </button>
      </div>

      {/* Photo Gallery Modal */}
      {previewGalleryRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h4 className="font-display font-bold text-lg text-slate-900">
                  {previewGalleryRoom.name} - Photo Gallery
                </h4>
                <p className="text-xs text-slate-500">Real room photos from Lewi House Syariah</p>
              </div>
              <button
                onClick={() => setPreviewGalleryRoom(null)}
                className="p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {previewGalleryRoom.gallery.map((imgUrl, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-xs border border-slate-200">
                  <img
                    src={imgUrl}
                    alt={`${previewGalleryRoom.name} detail ${i + 1}`}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => {
                  const rId = previewGalleryRoom.id;
                  setPreviewGalleryRoom(null);
                  onOpenBooking(rId);
                }}
                className="bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2"
              >
                <span>Book This Room</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
