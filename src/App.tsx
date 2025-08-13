
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Accelerators from "./pages/Accelerators";
import NotFound from "./pages/NotFound";

// Service pages
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

// Resource pages
import PressReleases from "./pages/resources/PressReleases";
import CaseStudies from "./pages/resources/CaseStudies";
import Blog from "./pages/resources/Blog";
import Videos from "./pages/resources/Videos";

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
          
          {/* Service Routes */}
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
          
          {/* Resource Routes */}
          <Route path="/resources/press-releases" element={<PressReleases />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/videos" element={<Videos />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
