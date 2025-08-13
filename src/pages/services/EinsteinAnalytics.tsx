
import React from 'react';
import { ServicePageTemplate } from '@/components/ServicePageTemplate';

const EinsteinAnalytics = () => {
  return (
    <ServicePageTemplate
      title="Einstein Analytics"
      subtitle="AI-Powered Business Intelligence"
      description="Unlock the power of your data with Einstein Analytics. Transform raw data into actionable insights with AI-powered analytics, interactive dashboards, and predictive capabilities."
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      features={[
        "AI-powered data discovery",
        "Interactive dashboards",
        "Predictive analytics",
        "Mobile analytics",
        "Data integration",
        "Automated insights",
        "Custom calculations",
        "Collaborative analytics"
      ]}
      benefits={[
        "Data-driven decision making",
        "Improved business performance",
        "Faster time to insights",
        "Enhanced forecasting accuracy",
        "Automated reporting",
        "Mobile accessibility",
        "Self-service analytics",
        "Predictive capabilities"
      ]}
      additionalInfo="Einstein Analytics combines the power of artificial intelligence with comprehensive data visualization to help you discover hidden patterns, predict future outcomes, and make smarter business decisions. Our implementation ensures you maximize the value of your data assets."
    />
  );
};

export default EinsteinAnalytics;
