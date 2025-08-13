
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Manufacturing = () => {
  return (
    <ServicePageTemplate
      title="Manufacturing Solutions"
      subtitle="Digital Transformation for Manufacturing"
      description="Accelerate your manufacturing operations with Salesforce solutions designed for the manufacturing industry. Streamline processes, improve customer relationships, and drive operational excellence."
      image="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      features={[
        "Sales forecasting and planning",
        "Supply chain management",
        "Channel partner management",
        "Service and warranty tracking",
        "Quality management",
        "Inventory optimization",
        "Manufacturing execution",
        "Customer portal solutions"
      ]}
      benefits={[
        "Improved operational efficiency",
        "Enhanced supply chain visibility",
        "Better demand forecasting",
        "Streamlined partner collaboration",
        "Reduced operational costs",
        "Improved customer satisfaction",
        "Faster time-to-market",
        "Data-driven decision making"
      ]}
      additionalInfo="Our manufacturing industry expertise helps companies modernize their operations, improve customer relationships, and drive growth. We understand the unique challenges of manufacturing and deliver solutions that address complex business requirements."
    />
  );
};

export default Manufacturing;
