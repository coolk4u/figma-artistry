
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DataCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Data Cloud"
      subtitle="Unified Customer Data Platform"
      description="Unlock the power of your data with Salesforce Data Cloud, a real-time customer data platform that unifies data from any source to create comprehensive customer profiles and drive personalized experiences."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true"
      features={[
        "Real-time data integration",
        "Customer profile unification",
        "Data modeling and harmonization",
        "Identity resolution",
        "Calculated insights and segments",
        "AI-powered predictions",
        "Data governance and compliance",
        "API-first architecture"
      ]}
      benefits={[
        "360-degree customer view",
        "Improved data quality and consistency",
        "Faster time-to-insight",
        "Enhanced personalization capabilities",
        "Better customer segmentation",
        "Reduced data silos",
        "GDPR and privacy compliance",
        "Scalable data infrastructure"
      ]}
      additionalInfo="Data Cloud breaks down data silos to create a unified view of your customers. By connecting data from any source - CRM, marketing automation, e-commerce, mobile apps, and more - you can deliver truly personalized experiences at every customer touchpoint."
    />
  );
};

export default DataCloud;
