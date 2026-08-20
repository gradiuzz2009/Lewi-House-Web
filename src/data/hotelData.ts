import { RoomType, FacilityItem, TransitRoute, LandmarkItem, GuestReview, GalleryPhoto, OTAPlatform } from '../types';

export const PROPERTY_GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Standard Double Master Bedroom',
    category: 'bedrooms',
    categoryLabel: 'Guest Bedrooms',
    description: 'Crisp white linens on queen spring bed with split AC, warm ambient lighting, and bedside power ports.',
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-2',
    title: 'Deluxe Family Suite Suite Setup',
    category: 'bedrooms',
    categoryLabel: 'Guest Bedrooms',
    description: 'Spacious layout with queen and single bed configuration, ideal for family vacations in Medan.',
    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-3',
    title: 'Standard Twin Room Beds',
    category: 'bedrooms',
    categoryLabel: 'Guest Bedrooms',
    description: 'Two separate ergonomic twin beds with fresh linens, reading lights, and dedicated work desk.',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-4',
    title: 'Ensuite Private Bathroom & Hot Shower',
    category: 'bathrooms',
    categoryLabel: 'Bathrooms & Hygiene',
    description: 'Modern ceramic bathroom fitted with instant hot/cold water shower, clean vanity, and sanitized sanitary ware.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-5',
    title: '24-Hour Reception & Lobby Counter',
    category: 'lobby',
    categoryLabel: 'Lobby & Reception',
    description: 'Welcoming front desk counter staffed 24/7 for fast check-in, key handover, and guest assistance.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-6',
    title: 'Serene Residential Facade in Medan Petisah',
    category: 'exterior',
    categoryLabel: 'Exterior & Grounds',
    description: 'Positioned 50 meters off the main street behind Sei Sikambing road for peaceful rest without traffic noise.',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80',
    featured: true,
  },
  {
    id: 'gal-7',
    title: 'Prayer Amenities (Sajadah & Qibla Direction)',
    category: 'amenities',
    categoryLabel: 'Syariah Amenities',
    description: 'Every guest room includes cleaned prayer rugs (sajadah), verified Qibla direction, and holy Quran upon request.',
    imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    id: 'gal-8',
    title: 'High-Speed Wi-Fi & Work Workspace',
    category: 'amenities',
    categoryLabel: 'Connectivity & Work',
    description: 'Fast fiber-optic wireless connection throughout the rooms and lobby, suitable for business tasks and remote work.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    id: 'gal-9',
    title: 'Standard Single Room Interior',
    category: 'bedrooms',
    categoryLabel: 'Guest Bedrooms',
    description: 'Cozy and economical accommodation for solo travelers and business executives visiting Medan.',
    imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
  {
    id: 'gal-10',
    title: 'Sanitized Bed Linens & Bath Amenities Set',
    category: 'amenities',
    categoryLabel: 'Hygiene & Cleanliness',
    description: 'Freshly laundered towels, wrapped soaps, dental kits, and complimentary bottled mineral water.',
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=85',
    thumbnailUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400&q=80',
    featured: false,
  },
];

