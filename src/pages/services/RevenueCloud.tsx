
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const RevenueCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Revenue Cloud"
      subtitle="Complete Revenue Lifecycle Management"
      description="Maximize revenue growth with Salesforce Revenue Cloud, an integrated platform that streamlines the entire revenue process from quote to cash, ensuring accurate pricing, faster deal closure, and optimized revenue recognition."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f8d22255cc8512102cf1640ba84e07bfb9ab5ef2?placeholderIfAbsent=true"
      features={[
        "Configure, Price, Quote (CPQ) automation",
        "Subscription management",
        "Revenue recognition automation",
        "Billing and invoicing",
        "Contract lifecycle management",
        "Renewal management",
        "Partner and channel management",
        "Revenue analytics and reporting"
      ]}
      benefits={[
        "Reduce quote generation time by 65%",
        "Improve pricing accuracy",
        "Faster deal closure",
        "Automated revenue recognition",
        "Reduced billing errors",
        "Enhanced partner collaboration",
        "Better forecast accuracy",
        "Compliance with revenue standards"
      ]}
      additionalInfo="Revenue Cloud provides end-to-end visibility and control over your revenue processes. From initial quote through contract management to revenue recognition, our implementation ensures your revenue operations are optimized for growth and compliance."
    />
  );
};

export default RevenueCloud;
