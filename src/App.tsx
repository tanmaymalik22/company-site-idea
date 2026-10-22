/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { DrawingsPage } from './pages/DrawingsPage';
import { PlantMetalsPage } from './pages/PlantMetalsPage';
import { FacilityPage } from './pages/FacilityPage';
import { EmergencySupplyPage } from './pages/EmergencySupplyPage';
import { ContactPage } from './pages/ContactPage';
import { EmergencyModal } from './components/EmergencyModal';
import { RFQModal } from './components/RFQModal';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedSubsystemForPortfolio, setSelectedSubsystemForPortfolio] = useState<string | undefined>(undefined);
  const [selectedPartForModal, setSelectedPartForModal] = useState<string | undefined>(undefined);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEmergencyModal = (partName?: string) => {
    setSelectedPartForModal(partName);
    setEmergencyModalOpen(true);
  };

  const handleOpenContactModal = (subject?: string) => {
    setSelectedPartForModal(subject);
    setContactModalOpen(true);
  };

  const handleSelectSubsystem = (subsystemId: string) => {
    setSelectedSubsystemForPortfolio(subsystemId);
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f2efeb] text-[#1a1a1c] flex flex-col font-sans selection:bg-[#c52222] selection:text-white">
      
      {/* Globle Bhavya Architectural Automotive Header */}
      <Header 
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEmergencyModal={() => handleOpenEmergencyModal()}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Main Page View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenEmergencyModal={() => handleOpenEmergencyModal()}
            onOpenContactModal={() => handleOpenContactModal()}
            onSelectSubsystem={handleSelectSubsystem}
          />
        )}

        {currentPage === 'about' && (
          <AboutUsPage 
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate}
            onOpenEmergencyModal={() => handleOpenEmergencyModal()}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage 
            initialSubsystemId={selectedSubsystemForPortfolio}
            onOpenEmergencyModal={handleOpenEmergencyModal}
            onOpenContactModal={handleOpenContactModal}
            onNavigateToDrawings={() => handleNavigate('drawings')}
          />
        )}

        {currentPage === 'drawings' && (
          <DrawingsPage 
            onOpenEmergencyModal={handleOpenEmergencyModal}
            onOpenContactModal={handleOpenContactModal}
          />
        )}

        {currentPage === 'metals' && (
          <PlantMetalsPage 
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}

        {currentPage === 'facility' && (
          <FacilityPage 
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}

        {currentPage === 'emergency' && (
          <EmergencySupplyPage 
            onOpenEmergencyModal={() => handleOpenEmergencyModal()}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            initialSubject={selectedPartForModal}
            onOpenEmergencyModal={() => handleOpenEmergencyModal()}
          />
        )}
      </main>

      {/* Corporate Profile Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onOpenEmergencyModal={() => handleOpenEmergencyModal()}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Line-Down Emergency Response Modal */}
      <EmergencyModal 
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
        initialPartId={selectedPartForModal}
      />

      {/* RFQ / Contact Modal */}
      <RFQModal 
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialPartId={selectedPartForModal}
      />

    </div>
  );
}
