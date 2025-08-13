
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const Education = () => {
  return (
    <ServicePageTemplate
      title="Education Solutions"
      subtitle="Transforming Educational Experiences"
      description="Empower educational institutions with Salesforce solutions that improve student success, streamline operations, and enhance learning experiences from K-12 to higher education."
      image="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "Student lifecycle management",
        "Recruitment and admissions",
        "Academic advising tools",
        "Alumni engagement platforms",
        "Fundraising and development",
        "Campus community portals",
        "Learning management integration",
        "Student success analytics"
      ]}
      benefits={[
        "Improved student outcomes",
        "Enhanced recruitment efficiency",
        "Better alumni engagement",
        "Streamlined operations",
        "Data-driven decision making",
        "Increased fundraising success",
        "Connected campus communities",
        "Personalized student experiences"
      ]}
      additionalInfo="Our education industry expertise helps institutions build stronger relationships with students, faculty, and alumni. We deliver solutions that support the entire student journey while providing insights to improve educational outcomes and operational efficiency."
    />
  );
};

export default Education;
