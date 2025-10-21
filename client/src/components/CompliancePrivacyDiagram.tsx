import { Shield, Database, Filter, Brain, FileCheck, Lock, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CompliancePrivacyDiagram() {
  const dataFlowSteps = [
    {
      icon: Database,
      title: "Anonymous Pulse",
      description: "3-question weekly survey",
      privacy: "No user_id stored",
      color: "indigo",
      regulations: ["APP 2: Anonymity"]
    },
    {
      icon: Filter,
      title: "k-Anonymity Filter",
      description: "Minimum 3 responses required",
      privacy: "Prevents re-identification",
      color: "purple",
      regulations: ["APP 6: Use Limits"]
    },
    {
      icon: Shield,
      title: "Aggregation Layer",
      description: "Team-level metrics only",
      privacy: "Role-based grouping",
      color: "blue",
      regulations: ["WHS Risk Assessment"]
    },
    {
      icon: Brain,
      title: "Brief Generation",
      description: "Privacy-preserving analysis",
      privacy: "No PII in prompts",
      color: "indigo",
      regulations: ["APP 11: Security"]
    },
    {
      icon: FileCheck,
      title: "Audit Trail",
      description: "Compliance evidence",
      privacy: "Metadata only",
      color: "purple",
      regulations: ["Quality Standards"]
    }
  ];

  const complianceFrameworks = [
    {
      icon: Lock,
      name: "Privacy Act 1988",
      items: ["APP 1-13 Compliant", "Anonymity by Design", "Consent Enforcement"],
      color: "indigo"
    },
    {
      icon: Shield,
      name: "WHS Psychosocial (2023)",
      items: ["17 Hazard Coverage", "Risk Assessment", "Control Documentation"],
      color: "purple"
    },
    {
      icon: CheckCircle,
      name: "Aged Care Quality",
      items: ["Standard 2: Governance", "Standard 7: HR", "Standard 8: Org Gov"],
      color: "blue"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Data Flow Diagram */}
      <div>
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-foreground mb-2">Privacy-Preserving Data Flow</h4>
          <p className="text-muted-foreground">
            From anonymous pulse to actionable insights—built-in privacy at every checkpoint
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {dataFlowSteps.map((step, index) => {
              const Icon = step.icon;
              const colorClass = step.color === "indigo" ? "indigo" : step.color === "purple" ? "purple" : "blue";
              
              return (
                <div key={index} className="flex flex-col items-center">
                  <Card className={`p-4 w-full border-2 ${
                    colorClass === "indigo" ? "border-indigo-300 bg-indigo-50/50" :
                    colorClass === "purple" ? "border-purple-300 bg-purple-50/50" :
                    "border-blue-300 bg-blue-50/50"
                  }`}>
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      colorClass === "indigo" ? "bg-indigo-100" :
                      colorClass === "purple" ? "bg-purple-100" :
                      "bg-blue-100"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        colorClass === "indigo" ? "text-indigo-600" :
                        colorClass === "purple" ? "text-purple-600" :
                        "text-blue-600"
                      }`} />
                    </div>
                    
                    <h5 className="font-bold text-center text-foreground mb-1 text-sm">{step.title}</h5>
                    <p className="text-xs text-muted-foreground text-center mb-2">{step.description}</p>
                    
                    <div className={`text-xs font-semibold text-center px-2 py-1 rounded ${
                      colorClass === "indigo" ? "bg-indigo-100 text-indigo-700" :
                      colorClass === "purple" ? "bg-purple-100 text-purple-700" :
                      "bg-blue-100 text-blue-700"
                    }`}>
                      {step.privacy}
                    </div>
                    
                    <div className="mt-2 space-y-1">
                      {step.regulations.map((reg, idx) => (
                        <div key={idx} className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                          <span className="text-xs text-muted-foreground">{reg}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  {/* Arrow between steps - Desktop */}
                  {index < dataFlowSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2" 
                         style={{ left: `${(index + 1) * 20}%` }}>
                      <div className="w-6 h-6 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Compliance Frameworks */}
      <div>
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-foreground mb-2">Regulatory Compliance Built-In</h4>
          <p className="text-muted-foreground">
            Designed to meet Australian aged care requirements from day one
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complianceFrameworks.map((framework, index) => {
            const Icon = framework.icon;
            const colorClass = framework.color === "indigo" ? "indigo" : framework.color === "purple" ? "purple" : "blue";
            
            return (
              <Card key={index} className={`p-6 border-t-4 ${
                colorClass === "indigo" ? "border-t-indigo-500" :
                colorClass === "purple" ? "border-t-purple-500" :
                "border-t-blue-500"
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${
                    colorClass === "indigo" ? "bg-indigo-100" :
                    colorClass === "purple" ? "bg-purple-100" :
                    "bg-blue-100"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      colorClass === "indigo" ? "text-indigo-600" :
                      colorClass === "purple" ? "text-purple-600" :
                      "text-blue-600"
                    }`} />
                  </div>
                  <h5 className="font-bold text-foreground">{framework.name}</h5>
                </div>
                
                <ul className="space-y-2">
                  {framework.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Key Privacy Principles */}
      <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-200">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-indigo-100 shrink-0">
            <AlertCircle className="w-6 h-6 text-indigo-600" />
          </div>
          <div className="flex-1">
            <h5 className="font-bold text-foreground mb-3">Core Privacy Principles</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground">Privacy by Design:</span>
                  <span className="text-sm text-muted-foreground"> Anonymity built into database schema</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground">k-Anonymity (k≥3):</span>
                  <span className="text-sm text-muted-foreground"> Minimum 3 responses to prevent re-identification</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground">Consent Enforcement:</span>
                  <span className="text-sm text-muted-foreground"> Hard gate at API level—no bypass possible</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-semibold text-foreground">Data Residency:</span>
                  <span className="text-sm text-muted-foreground"> Australia-based PostgreSQL with 7-year retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
