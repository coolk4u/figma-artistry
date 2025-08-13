
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const GenerativeAI = () => {
  return (
    <ServicePageTemplate
      title="Salesforce Generative AI"
      subtitle="AI-Powered Business Innovation"
      description="Transform your business with Salesforce Generative AI, leveraging cutting-edge artificial intelligence to automate content creation, enhance customer interactions, and drive intelligent decision-making across your organization."
      image="/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png"
      features={[
        "AI-powered content generation",
        "Intelligent email composition",
        "Automated sales messaging",
        "Smart case summarization",
        "Predictive analytics",
        "Natural language processing",
        "Machine learning insights",
        "Custom AI model training"
      ]}
      benefits={[
        "Increase productivity by 73%",
        "Reduce content creation time",
        "Improve response quality",
        "Enhanced customer personalization",
        "Faster problem resolution",
        "Data-driven insights",
        "Automated routine tasks",
        "Competitive advantage through AI"
      ]}
      additionalInfo="Generative AI in Salesforce brings the power of artificial intelligence directly into your workflow. From generating personalized emails to summarizing customer interactions, our AI implementation helps your team work smarter and deliver exceptional customer experiences."
    />
  );
};

export default GenerativeAI;