export const HOTEL_INFO = {
  name: 'Lewi House Syariah',
  agodaName: 'Lewi House',
  headline: 'Affordable Comfort in the Heart of Medan',
  tagline: 'Clean, secure, and peaceful rooms with 24-hour service and free high-speed Wi-Fi.',
  description: 'Tucked away on a quiet residential street in Medan Petisah (3.3 km from Medan City Center), Lewi House offers 17 well-appointed guest rooms across 4 floors. Positioned just 50 meters off the main Sei Sikambing thoroughfare, we combine tranquil, restful nights with immediate proximity to Plaza Medan Fair, Airport Shuttle Bus (Damri), and premier dining destinations.',
  address: 'Jl. Sei Bahkapuran No. 16A, Sei Sikambing D, Kec. Medan Petisah, Kota Medan, Sumatera Utara 20119',
  shortAddress: 'Medan Petisah, Kota Medan, North Sumatra (Postal Code: 20119)',
  postalCode: '20119',
  totalRooms: 17,
  totalFloors: 4,
  propertyClass: '1-Star Syariah Hotel & Guesthouse',
  phone: '+62 821-6881-9722',
  phoneRaw: '+6282168819722',
  whatsappUrl: 'https://wa.me/6282168819722?text=Halo%20Lewi%20House%20Syariah,%20saya%20ingin%20tanya%20ketersediaan%20kamar',
  travelokaUrl: 'https://www.traveloka.com/en-id/hotel/indonesia/lewi-house-syariah-9000000874521',
  agodaUrl: 'https://www.agoda.com/lewi-house/hotel/medan-id.html',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lewi+House+Syariah+Medan+Jl.+Sei+Bahkapuran+No.+16A',
  checkInTime: '14:00 (2:00 PM) WIB',
  checkOutTime: '12:00 (12:00 PM) WIB',
  frontDeskHours: '24 Hours Open',
  rating: 4.8,
  agodaRating: 8.8,
  agodaRatingText: 'Excellent',
  agodaValueScore: 9.3,
  agodaCleanlinessScore: 8.9,
  agodaServiceScore: 9.0,
  agodaLocationScore: 8.7,
  reviewCount: 142,
  priceStart: 168000,
  currency: 'IDR',
  heroImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
  exteriorImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
};

/**
 * Online Travel Agent (OTA) platforms where guests can directly reserve
 * Lewi House Syariah rooms. Deep links carry check-in / check-out dates
 * and guest counts so users land straight on the reservation flow.
 */
export const OTA_PLATFORMS: OTAPlatform[] = [
  {
    id: 'agoda',
    name: 'Agoda',
    tagline: 'Best-value deals & instant confirmation',
    rating: '8.8',
    ratingLabel: 'Excellent Score',
    initials: 'A',
    brandBg: 'bg-red-600',
    brandText: 'text-white',
    featured: true,
  },
  {
    id: 'traveloka',
    name: 'Traveloka',
    tagline: '140+ verified guest reviews',
    rating: '4.8',
    ratingLabel: 'Guest Rating',
    initials: 'T',
    brandBg: 'bg-[#0194F3]',
    brandText: 'text-white',
  },
  {
    id: 'tiket',
    name: 'tiket.com',
    tagline: "Indonesia's favorite travel app",
    initials: 't',
    brandBg: 'bg-[#FF5E1F]',
    brandText: 'text-white',
  },
  {
    id: 'booking',
    name: 'Booking.com',
    tagline: 'Trusted by travelers worldwide',
    initials: 'B',
    brandBg: 'bg-[#003580]',
    brandText: 'text-white',
  },
];

export interface OtaDeepLinkOptions {
  checkIn?: string; // YYYY-MM-DD
  checkOut?: string; // YYYY-MM-DD
  adults?: number;
}

/** Formats a Date to local YYYY-MM-DD (WIB-safe, not UTC). */
const toLocalDateString = (d: Date): string => {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

/** Default stay window: tomorrow → day after tomorrow (1 night). */
export const getDefaultStayDates = (): { checkIn: string; checkOut: string } => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 2);
  return { checkIn: toLocalDateString(tomorrow), checkOut: toLocalDateString(dayAfter) };
};

/**
 * Builds a date-aware deep link to the chosen OTA platform so guests can
 * directly reserve from Traveloka, Agoda, tiket.com, or Booking.com.
 */
