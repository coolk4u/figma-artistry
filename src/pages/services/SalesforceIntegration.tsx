
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const SalesforceIntegration = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Integration"
      subtitle="Seamless System Connectivity"
      description="Connect Salesforce with your existing systems and applications to create a unified business ecosystem. Our integration services ensure data flows seamlessly across all your business platforms."
      image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "API-based integrations",
        "Real-time data synchronization",
        "Legacy system connectivity",
        "Third-party app integrations",
        "Custom middleware development",
        "Data mapping and transformation",
        "Error handling and monitoring",
        "Security and compliance"
      ]}
      benefits={[
        "Unified data view across systems",
        "Improved operational efficiency",
        "Reduced manual data entry",
        "Enhanced data accuracy",
        "Streamlined business processes",
        "Better decision-making capabilities",
        "Increased productivity",
        "Scalable integration architecture"
      ]}
      additionalInfo="Our integration expertise spans across various platforms including ERP systems, marketing automation tools, e-commerce platforms, and custom applications. We design robust, secure, and scalable integration solutions that grow with your business."
    />
  );
};

export default SalesforceIntegration;
