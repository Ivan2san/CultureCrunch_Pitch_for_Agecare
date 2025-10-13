import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

interface LeadCaptureFormProps {
  onSubmit: (data: LeadData) => void;
}

export interface LeadData {
  name: string;
  company: string;
  mobile: string;
  email: string;
}

export default function LeadCaptureForm({ onSubmit }: LeadCaptureFormProps) {
  const [formData, setFormData] = useState<LeadData>({
    name: "",
    company: "",
    mobile: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof LeadData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <Card className="p-8 max-w-md mx-auto bg-white">
      <div className="mb-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Experience the Demo</h3>
        <p className="text-gray-600">
          Share your details to unlock the interactive OORA framework demonstration
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-700">Name</Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange("name")}
            placeholder="Your name"
            className="w-full"
            data-testid="input-name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-700">Company</Label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleChange("company")}
            placeholder="Your company"
            className="w-full"
            data-testid="input-company"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile" className="text-gray-700">Mobile Number</Label>
          <Input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange("mobile")}
            placeholder="Your mobile number"
            className="w-full"
            data-testid="input-mobile"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            placeholder="your.email@company.com"
            className="w-full"
            data-testid="input-email"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700"
          data-testid="button-access-demo"
        >
          Access Demo
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          All fields are optional. We respect your privacy and will only use this information to follow up on your interest in ThriveGuide AI.
        </p>
      </form>
    </Card>
  );
}
