
import React from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';

const Videos = () => {
  const videos = [
    {
      title: "Agentforce Demo: AI-Powered Customer Service",
      description: "Watch a comprehensive demonstration of Salesforce Agentforce capabilities and how it transforms customer service operations.",
      date: "January 18, 2024",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    },
    {
      title: "Data Cloud Deep Dive: Unified Customer Profiles",
      description: "Explore the power of Salesforce Data Cloud in creating comprehensive customer profiles and driving personalized experiences.",
      date: "January 10, 2024",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Marketing Cloud Automation Masterclass",
      description: "Learn advanced marketing automation techniques and journey optimization strategies using Salesforce Marketing Cloud.",
      date: "December 30, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Sales Cloud Configuration Best Practices",
      description: "Expert tips and techniques for optimizing your Sales Cloud configuration to maximize team productivity and sales performance.",
      date: "December 22, 2023",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    },
    {
      title: "Service Cloud Implementation Roadmap",
      description: "Step-by-step guide to successful Service Cloud implementation, from planning to go-live and beyond.",
      date: "December 18, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "AWS Integration with Salesforce",
      description: "Discover how to leverage AWS services to extend and enhance your Salesforce implementation for enterprise-scale solutions.",
      date: "December 12, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    }
  ];

  return (
    <ResourcePageTemplate
      title="Videos"
      subtitle="Visual Learning & Demonstrations"
      description="Access our library of educational videos, product demonstrations, and expert tutorials to enhance your Salesforce knowledge and skills."
      items={videos}
    />
  );
};

export default Videos;
