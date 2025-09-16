'use client';

import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';

const Clients = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setContentLoaded(true), 100);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const clientLogos = [
    // Global Tech Giants
    { name: "Google", logo: "/google.webp" },
    { name: "Amazon", logo: "/amazon.jpg" },
    { name: "Microsoft", logo: "/microsoft.png" },

    // Major Hospitality Chains
    { name: "Marriott", logo: "/marriott.png" },
    { name: "Taj Group", logo: "/tajgroup.png" },
    { name: "Hyatt", logo: "/hyatt.png" },
    { name: "Sheraton", logo: "/sheraton.jpg" },
    { name: "Novotel Group", logo: "/novotelgroup.svg" },
    { name: "Accor", logo: "/accor.svg" },
    { name: "Bonvoy Group", logo: "/bonvoygroup.jpg" },
    { name: "Trident", logo: "/trident.svg" },
    { name: "Oakwook", logo: "/oakwook.jpg" },
    { name: "Ibis", logo: "/ibis.svg" },
    { name: "GVK Hospitality", logo: "/gvkhospitality.png" },
    { name: "GMR", logo: "/gmr.png" },
    { name: "Kapil Hospitality Group", logo: "/kapilhospitalitygroup.png" },

    // Large Indian Corporations & Retail
    { name: "Reliance Group", logo: "/reliancegroup.jpg" },
    { name: "Bigbasket", logo: "/bigbasket.png" },
    { name: "Godrej Natures Basket", logo: "/godrejnaturesbasket.webp" },
    { name: "Vijetha Supermarket", logo: "/vijethasupermarket.webp" },

    // Food & Beverage
    { name: "Buffalo Wild Wings", logo: "/buffalowildwings.svg" },
    { name: "Fisherman's Wharf", logo: "/fisherman'swharf.avif" },
    { name: "Yum Yum Tree", logo: "/yumyumtree.webp" },
    { name: "Sky Gourmet", logo: "/skygourmet.jpg" },

    // Specialty Brands & Others
    { name: "Pure O Natural", logo: "/pureonatural.jpg" },
    { name: "Dry Fruit Basket", logo: "/dryfruitbasket.svg" },
    { name: "Qmart", logo: "/qmart.png" },
    { name: "Bragg Organic", logo: "/braggorganic.svg" },
    { name: "Bio Balance New Zealand", logo: "/biobalancenewzealand.jpg" },
  ];

  if (isLoading) {
    return (
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
          <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
            <div className="h-12 bg-gray-300 rounded-lg w-1/2 mx-auto animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto animate-pulse"></div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4 animate-pulse"></div>
              <div className="h-5 bg-gray-200 rounded w-1/4 mx-auto animate-pulse"></div>
            </div>
            
            <div className="flex items-center justify-center py-20">
              <LoadingSpinner size="lg" />
              <span className="ml-4 text-gray-600">Loading our valued clients...</span>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className={`pt-16 ${contentLoaded ? 'animate-fade-in-scale' : 'opacity-0'}`}>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-teal-600">Clients</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with top brands across retail, hospitality, and technology industries.
          </p>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Brands That Trust Us</h2>
            <p className="text-lg text-gray-600">A glimpse of our valued clients</p>
          </div>

          {/* Grid for client logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 items-center">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className={`group w-40 h-40 flex items-center justify-center bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 mx-auto ${
                  contentLoaded ? `animate-fade-in-scale animate-stagger-${(index % 6) + 1}` : ''
                }`}
              >
                <div className="w-28 h-28 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-10">
            *Logos displayed belong to their respective owners and are used for representation purposes only.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Clients;