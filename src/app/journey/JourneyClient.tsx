'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Globe,
  Store,
  Users,
  TrendingUp, 
  Package,
} from "lucide-react";

const JourneyClient = () => {
  const milestones = [
    { year: "2013", title: "Launch & Product Imports", description: "Zoop Exim Private Limited was officially launched, initiating imports of high-quality products to meet diverse market needs.", icon: Calendar, color: "bg-blue-500" },
    { year: "2014", title: "Distribution Network Established", description: "Developed a structured distribution network, enabling smooth logistics and improved product availability.", icon: Package, color: "bg-teal-500" },
    { year: "2016", title: "Major Supplier for MNCs", description: "Recognized as a trusted supplier for multinational corporations, including Google and other industry leaders.", icon: Globe, color: "bg-green-500" },
    { year: "2017", title: "Own Outlet of Sale", description: "Opened our first dedicated outlet, providing customers with direct access and personalized service.", icon: Store, color: "bg-purple-500" },
    { year: "2022", title: "Recovered From COVID Setbacks", description: "Overcame pandemic disruptions, regaining momentum in both exports and imports with stronger systems in place.", icon: TrendingUp, color: "bg-orange-500" },
    { year: "2023", title: "Expanded Into New Verticals", description: "Diversified operations into new sectors, capturing emerging opportunities and broadening market presence.", icon: Users, color: "bg-red-500" },
    { year: "2024", title: "Exponential Growth", description: "Witnessed rapid scaling of operations with global partnerships and innovative solutions across industries.", icon: TrendingUp, color: "bg-yellow-500" },
    { year: "2025", title: "Innovating for the Future", description: "", icon: Globe, color: "bg-indigo-500" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Our <span className="text-teal-600">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            A timeline of our growth, resilience, and commitment to excellence in global trade.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          
          {/* Desktop Road Path */}
          <svg
            className="absolute inset-0 w-full h-full hidden sm:block"
            viewBox="0 0 1000 3600"
            preserveAspectRatio="none"
          >
            {/* Shadow */}
            <path
              d="M200 150 Q800 350 200 600 Q800 850 200 1100 Q800 1350 200 1600 Q800 1850 200 2100 Q800 2350 200 2600 Q800 2850 200 3100 Q800 3350 500 3500"
              stroke="#1e293b"
              strokeWidth="60"
              fill="none"
              opacity="0.08"
              transform="translate(6,6)"
            />
            {/* Animated Black Road */}
            <motion.path
              d="M200 150 Q800 350 200 600 Q800 850 200 1100 Q800 1350 200 1600 Q800 1850 200 2100 Q800 2350 200 2600 Q800 2850 200 3100 Q800 3350 500 3500"
              stroke="#000000"
              strokeWidth="54"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            {/* Center Yellow Line */}
            <path
              d="M200 150 Q800 350 200 600 Q800 850 200 1100 Q800 1350 200 1600 Q800 1850 200 2100 Q800 2350 200 2600 Q800 2850 200 3100 Q800 3350 500 3500"
              stroke="#fbbf24"
              strokeWidth="5"
              fill="none"
              strokeDasharray="40,25"
              opacity="0.8"
            />
          </svg>

          {/* Mobile Road Path with More Curves */}
          <svg
            className="absolute inset-0 w-full h-full block sm:hidden"
            viewBox="0 0 1000 3600"
            preserveAspectRatio="none"
          >
            {/* Shadow */}
            <path
              d="M500 100 
                 Q700 600 300 1000  
                 Q700 1500 300 2000 
                 Q700 2500 300 3000 
                 Q500 3200 500 3400"
              stroke="#1e293b"
              strokeWidth="60"
              fill="none"
              opacity="0.08"
              transform="translate(6,6)"
            />
            {/* Animated Black Road */}
            <motion.path
              d="M500 100 
                 Q700 600 300 1000 
                 Q700 1500 300 2000 
                 Q700 2500 300 3000 
                 Q500 3200 500 3400"
              stroke="#000000"
              strokeWidth="54"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
            {/* Center Yellow Line */}
            <path
              d="M500 100 
                 Q700 600 300 1000 
                 Q700 1500 300 2000 
                 Q700 2500 300 3000 
                 Q500 3200 500 3400"
              stroke="#fbbf24"
              strokeWidth="5"
              fill="none"
              strokeDasharray="40,25"
              opacity="0.8"
            />
          </svg>

          {/* Milestones */}
          <div className="relative z-10 space-y-48">
            {milestones.map((m, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col items-center sm:flex-row ${
                    isLeft ? "sm:justify-start sm:pl-8" : "sm:justify-end sm:pr-8"
                  }`}
                >
                  <div
                    className={`max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                      isLeft ? "sm:ml-12 mt-8 sm:mt-0" : "sm:mr-12 mt-8 sm:mt-0"
                    }`}
                  >
                    <div className="flex items-center space-x-4 mb-4 sm:mb-6">
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 ${m.color} rounded-xl flex items-center justify-center`}
                      >
                        <m.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <time
                        className="text-2xl sm:text-3xl font-black text-teal-600"
                        dateTime={m.year}
                      >
                        {m.year}
                      </time>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      {m.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {m.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JourneyClient;