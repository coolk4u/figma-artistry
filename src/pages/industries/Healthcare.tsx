
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Healthcare = () => {
  return (
    <ServicePageTemplate
      title="Healthcare Solutions"
      subtitle="Patient-Centric Healthcare Technology"
      description="Improve patient outcomes and operational efficiency with Salesforce healthcare solutions. Connect patients, providers, and care teams for better health experiences."
      image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Patient relationship management",
        "Care coordination platforms",
        "Telehealth integration",
        "Provider collaboration tools",
        "Health data management",
        "Patient engagement solutions",
        "Clinical workflow automation",
        "Population health management"
      ]}
      benefits={[
        "Improved patient outcomes",
        "Enhanced care coordination",
        "Better patient engagement",
        "Streamlined operations",
        "Reduced administrative burden",
        "Data-driven insights",
        "Regulatory compliance",
        "Scalable healthcare solutions"
      ]}
      additionalInfo="Our healthcare industry solutions help providers deliver patient-centered care while improving operational efficiency. We understand HIPAA compliance requirements and design solutions that protect patient data while enabling better health outcomes."
    />
  );
};

export default Healthcare;
