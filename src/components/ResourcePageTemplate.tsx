
import React from 'react';
import { Navigation } from '@/components/Navigation';

interface ResourceItem {
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

interface ResourcePageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  items: ResourceItem[];
}

export const ResourcePageTemplate: React.FC<ResourcePageTemplateProps> = ({
  title,
  subtitle,
  description,
  items
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4 text-gray-800">{title}</h1>
              <h2 className="text-2xl text-blue-600 mb-6">{subtitle}</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Read More
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
