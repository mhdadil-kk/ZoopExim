'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton: React.FC = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <a
      href="https://wa.me/+918885684441"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      <div className="relative flex items-center justify-end">
        {/* Tooltip */}
        {isTooltipVisible && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
            Chat with Us
          </div>
        )}

        {/* WhatsApp Icon with green background and white WhatsApp icon */}
        <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
