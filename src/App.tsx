import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import FloatingChat from "./components/FloatingChat";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound.tsx";
import DashboardLayout from "./pages/DashboardLayout.tsx";
import AssistantList from "./pages/AssistantList.tsx";
import AssistantForm from "./pages/AssistantForm.tsx";
import ConversationLogs from "./pages/ConversationLogs.tsx";
import Campaign from "./pages/Campaign.tsx";
import Analytics from "./pages/Analytics.tsx";
import PricingPage from "./pages/PricingPage.tsx";
import AIAgentsPage from "./pages/AIAgentsPage.tsx";
import PlatformPage from "./pages/PlatformPage.tsx";
import HowItWorksPage from "./pages/HowItWorksPage.tsx";
import ContactSales from "./pages/ContactSales.tsx";
import VoicePage from "./pages/platform/VoicePage.tsx";
import WhatsAppMessagePage from "./pages/platform/WhatsAppMessagePage.tsx";
import WhatsAppCallPage from "./pages/platform/WhatsAppCallPage.tsx";
import ChatPage from "./pages/platform/ChatPage.tsx";
import SMSPage from "./pages/platform/SMSPage.tsx";
import SlackPage from "./pages/platform/SlackPage.tsx";
import PersonalizePage from "./pages/platform/PersonalizePage.tsx";
import NoCodeStudioPage from "./pages/platform/NoCodeStudioPage.tsx";
import IntegrationsPage from "./pages/platform/IntegrationsPage.tsx";
import AnalyticsInsightsPage from "./pages/platform/AnalyticsPage.tsx";
import EnterpriseSecurityPage from "./pages/platform/EnterpriseSecurityPage.tsx";
import CampaignManagerPage from "./pages/platform/CampaignManagerPage.tsx";
import MultiLanguagePage from "./pages/platform/MultiLanguagePage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-agents" element={<AIAgentsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/voice" element={<VoicePage />} />
          <Route path="/platform/whatsapp-message" element={<WhatsAppMessagePage />} />
          <Route path="/platform/whatsapp-call" element={<WhatsAppCallPage />} />
          <Route path="/platform/chat" element={<ChatPage />} />
          <Route path="/platform/sms" element={<SMSPage />} />
          <Route path="/platform/slack" element={<SlackPage />} />
          <Route path="/platform/personalize" element={<PersonalizePage />} />
          <Route path="/platform/no-code-studio" element={<NoCodeStudioPage />} />
          <Route path="/platform/integrations" element={<IntegrationsPage />} />
          <Route path="/platform/analytics" element={<AnalyticsInsightsPage />} />
          <Route path="/platform/enterprise-security" element={<EnterpriseSecurityPage />} />
          <Route path="/platform/campaign-manager" element={<CampaignManagerPage />} />
          <Route path="/platform/multi-language" element={<MultiLanguagePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-sales" element={<ContactSales />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<AssistantList />} />
            <Route path="create" element={<AssistantForm />} />
            <Route path="edit/:id" element={<AssistantForm />} />
            <Route path="campaigns" element={<Campaign />} />
            <Route path="logs" element={<ConversationLogs />} />
            <Route path="analytics" element={<Analytics />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChat />
      </BrowserRouter>
      </TooltipProvider>
  </QueryClientProvider>
);

export default App;
