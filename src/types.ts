export type ScreenId = 'home' | 'directions' | 'rooms' | 'facilities' | 'rules' | 'reviews' | 'contact';

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  pricePerNight: number;
  originalPrice?: number;
  capacity: number;
  bedType: string;
  roomSize: string;
  image: string;
  gallery: string[];
  amenities: string[];
  popular?: boolean;
  syariahNotice?: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  tag: string;
}

export interface TransitRoute {
  id: string;
  origin: string;
  iconType: 'plane' | 'train' | 'bus' | 'car';
  distance: string;
  duration: string;
  estimatedCost: string;
  steps: string[];
  tips: string;
}

export interface LandmarkItem {
  id: string;
  name: string;
  category: 'Culinary' | 'Shopping' | 'Transit' | 'Hospital' | 'Worship' | 'Heritage';
  distance: string;
  driveTime: string;
  description: string;
  iconName: string;
  coords: { x: number; y: number };
}

export interface GuestReview {
  id: string;
  author: string;
  origin: string;
  rating: number;
  date: string;
  roomStayed: string;
  comment: string;
  travelerType: 'Solo Traveler' | 'Family' | 'Couple (Syariah Verified)' | 'Business Trip';
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'bedrooms' | 'bathrooms' | 'lobby' | 'exterior' | 'amenities';
  categoryLabel: string;
  description: string;
  imageUrl: string;
  thumbnailUrl?: string;
  aspectRatio?: string;
  featured?: boolean;
}

export interface BookingFormState {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guestCount: number;
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  acceptedSyariahPolicy: boolean;
  specialRequests?: string;
}
