import React from 'react';
import { Truck, Globe, Boxes, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Import Services',
      description:
        'Our import services are a cornerstone of our business, designed to bring the world\'s finest agro products to our discerning clientele. We specialize in sourcing a wide variety of high-quality agricultural goods, from exotic spices to specialty grains, from trusted international suppliers. Our dedicated team of logistics and trade experts meticulously manages the entire import process, ensuring compliance with all regulatory requirements and maintaining the integrity and freshness of our products. Through our robust and efficient supply chain, we provide a seamless experience for our clients, including five-star restaurants and luxury supermarkets.',
      features: [
        'Exotic spice & grain sourcing',
        'End-to-end import logistics',
        'Regulatory compliance management',
        'Supply chain transparency & integrity',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Truck,
      title: 'Export Services',
      description:
        'Our export services are designed to connect our network of high-quality agro-product suppliers with international markets, ensuring a seamless and reliable global trade experience. We handle the entire export process, from packaging and quality control to documentation and logistics, with FOB, CIF, and other acceptable terms. Our experienced team ensures that our premium products reach their destinations efficiently and in perfect condition. We offer tailored shipping solutions for agricultural, mechanical, handicraft, and jewelry goods.',
      features: [
        'Full export documentation',
        'FOB, CIF & other terms supported',
        'Tailored logistics & shipping',
        'Agro, mechanical, handicrafts & jewelry',
      ],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Boxes,
      title: 'Distribution Services',
      description:
        'Our distribution services are the final and most critical link in our supply chain, ensuring our high-quality agro products reach clients in impeccable condition and on time. We operate a sophisticated logistics network spanning from our warehouses to the doors of our partners, including five-star restaurants and premium supermarket chains. With advanced inventory systems, temperature-controlled storage, and reliable transportation, we manage everything from order fulfillment to last-mile delivery—ensuring strict food safety and quality standards are met.',
      features: [
        'Temperature-controlled storage',
        'Reliable last-mile delivery',
        'Strict food safety protocols',
        'Premium restaurant & retail fulfillment',
      ],
      color: 'from-green-500 to-green-600',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              Our <span className="text-teal-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive import, export, and distribution solutions tailored for the global trade of high-quality products.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 overflow-hidden"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors group-hover:translate-x-1 duration-300">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">Simple steps to get your trade operations started</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial discussion about your requirements' },
              { step: '02', title: 'Planning', desc: 'Develop customized trade strategy' },
              { step: '03', title: 'Execution', desc: 'Implement and manage operations' },
              { step: '04', title: 'Delivery', desc: 'Ensure successful completion' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Streamline Your Trade Operations?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let our experts help you navigate the complexities of international trade
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-teal-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;