import { Mail, Linkedin, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import teamMember1 from "@assets/stock_images/professional_busines_908de003.jpg";
import teamMember2 from "@assets/stock_images/professional_busines_9eb1af07.jpg";
import teamMember3 from "@assets/stock_images/professional_technic_96617aa8.jpg";

interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  photo: string;
  background: string;
  whyIdeal: string;
  email: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Sarah Chen",
    role: "Clinical Lead & Implementation Consultant",
    credentials: "RN, MHA, Aged Care Specialist",
    photo: teamMember1,
    background: "15+ years in aged care operations including 8 years as DON in 120-bed facilities. Deep expertise in psychosocial safety frameworks, workforce wellbeing programs, and regulatory compliance across NSQHS and Aged Care Quality Standards.",
    whyIdeal: "Bridges clinical reality with compliance requirements—speaks the language of frontline RNs while navigating ACQS audit frameworks",
    email: "sarah.chen@culturecrunch.ai",
    linkedin: "https://linkedin.com/in/sarahchen"
  },
  {
    name: "Michael Torres",
    role: "Workforce Strategy Consultant",
    credentials: "MBA, CAHRI, Retention Specialist",
    photo: teamMember2,
    background: "12 years leading workforce retention initiatives in high-turnover healthcare environments. Proven track record reducing annual turnover from 45% to 18% through culture-first interventions. Expert in translating pulse data into actionable leadership strategies.",
    whyIdeal: "Transforms compliance exercises into retention outcomes—proven ability to engage skeptical operational leaders with data-driven culture strategies",
    email: "michael.torres@culturecrunch.ai",
    linkedin: "https://linkedin.com/in/michaeltorres"
  },
  {
    name: "Alex Patel",
    role: "Technical Lead & AI Systems Architect",
    credentials: "PhD (ML), Healthcare Tech Veteran",
    photo: teamMember3,
    background: "10+ years building AI/ML systems for clinical environments with strict privacy requirements. Previously architected predictive analytics platforms for major hospital networks. Specializes in privacy-minimal AI systems and explainable AI for non-technical stakeholders.",
    whyIdeal: "Delivers enterprise-grade AI with pilot-friendly simplicity—no IT infrastructure burden, seamless magic-link deployment, human-readable insights",
    email: "alex.patel@culturecrunch.ai",
    linkedin: "https://linkedin.com/in/alexpatel"
  }
];

export default function TeamSection() {
  return (
    <div id="team" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4" data-testid="badge-team-section">
            The Team
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sector-Specific Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by practitioners who understand aged care's operational reality: RN span-of-control challenges, 
            compliance pressures, and the culture-first approach to workforce retention
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-team-member-${index}`}
            >
              <div className="flex flex-col items-center text-center mb-6">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      data-testid={`img-team-photo-${index}`}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-team-name-${index}`}>
                  {member.name}
                </h3>
                <Badge variant="secondary" className="mb-2" data-testid={`badge-team-role-${index}`}>
                  {member.role}
                </Badge>
                <p className="text-sm text-muted-foreground" data-testid={`text-team-credentials-${index}`}>
                  {member.credentials}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-team-background-${index}`}>
                  {member.background}
                </p>

                <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-indigo-900 dark:text-indigo-200 mb-1">
                        Why Ideal for This Pilot
                      </p>
                      <p className="text-sm text-indigo-800 dark:text-indigo-300" data-testid={`text-team-why-${index}`}>
                        {member.whyIdeal}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                  data-testid={`button-team-email-${index}`}
                >
                  <a href={`mailto:${member.email}`}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  asChild
                  data-testid={`button-team-linkedin-${index}`}
                >
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
