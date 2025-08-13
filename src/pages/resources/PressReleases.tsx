
import React from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';

const PressReleases = () => {
  const pressReleases = [
    {
      title: "4CE Cloud Labs Announces Strategic Partnership with Salesforce",
      description: "New partnership enables enhanced cloud transformation services for enterprise clients across multiple industries.",
      date: "January 15, 2024",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Company Expands Agentforce Implementation Services",
      description: "4CE Cloud Labs launches comprehensive Agentforce services to help businesses implement AI-powered customer service solutions.",
      date: "December 10, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Award Recognition for Digital Transformation Excellence",
      description: "4CE Cloud Labs receives industry recognition for outstanding digital transformation projects and client success stories.",
      date: "November 22, 2023",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    }
  ];

  return (
    <ResourcePageTemplate
      title="Press Releases"
      subtitle="Latest News & Announcements"
      description="Stay updated with the latest news, announcements, and developments from 4CE Cloud Labs. Read about our partnerships, achievements, and industry insights."
      items={pressReleases}
    />
  );
};

export default PressReleases;