export const buildOtaDeepLink = (
  platformId: OTAPlatform['id'] | string,
  options: OtaDeepLinkOptions = {}
): string => {
  const defaults = getDefaultStayDates();
  const checkIn = options.checkIn || defaults.checkIn;
  const checkOut = options.checkOut || defaults.checkOut;
  const adults = Math.max(1, options.adults || 2);

  const inMs = new Date(checkIn).getTime();
  const outMs = new Date(checkOut).getTime();
  const nights = Math.max(1, Math.round((outMs - inMs) / 86400000));

  switch (platformId) {
    case 'agoda':
      return `https://www.agoda.com/lewi-house/hotel/medan-id.html?checkIn=${checkIn}&los=${nights}&adults=${adults}&rooms=1&finalPriceView=1&isShowMobileAppPrice=false&currencyCode=IDR&travellerType=1&isFreeOccSearch=false`;
    case 'traveloka':
      return `https://www.traveloka.com/en-id/hotel/indonesia/lewi-house-syariah-9000000874521?checkIn=${checkIn}&checkOut=${checkOut}&rooms=1&adults=${adults}`;
    case 'tiket':
      return `https://www.tiket.com/search?q=${encodeURIComponent('Lewi House Syariah Medan')}`;
    case 'booking':
      return `https://www.booking.com/searchresults.id.html?ss=${encodeURIComponent('Lewi House Syariah Medan')}&checkin=${checkIn}&checkout=${checkOut}&group_adults=${adults}&no_rooms=1&group_children=0&selected_currency=IDR`;
    default:
      return HOTEL_INFO.agodaUrl;
  }
};

