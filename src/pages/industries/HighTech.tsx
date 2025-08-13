
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const HighTech = () => {
  return (
    <ServicePageTemplate
      title="High Tech Solutions"
      subtitle="Innovation-Driven Technology Solutions"
      description="Accelerate growth in the high-tech industry with Salesforce solutions designed for software companies, hardware manufacturers, and technology service providers."
      image="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2025&q=80"
      features={[
        "Product lifecycle management",
        "Channel partner enablement",
        "Customer success platforms",
        "Subscription management",
        "Technical support automation",
        "Developer ecosystem tools",
        "Usage analytics and insights",
        "Integration marketplace"
      ]}
      benefits={[
        "Faster time-to-market",
        "Improved partner collaboration",
        "Enhanced customer success",
        "Streamlined support operations",
        "Better product insights",
        "Increased revenue growth",
        "Scalable technology platform",
        "Competitive differentiation"
      ]}
      additionalInfo="Our high-tech industry solutions help technology companies scale their operations, improve customer experiences, and drive innovation. We understand the fast-paced nature of the tech industry and deliver agile solutions that adapt to changing market demands."
    />
  );
};

export default HighTech;
