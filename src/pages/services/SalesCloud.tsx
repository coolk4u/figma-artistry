
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const SalesCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Sales Cloud"
      subtitle="Accelerate Sales Performance"
      description="Boost your revenue with Salesforce Sales Cloud, the world's #1 CRM platform that streamlines sales processes, improves productivity, and drives revenue growth through intelligent automation."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true"
      features={[
        "Lead and opportunity management",
        "Contact and account management",
        "Sales forecasting and pipeline tracking",
        "Email integration and automation",
        "Mobile CRM access",
        "Sales performance analytics",
        "Workflow automation",
        "Integration with marketing tools"
      ]}
      benefits={[
        "Increase sales productivity by 44%",
        "Improve win rates and deal size",
        "Faster sales cycle completion",
        "Better lead qualification and nurturing",
        "Enhanced sales forecasting accuracy",
        "Improved collaboration across teams",
        "Real-time sales insights",
        "Mobile access for field sales"
      ]}
      additionalInfo="Sales Cloud transforms how your sales team operates by providing a complete view of customers, automating routine tasks, and delivering actionable insights. Our implementation focuses on maximizing user adoption and ensuring your sales processes align with industry best practices."
    />
  );
};

export default SalesCloud;
