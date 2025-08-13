
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accelerators from "./pages/Accelerators";
import NotFound from "./pages/NotFound";

// Salesforce Services
import Consulting from "./pages/services/Consulting";
import Implementation from "./pages/services/Implementation";
import SalesforceIntegration from "./pages/services/SalesforceIntegration";
import DevelopmentCustomization from "./pages/services/DevelopmentCustomization";
import LightningMigration from "./pages/services/LightningMigration";
import SupportMaintenance from "./pages/services/SupportMaintenance";

// Salesforce Expertise
import Agentforce from "./pages/services/Agentforce";
import ServiceCloud from "./pages/services/ServiceCloud";
import SalesCloud from "./pages/services/SalesCloud";
import MarketingCloud from "./pages/services/MarketingCloud";
import DataCloud from "./pages/services/DataCloud";
import RevenueCloud from "./pages/services/RevenueCloud";
import GenerativeAI from "./pages/services/GenerativeAI";
import DevOps from "./pages/services/DevOps";
import EnablementTraining from "./pages/services/EnablementTraining";
import AWS from "./pages/services/AWS";
import ExperienceCloud from "./pages/services/ExperienceCloud";
import EinsteinAnalytics from "./pages/services/EinsteinAnalytics";
import FinancialServicesCloud from "./pages/services/FinancialServicesCloud";

// Industries
import Manufacturing from "./pages/industries/Manufacturing";
import FinancialServices from "./pages/industries/FinancialServices";
import Healthcare from "./pages/industries/Healthcare";
import Education from "./pages/industries/Education";
import HighTech from "./pages/industries/HighTech";

// Resources
import PressReleases from "./pages/resources/PressReleases";
import CaseStudies from "./pages/resources/CaseStudies";
import Blog from "./pages/resources/Blog";
import Videos from "./pages/resources/Videos";

// About Us
import AboutUs from "./pages/about/AboutUs";
import OurTeam from "./pages/about/OurTeam";
import OurCustomers from "./pages/about/OurCustomers";
import LifeAt4CE from "./pages/about/LifeAt4CE";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accelerators" element={<Accelerators />} />
          
          {/* Salesforce Services Routes */}
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/implementation" element={<Implementation />} />
          <Route path="/services/salesforce-integration" element={<SalesforceIntegration />} />
          <Route path="/services/development-customization" element={<DevelopmentCustomization />} />
          <Route path="/services/lightning-migration" element={<LightningMigration />} />
          <Route path="/services/support-maintenance" element={<SupportMaintenance />} />
          
          {/* Salesforce Expertise Routes */}
          <Route path="/services/agentforce" element={<Agentforce />} />
          <Route path="/services/service-cloud" element={<ServiceCloud />} />
          <Route path="/services/sales-cloud" element={<SalesCloud />} />
          <Route path="/services/marketing-cloud" element={<MarketingCloud />} />
          <Route path="/services/data-cloud" element={<DataCloud />} />
          <Route path="/services/revenue-cloud" element={<RevenueCloud />} />
          <Route path="/services/generative-ai" element={<GenerativeAI />} />
          <Route path="/services/devops" element={<DevOps />} />
          <Route path="/services/enablement-training" element={<EnablementTraining />} />
          <Route path="/services/aws" element={<AWS />} />
          <Route path="/services/experience-cloud" element={<ExperienceCloud />} />
          <Route path="/services/einstein-analytics" element={<EinsteinAnalytics />} />
          <Route path="/services/financial-services-cloud" element={<FinancialServicesCloud />} />
          
          {/* Industry Routes */}
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/financial-services" element={<FinancialServices />} />
          <Route path="/industries/healthcare" element={<Healthcare />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/high-tech" element={<HighTech />} />
          
          {/* Resource Routes */}
          <Route path="/resources/press-releases" element={<PressReleases />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/videos" element={<Videos />} />
          
          {/* About Us Routes */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/our-customers" element={<OurCustomers />} />
          <Route path="/about-us/life-at-4ce" element={<LifeAt4CE />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
