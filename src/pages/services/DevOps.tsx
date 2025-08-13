
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DevOps = () => {
  return (
    <ServicePageTemplate
      title="Salesforce DevOps"
      subtitle="Streamlined Development & Deployment"
      description="Accelerate your Salesforce development lifecycle with our DevOps solutions, implementing continuous integration, automated testing, and efficient deployment processes for reliable and scalable Salesforce applications."
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Continuous integration/continuous deployment (CI/CD)",
        "Automated testing frameworks",
        "Version control and change management",
        "Environment management",
        "Release management automation",
        "Quality assurance processes",
        "Monitoring and alerting",
        "Rollback and recovery procedures"
      ]}
      benefits={[
        "Faster deployment cycles",
        "Reduced deployment risks",
        "Improved code quality",
        "Enhanced collaboration",
        "Automated quality checks",
        "Better change tracking",
        "Consistent environments",
        "Reduced manual errors"
      ]}
      additionalInfo="Our Salesforce DevOps practices ensure your development team can deliver high-quality solutions faster and more reliably. We implement industry best practices for version control, testing, and deployment to minimize risks and maximize development efficiency."
    />
  );
};

export default DevOps;
