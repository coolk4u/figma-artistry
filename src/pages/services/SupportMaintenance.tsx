
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const SupportMaintenance = () => {
  return (
    <ServicePageTemplate
      title="Support & Maintenance"
      subtitle="Ongoing Salesforce Excellence"
      description="Keep your Salesforce platform running at peak performance with our comprehensive support and maintenance services. From troubleshooting to enhancements, we ensure your system continues to deliver value."
      image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "24/7 technical support",
        "System monitoring and maintenance",
        "Bug fixes and troubleshooting",
        "Performance optimization",
        "Regular health checks",
        "Security updates",
        "User support and training",
        "Enhancement requests"
      ]}
      benefits={[
        "Minimized system downtime",
        "Optimized system performance",
        "Enhanced security and compliance",
        "Improved user satisfaction",
        "Reduced internal IT burden",
        "Proactive issue prevention",
        "Continuous system improvement",
        "Expert technical guidance"
      ]}
      additionalInfo="Our support and maintenance services provide peace of mind, allowing you to focus on your core business while we ensure your Salesforce platform remains secure, up-to-date, and performing optimally. We offer flexible support plans to meet your specific needs."
    />
  );
};

export default SupportMaintenance;
