import React, { useState } from 'react';
import { ROOMS_DATA, HOTEL_INFO } from '../data/hotelData';
import { 
  X, 
  Calendar, 
  Users, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Phone,
  BedDouble,
  Info
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRoomId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialRoomId,
}) => {
  const [selectedRoomId, setSelectedRoomId] = useState<string>(
    initialRoomId || ROOMS_DATA[0].id
  );
  
  // Default dates: tomorrow to day after tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);

  const formatDateString = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDateString(tomorrow));
  const [checkOut, setCheckOut] = useState<string>(formatDateString(dayAfter));
  const [guestCount, setGuestCount] = useState<number>(1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [acceptedSyariah, setAcceptedSyariah] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find((r) => r.id === selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(checkOutDate.getTime() - checkInDate.getTime(), 86400000);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
  const totalPrice = currentRoom.pricePerNight * nights;

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedSyariah) {
      alert('Mohon centang persetujuan Kebijakan Syariah sebelum melanjutkan.');
      return;
    }

    const message = `Halo Lewi House Syariah, saya ingin reservasi kamar:\n\n• Tipe Kamar: ${currentRoom.name}\n• Check-In: ${checkIn}\n• Check-Out: ${checkOut} (${nights} Malam)\n• Jumlah Tamu: ${guestCount} orang\n• Nama Tamu: ${guestName || '-'}\n• No. Telepon/WA: ${guestPhone || '-'}\n• Total Estimasi: Rp ${totalPrice.toLocaleString('id-ID')}\n• Status: Sudah menyetujui aturan Syariah.\n\nMohon konfirmasi ketersediaan kamar. Terima kasih!`;
    const waUrl = `https://wa.me/6282168819722?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    setBookingSuccess(true);
  };

  const handleTravelokaBooking = () => {
    if (!acceptedSyariah) {
      alert('Mohon centang persetujuan Kebijakan Syariah sebelum melanjutkan.');
      return;
    }
    window.open(HOTEL_INFO.travelokaUrl, '_blank');
    setBookingSuccess(true);
  };

  const handleAgodaBooking = () => {
    if (!acceptedSyariah) {
      alert('Mohon centang persetujuan Kebijakan Syariah sebelum melanjutkan.');
      return;
    }
    window.open(HOTEL_INFO.agodaUrl, '_blank');
    setBookingSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#1A365D] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold">
              <BedDouble className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Book Lewi House Syariah</h3>
              <p className="text-xs text-amber-200">Guaranteed best rates & instant reservation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {bookingSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-display font-bold text-2xl text-slate-900">
              Reservation In Progress!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Your room reservation request for <strong>{currentRoom.name}</strong> ({nights} night{nights > 1 ? 's' : ''}) has been dispatched. Our 24/7 front desk team or Traveloka platform will verify your stay.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Check-in:</span>
                <span className="font-bold text-slate-800">{checkIn} (14:00 WIB)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Check-out:</span>
                <span className="font-bold text-slate-800">{checkOut} (12:00 WIB)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Front Desk Assistance:</span>
                <span className="font-bold text-blue-700">{HOTEL_INFO.phone}</span>
              </div>
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  setBookingSuccess(false);
                  onClose();
                }}
                className="bg-[#1A365D] text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-[#2B4E7D]"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppBooking} className="p-6 space-y-6">
            {/* Room selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Select Room Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ROOMS_DATA.map((room) => {
                  const isSelected = room.id === selectedRoomId;
                  return (
                    <button
                      type="button"
                      key={room.id}
                      onClick={() => setSelectedRoomId(room.id)}
                      className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#1A365D] bg-blue-50/50 ring-2 ring-[#1A365D]/30'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-sm text-slate-900">{room.name}</span>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#1A365D]"></span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{room.bedType}</p>
                      <div className="mt-2 flex items-baseline justify-between">
                        <span className="text-xs font-bold text-[#FF5E1F]">
                          Rp {room.pricePerNight.toLocaleString('id-ID')}
                          <span className="text-[10px] text-slate-500 font-normal"> / night</span>
                        </span>
                        <span className="text-[10px] text-slate-400">Max {room.capacity} guest{room.capacity > 1 ? 's' : ''}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dates & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  Check-In Date
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  Check-Out Date
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-blue-600" />
                  Guests
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full text-xs font-medium border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden bg-white"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                </select>
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name (Sesuai KTP)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ahmad Pratama"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 0812-3456-7890"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full text-xs border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  required
                />
              </div>
            </div>

            {/* Syariah Policy Acknowledgment Box */}
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-2">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-amber-900">Pemberitahuan Kebijakan Syariah</h5>
                  <p className="text-[11px] text-amber-800 leading-relaxed mt-0.5">
                    Lewi House Syariah merupakan penginapan berbasis syariah. Pasangan pria dan wanita yang menginap dalam 1 kamar wajib menunjukkan Buku Nikah / bukti pernikahan resmi yang sah pada saat check-in.
                  </p>
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer pt-1 font-semibold text-slate-800 select-none">
                <input
                  type="checkbox"
                  checked={acceptedSyariah}
                  onChange={(e) => setAcceptedSyariah(e.target.checked)}
                  className="w-4 h-4 text-[#1A365D] rounded border-slate-300 focus:ring-[#1A365D]"
                />
                <span className="text-xs">Saya memahami dan menyetujui Kebijakan Syariah di Lewi House</span>
              </label>
            </div>

            {/* Action Buttons with Strict Visual Hierarchy */}
            <div className="space-y-3 pt-2">
              {/* Primary Instant Booking Button (Highest Visual Weight) */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">Estimated Total ({nights} night{nights > 1 ? 's' : ''})</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Best Price Guarantee</span>
                  </div>
                  <div className="font-display font-extrabold text-2xl text-[#1A365D] mt-0.5">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </div>
                  <span className="text-[11px] text-slate-500">Includes taxes & 24hr service</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                  {/* Dominant Primary Action (Agoda Recommended 8.8★) */}
                  <button
                    type="button"
                    onClick={handleAgodaBooking}
                    disabled={!acceptedSyariah}
                    className="bg-[#FF5E1F] hover:bg-[#E54B0F] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-6 py-3.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
                    title="Book on Agoda (Rated 8.8/10)"
                  >
                    <span>Instant Booking on Agoda (8.8★)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  {/* Secondary OTA Alternative */}
                  <button
                    type="button"
                    onClick={handleTravelokaBooking}
                    disabled={!acceptedSyariah}
                    className="bg-white hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed text-slate-700 font-semibold border border-slate-300 px-4 py-3.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Traveloka</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Subordinate Secondary Inquiries Button (Subtle / Outline Hierarchy) */}
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="text-xs text-slate-500">Need direct assistance or custom payment?</span>
                <button
                  type="submit"
                  disabled={!acceptedSyariah}
                  className="text-emerald-700 hover:text-emerald-800 disabled:opacity-50 text-xs font-semibold flex items-center gap-1.5 hover:underline cursor-pointer bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp 24/7 Front Desk Inquiries</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
