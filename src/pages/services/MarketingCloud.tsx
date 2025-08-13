
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const MarketingCloud = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Marketing Cloud"
      subtitle="Personalized Customer Journeys"
      description="Create meaningful customer experiences with Salesforce Marketing Cloud, a comprehensive digital marketing platform that enables personalized, cross-channel campaigns at scale."
      image="https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true"
      features={[
        "Email marketing automation",
        "Customer journey mapping",
        "Social media marketing",
        "Mobile messaging (SMS/Push)",
        "Advertising studio integration",
        "Personalization at scale",
        "A/B testing capabilities",
        "Advanced analytics and reporting"
      ]}
      benefits={[
        "Increase email open rates by 27%",
        "Improve customer engagement",
        "Higher conversion rates",
        "Reduced customer acquisition costs",
        "Better customer lifetime value",
        "Automated marketing workflows",
        "Data-driven marketing decisions",
        "Omnichannel customer experience"
      ]}
      additionalInfo="Marketing Cloud empowers marketers to build lasting relationships with customers through personalized experiences across every touchpoint. Our implementation ensures seamless integration with your sales and service teams for a unified customer experience."
    />
  );
};

export default MarketingCloud;
