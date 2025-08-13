
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const AWS = () => {
  return (
    <ServicePageTemplate
      title="AWS Integration Services"
      subtitle="Cloud Infrastructure Excellence"
      description="Leverage the power of Amazon Web Services with Salesforce to create scalable, secure, and high-performance cloud solutions that support your business growth and digital transformation initiatives."
      image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
      features={[
        "Salesforce-AWS integration",
        "Data migration and synchronization",
        "Serverless architecture design",
        "API gateway management",
        "Cloud security implementation",
        "Performance optimization",
        "Cost optimization strategies",
        "Disaster recovery planning"
      ]}
      benefits={[
        "Improved scalability and flexibility",
        "Enhanced security and compliance",
        "Reduced infrastructure costs",
        "Better performance and reliability",
        "Faster deployment and updates",
        "Global reach and availability",
        "Advanced analytics capabilities",
        "Future-proof technology stack"
      ]}
      additionalInfo="Our AWS integration services help you build robust, scalable solutions that seamlessly connect with your Salesforce ecosystem. We design cloud architectures that grow with your business while maintaining security, performance, and cost-effectiveness."
    />
  );
};

export default AWS;
