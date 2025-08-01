
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export const HeroCarousel: React.FC = () => {
  const slides = [
    {
      title: "Proud Salesforce Ridge Tier Partner",
      subtitle: "Backed by certified experts delivering enterprise-grade results",
      image: "/lovable-uploads/f57d230d-a5cd-4e37-9f7d-c9a9806b9d99.png"
    },
    {
      title: "Digital Transformation Excellence",
      subtitle: "Leading cloud solutions for modern businesses",
      image: "/lovable-uploads/f57d230d-a5cd-4e37-9f7d-c9a9806b9d99.png"
    },
    {
      title: "Innovation at Scale",
      subtitle: "Empowering organizations with cutting-edge technology",
      image: "/lovable-uploads/f57d230d-a5cd-4e37-9f7d-c9a9806b9d99.png"
    }
  ];

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-16">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-full flex items-center justify-center">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundBlendMode: 'overlay'
                  }}
                />
                <div className="absolute inset-0 bg-blue-900/60" />
                
                <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
                  <h1 className="text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 font-light">
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
  );
};
