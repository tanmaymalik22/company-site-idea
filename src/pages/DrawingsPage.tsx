import React from 'react';
import { PortfolioPage } from './PortfolioPage';

interface DrawingsPageProps {
  onOpenEmergencyModal: (partName?: string) => void;
  onOpenContactModal: (subject?: string) => void;
}

export const DrawingsPage: React.FC<DrawingsPageProps> = ({
  onOpenEmergencyModal,
  onOpenContactModal
}) => {
  return (
    <PortfolioPage
      initialTab="gallery"
      onOpenEmergencyModal={onOpenEmergencyModal}
      onOpenContactModal={onOpenContactModal}
    />
  );
};
