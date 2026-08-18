/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { QuickContactFloating } from './components/QuickContactFloating';

import { HomeScreen } from './screens/HomeScreen';
import { DirectionsScreen } from './screens/DirectionsScreen';
import { RoomsScreen } from './screens/RoomsScreen';
import { FacilitiesScreen } from './screens/FacilitiesScreen';
import { RulesScreen } from './screens/RulesScreen';
import { ReviewsScreen } from './screens/ReviewsScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingRoomId, setBookingRoomId] = useState<string | undefined>(undefined);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen]);

  const handleOpenBooking = (roomId?: string) => {
    setBookingRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingRoomId(undefined);
  };

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#111C2C]">
      {/* Top sticky navigation */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 pb-16">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'directions' && (
          <DirectionsScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'rooms' && (
          <RoomsScreen
            onNavigate={handleNavigate}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'facilities' && (
          <FacilitiesScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'rules' && (
          <RulesScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'reviews' && (
          <ReviewsScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'contact' && (
          <ContactScreen
            onNavigate={handleNavigate}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}
      </main>

      {/* Bottom Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* 24/7 Floating Quick Reach Widget */}
      <QuickContactFloating
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Interactive Booking / Traveloka Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialRoomId={bookingRoomId}
      />
    </div>
  );
}
