import React from 'react';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true",
      title: "Salesforce Marketing Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f08d94889db026dc919380b85696e7a3bc3fdff2?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true",
      title: "Salesforce Sales Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f08d94889db026dc919380b85696e7a3bc3fdff2?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true",
      title: "Salesforce Service Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/f8d22255cc8512102cf1640ba84e07bfb9ab5ef2?placeholderIfAbsent=true",
      title: "CPQ & Revenue Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dba01bf6d130e026b8276bc752fe1e3af67ae836?placeholderIfAbsent=true",
      title: "Financial Services Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/2e1e9387ab35ae9a2b45a5807fb7d32e5b708fa2?placeholderIfAbsent=true",
      title: "Platform App Development",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dbbed4497020afa2fcb104eaf38b7923f8bb9d83?placeholderIfAbsent=true",
      title: "Health Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true",
      title: "Salesforce Data Cloud",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true",
      title: "Salesforce Agentforce",
      description: "Boost your revenue with streamlined, intelligent sales processes tailored for modern businesses.",
      checkIcon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/fd87ee58a5cd8a1f51cd2e2b0f12007bdfeb359b?placeholderIfAbsent=true"
    }
  ];

  const features = [
    "Lead Prioritization",
    "Workflow Streamlining",
    "Data-Driven Decision Making",
    "Relationship Building"
  ];

   return (
    <section className="w-full mx-auto px-1 py-8">
      <h1 className="text-xl font-bold text-center mb-6 text-[#212529]">
        From setup to scale. Salesforce done right
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={features}
            checkIcon={service.checkIcon}
          />
        ))}
      </div>
    </section>
  );
};