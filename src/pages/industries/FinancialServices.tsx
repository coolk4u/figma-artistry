
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const FinancialServices = () => {
  return (
    <ServicePageTemplate
      title="Financial Services Industry"
      subtitle="Banking & Finance Digital Solutions"
      description="Transform financial services delivery with Salesforce solutions tailored for banks, credit unions, insurance companies, and wealth management firms."
      image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Customer relationship management",
        "Wealth management platforms",
        "Loan origination systems",
        "Compliance management",
        "Risk assessment tools",
        "Digital banking solutions",
        "Insurance claim processing",
        "Investment advisory tools"
      ]}
      benefits={[
        "Enhanced customer experiences",
        "Improved regulatory compliance",
        "Streamlined operations",
        "Better risk management",
        "Increased advisor productivity",
        "Digital transformation",
        "Data-driven insights",
        "Competitive advantage"
      ]}
      additionalInfo="Our financial services expertise spans across banking, insurance, wealth management, and fintech. We help financial institutions deliver personalized customer experiences while maintaining the highest standards of security and compliance."
    />
  );
};

export default FinancialServices;
