import { Mail, Linkedin, CheckCircle, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Advisor {
  name: string;
  role: string;
  credentials: string;
  photo?: string;
  background: string;
  whyIdeal: string;
  email?: string;
  linkedin?: string;
}

const advisors: Advisor[] = [
  {
    name: "Ben Palmer",
    role: "Strategic Advisor",
    credentials: "CEO, Genos International",
    background: "Global leader in emotional intelligence research and application. Over 20 years pioneering evidence-based EI assessment and development tools used by organizations worldwide. Expert in translating psychological research into practical workplace interventions that drive measurable performance improvements.",
    whyIdeal: "Brings world-class expertise in measuring and developing people capabilities—validates our AI-powered approach to workforce insights with proven assessment methodology",
    email: "ben.palmer@genosinternational.com",
    linkedin: "https://linkedin.com/in/benpalmer"
  },
  {
    name: "Gourab Rout",
    role: "Technical Advisor",
    credentials: "Enterprise Architect",
    background: "Seasoned enterprise architect with deep expertise in scalable systems design and AI/ML infrastructure. Specializes in building privacy-first architectures for regulated industries. Proven track record architecting enterprise-grade solutions that balance innovation with compliance requirements.",
    whyIdeal: "Ensures our technical foundation can scale from pilot to enterprise deployment—privacy-minimal design meets regulatory reality",
    email: "gourab.rout@example.com",
    linkedin: "https://linkedin.com/in/gourabrout"
  },
  {
    name: "TBC",
    role: "Psychosocial Safety Advisor",
    credentials: "Psychosocial Safety Specialist",
    background: "Leading expert in psychosocial hazard identification, risk assessment, and control measures. Deep understanding of regulatory frameworks including Safe Work Australia guidelines and sector-specific compliance requirements. Proven experience translating complex safety legislation into practical workplace interventions.",
    whyIdeal: "Validates our approach against regulatory standards—ensures compliance while maintaining operational simplicity for aged care providers",
  }
];

export default function AdvisorsSection() {
  return (
    <div id="advisors" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-advisors-section">
            Strategic Advisors
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Guided by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expert advisors providing strategic guidance across emotional intelligence, 
            enterprise architecture, and psychosocial safety compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-advisor-${index}`}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 bg-muted flex items-center justify-center">
                    {advisor.photo ? (
                      <img 
                        src={advisor.photo} 
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                        data-testid={`img-advisor-photo-${index}`}
                      />
                    ) : (
                      <User className="w-16 h-16 text-muted-foreground" data-testid={`icon-advisor-placeholder-${index}`} />
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-advisor-name-${index}`}>
                  {advisor.name}
                </h3>
                <Badge variant="secondary" className="mb-2" data-testid={`badge-advisor-role-${index}`}>
                  {advisor.role}
                </Badge>
                <p className="text-sm text-muted-foreground" data-testid={`text-advisor-credentials-${index}`}>
                  {advisor.credentials}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-advisor-background-${index}`}>
                  {advisor.background}
                </p>

                <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-purple-900 dark:text-purple-200 mb-1">
                        Strategic Value
                      </p>
                      <p className="text-sm text-purple-800 dark:text-purple-300" data-testid={`text-advisor-why-${index}`}>
                        {advisor.whyIdeal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {advisor.email && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    asChild
                    data-testid={`button-advisor-email-${index}`}
                  >
                    <a href={`mailto:${advisor.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                )}
                {advisor.linkedin && (
                  <Button 
                    variant="ghost" 
                    size="icon"
                    asChild
                    data-testid={`button-advisor-linkedin-${index}`}
                  >
                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
