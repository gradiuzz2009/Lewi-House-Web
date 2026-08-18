import React from 'react';
import { ScreenId } from '../types';
import { 
  Building2, 
  MapPin, 
  BedDouble, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Phone,
  LucideIcon
} from 'lucide-react';

export interface NavNode {
  id: ScreenId;
  label: string;
  shortLabel?: string;
  description: string;
  icon: LucideIcon;
  isPrimary: boolean;
}

/**
 * Single source of truth for global navigation nodes across
 * Desktop Navbar, Mobile Drawer, Mobile Bottom Navigation, and Footer.
 * Eliminates redundant sibling labels and aligns with Nielsen's 4th Heuristic.
 */
export const GLOBAL_NAV_NODES: NavNode[] = [
  {
    id: 'home',
    label: 'Home',
    shortLabel: 'Home',
    description: 'Welcome to Lewi House Syariah overview',
    icon: Building2,
    isPrimary: true,
  },
  {
    id: 'rooms',
    label: 'Rooms & Rates',
    shortLabel: 'Rooms',
    description: 'Accommodations, nightly rates, and room amenities',
    icon: BedDouble,
    isPrimary: true,
  },
  {
    id: 'directions',
    label: 'Directions & Map',
    shortLabel: 'Directions',
    description: 'Interactive map, airport access, and driving routes',
    icon: MapPin,
    isPrimary: true,
  },
  {
    id: 'facilities',
    label: 'Facilities',
    shortLabel: 'Facilities',
    description: 'Complimentary amenities, Wi-Fi, and 24h services',
    icon: Sparkles,
    isPrimary: false,
  },
  {
    id: 'rules',
    label: 'House Rules',
    shortLabel: 'Rules',
    description: 'Syariah guidelines, check-in, and guest policies',
    icon: ShieldCheck,
    isPrimary: false,
  },
  {
    id: 'reviews',
    label: 'Reviews',
    shortLabel: 'Reviews',
    description: 'Verified guest feedback and Agoda 8.8 ratings',
    icon: Star,
    isPrimary: false,
  },
  {
    id: 'contact',
    label: 'Contact',
    shortLabel: 'Contact',
    description: '24/7 front desk phone, WhatsApp, and message form',
    icon: Phone,
    isPrimary: false,
  },
];

export const PRIMARY_NAV_NODES = GLOBAL_NAV_NODES.filter((node) => node.isPrimary);
export const SECONDARY_NAV_NODES = GLOBAL_NAV_NODES.filter((node) => !node.isPrimary);
