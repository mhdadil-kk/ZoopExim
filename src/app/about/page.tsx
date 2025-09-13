import React from 'react';
import { Target, Eye, Heart, Globe, Users, Award, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We are dedicated to the highest standards of quality in every product we handle, ensuring consistent, premium goods.'
    },
    {
      icon: Heart,
      title: 'Integrity and Trust',
      description: 'We operate with unwavering integrity, fostering ethical practices and long-term partnerships.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly sourcing practices, positively impacting the environment and communities.'
    },
    {
      icon: Users,
      title: 'Customer-Centricity',
      description: 'We provide exceptional service, flexible solutions, and a seamless experience tailored to our clients.'
    },
    {
      icon: CheckCircle,
      title: 'Innovation and Adaptability',
      description: 'We continuously improve by leveraging new technologies and logistics for global efficiency.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            About <span className="text-teal-600">Zoopexim</span>
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Established in 2013, Zoop Exim Private Limited is a leading import-export company
            specializing in premium agro products. We serve high-end clients across the globe,
            delivering quality with integrity and sustainability.
          </p>
        </div>
      </section>

      {/* Company Overview & Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Company Background</h2>
            <p className="text-lg text-gray-600">
              With over a decade of experience, Zoop Exim has built a robust global network of trusted
              suppliers and a prestigious clientele that includes five-star restaurants and premium
              grocery chains. Our seamless supply chain connects farms to tables around the world.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-gray-600">Clients Worldwide</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="aboutimage.png"
              alt="Global Trade"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To be a premier global partner in not just the agro-trade industry but much more,
              committed to sourcing and delivering the highest quality products while building enduring
              relationships and fostering sustainability from farm to table.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To be a premier global partner in the trade industry, recognized for delivering
              exceptional quality while promoting sustainable practices and creating lasting value
              from source to table.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives our every action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gradient-to-br from-teal-700 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Global Presence</h2>
          <p className="text-base sm:text-lg text-teal-100 mb-10 max-w-2xl mx-auto">
            Expanding connections across 5+ countries including:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm sm:text-base font-medium">
            {[
              'Thailand',
              'Peru',
              'Chile',
              'USA',
              'Australia',
              'New Zealand',
              'And More'
            ].map((country, idx) => (
              <div
                key={idx}
                className="bg-white bg-opacity-10 rounded-md py-2 px-3 shadow-sm hover:bg-opacity-20 transition duration-200"
              >
                {country}
              </div>
            ))}
          </div> 
        </div>
      </section>
    </div>
  );
}; 

export default About;