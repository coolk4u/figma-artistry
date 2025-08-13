
import React from 'react';
import { ResourcePageTemplate } from '@/components/ResourcePageTemplate';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Customer Service with Agentforce",
      description: "Explore how Salesforce Agentforce is revolutionizing customer service with AI-powered automation and intelligent agent assistance.",
      date: "January 20, 2024",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    },
    {
      title: "Best Practices for Salesforce Data Cloud Implementation",
      description: "Learn the essential strategies and considerations for successful Data Cloud deployment in your organization.",
      date: "January 12, 2024",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Maximizing ROI with Marketing Cloud Personalization",
      description: "Discover advanced techniques for leveraging Marketing Cloud to create personalized customer experiences that drive revenue growth.",
      date: "January 5, 2024",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "DevOps Best Practices for Salesforce Development",
      description: "Essential DevOps strategies to streamline your Salesforce development lifecycle and improve deployment efficiency.",
      date: "December 28, 2023",
      image: "/lovable-uploads/a6ed04a4-247d-4de6-b453-8e99e07e5ac6.png",
      link: "#"
    },
    {
      title: "Revenue Cloud: Streamlining Quote-to-Cash Processes",
      description: "How Revenue Cloud can transform your sales operations by automating and optimizing the entire quote-to-cash workflow.",
      date: "December 20, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      link: "#"
    },
    {
      title: "Generative AI Integration in Salesforce Ecosystems",
      description: "Understanding the opportunities and challenges of integrating generative AI solutions within your Salesforce environment.",
      date: "December 15, 2023",
      image: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      link: "#"
    }
  ];

  return (
    <ResourcePageTemplate
      title="Blog"
      subtitle="Insights, Tips & Industry Expertise"
      description="Stay informed with the latest insights, best practices, and thought leadership from our Salesforce experts. Discover actionable advice for your digital transformation journey."
      items={blogPosts}
    />
  );
};

export default Blog;
