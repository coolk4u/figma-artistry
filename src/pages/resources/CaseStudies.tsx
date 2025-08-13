
import React from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Enterprise Sales Cloud Transformation",
      description: "How we helped a Fortune 500 company increase sales productivity by 45% through comprehensive Sales Cloud implementation and customization.",
      date: "Q4 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Marketing Cloud Journey Optimization",
      description: "Successful implementation of Marketing Cloud for a retail giant, resulting in 35% improvement in customer engagement and 25% increase in conversion rates.",
      date: "Q3 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Service Cloud Excellence in Healthcare",
      description: "Streamlined customer service operations for a healthcare provider, reducing response time by 60% and improving patient satisfaction scores.",
      date: "Q2 2023",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    },
    {
      title: "Data Cloud Integration Success",
      description: "Unified customer data platform implementation that provided 360-degree customer view and improved decision-making capabilities.",
      date: "Q1 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    }
  ];

  return (
    <ResourcePageTemplate
      title="Case Studies"
      subtitle="Success Stories & Client Transformations"
      description="Explore real-world examples of how 4CE Cloud Labs has helped organizations achieve their digital transformation goals through innovative Salesforce solutions."
      items={caseStudies}
    />
  );
};

export default CaseStudies;
