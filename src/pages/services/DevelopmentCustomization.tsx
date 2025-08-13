
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const DevelopmentCustomization = () => {
  return (
    <ServicePageTemplate
      title="Development & Customization"
      subtitle="Tailored Salesforce Solutions"
      description="Extend Salesforce capabilities with custom development and tailored solutions. Our development team creates bespoke applications and customizations that address your unique business requirements."
      image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Custom Apex development",
        "Lightning Web Components",
        "Visualforce pages",
        "Custom applications",
        "Workflow automation",
        "Trigger development",
        "Integration development",
        "Mobile app development"
      ]}
      benefits={[
        "Tailored business solutions",
        "Enhanced system functionality",
        "Improved user experience",
        "Automated business processes",
        "Increased operational efficiency",
        "Competitive advantage",
        "Scalable architecture",
        "Future-ready solutions"
      ]}
      additionalInfo="Our development team specializes in creating custom solutions that extend Salesforce's native capabilities. We follow Salesforce development best practices and coding standards to ensure your customizations are maintainable, scalable, and upgrade-safe."
    />
  );
};

export default DevelopmentCustomization;