export const ROOMS_DATA: RoomType[] = [
  {
    id: 'room-standard-single',
    name: 'Standard Single Room',
    tagline: 'Cozy and economical choice for solo travelers and business visits',
    pricePerNight: 168000,
    originalPrice: 210000,
    capacity: 1,
    bedType: '1 Single Bed (Comfort Spring)',
    roomSize: '16 m²',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    ],
    popular: false,
    amenities: [
      'Individual Air Conditioner (AC)',
      'Free High-Speed Wi-Fi in room',
      'Ensuite Private Bathroom',
      'Hot & Cold Water Shower',
      'Complimentary Bottled Mineral Water',
      'Fresh Towels & Daily Toiletries',
      'Work Desk & Chair',
      'Qibla Direction & Prayer Mat',
    ],
    syariahNotice: 'Single occupant only. 100% Non-smoking room.',
  },
  {
    id: 'room-superior-single',
    name: 'Superior Single Room',
    tagline: 'Upgraded single comfort with dedicated workspace and city light view',
    pricePerNight: 185000,
    originalPrice: 230000,
    capacity: 1,
    bedType: '1 Single Comfort Bed',
    roomSize: '16 m²',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80',
    ],
    popular: false,
    amenities: [
      'Split Air Conditioner',
      'High-Speed Wi-Fi Access',
      'Private Bathroom with Hot Shower',
      'Ergonomic Work Desk',
      'Sanitized Bedding & Linens',
      'Complimentary Water Bottles',
      'Prayer Mat & Qibla Direction',
    ],
    syariahNotice: 'Single occupant only. Non-smoking room.',
  },
  {
    id: 'room-standard-double',
    name: 'Superior Double Room',
    tagline: 'Popular spacious comfort with queen double bed for verified couples and professionals',
    pricePerNight: 198000,
    originalPrice: 250000,
    capacity: 2,
    bedType: '1 Queen Double Bed (160 x 200 cm)',
    roomSize: '18 m²',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=900&q=80',
    ],
    popular: true,
    amenities: [
      'Powerful Split Air Conditioner',
      'High-Speed Optical Wi-Fi',
      'Private Bathroom with Hot & Cold Shower',
      'Complimentary Bottled Water (2 Bottles)',
      'Clean Bed Linens & Pillows',
      'Wardrobe & Clothes Rack',
      'Prayer Mat (Sajadah) & Qibla Direction',
      'Daily Room Housekeeping on request',
    ],
    syariahNotice: 'Syariah Rule: Couple guests must provide Buku Nikah or marriage certificate upon check-in.',
  },
  {
    id: 'room-standard-twin',
    name: 'Standard Twin Room',
    tagline: 'Two separate ergonomic beds for colleagues, friends, or relatives',
    pricePerNight: 198000,
    originalPrice: 245000,
    capacity: 2,
    bedType: '2 Twin Beds (100 x 200 cm each)',
    roomSize: '18 m²',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    ],
    popular: false,
    amenities: [
      'Split Air Conditioner',
      'Free High-Speed Wi-Fi',
      'Ensuite Bathroom with Fresh Towels',
      'Hot Shower & Standard Toiletries',
      'Complimentary Bottled Water',
      'Bedside Power Outlets',
      'Qibla Direction Indicator',
    ],
    syariahNotice: 'Same-gender occupancy or immediate family members only.',
  },
  {
    id: 'room-deluxe-family',
    name: 'Suite Room / Deluxe Family',
    tagline: 'Spacious 25 m² suite with king bedding, perfect for family stays or extended visits',
    pricePerNight: 285000,
    originalPrice: 350000,
    capacity: 3,
    bedType: '1 Plush King Bed + 1 Single Bed',
    roomSize: '25 m²',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=80',
    ],
    popular: false,
    amenities: [
      'High-Capacity Split Air Conditioners',
      'Free Ultra-Fast Wi-Fi',
      'Spacious Private Bathroom with Hot Water',
      'Electric Kettle & Complimentary Coffee/Tea',
      'Bottled Water for 3 Guests',
      'Prayer Mats & Clean Towels Set',
      'Wardrobe with Storage Hangers',
      'Cozy Sitting & Relaxation Corner',
    ],
    syariahNotice: 'Family guests are required to present valid Family Card (Kartu Keluarga) or IDs.',
  },
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: 'fac-ac',
    title: 'Full Room Air Conditioning',
    description: 'Keep cool and refreshed after navigating Medan’s warm tropical weather with independent split AC in every room.',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    tag: 'Comfort Essential',
  },
  {
    id: 'fac-wifi',
    title: 'Free High-Speed Wi-Fi',
    description: 'High-bandwidth wireless connectivity throughout the property so you can work, stream, or stay in touch without interruption.',
    iconName: 'Wifi',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    tag: 'Connectivity',
  },
  {
    id: 'fac-rooftop',
    title: 'Rooftop Terrace & Gathering Area',
    description: 'Scenic top-floor open-air terrace with seating and fitness equipment overlooking the Medan skyline.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    tag: 'Property Highlight',
  },
  {
    id: 'fac-frontdesk',
    title: '24-Hour Front Desk',
    description: 'Our attentive team is on-site 24/7 to welcome late-night arrivals, assist with luggage, and provide local guidance.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tag: 'Guest Service',
  },
  {
    id: 'fac-parking',
    title: 'Free On-Site Car & Motor Parking',
    description: 'Dedicated parking slots for motorcycles and cars within our gated perimeter with overnight surveillance.',
    iconName: 'Car',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=800&q=80',
    tag: 'Free Amenity',
  },
  {
    id: 'fac-syariah',
    title: 'Syariah Friendly Environment',
    description: 'Peaceful, respectful ambiance with Qibla pointers, prayer mats (Sajadah) available on request, and strict family privacy.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
    tag: 'Islamic Values',
  },
  {
    id: 'fac-water',
    title: 'Hot Shower & Mineral Water',
    description: 'Revitalize with temperature-controlled showers and complimentary bottled mineral water refreshed daily.',
    iconName: 'Droplets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    tag: 'Hygiene',
  },
];

