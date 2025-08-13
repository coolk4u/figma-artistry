
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const ExperienceCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Experience Cloud"
      subtitle="Connected Digital Experiences"
      description="Create engaging digital experiences for customers, partners, and employees with Salesforce Experience Cloud. Build branded communities and portals that drive engagement and collaboration."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
      features={[
        "Customer self-service portals",
        "Partner collaboration spaces",
        "Employee engagement communities",
        "Mobile-responsive design",
        "Custom branding and themes",
        "Content management",
        "Social collaboration tools",
        "Analytics and insights"
      ]}
      benefits={[
        "Enhanced customer satisfaction",
        "Improved partner collaboration",
        "Reduced support costs",
        "Increased user engagement",
        "Streamlined business processes",
        "Better knowledge sharing",
        "Scalable community platform",
        "Mobile-first experience"
      ]}
      additionalInfo="Experience Cloud enables you to create connected digital experiences that extend your Salesforce data and processes to external users. Our implementation ensures seamless integration with your existing Salesforce ecosystem while delivering exceptional user experiences."
    />
  );
};

export default ExperienceCloud;
