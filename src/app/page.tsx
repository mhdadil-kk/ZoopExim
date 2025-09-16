'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Users, Shield, Zap, TrendingUp } from 'lucide-react';
import dynamic from 'next/dynamic';
import Loader from '../components/Loader';

// Dynamically import Globe3D with no SSR
const Globe3D = dynamic(() => import('../components/Globe3D'), {
  ssr: false,
  loading: () => null
});

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const highlights = [
    { icon: Globe, title: '12+ Years Experience', desc: 'Proven track record in global trade' },
    { icon: Users, title: '50+ Global Clients', desc: 'Trusted by businesses worldwide' },
    { icon: Shield, title: 'Quality Assured', desc: 'Rigorous quality control processes' },
    { icon: Zap, title: 'Fast Delivery', desc: 'Efficient logistics and shipping' },
    { icon: TrendingUp, title: 'Global Reach', desc: 'Operations across 5+ countries' },
  ];

  const previewSections = [
    {
      title: 'Our Services',
      description: 'Comprehensive import-export solutions tailored to your business needs.',
      link: '/services',
      image: 'aboutimage.png',
    },  
    {
      title: 'Our Products',
      description: 'Quality products across multiple categories from trusted global suppliers.',
      link: '/products',
      image: 'productsimage.jpeg',
    },
    {
      title: 'Our Journey',
      description: 'Discover the milestones that shaped our success in international trade.',
      link: '/journey',
      image: 'journeyimage.png',
    },
  ];

  return (
    <div className="pt-20 md:pt-24">
      {/* Loader that will handle the initial loading state */}
      <Loader onLoadingComplete={() => setIsLoading(false)} />
      
      {/* Hero Section with Globe */}
      <section className={`relative min-h-screen w-full overflow-hidden bg-black text-white flex items-center justify-center px-6 md:px-12 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 z-0">
          <Globe3D onGlobeReady={() => {}} />
        </div>
        <div className={`relative z-20 text-center space-y-6 max-w-3xl transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl text-white font-medium">
            Explore Global Trade With
          </h1>
          <h2 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight drop-shadow-xl">
            Zoop Exim
          </h2>
          
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition text-lg font-medium"
          >
            Know More
          </Link>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600">Proven record of global and local business success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Discover Our Capabilities</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your business needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {previewSections.map((section, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <Link
                    href={section.link}
                    className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-center text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase tracking-tight text-white drop-shadow-lg">
            Zoop Exim
          </h2>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 font-medium leading-relaxed">
            Your Premier Partner in International Trade Excellence
          </p>

          <p className="text-lg sm:text-xl text-teal-100 max-w-3xl mx-auto">
            Partner with us for reliable, efficient, and cost-effective import-export solutions.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 text-lg sm:text-xl font-semibold rounded-xl shadow-lg bg-white text-teal-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 border border-white"
          >
            DISCOVER MORE
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  ); 
};

export default Home;