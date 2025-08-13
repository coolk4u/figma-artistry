
import React from 'react';
import { Navigation } from '@/components/Navigation';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-gray-800">About 4CE Cloud Labs</h1>
              <h2 className="text-2xl text-blue-600 mb-6">Driving Digital Transformation</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                We are a leading Salesforce consulting partner dedicated to helping organizations unlock the full potential of cloud technology. With years of expertise and a passion for innovation, we transform businesses through strategic Salesforce implementations.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower businesses with innovative Salesforce solutions that drive growth, improve efficiency, and create exceptional customer experiences. We believe in the transformative power of cloud technology and are committed to helping our clients achieve their digital transformation goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our approach combines deep technical expertise with strategic business insights, ensuring that every solution we deliver aligns with our clients' objectives and drives measurable results.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Team collaboration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Vision</h4>
              <p className="text-gray-600">
                To be the premier Salesforce partner, recognized for delivering exceptional value and driving digital transformation across industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Values</h4>
              <p className="text-gray-600">
                Excellence, innovation, integrity, and client success. We are committed to delivering solutions that exceed expectations and create lasting value.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-3">Our Approach</h4>
              <p className="text-gray-600">
                Collaborative, strategic, and results-driven. We work closely with our clients to understand their unique needs and deliver tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
