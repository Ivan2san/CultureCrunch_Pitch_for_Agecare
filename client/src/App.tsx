import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import IndustryPage from "@/pages/IndustryPage";
import NotFound from "@/pages/not-found";
import {
  agedCareConfig,
  healthcareConfig,
  constructionProfessionalServicesConfig
} from "@/content/industries";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/aged-care">
        <IndustryPage config={agedCareConfig} />
      </Route>
      <Route path="/healthcare">
        <IndustryPage config={healthcareConfig} />
      </Route>
      <Route path="/construction-professional-services">
        <IndustryPage config={constructionProfessionalServicesConfig} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