export const TRANSIT_ROUTES: TransitRoute[] = [
  {
    id: 'route-train-station',
    origin: 'Medan Main Train Station (Stasiun Medan / Airport Rail Link)',
    iconType: 'train',
    distance: '3.8 km',
    duration: '10 - 15 mins drive',
    estimatedCost: 'Rp 20.000 - Rp 35.000 (Grab / Gojek / Taxi)',
    steps: [
      'Exit Medan Train Station onto Jl. Stasiun Kereta Api heading west towards Lapangan Merdeka.',
      'Take Jl. Guru Patimpus or Jl. Balai Kota onto Jl. Gatot Subroto.',
      'Continue straight on Jl. Gatot Subroto passing Plaza Medan Fair.',
      'Turn left onto Jl. Sei Sikambing / Jl. Sei Bahkapuran.',
      'Look for the Lewi House Syariah signpost 50 meters inside Jl. Sei Bahkapuran No. 16A on your right.',
    ],
    tips: 'If arriving via the Kualanamu Airport Rail Train (Railink), Medan Train Station is the most convenient direct drop-off hub.',
  },
  {
    id: 'route-airport',
    origin: 'Kualanamu International Airport (KNO)',
    iconType: 'plane',
    distance: '39 km',
    duration: '45 - 60 mins via Toll Road',
    estimatedCost: 'Rp 140.000 - Rp 220.000 (Taxi / GrabCar)',
    steps: [
      'Take the Medan-Kualanamu-Tebing Tinggi Toll Road heading into Kota Medan.',
      'Exit toll at Gerbang Tol Bandar Selamat or Amplas, following signs for Medan Kota / Medan Petisah.',
      'Merge onto Jl. Letda Sujono / Jl. Aksara toward Jl. Gatot Subroto.',
      'Turn into Medan Petisah onto Jl. Sei Bahkapuran No. 16A.',
    ],
    tips: 'For the fastest commute during peak traffic hours, take the Airport Train (Railink) to Stasiun Medan (30 mins), then a quick 10-minute taxi ride to Lewi House Syariah.',
  },
  {
    id: 'route-amplas-terminal',
    origin: 'Terminal Terpadu Amplas (Intercity Bus Station)',
    iconType: 'bus',
    distance: '9.2 km',
    duration: '25 - 35 mins drive',
    estimatedCost: 'Rp 35.000 - Rp 50.000',
    steps: [
      'From Terminal Amplas, proceed onto Jl. Sisingamangaraja heading North.',
      'Turn left onto Jl. Juanda toward Jl. Gajah Mada / Jl. Sei Sikambing.',
      'Follow Jl. Sei Sikambing and enter Jl. Sei Bahkapuran No. 16A.',
    ],
    tips: 'Ideal for travelers arriving on inter-provincial buses from Riau, West Sumatra, or Aceh.',
  },
  {
    id: 'route-pinang-baris',
    origin: 'Terminal Pinang Baris (Aceh / North Sumatra Bus Hub)',
    iconType: 'bus',
    distance: '5.5 km',
    duration: '15 - 20 mins drive',
    estimatedCost: 'Rp 25.000 - Rp 40.000',
    steps: [
      'Proceed east along Jl. Gatot Subroto heading into Medan Petisah.',
      'Make a right turn at Sei Sikambing junction onto Jl. Sei Bahkapuran.',
      'Arrive at Lewi House Syariah on your right.',
    ],
    tips: 'Direct and fast route with minimal intersections.',
  },
];

export const NEARBY_LANDMARKS: LandmarkItem[] = [
  {
    id: 'lm-medan-fair',
    name: 'Plaza Medan Fair',
    category: 'Shopping',
    distance: '1.4 km',
    driveTime: '5 mins drive',
    description: 'Medan’s iconic shopping mall with hypermarket, cinemas, food court, and retail outlets.',
    iconName: 'ShoppingBag',
    coords: { x: 38, y: 32 },
  },
  {
    id: 'lm-gajah-mada',
    name: 'Gajah Mada Culinary Street',
    category: 'Culinary',
    distance: '800 m',
    driveTime: '3 mins walk / 1 min drive',
    description: 'Famous Medan food strip packed with local cafes, Mie Aceh, Nasi Padang, and coffee shops.',
    iconName: 'Utensils',
    coords: { x: 48, y: 44 },
  },
  {
    id: 'lm-durian-ucok',
    name: 'Durian Ucok Medan',
    category: 'Culinary',
    distance: '2.1 km',
    driveTime: '8 mins drive',
    description: 'World-renowned destination for authentic, sweet and bittersweet Medan durian.',
    iconName: 'Sparkles',
    coords: { x: 26, y: 60 },
  },
  {
    id: 'lm-stasiun',
    name: 'Stasiun Kereta Api Medan',
    category: 'Transit',
    distance: '3.8 km',
    driveTime: '10 mins drive',
    description: 'Direct train terminus connecting to Kualanamu Airport (Railink) and North Sumatra regional lines.',
    iconName: 'Train',
    coords: { x: 72, y: 25 },
  },
  {
    id: 'lm-royal-prima',
    name: 'RSU Royal Prima Medan',
    category: 'Hospital',
    distance: '1.2 km',
    driveTime: '4 mins drive',
    description: 'Premier tertiary hospital and medical center for healthcare needs or visiting family.',
    iconName: 'HeartPulse',
    coords: { x: 55, y: 68 },
  },
  {
    id: 'lm-masjid-alhuda',
    name: 'Masjid Al-Huda Medan Petisah',
    category: 'Worship',
    distance: '350 m',
    driveTime: '3 mins walk',
    description: 'Nearby neighborhood mosque holding daily congregational prayers and Friday prayers.',
    iconName: 'Building',
    coords: { x: 50, y: 52 },
  },
];

