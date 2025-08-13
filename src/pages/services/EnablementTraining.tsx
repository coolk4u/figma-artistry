
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const EnablementTraining = () => {
  return (
    <ServicePageTemplate
      title="Enablement and Training"
      subtitle="Maximize User Adoption & Success"
      description="Empower your team with comprehensive Salesforce training and enablement programs designed to maximize user adoption, increase productivity, and ensure long-term success with your Salesforce investment."
      image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
      features={[
        "Custom training programs",
        "Role-based learning paths",
        "Hands-on workshops",
        "Certification preparation",
        "Train-the-trainer programs",
        "Change management support",
        "User adoption strategies",
        "Ongoing support and coaching"
      ]}
      benefits={[
        "Increase user adoption by 85%",
        "Improved productivity",
        "Faster time-to-value",
        "Enhanced user confidence",
        "Better data quality",
        "Reduced support tickets",
        "Higher ROI on Salesforce investment",
        "Sustainable long-term success"
      ]}
      additionalInfo="Successful Salesforce implementation goes beyond technology - it requires people to embrace new ways of working. Our enablement and training programs are designed to ensure your team not only knows how to use Salesforce but understands how to leverage it for maximum business impact."
    />
  );
};

export default EnablementTraining;
