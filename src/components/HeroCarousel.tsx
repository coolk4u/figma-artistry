
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const HeroCarousel: React.FC = () => {
  const slides = [
    {
      title: "Proud Salesforce Ridge Tier Partner",
      subtitle: "Backed by certified experts delivering enterprise-grade results",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      title: "Salesforce Implementation Partners UKI - 2024", 
      subtitle: "Award-winning excellence in Salesforce implementation and innovation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      title: "Digital Transformation Excellence",
      subtitle: "Leading cloud solutions for modern businesses",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
    }
  ];

  const salesforceServices = [
    {
      name: "Sales Cloud",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/3266e8ba0888c0a2567696236d844368701cc8f9?placeholderIfAbsent=true"
    },
    {
      name: "Service Cloud", 
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/ab8d7b283ae7d99d86e3646e6390fa17a9677b1e?placeholderIfAbsent=true"
    },
    {
      name: "Marketing Cloud",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/761ab0561f15041345be8ceacae839ebaa5d95d6?placeholderIfAbsent=true"
    },
    {
      name: "Agentforce",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/cb9b1af083adf2a31c8c8ce3965555a34b3cda69?placeholderIfAbsent=true"
    },
    {
      name: "Experience Cloud",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/dba01bf6d130e026b8276bc752fe1e3af67ae836?placeholderIfAbsent=true"
    },
    {
      name: "Analytics Cloud",
      icon: "https://api.builder.io/api/v1/image/assets/31c2f38103a243b790a72ee5624ef9ba/6730070567cbd160a0110dcd1f0e91379d0c5aed?placeholderIfAbsent=true"
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-16">
      {/* Main Carousel */}
      <div className="relative h-[500px] max-md:h-[400px]">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: `url(${slide.image})`,
                    }}
                  />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-black/50" />
                  
                  <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white max-w-4xl px-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-6 font-light">
                      {slide.subtitle}
                    </p>
                    <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                      Send Inquiry
                    </button>
                  </div>

                  {/* Carousel indicators */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i === index ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
          <CarouselNext className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        </Carousel>
      </div>

      {/* Salesforce Services Icons Section */}
      <div className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
            {salesforceServices.map((service, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden mb-2 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={service.icon}
                    alt={service.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 text-center">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
