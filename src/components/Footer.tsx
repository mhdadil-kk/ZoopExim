import React from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center">
                <img
                  src="/logo.gif"
                  alt="Zoop Exim Logo"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold">Zoopexim</span>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner in global trade, connecting businesses worldwide with quality products and seamless logistics.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-teal-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-teal-400 transition-colors">About Us</Link>
              <Link href="/services" className="block text-gray-300 hover:text-teal-400 transition-colors">Services</Link>
              <Link href="/products" className="block text-gray-300 hover:text-teal-400 transition-colors">Products</Link>
              <Link href="/journey" className="block text-gray-300 hover:text-teal-400 transition-colors">Journey</Link>
              <Link href="/clients" className="block text-gray-300 hover:text-teal-400 transition-colors">Clients</Link>
              <Link href="/contact" className="block text-gray-300 hover:text-teal-400 transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300 text-sm">+91-8885684441</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300 text-sm">zoopexim@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Zoopexim. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;