import React from 'react';
import { ScreenId } from '../types';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA, REVIEWS_DATA, HOUSE_RULES, PROPERTY_GALLERY_PHOTOS } from '../data/hotelData';
import { ImageGallery } from '../components/ImageGallery';
import { 
  Wind, 
  Wifi, 
  Clock, 
  Car, 
  ShieldCheck, 
  MapPin, 
  Star, 
  ArrowRight, 
  Check, 
  ExternalLink,
  ChevronRight,
  Phone,
  BedDouble,
  Sparkles,
  CalendarCheck,
  Camera
} from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: (roomId?: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden bg-slate-900 text-white">
        {/* Background Image with optimized dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_INFO.heroImage}
            alt="Lewi House Syariah Medan Interior Room"
            className="w-full h-full object-cover object-center transform scale-105 filter brightness-70"
          />
          {/* Multi-stop semi-transparent dark gradient overlay for strict accessibility contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/60" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Syariah Badge Tag */}
          <div className="inline-flex items-center gap-2 bg-slate-950/80 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-amber-300 animate-fadeIn shadow-lg">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Syariah-Compliant Hospitality • Medan Petisah</span>
          </div>

          {/* Main Headline & Subtitle */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-white drop-shadow-xl">
              Affordable Comfort in the Heart of Medan
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-100 font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
              Clean, secure, and peaceful rooms with 24-hour service and free high-speed Wi-Fi.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              id="hero-view-rooms-btn"
              onClick={() => onNavigate('rooms')}
              className="w-full sm:w-auto bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-8 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 active:scale-95"
            >
              <span>View Our Rooms</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-get-directions-btn"
              onClick={() => onNavigate('directions')}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5 text-amber-400" />
              <span>Get Map Directions</span>
            </button>
          </div>

          {/* Check-in Info Banner */}
          <div className="pt-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-slate-900/80 backdrop-blur-md border border-slate-700/80 px-6 py-3 rounded-2xl text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Check-In: <strong>{HOTEL_INFO.checkInTime}</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>Check-Out: <strong>{HOTEL_INFO.checkOutTime}</strong></span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-emerald-300 font-semibold">{HOTEL_INFO.frontDeskHours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT LEWI HOUSE SYARIAH SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Image with Accent Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={HOTEL_INFO.exteriorImage}
                alt="Lewi House Syariah Exterior and Reception"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
              {/* Multi-stop semi-transparent dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-10 bg-slate-950/70 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-lg">
                <span className="inline-block text-[11px] font-bold uppercase tracking-wider bg-[#1A365D] border border-blue-400/30 px-2.5 py-0.5 rounded-md text-amber-300">
                  Peaceful Cul-De-Sac
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-white mt-1.5 drop-shadow-sm">
                  50m Off Main Sei Sikambing Road
                </h4>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Enjoy restful sleep away from street noise while staying minutes from city centers.
                </p>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-slate-950 font-bold px-4 py-2 rounded-xl shadow-lg text-xs flex items-center gap-2 border border-amber-300">
              <Star className="w-4 h-4 fill-slate-950" />
              <span>Agoda 8.8 / 10 • 17 Rooms (4 Floors)</span>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A365D] bg-blue-50 border border-blue-100 px-3 py-1 rounded-md">
                About Our Hospitality
              </span>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-[#1A365D] tracking-tight mt-3">
                A Serene Stay for Every Traveler
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Located in the vibrant district of Medan Petisah, <strong>Lewi House Syariah</strong> is designed for discerning budget travelers who prioritize cleanliness, safety, and a quiet night’s sleep.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Rooted in syariah values of hospitality and mutual respect, we maintain a welcoming, smoke-free atmosphere. Whether you are traveling for business, visiting university campuses, or on a family culinary vacation in Medan, our 24-hour reception ensures a seamless stay from check-in to check-out.
            </p>

            {/* 3 Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1A365D] flex items-center justify-center font-bold mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#1A365D]" />
                </div>
                <h4 className="font-bold text-xs text-slate-900">Family & Syariah</h4>
                <p className="text-[11px] text-slate-500 mt-1">Peaceful environment with respectful house rules.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold mb-2">
                  <Clock className="w-4 h-4 text-emerald-700" />
                </div>
                <h4 className="font-bold text-xs text-slate-900">24/7 Front Desk</h4>
                <p className="text-[11px] text-slate-500 mt-1">Always open to welcome late arrivals or answer queries.</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-2">
                  <MapPin className="w-4 h-4 text-amber-800" />
                </div>
                <h4 className="font-bold text-xs text-slate-900">Medan Petisah Hub</h4>
                <p className="text-[11px] text-slate-500 mt-1">Minutes from Plaza Medan Fair and Durian Ucok.</p>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('directions')}
                className="text-xs font-bold text-[#1A365D] hover:text-[#FF5E1F] flex items-center gap-1.5 transition-colors group cursor-pointer"
              >
                <span>Explore Location & Nearby Food Spots</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EVERYTHING YOU NEED - 4-CARD FEATURE GRID */}
      <section className="bg-white py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5E1F] bg-orange-50 px-3 py-1 rounded-md">
              Essential Comforts
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#1A365D] tracking-tight">
              Everything You Need for a Relaxing Stay
            </h2>
            <p className="text-sm text-slate-600">
              Thoughtfully curated amenities ensuring supreme comfort without unnecessary costs.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: AC */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center group-hover:bg-[#1A365D] group-hover:text-white transition-colors">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Fully Air-Conditioned
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Stay cool and comfortable in Medan’s tropical climate with individual split AC controls in every room.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-blue-700">
                ✓ Available in all rooms
              </div>
            </div>

            {/* Card 2: Free Wi-Fi */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                  <Wifi className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Free High-Speed Wi-Fi
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Stay connected with seamless high-speed internet access throughout all guest rooms and public areas.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-700">
                ✓ High bandwidth & reliable
              </div>
            </div>

            {/* Card 3: 24-Hour Front Desk */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    24-Hour Front Desk
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Our friendly staff is always ready to assist you day or night, ensuring effortless check-ins at any hour.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-amber-700">
                ✓ Late night check-in ready
              </div>
            </div>

            {/* Card 4: Secure Parking & Dining */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all group flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center group-hover:bg-purple-700 group-hover:text-white transition-colors">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Secure Parking & Dining
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Safe on-site parking for motorbikes and cars, situated near famous Medan culinary food stalls.
                  </p>
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-semibold text-purple-700">
                ✓ Gated perimeter & food spots
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROPERTY PHOTO GALLERY CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageGallery
          id="home-property-gallery"
          title="Virtual Property Tour & Rooms"
          subtitle="Explore high-definition photos of our quiet rooms, clean private bathrooms, front desk, and peaceful surroundings in Medan Petisah."
          onOpenBooking={() => onOpenBooking()}
          showCategoryFilters={true}
        />
      </section>

      {/* 5. FEATURED ROOMS & RATES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#1A365D] bg-blue-50 px-3 py-1 rounded-md">
              Accommodations
            </span>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#1A365D] tracking-tight mt-2">
              Our Clean & Peaceful Rooms
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Simple, clean, and economical rooms equipped with all your basic daily essentials.
            </p>
          </div>
          <button
            onClick={() => onNavigate('rooms')}
            className="text-xs font-bold text-[#1A365D] hover:text-[#FF5E1F] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>View All Room Types & Policies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS_DATA.slice(0, 3).map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Price Overlay */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  {room.popular && (
                    <div className="absolute top-3 left-3 bg-[#FF5E1F] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md">
                      Most Popular
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-[#1A365D]/95 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-md">
                    Rp {room.pricePerNight.toLocaleString('id-ID')}
                    <span className="text-[10px] font-normal text-slate-300"> / night</span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {room.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">{room.tagline}</p>
                  </div>

                  {/* Bed & Capacity Specs */}
                  <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-medium">
                    <span>🛏️ {room.bedType}</span>
                    <span>👤 Max {room.capacity} Guest{room.capacity > 1 ? 's' : ''}</span>
                  </div>

                  {/* Key Amenities */}
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {room.amenities.slice(0, 4).map((am, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{am}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  id={`home-book-${room.id}`}
                  onClick={() => onOpenBooking(room.id)}
                  className="w-full bg-[#1A365D] hover:bg-[#2A4D7E] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
                >
                  <span>Book Room (Agoda / Traveloka / WA)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GUEST REVIEWS HIGHLIGHT */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Verified Guest Experiences
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mt-1">
                Loved by Travelers Across Indonesia
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={HOTEL_INFO.agodaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-red-950/80 hover:bg-red-900/80 transition-colors px-4 py-2.5 rounded-2xl border border-red-700/60 text-white"
              >
                <div className="font-display font-extrabold text-2xl text-red-400">8.8</div>
                <div>
                  <div className="text-xs font-bold text-white">Agoda Verified</div>
                  <div className="text-[10px] text-red-200">9.3 for Value for Money</div>
                </div>
              </a>

              <a
                href={HOTEL_INFO.travelokaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-800/90 hover:bg-slate-700/90 transition-colors px-4 py-2.5 rounded-2xl border border-slate-700 text-white"
              >
                <div className="font-display font-extrabold text-2xl text-amber-400">4.8</div>
                <div>
                  <div className="flex text-amber-400 text-xs">★★★★★</div>
                  <div className="text-[10px] text-slate-400">140+ Guest Reviews</div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS_DATA.slice(0, 3).map((rev) => (
              <div
                key={rev.id}
                className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 text-xs">★★★★★</div>
                    <span className="text-[10px] text-slate-400 bg-slate-700/80 px-2 py-0.5 rounded">
                      {rev.travelerType}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                  <div>
                    <h5 className="font-bold text-white">{rev.author}</h5>
                    <p className="text-[10px] text-slate-400">{rev.origin}</p>
                  </div>
                  <span className="text-[10px] text-slate-500">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => onNavigate('reviews')}
              className="text-xs font-semibold text-amber-300 hover:text-amber-200 underline cursor-pointer"
            >
              Read all verified guest reviews →
            </button>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1A365D] via-[#0E1F35] to-[#1A365D] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center space-y-6">
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-[#FF5E1F]/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            Best Budget Stay in Medan Petisah
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight max-w-2xl mx-auto">
            Ready to stay with us?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Lock in our best budget rates today for a peaceful, clean, and comfortable experience in Medan.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            {/* Dominant Primary Booking Action */}
            <button
              id="cta-book-traveloka-btn"
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto bg-[#FF5E1F] hover:bg-[#E54B0F] text-white px-8 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98"
            >
              <span>Book Online Instantly (Agoda 8.8★ / Traveloka)</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            {/* Subordinate Secondary Inquiries Action */}
            <a
              href={HOTEL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Front Desk Inquiries</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
