import { User, Users, Heart, Brain, Shield, Sparkles } from "lucide-react";

interface EICompetency {
  unproductive: string;
  competency: string;
  productive: string;
  icon: React.ComponentType<{ className?: string }>;
}

const competencies: EICompetency[] = [
  {
    unproductive: "DISCONNECTED",
    competency: "SELF-AWARENESS",
    productive: "PRESENT",
    icon: User
  },
  {
    unproductive: "INSENSITIVE",
    competency: "AWARENESS OF OTHERS",
    productive: "EMPATHETIC",
    icon: Users
  },
  {
    unproductive: "UNTRUSTWORTHY",
    competency: "AUTHENTICITY",
    productive: "GENUINE",
    icon: Heart
  },
  {
    unproductive: "LIMITED",
    competency: "EMOTIONAL REASONING",
    productive: "EXPANSIVE",
    icon: Brain
  },
  {
    unproductive: "TEMPERAMENTAL",
    competency: "SELF-MANAGEMENT",
    productive: "RESILIENT",
    icon: Shield
  },
  {
    unproductive: "INDIFFERENT",
    competency: "POSITIVE INFLUENCE",
    productive: "EMPOWERING",
    icon: Sparkles
  }
];

export default function GenosEIDiagram() {
  return (
    <div className="w-full max-w-5xl mx-auto mb-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3" data-testid="heading-genos-ei">
          6 Core Emotional Intelligence Skills
        </h3>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto" data-testid="text-genos-description">
          Ben Palmer's Genos framework measures the emotional intelligence capabilities 
          that drive wellbeing and performance—validating our AI-powered culture insights
        </p>
      </div>

      <div className="space-y-3">
        {competencies.map((comp, index) => {
          const Icon = comp.icon;
          const colorClass = index % 2 === 0 ? 'from-purple-500 to-purple-600' : 'from-indigo-500 to-indigo-600';
          
          return (
            <div key={index} className="relative" data-testid={`ei-competency-${index}`}>
              <div className="flex items-center gap-0">
                {/* Left - Unproductive State */}
                <div className="w-1/4 bg-gray-400 dark:bg-gray-600 text-white text-center py-4 px-3 rounded-l-lg">
                  <span className="text-xs md:text-sm font-semibold tracking-wide" data-testid={`text-unproductive-${index}`}>
                    {comp.unproductive}
                  </span>
                </div>

                {/* Center Arrow - Core Competency */}
                <div className="relative flex-1 flex items-center">
                  <div className={`w-full bg-gradient-to-r ${colorClass} text-white flex items-center justify-center py-4 px-6 relative`}
                       style={{ 
                         clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
                       }}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 mr-3 flex-shrink-0" data-testid={`icon-competency-${index}`} />
                    <span className="text-sm md:text-base font-bold tracking-wide text-center" data-testid={`text-competency-${index}`}>
                      {comp.competency}
                    </span>
                  </div>
                </div>

                {/* Right - Productive State */}
                <div className="w-1/4 bg-gray-300 dark:bg-gray-500 text-gray-800 dark:text-gray-100 text-center py-4 px-3 rounded-r-lg">
                  <span className="text-xs md:text-sm font-semibold tracking-wide" data-testid={`text-productive-${index}`}>
                    {comp.productive}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground italic" data-testid="text-genos-attribution">
          Framework adapted from Genos International — measuring the productive states of emotional intelligence
        </p>
      </div>
    </div>
  );
}
