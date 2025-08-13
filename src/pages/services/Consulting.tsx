
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Consulting = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Consulting"
      subtitle="Strategic Salesforce Guidance"
      description="Navigate your Salesforce journey with expert consulting services. Our certified consultants help you design, optimize, and scale your Salesforce implementation to achieve maximum business value."
      image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Salesforce strategy development",
        "Business process analysis",
        "Solution architecture design",
        "Technology roadmap planning",
        "Change management strategy",
        "ROI assessment and planning",
        "Best practices implementation",
        "Performance optimization"
      ]}
      benefits={[
        "Accelerated time-to-value",
        "Reduced implementation risks",
        "Optimized business processes",
        "Enhanced user adoption",
        "Improved ROI on Salesforce investment",
        "Strategic technology alignment",
        "Future-proof solutions",
        "Expert guidance throughout journey"
      ]}
      additionalInfo="Our consulting services provide the strategic foundation for successful Salesforce implementations. We work closely with your team to understand your unique business requirements and design solutions that drive growth and efficiency."
    />
  );
};

export default Consulting;
