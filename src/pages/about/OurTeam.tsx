
import React from 'react';
import { Navigation } from '@/components/Navigation';

const OurTeam = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      bio: "Salesforce MVP with 15+ years of experience in digital transformation and cloud solutions."
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Technical architect specializing in complex Salesforce implementations and integrations."
    },
    {
      name: "Michael Chen",
      role: "Head of Consulting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Strategic consultant with expertise in business process optimization and change management."
    },
    {
      name: "Emily Davis",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
      bio: "Certified Salesforce developer with expertise in Lightning Web Components and Apex."
    },
    {
      name: "David Wilson",
      role: "Solution Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Enterprise architect focusing on scalable Salesforce solutions and system integrations."
    },
    {
      name: "Lisa Brown",
      role: "Training Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
      bio: "Salesforce trainer and change management specialist with a passion for user adoption."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4 text-gray-800">Our Team</h1>
            <h2 className="text-2xl text-blue-600 mb-6">Meet the Experts Behind Your Success</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Our team of certified Salesforce professionals brings together decades of experience in cloud technology, business transformation, and customer success.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
