'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage("Hello! 👋 I'm your Zoop Exim assistant, How can i help you ?");
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text, isBot: true, timestamp: new Date() }]);
  };

  const addUserMessage = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), text, isBot: false, timestamp: new Date() }]);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    addUserMessage(inputValue);
    setInputValue('');
    setIsTyping(true);

    const response = getBotResponse(inputValue);
    const typingDelay = Math.min(Math.max(response.length * 20, 1000), 3000);

    setTimeout(() => {
      addBotMessage(response);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    // Greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('good morning') || input.includes('good afternoon')) {
      return `👋 Hello and welcome to **Zoop Exim Private Limited**!

We're delighted to have you here. I'm here to help you explore our premium import-export solutions.

✨ **How can I assist you today?**  
• Learn about our journey and values  
• Explore our global product range  
• Get pricing or a consultation  
• Understand our services  

Please feel free to ask anything!`;
    }

    // About the Company
    if (input.includes('about') || input.includes('company') || input.includes('who are you') || input.includes('tell me about')) {
      return `🏢 **Zoop Exim Private Limited – At a Glance**

📅 **Established**: 2013 | 🌍 **Global Reach**: Serving 5+ countries  
🤝 **Trusted By**: 50+ prestigious global clients  
🎯 **Focus**: Premium Agro Products • Global Trade Solutions  

🧠 **Our Clients Include**:  
• Tech Leaders – Google, Amazon, Microsoft  
• Luxury Hospitality – Marriott, Taj, Hyatt  
• Premium Retail – Reliance, Bigbasket  

💡 **Why Zoop Exim?**  
• End-to-end export/import solutions  
• Quality assurance with certifications  
• Long-term, ethical partnerships  

Would you like to explore our products or services?`;
    }

    // Services Overview
    if (input.includes('service') || input.includes('what do you do') || input.includes('import') || input.includes('export')) {
      return `🚀 **Our Core Services**

🌐 **Import Services**  
• Premium sourcing (Agro & lifestyle products)  
• International supplier network  
• Quality checks & compliance  
• Efficient logistics handling  

📦 **Export Services**  
• Multi-category exports (Agro, textiles, handicrafts)  
• Custom documentation & global delivery  
• Flexible trade terms (FOB, CIF, etc.)  

🚛 **Distribution & Logistics**  
• Cold storage & last-mile delivery  
• Real-time tracking  
• Safety & inventory management  

📞 For consultation or service details: +91-8885684441  
📧 Email us: zoopexim@gmail.com  

Which service would you like to know more about?`;
    }

    // Products
    if (input.includes('product') || input.includes('what do you sell') || input.includes('catalog') || input.includes('items')) {
      return `🛒 **Explore Our Premium Product Lines**

🌾 **Agro & Food**  
• Fresh Produce | Seeds & Grains  
• Spices | Coffee Beans | Dry Fruits  

🎨 **Art & Handicrafts**  
• Brassware | Wooden Carvings  
• Decorative Metal Items | Paintings  

👗 **Fashion & Wellness**  
• Textiles | Garments | Herbal Supplements  

✨ **What Sets Us Apart:**  
• Export-grade quality  
• Custom packaging & labeling  
• Reliable global sourcing  

🧾 Need a quote or catalog?  
📞 Call: +91-8885684441 | 📧 Email: zoopexim@gmail.com`;
    }

    // Pricing & Business
    if (input.includes('price') || input.includes('cost') || input.includes('quote') || input.includes('business') || input.includes('partnership')) {
      return `💼 **Business Enquiries & Pricing**

📊 **Our Pricing Depends On:**  
• Product type & specifications  
• Order volume & frequency  
• Delivery destination & terms  

📋 **To Get a Custom Quote:**  
1. Share your product needs  
2. Mention quantity & delivery timeline  
3. Specify trade terms (FOB, CIF, etc.)  

🤝 **Partnership Opportunities:**  
• Private labeling & white-labeling  
• Exclusive distributorships  
• Custom sourcing contracts  

📞 Call: +91-8885684441  
💬 WhatsApp: +91-8885684441  
📧 Email: zoopexim@gmail.com  

Let's collaborate to grow together!`;
    }

    // Company History
    if (input.includes('history') || input.includes('journey') || input.includes('when') || input.includes('established') || input.includes('story')) {
      return `📘 **Our Journey – From Vision to Reality**

🎯 **2013** – Founded with a dream to globalize Indian agro excellence  
📈 **2015–2018** – Became trusted vendor for Google, Amazon, and top retailers  
🌐 **2019–2021** – Expanded globally & diversified into art, textiles, and wellness  
💡 **2022–2025** – Tech-driven growth, green logistics, and global leadership  

🏆 **Today**  
• 12+ Years of legacy  
• 50+ Active global clients  
• Operations in 5+ countries  

Would you like to join our journey?`;
    }

    // Clients
    if (input.includes('client') || input.includes('customer') || input.includes('who do you work with') || input.includes('companies')) {
      return `🌟 **Our Esteemed Clientele**

💻 **Technology**  
• Google | Amazon | Microsoft  

🏨 **Hospitality**  
• Marriott | Taj | Hyatt | Novotel  

🛍️ **Retail**  
• Reliance | Bigbasket | Nature's Basket  

🍽️ **Dining & Catering**  
• Buffalo Wild Wings | Sky Gourmet  

🎯 50+ Long-term global clients  
💬 98% Client satisfaction & retention  

Want to become a part of our success? Let's talk: +91-8885684441`;
    }

    // Contact & Location
    if (input.includes('location') || input.includes('office') || input.includes('address') || input.includes('where') || input.includes('contact') || input.includes('reach')) {
      return `📍 **Contact & Office Information**

🏢 **Head Office**  
2nd Floor, 16-11-405/106, SBI Colony,  
Moosarambagh, Gurramguda, Hyderabad - 500036, Telangana, India  

📞 Phone/WhatsApp: +91-8885684441  
📧 Email: zoopexim@gmail.com  

🕒 **Hours**  
• Mon–Fri: 9 AM – 6 PM  
• Sat: 9 AM – 2 PM  
• Sun: Emergency only  

🌐 Global operations in: India, USA, Australia, Thailand, Chile, Peru, New Zealand  

Let us know how we can help you today.`;
    }

    // Global Reach
    if (input.includes('countries') || input.includes('global') || input.includes('international') || input.includes('worldwide')) {
      return `🌍 **Our Global Presence**

📌 Operating In:  
• 🇮🇳 India (HQ)  
• 🇺🇸 USA  
• 🇦🇺 Australia  
• 🇹🇭 Thailand  
• 🇨🇱 Chile  
• 🇵🇪 Peru  
• 🇳🇿 New Zealand  

🚢 **Capabilities:**  
• Seamless international shipping  
• Trade finance support  
• Regulatory compliance across borders  

📈 Future Markets: Europe | Africa | Middle East  

Let's connect your business to the world!`;
    }

    // Mission & Vision
    if (input.includes('mission') || input.includes('vision') || input.includes('goal') || input.includes('purpose')) {
      return `🌱 **Our Mission & Vision**

🎯 **Mission**  
To empower global trade by delivering quality, trust, and sustainability in every shipment.

👁️ **Vision 2030**  
To be the most trusted and innovative export-import brand recognized globally.

🌍 **Our Pillars:**  
• Quality-first approach  
• Ethical & sustainable sourcing  
• Client success & satisfaction  
• Continuous innovation  

Let's build a sustainable future together.`;
    }

    // Core Values
    if (input.includes('values') || input.includes('principles') || input.includes('culture') || input.includes('ethics')) {
      return `💎 **Our Core Values**

✅ **Integrity** – Transparent, honest partnerships  
✅ **Quality** – No-compromise standards  
✅ **Sustainability** – Green sourcing, eco-packaging  
✅ **Innovation** – Tech-enabled solutions  
✅ **Client Success** – Your goals = Our mission  

Every decision we make reflects these principles.  

Would you like to learn more about how we work?`;
    }

    // Help & Support
    if (input.includes('help') || input.includes('support') || input.includes('assist') || input.includes('guidance')) {
      return `🆘 **Here to Support You**

💬 **Common Topics:**  
• Company overview  
• Product catalog  
• Export/import assistance  
• Pricing & documentation  
• Client partnerships  

📞 Phone/WhatsApp: +91-8885684441  
📧 Email: zoopexim@gmail.com  

💡 Tip: The more specific your question, the better we can help!  
What would you like guidance on today?`;
    }

    // Gratitude
    if (input.includes('thank') || input.includes('thanks') || input.includes('appreciate')) {
      return `🙏 **You're very welcome!**

We appreciate your interest in Zoop Exim.  
Always here to support your business growth journey!

📞 Need more help? Just call us anytime at +91-8885684441  
📧 Or email: zoopexim@gmail.com  

Let's make something great together. Anything else I can help with?`;
    }

    // Product Keywords
    if (input.includes('spice') || input.includes('coffee') || input.includes('grain') || input.includes('textile') || input.includes('handicraft')) {
      return `📦 **You're Interested in a Specific Product – Great!**

Here's what we can provide:  
🔍 **Details:** Grades, certifications, sourcing time  
📊 **Pricing:** Bulk discounts, seasonal rates  
🎁 **Packaging:** Custom labeling available  
✅ **Samples:** Upon request  

📞 Speak to our product team: +91-8885684441  
📧 Email: zoopexim@gmail.com  
💬 WhatsApp for quick quotes & catalogs

Would you like a callback?`;
    }

    // Default fallback
    return `🤖 **I'm Here to Help!**

Ask me anything about:  
• Our services and pricing  
• Products and sourcing  
• Partnerships or distribution  
• Global operations  
• Company background  

📞 Call: +91-8885684441  
💬 WhatsApp: +91-8885684441  
📧 Email: zoopexim@gmail.com  

Looking forward to assisting you. What would you like to know?`;
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
          <div className="absolute inset-0 w-14 h-14 bg-teal-400 rounded-full animate-ping opacity-20"></div>
          <div className="absolute inset-0 w-14 h-14 bg-teal-500 rounded-full animate-pulse opacity-30"></div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative w-14 h-14 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-full shadow-lg flex items-center justify-center group hover:scale-110 transition-all"
          >
            <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </button>

          <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Chat with Zoop Exim Assistant
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        </div>
      )}
 
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-2 right-2 z-50 flex flex-col w-[90vw] h-[75vh] rounded-2xl shadow-2xl bg-black border border-gray-700 sm:w-[28rem] sm:h-[36rem] sm:bottom-6 sm:right-6">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold">Zoop Exim Assistant</h3>
                <p className="text-xs text-teal-100 flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1 animate-pulse"></div>
                  Online & Ready to Help
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-black text-white text-sm sm:text-base">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-2xl shadow-sm ${
                    message.isBot
                      ? 'bg-gray-800 border border-gray-600'
                      : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.isBot && <Bot className="w-4 h-4 mt-1 text-teal-400 animate-pulse" />}
                    <div className="whitespace-pre-line text-sm leading-relaxed">{message.text}</div>
                    {!message.isBot && <User className="w-4 h-4 mt-1 text-white" />}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl border bg-gray-800 border-gray-600 flex items-center space-x-2">
                  <Bot className="w-4 h-4 text-teal-500 animate-bounce" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <span className="text-xs text-gray-400">Assistant is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-black border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about Zoop Exim..."
                className="flex-1 px-4 py-3 rounded-full text-sm bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              />
              <button 
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 disabled:from-gray-300 disabled:to-gray-400 text-white rounded-full flex items-center justify-center hover:scale-105 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Zoop Exim AI • Always here to help
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;