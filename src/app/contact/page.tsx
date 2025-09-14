'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, XCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setToast({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setToast({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const contactInfo = [
    { icon: MapPin, title: 'Head Office', details: ['Gurramguda, Hyderabad - 500036,', 'Telangana, India'], color: 'from-teal-500 to-teal-600' },
    { icon: Phone, title: 'Phone Number', details: ['+91-8885684441', '+91-8885684449'], color: 'from-blue-500 to-blue-600' },
    { icon: Mail, title: 'Email Address', details: ['zoopexim@gmail.com'], color: 'from-green-500 to-green-600' },
    { icon: Clock, title: 'Business Hours (IST)', details: ['Mon - Fri: 9:00 AM - 6:00 PM','Sat: 9:00 AM - 2:00 PM','Sun: Emergency Only'], color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <div className="pt-16 relative">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded-xl shadow-lg text-white flex items-center gap-2
          ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} animate-slide-in`}
        >
          {toast.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <XCircle className="w-6 h-6" />}
          <span>{toast.message}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
            Contact <span className="text-teal-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore global trade opportunities? Get in touch with our expert team
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => <p key={i} className="text-gray-600 text-sm">{detail}</p>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-sm text-gray-700">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-sm text-gray-700">Email *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500" placeholder="email@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500" />
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500" />
              </div>

              <select name="subject" required value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500">
                <option value="">Select a subject</option>
                <option value="import">Import Services</option>
                <option value="export">Export Services</option>
                <option value="consultation">Business Consultation</option>
                <option value="partnership">Partnership Opportunity</option>
                <option value="other">Other</option>
              </select>

              <textarea name="message" rows={6} required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 resize-none" placeholder="Tell us about your needs..."></textarea>

              <button type="submit" disabled={isLoading} className="flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-xl hover:bg-teal-700 transition duration-300">
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Google Map Embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] w-full">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7615.345470725828!2d78.50357204675679!3d17.379473773227488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb985390ddb429%3A0x6a617bb20c24de1c!2sWest%20Prasanth%20Nagar%2C%20Malakpet%20Extension%2C%20Old%20Malakpet%2C%20Hyderabad%2C%20Telangana%20500036!5e0!3m2!1sen!2sin!4v1754490759346!5m2!1sen!2sin`}
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(100%); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
