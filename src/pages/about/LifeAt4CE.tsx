
import React from 'react';
import { Navigation } from '@/components/Navigation';

const LifeAt4CE = () => {
  const benefits = [
    {
      icon: "💼",
      title: "Professional Growth",
      description: "Continuous learning opportunities with Salesforce certifications and training programs."
    },
    {
      icon: "🏠",
      title: "Work-Life Balance",
      description: "Flexible work arrangements and remote work options to support your lifestyle."
    },
    {
      icon: "🎯",
      title: "Challenging Projects",
      description: "Work on cutting-edge Salesforce implementations with industry-leading clients."
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Join a team of passionate professionals who support each other's success."
    },
    {
      icon: "🌟",
      title: "Innovation Focus",
      description: "Be part of a company that embraces innovation and emerging technologies."
    },
    {
      icon: "🎉",
      title: "Recognition & Rewards",
      description: "Competitive compensation and recognition programs for outstanding performance."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Life at 4CE Cloud Labs</h1>
            <h2 className="text-2xl text-blue-600 mb-6">Where Careers Flourish</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Join a dynamic team of Salesforce experts who are passionate about technology, innovation, and making a difference. Discover a workplace where your growth and success are our priorities.
            </p>
          </div>
        </div>

        {/* Culture Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Culture</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At 4CE Cloud Labs, we believe that great work comes from great people. Our culture is built on collaboration, innovation, and mutual respect. We foster an environment where everyone can contribute their unique perspectives and expertise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're not just colleagues; we're a family of professionals who support each other's growth and celebrate each other's successes. Join us and be part of something bigger than yourself.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
                alt="Team working together"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Join Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-blue-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Team?</h3>
            <p className="mb-6">Explore exciting career opportunities and be part of our growing success story.</p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAt4CE;
