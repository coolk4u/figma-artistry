
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const LightningMigration = () => {
  return (
    <ServicePageTemplate
      title="Lightning Migration"
      subtitle="Modernize Your Salesforce Experience"
      description="Upgrade from Salesforce Classic to Lightning Experience with our comprehensive migration services. Unlock the full potential of modern Salesforce features and enhanced user productivity."
      image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Lightning readiness assessment",
        "Component migration strategy",
        "Custom component development",
        "User interface redesign",
        "Process automation upgrade",
        "Mobile optimization",
        "Training and change management",
        "Post-migration support"
      ]}
      benefits={[
        "Modern, intuitive interface",
        "Improved user productivity",
        "Enhanced mobile experience",
        "Advanced automation capabilities",
        "Better reporting and analytics",
        "Future-proof platform",
        "Increased user adoption",
        "Competitive advantage"
      ]}
      additionalInfo="Lightning Experience offers significant improvements in user experience, productivity, and functionality. Our migration approach ensures a smooth transition while maximizing the benefits of Lightning's advanced features and capabilities."
    />
  );
};

export default LightningMigration;
