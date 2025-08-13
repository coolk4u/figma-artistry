
import React from 'react';
import { Navigation } from '@/components/Navigation';

const OurCustomers = () => {
  const customers = [
    {
      name: "TechCorp Solutions",
      industry: "Technology",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80",
      testimonial: "4CE Cloud Labs transformed our sales process and increased our productivity by 40%."
    },
    {
      name: "Healthcare Plus",
      industry: "Healthcare",
      logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Their expertise in healthcare solutions helped us improve patient engagement significantly."
    },
    {
      name: "FinanceFirst Bank",
      industry: "Financial Services",
      logo: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "Outstanding implementation that enhanced our customer relationship management."
    },
    {
      name: "EduLearn Academy",
      industry: "Education",
      logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      testimonial: "The student management system they built revolutionized our operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Customers</h1>
            <h2 className="text-2xl text-blue-600 mb-6">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We're proud to partner with organizations across various industries, helping them achieve their digital transformation goals through innovative Salesforce solutions.
            </p>
          </div>
        </div>

        {/* Customer Success Stories */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customers.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <img
                    src={customer.logo}
                    alt={customer.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{customer.name}</h3>
                    <p className="text-blue-600">{customer.industry}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{customer.testimonial}"</p>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">200+</h3>
                <p>Successful Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">150+</h3>
                <p>Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">15+</h3>
                <p>Industries Served</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">98%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomers;
