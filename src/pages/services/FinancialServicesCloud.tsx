
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const FinancialServicesCloud = () => {
  return (
    <ServicePageTemplate
      title="Financial Services Cloud"
      subtitle="Banking & Finance CRM Solutions"
      description="Transform financial services with Salesforce Financial Services Cloud. Deliver personalized customer experiences while managing complex financial relationships and regulatory requirements."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Household and relationship management",
        "Financial account tracking",
        "Wealth management tools",
        "Goal-based planning",
        "Compliance and risk management",
        "Document management",
        "Client collaboration tools",
        "Mobile advisor experience"
      ]}
      benefits={[
        "360-degree client view",
        "Improved client satisfaction",
        "Enhanced advisor productivity",
        "Better compliance management",
        "Streamlined operations",
        "Increased revenue opportunities",
        "Mobile-enabled workflows",
        "Scalable platform"
      ]}
      additionalInfo="Financial Services Cloud provides a comprehensive platform designed specifically for financial advisors, wealth managers, and banking professionals. Our implementation ensures compliance with industry regulations while delivering exceptional client experiences."
    />
  );
};

export default FinancialServicesCloud;
