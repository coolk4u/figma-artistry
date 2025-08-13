
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Agentforce = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Agentforce"
      subtitle="AI-Powered Customer Service Excellence"
      description="Transform your customer service with Salesforce Agentforce, leveraging artificial intelligence to deliver personalized, efficient, and scalable customer support experiences."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true"
      features={[
        "AI-powered chatbots and virtual assistants",
        "Natural language processing for better understanding",
        "Automated case routing and resolution",
        "Real-time sentiment analysis",
        "Multi-channel support integration",
        "Continuous learning and improvement",
        "Seamless handoff to human agents",
        "Analytics and performance insights"
      ]}
      benefits={[
        "Reduce response time by up to 80%",
        "Handle multiple customer queries simultaneously",
        "Improve customer satisfaction scores",
        "Lower operational costs",
        "24/7 availability for customer support",
        "Consistent service quality",
        "Free up human agents for complex issues",
        "Scale support without proportional cost increase"
      ]}
      additionalInfo="Salesforce Agentforce combines the power of artificial intelligence with deep CRM integration to create intelligent customer service experiences. Our implementation ensures seamless integration with your existing Salesforce ecosystem while maximizing the potential of AI-driven customer interactions."
    />
  );
};

export default Agentforce;