export const HOUSE_RULES = [
  {
    id: 'rule-syariah',
    title: 'Syariah Principle & Married Couples',
    summary: 'Strictly welcoming married couples, families, and solo travelers.',
    details: 'As a Syariah-compliant hospitality provider, couples sharing a room are required to provide proof of marriage (Buku Nikah / Surat Nikah / marriage certificate or identical home address on KTP) at check-in. Unmarried non-mahram couples are strictly prohibited from booking shared rooms.',
    badge: 'Mandatory Policy',
    icon: 'HeartHandshake',
  },
  {
    id: 'rule-checkin',
    title: 'Check-In & Check-Out Times',
    summary: 'Standard check-in from 14:00 WIB, check-out by 12:00 WIB.',
    details: 'Early check-in or late check-out is subject to room availability upon request. 24-hour front desk is ready to welcome late evening arrivals.',
    badge: 'Timing',
    icon: 'Clock',
  },
  {
    id: 'rule-id',
    title: 'Valid Government ID Required',
    summary: 'Every adult guest must present valid original government ID (KTP / SIM / Passport).',
    details: 'IDs will be registered securely into our guest logbook in compliance with local hospitality regulations in Medan.',
    badge: 'Identity',
    icon: 'IdCard',
  },
  {
    id: 'rule-smoke',
    title: '100% Smoke-Free & Alcohol-Free',
    summary: 'Smoking and alcoholic beverages are strictly forbidden inside all rooms.',
    details: 'Designated outdoor smoking spots are provided near the entrance. Keeping our rooms fresh, clean, and healthy for every guest.',
    badge: 'Cleanliness',
    icon: 'Ban',
  },
  {
    id: 'rule-quiet',
    title: 'Quiet Hours (22:00 - 06:00 WIB)',
    summary: 'Respectful and peaceful atmosphere for all staying guests.',
    details: 'Please maintain low noise levels in hallways and rooms during quiet hours to ensure restful sleep for everyone.',
    badge: 'Comfort',
    icon: 'VolumeX',
  },
];

