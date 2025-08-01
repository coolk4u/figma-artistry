import React from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SalesforceServices } from '@/components/SalesforceServices';
import { Testimonials } from '@/components/Testimonials';
import { ServicesGrid } from '@/components/ServicesGrid';
import { PledgeSection } from '@/components/PledgeSection';
import { NewsBlogs } from '@/components/NewsBlogs';
import { AIStrategy } from '@/components/AIStrategy';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <Hero />
      
      <main>
        <About />
        <SalesforceServices />
        <Testimonials />
        
        <section className="text-center mt-[77px] max-md:mt-10">
          <h2 className="text-[#25a4dd] text-5xl font-medium self-center max-md:max-w-full max-md:text-[40px]">
            From setup to scale.{" "}
            <span className="text-[#003B55]">Salesforce done right</span>
          </h2>
        </section>
        
        <ServicesGrid />
        <PledgeSection />
        <NewsBlogs />
        <AIStrategy />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
