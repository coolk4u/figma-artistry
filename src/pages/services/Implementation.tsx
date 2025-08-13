
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Implementation = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Implementation"
      subtitle="End-to-End Salesforce Deployment"
      description="Transform your business with comprehensive Salesforce implementation services. From initial setup to go-live, we ensure your Salesforce platform is configured to meet your specific business needs."
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80"
      features={[
        "Complete system configuration",
        "Data migration and integration",
        "Custom object and field creation",
        "Workflow and automation setup",
        "User training and onboarding",
        "Testing and quality assurance",
        "Go-live support",
        "Post-implementation optimization"
      ]}
      benefits={[
        "Faster implementation timeline",
        "Reduced deployment risks",
        "Seamless data migration",
        "Optimized system performance",
        "Enhanced user productivity",
        "Improved data quality",
        "Scalable foundation",
        "Ongoing support and maintenance"
      ]}
      additionalInfo="Our implementation methodology follows Salesforce best practices to ensure your deployment is successful, on-time, and within budget. We focus on creating a solid foundation that supports your current needs while being flexible for future growth."
    />
  );
};

export default Implementation;
