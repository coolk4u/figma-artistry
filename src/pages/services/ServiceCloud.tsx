
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const ServiceCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Service Cloud"
      subtitle="Complete Customer Service Platform"
      description="Deliver exceptional customer service experiences with Salesforce Service Cloud, a comprehensive platform that empowers your support teams to resolve issues faster and build stronger customer relationships."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true"
      features={[
        "Case management and tracking",
        "Knowledge base integration",
        "Multi-channel support (email, phone, chat, social)",
        "Service console for agent productivity",
        "SLA management and escalation",
        "Customer self-service portal",
        "Mobile support for field service",
        "Advanced reporting and analytics"
      ]}
      benefits={[
        "Increase agent productivity by 41%",
        "Reduce case resolution time",
        "Improve first-call resolution rates",
        "Enhanced customer satisfaction",
        "Streamlined service processes",
        "Better collaboration across teams",
        "Comprehensive service analytics",
        "Scalable support operations"
      ]}
      additionalInfo="Service Cloud provides a unified platform for managing all customer service interactions. From case creation to resolution, our implementation ensures your team has the tools and insights needed to deliver world-class customer support while maintaining operational efficiency."
    />
  );
};

export default ServiceCloud;
