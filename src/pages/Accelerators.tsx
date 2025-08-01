
import React from 'react';
import { Navigation } from '@/components/Navigation';

const Accelerators = () => {
  const accelerators = [
    {
      icon: "📊",
      title: "Data MBA",
      description: "One-Stop-Shop for Org Consolidation to Data Migration, Ongoing Data Integration, Backup, Archival and Reconciliation.",
      keyFeatures: [
        "Import data from multiple source",
        "Pre-configured Job",
        "High Data Quality",
        "Ensure adaptability"
      ]
    },
    {
      icon: "⚡",
      title: "OptiMax",
      description: "One-Stop-Shop for Org Consolidation to Data Migration, Ongoing Data Integration, Backup, Archival and Reconciliation.",
      keyFeatures: [
        "Import data from multiple source",
        "Pre-configured Job",
        "High Data Quality",
        "Ensure adaptability"
      ]
    },
    {
      icon: "🔧",
      title: "DMS 360 Solution",
      description: "One-Stop-Shop for Org Consolidation to Data Migration, Ongoing Data Integration, Backup, Archival and Reconciliation.",
      keyFeatures: [
        "Import data from multiple source",
        "Pre-configured Job",
        "High Data Quality",
        "Ensure adaptability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gray-800">Accelerators and </span>
              <span className="text-blue-500">App Solutions</span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 underline">
              Accelerators
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              We leverage our in-house built accelerators and frameworks, powered by our Center of Excellence (COE), to deliver successful engagements across Implementations, Managed Services, and Consulting.
            </p>
          </div>

          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {accelerators.map((accelerator, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2"></div>
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{accelerator.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{accelerator.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{accelerator.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {accelerator.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-colors">
                    More Features
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Same content repeated */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {accelerators.map((accelerator, index) => (
              <div key={`second-${index}`} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2"></div>
                <div className="p-6">
                  <div className="text-4xl mb-4 text-center">{accelerator.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{accelerator.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{accelerator.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {accelerator.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-colors">
                    More Features
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accelerators;
