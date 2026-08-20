import React, { useState } from 'react';
import { ScreenId, GuestReview } from '../types';
import { REVIEWS_DATA, HOTEL_INFO } from '../data/hotelData';
import { 
  Star, 
  MessageSquare, 
  CheckCircle2, 
  ShieldCheck, 
  ThumbsUp, 
  PlusCircle, 
  ExternalLink,
  Filter,
  CalendarDays
} from 'lucide-react';

interface ReviewsScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

export const ReviewsScreen: React.FC<ReviewsScreenProps> = ({ onNavigate, onOpenBooking }) => {
  const [reviewsList, setReviewsList] = useState<GuestReview[]>(REVIEWS_DATA);
  const [filterType, setFilterType] = useState<string>('all');
  const [showAddReview, setShowAddReview] = useState<boolean>(false);

  // New review form
  const [author, setAuthor] = useState('');
  const [origin, setOrigin] = useState('');
  const [rating, setRating] = useState(5);
  const [roomStayed, setRoomStayed] = useState('Standard Double Room');
  const [travelerType, setTravelerType] = useState<'Solo Traveler' | 'Family' | 'Couple (Syariah Verified)' | 'Business Trip'>('Couple (Syariah Verified)');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredReviews = reviewsList.filter((r) => {
    if (filterType === 'all') return true;
    return r.travelerType === filterType;
  });

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: GuestReview = {
      id: `rev-${Date.now()}`,
      author: author || 'Tamu Lewi House',
      origin: origin || 'Indonesia',
      rating,
      date: 'Just now',
      roomStayed,
      travelerType,
      comment,
    };
    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowAddReview(false);
      setComment('');
      setAuthor('');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-900 border border-amber-200/80 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide">
          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>Guest Ratings & Feedback</span>
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl text-[#1A365D] tracking-tight">
          Verified Guest Experiences
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          See what real travelers, couples, and families have to say about their stay at Lewi House Syariah.
        </p>
      </div>

      {/* Ratings Overview Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-4 text-center lg:text-left space-y-4 lg:border-r border-slate-100 lg:pr-10">
          <div className="space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Agoda Verified Score</span>
            <div className="flex items-baseline justify-center lg:justify-start gap-2">
              <span className="font-display font-extrabold text-4xl sm:text-5xl text-red-600">8.8</span>
              <span className="text-sm font-semibold text-slate-400">/ 10</span>
            </div>
            <div className="inline-block bg-red-50 text-red-700 font-bold text-xs px-2.5 py-0.5 rounded-full border border-red-200">
              Exceptional Value for Money (9.3 / 10)
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
            >
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Check Availability</span>
            </button>
            <a
              href={HOTEL_INFO.agodaUrl}
              target="_blank"
              rel="noreferrer"
              title="Opens Agoda in a new tab"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-red-50 border border-red-200 text-red-600 hover:text-red-700 text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Agoda Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={HOTEL_INFO.travelokaUrl}
              target="_blank"
              rel="noreferrer"
              title="Opens Traveloka in a new tab"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-orange-50 border border-orange-200 text-accent-hover text-xs font-bold px-3 py-1.5 rounded-lg transition-colors"
            >
              <span>Traveloka (4.8★)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-[11px] text-slate-500">
            Based on verified guest stays across Agoda, Traveloka, and direct bookings.
          </p>
        </div>

        {/* Rating Breakdown Bars */}
        <div className="lg:col-span-8 space-y-5">
          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-baseline font-semibold text-slate-700">
              <span>Value for Money (Agoda Verified)</span>
              <span className="text-primary font-extrabold text-[13px]">9.3 / 10 (93%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-primary rounded-full w-[93%]"></div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-baseline font-semibold text-slate-700">
              <span>Staff & 24-Hour Front Desk Service</span>
              <span className="text-primary font-extrabold text-[13px]">9.0 / 10 (90%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-primary/85 rounded-full w-[90%]"></div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-baseline font-semibold text-slate-700">
              <span>Cleanliness & Bathroom Hygiene</span>
              <span className="text-primary font-extrabold text-[13px]">8.9 / 10 (89%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-primary/72 rounded-full w-[89%]"></div>
            </div>
          </div>

          <div className="space-y-1.5 text-xs">
            <div className="flex justify-between items-baseline font-semibold text-slate-700">
              <span>Quiet Location in Medan Petisah</span>
              <span className="text-primary font-extrabold text-[13px]">8.7 / 10 (87%)</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-primary/60 rounded-full w-[87%]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter & Add Review Button Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-700">Filter by Traveler:</span>
          <div className="flex flex-wrap bg-white p-1 rounded-xl border border-slate-200 text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterType === 'all' ? 'bg-[#1A365D] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Types ({reviewsList.length})
            </button>
            <button
              onClick={() => setFilterType('Couple (Syariah Verified)')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterType === 'Couple (Syariah Verified)' ? 'bg-[#1A365D] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Couples
            </button>
            <button
              onClick={() => setFilterType('Solo Traveler')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterType === 'Solo Traveler' ? 'bg-[#1A365D] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setFilterType('Family')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterType === 'Family' ? 'bg-[#1A365D] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Family
            </button>
            <button
              onClick={() => setFilterType('Business Trip')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                filterType === 'Business Trip' ? 'bg-[#1A365D] text-white font-bold' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Business
            </button>
          </div>
        </div>

        <button
          onClick={() => setShowAddReview(!showAddReview)}
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Write a Review</span>
        </button>
      </div>

      {/* Write review form toggle */}
      {showAddReview && (
        <form onSubmit={handleAddReview} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4 max-w-2xl mx-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h4 className="font-display font-bold text-base text-slate-900">
              Share Your Stay Experience
            </h4>
            <span className="text-xs text-slate-400">Lewi House Syariah Medan</span>
          </div>

          {submitted ? (
            <div className="p-4 bg-emerald-50 text-emerald-800 rounded-xl text-xs font-medium text-center">
              ✓ Terima kasih! Ulasan Anda berhasil ditambahkan.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Siti Sarah"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Origin City</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jakarta, Banda Aceh"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Rating</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden bg-white"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 - Exceptional)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 - Very Good)</option>
                    <option value={3}>⭐⭐⭐ (3 - Average)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Traveler Type</label>
                  <select
                    value={travelerType}
                    onChange={(e) => setTravelerType(e.target.value as any)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden bg-white"
                  >
                    <option value="Couple (Syariah Verified)">Couple (Syariah)</option>
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Family">Family</option>
                    <option value="Business Trip">Business Trip</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Room Stayed</label>
                  <select
                    value={roomStayed}
                    onChange={(e) => setRoomStayed(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden bg-white"
                  >
                    <option value="Standard Single Room">Standard Single</option>
                    <option value="Standard Double Room">Standard Double</option>
                    <option value="Standard Twin Room">Standard Twin</option>
                    <option value="Deluxe Family Suite">Deluxe Family</option>
                  </select>
                </div>
              </div>

              <div className="text-xs">
                <label className="block font-semibold text-slate-700 mb-1">Review Comments</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Share details about room cleanliness, AC, Wi-Fi, location, and service..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#1A365D] focus:outline-hidden"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddReview(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#1A365D] hover:bg-[#2B4E7D] text-white px-5 py-2 text-xs font-bold rounded-lg"
                >
                  Submit Review
                </button>
              </div>
            </>
          )}
        </form>
      )}

      {/* Reviews Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex text-amber-400 text-sm">
                  {'★'.repeat(Math.round(rev.rating))}
                  {'☆'.repeat(5 - Math.round(rev.rating))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {rev.travelerType}
                </span>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div>
                <h5 className="font-bold text-slate-900">{rev.author}</h5>
                <span className="text-[11px] text-slate-500">{rev.origin} • Stayed in {rev.roomStayed}</span>
              </div>
              <span className="text-[10px] text-slate-400">{rev.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
