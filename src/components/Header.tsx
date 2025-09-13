'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Journey', href: '/journey' },
    { name: 'Clients', href: '/clients' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 h-20 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <img
              src="/logo.gif"
              alt="Zoop Exim Logo"
              className="w-16 h-16 object-contain"
            />
            <div className="flex flex-col min-w-0">
              <span className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Times New Roman, serif' }}>
                Zoop Exim
              </span>
              <div className="w-full h-0.5 bg-black"></div>
              <span className="text-sm text-gray-700" style={{ fontFamily: 'Times New Roman, serif' }}>
                Private Limited
              </span>
              <span className="text-xs text-teal-600" style={{ fontFamily: 'Times New Roman, serif' }}>
                Est. 2013
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? 'bg-teal-500 text-white'
                    : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Contact */}
            <div className="ml-6 flex flex-col text-sm text-gray-700 whitespace-nowrap">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91-8885684441</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>zoopexim@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t shadow-lg z-40">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? 'bg-teal-500 text-white'
                      : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact */}
              <div className="mt-3 text-sm text-gray-700 text-left px-4 space-y-1">
                <div className="flex items-center space-x-1">
                  <Phone className="w-4 h-4" />
                  <span>+91-8885684441</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>zoopexim@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;