export const REVIEWS_DATA: GuestReview[] = [
  {
    id: 'rev-agoda-1',
    author: 'Agoda Verified Guest',
    origin: 'Indonesia',
    rating: 5,
    date: 'Agoda Verified Stay',
    roomStayed: 'Superior Double Room',
    travelerType: 'Couple (Syariah Verified)',
    comment: 'Exceptional 8.8 value for money! The room was spotless, the bed was very comfortable, and the air conditioning was ice cold. Located in a quiet alley so no honking noise at night.',
  },
  {
    id: 'rev-1',
    author: 'Siti Rahmawati',
    origin: 'Banda Aceh',
    rating: 5,
    date: 'February 2025',
    roomStayed: 'Superior Double Room',
    travelerType: 'Couple (Syariah Verified)',
    comment: 'Sangat nyaman dan tenang! Lokasinya di gang tenang Medan Petisah, dekat sekali kalau mau cari makan durian dan belanja ke Plaza Medan Fair. AC dingin, kamar mandi bersih, dan stafnya sangat ramah.',
  },
  {
    id: 'rev-2',
    author: 'Muhammad Dimas',
    origin: 'Jakarta Selatan',
    rating: 5,
    date: 'January 2025',
    roomStayed: 'Standard Single Room',
    travelerType: 'Business Trip',
    comment: 'Best value hotel in Medan! High-speed Wi-Fi was stable for my Zoom meetings, check-in at 11 PM was effortless thanks to the 24-hour reception desk. Very respectful and safe atmosphere.',
  },
  {
    id: 'rev-3',
    author: 'Ahmad Fauzi & Keluarga',
    origin: 'Pekanbaru',
    rating: 5,
    date: 'January 2025',
    roomStayed: 'Suite Room / Deluxe Family',
    travelerType: 'Family',
    comment: 'Pilihan tepat untuk liburan keluarga muslim. Lingkungan syariah yang tenang, tidak bising, parkir mobil aman. Air panas berfungsi bagus dan disediakan sajadah di kamar.',
  },
  {
    id: 'rev-agoda-2',
    author: 'Agoda Solo Guest',
    origin: 'Malaysia / International',
    rating: 4.8,
    date: 'Agoda Verified Stay',
    roomStayed: 'Superior Single Room',
    travelerType: 'Solo Traveler',
    comment: 'Great 24-hour reception, easy check-in, and fast Wi-Fi. Close to Plaza Medan Fair and Damri airport shuttle bus. Highly recommended budget stay.',
  },
  {
    id: 'rev-4',
    author: 'Nurul Hidayah',
    origin: 'Padang',
    rating: 4.8,
    date: 'December 2024',
    roomStayed: 'Standard Twin Room',
    travelerType: 'Solo Traveler',
    comment: 'Harga sangat terjangkau dengan fasilitas yang lengkap dan kamar yang wangi. Dekat jalan besar Gatot Subroto tapi tidak berisik karena posisi agak masuk ke dalam.',
  },
  {
    id: 'rev-5',
    author: 'Hendri Gunawan',
    origin: 'Medan',
    rating: 5,
    date: 'November 2024',
    roomStayed: 'Superior Double Room',
    travelerType: 'Couple (Syariah Verified)',
    comment: 'Pelayanan cepat dan ramah, kamar bersih sesuai foto di Agoda & Traveloka. Sangat direkomendasikan untuk yang butuh transit istirahat nyaman di pusat kota Medan.',
  },
];

export const FAQS = [
  {
    q: 'Apakah pasangan menikah harus menunjukkan Buku Nikah?',
    a: 'Ya, sebagai akomodasi berbasis Syariah, pasangan yang menginap dalam satu kamar wajib menunjukkan bukti pernikahan resmi (Buku Nikah / Surat Nikah / KTP dengan alamat yang sama) pada saat proses check-in.',
  },
  {
    q: 'Bagaimana cara menuju Lewi House Syariah dari Stasiun Medan?',
    a: 'Dari Stasiun Kereta Api Medan, Anda dapat menggunakan taksi online (Grab/Gojek) atau taksi reguler dengan waktu tempuh sekitar 10-15 menit (3.8 km) menuju Jl. Sei Bahkapuran No. 16A di kawasan Medan Petisah.',
  },
  {
    q: 'Apakah bisa check-in di atas jam 11 malam?',
    a: 'Bisa! Resepsionis kami beroperasi selama 24 jam non-stop sehingga Anda tetap dapat melakukan check-in kapan saja meskipun tiba larut malam.',
  },
  {
    q: 'Apakah tersedia fasilitas parkir mobil dan motor?',
    a: 'Tersedia area parkir aman di dalam area properti dengan pagar dan pengawasan staf 24 jam.',
  },
  {
    q: 'Bagaimana cara melakukan pemesanan kamar?',
    a: 'Anda dapat memesan secara instan melalui Traveloka untuk mendapatkan jaminan konfirmasi instan dan harga terbaik, atau menghubungi resepsionis kami melalui WhatsApp di +62 821-6881-9722.',
  },
];
