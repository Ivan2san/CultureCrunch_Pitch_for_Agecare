import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureFormProps {
  onSubmit?: () => void;
  source: string;
  submitLabel?: string;
  title?: string;
  description?: string;
}

export interface LeadData {
  name: string;
  company: string;
  mobile: string;
  email: string;
}

export default function LeadCaptureForm({ 
  onSubmit, 
  source,
  submitLabel = "Access Demo",
  title = "Experience the Demo",
  description = "Share your details to unlock the interactive OORA framework demonstration"
}: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    company: "",
    mobile: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("/api/leads", "POST", {
        ...formData,
        source,
      });

      toast({
        title: "Thank you!",
        description: "Your details have been submitted successfully.",
      });

      if (onSubmit) {
        onSubmit();
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      toast({
        title: "Error",
        description: "Failed to submit your details. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof LeadData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="p-8 max-w-md mx-auto bg-card">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-muted-foreground">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            className="w-full"
            data-testid="input-name"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-muted-foreground">Company</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleChange("company")}
            placeholder="Your company"
            className="w-full"
            data-testid="input-company"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-muted-foreground">Mobile Number</Label>
          <Input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange("mobile")}
            placeholder="Your mobile number"
            className="w-full"
            data-testid="input-mobile"
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-muted-foreground">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="your.email@company.com"
            className="w-full"
            data-testid="input-email"
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          data-testid="button-access-demo"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : submitLabel}
        </Button>

        <p className="text-xs text-muted-foreground text-center mt-4">
          All fields are optional. We respect your privacy and will only use this information to follow up on your interest in ThriveGuide AI.
        </p>
      </form>
    </Card>
  );
}
