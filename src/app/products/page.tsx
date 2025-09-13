'use client';

import React, { useState, useEffect } from 'react';
import {
  Wheat,
  Zap,
  Beaker,
  Package,
  ArrowRight,
  Medal,
  Brush,
  Hammer,
  TreeDeciduous,
  Flame,
  Shirt,
} from 'lucide-react';
import ProductSkeleton from '../../components/ProductSkeleton';

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setProductsLoaded(true), 100);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: 'Fresh Produce',
      category: 'Agriculture',
      description: 'Top quality fresh produce sourced from trusted suppliers.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Fresh%20Produce.jpg',
      icon: Wheat,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 2,
      name: 'Seeds & Grains',
      category: 'Agriculture',
      description: 'Top quality seeds and grains sourced from trusted suppliers.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Seeds%20&%20Grains.jpg',
      icon: Wheat,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 3,
      name: 'Spices',
      category: 'Food & Beverages',
      description: 'Aromatic and pure spices from renowned regions.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Spices.jpg',
      icon: Flame,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 4,
      name: 'Coffee Beans',
      category: 'Food & Beverages',
      description: 'Rich and aromatic coffee beans from the best plantations.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Coffee%20Beans.jpg',
      icon: Beaker,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 5,
      name: 'Dry Fruits',
      category: 'Food & Beverages',
      description: 'Delicious and nutritious dry fruits from reliable sources.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Dry%20Fruits.webp',
      icon: Package,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 6,
      name: 'Brass Art',
      category: 'Art & Decor',
      description: 'Top quality brass artwork from experienced artisans.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Brass%20Art.png',
      icon: Medal,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 7,
      name: 'Handicrafts',
      category: 'Art & Decor',
      description: 'Exquisite handmade crafts representing cultural heritage.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Handicrafts.jpg',
      icon: Hammer,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 8,
      name: 'Paintings & Art',
      category: 'Art & Decor',
      description: 'A curated selection of traditional and modern artworks.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Paintings%20&%20Art.jpg',
      icon: Brush,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 9,
      name: 'Metal Items',
      category: 'Art & Decor',
      description: 'High-quality metalware with cultural and functional appeal.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Metal%20Items.png',
      icon: Hammer,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 10,
      name: 'Wood Carvings',
      category: 'Art & Decor',
      description: 'Intricately crafted wood carvings by skilled artisans.',
      image: 'https://ik.imagekit.io/ln0l6bblz/Wood%20Carvings.jpg',
      icon: TreeDeciduous,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 11,
      name: 'Health Supplements',
      category: 'Health & Wellness',
      description: 'Trusted health supplements for wellness and vitality.',
      image: 'https://ik.imagekit.io/ln0l6bblz/HealthSupplements.jpg',
      icon: Zap,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
    {
      id: 12,
      name: 'Textile & Garments',
      category: 'Fashion & Apparel',
      description: 'High-quality textiles and garments from skilled manufacturers.',
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Shirt,
      features: ['Premium Quality', 'Export Grade', 'Trusted Source'],
      origin: 'India',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className={`py-20 bg-gradient-to-br from-teal-50 to-white ${productsLoaded ? 'animate-fade-in-scale' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-teal-600">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our extensive range of quality products sourced from trusted global suppliers
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[...Array(12)].map((_, index) => (
                <ProductSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden ${
                    productsLoaded ? `animate-fade-in-scale animate-stagger-${(index % 6) + 1}` : 'opacity-0'
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <product.icon className="w-5 h-5 text-teal-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-teal-600 text-white text-xs font-semibold rounded-full">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.origin}
                      </span>
                    </div>

                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="space-y-2 mb-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Our team can source specialized products from our global network of suppliers
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Request Custom Sourcing
            <ArrowRight className="ml-2 w-5 h-5" />
          </button> 
        </div>
      </section>
    </div>
  );
};

export default Products;