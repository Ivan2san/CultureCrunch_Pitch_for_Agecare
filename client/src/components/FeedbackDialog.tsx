import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Send } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertFeedback } from "@shared/schema";

interface FeedbackDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FeedbackDialog({ open, onOpenChange }: FeedbackDialogProps) {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const feedbackMutation = useMutation({
    mutationFn: async (data: InsertFeedback) => {
      return await apiRequest("POST", "/api/feedback", data);
    },
    onSuccess: () => {
      toast({
        title: "Thank you!",
        description: "Your feedback has been received. We appreciate you taking the time to share your thoughts.",
      });
      // Reset form
      setRole("");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      onOpenChange(false);
      queryClient.invalidateQueries({ queryKey: ["/api/feedback"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!role || !message) {
      toast({
        title: "Missing Information",
        description: "Please select your role and provide feedback.",
        variant: "destructive",
      });
      return;
    }

    feedbackMutation.mutate({
      role,
      name: name || undefined,
      email: email || undefined,
      phone: phone || undefined,
      message,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg" data-testid="feedback-dialog">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <MessageSquare className="w-6 h-6 text-purple-600" />
            <DialogTitle className="text-2xl">Share Your Feedback</DialogTitle>
          </div>
          <DialogDescription>
            We'd love to hear your thoughts on CultureCrunch. Your input helps us improve and validate our approach.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="role" className="text-sm font-medium">
              Your Role <span className="text-red-500">*</span>
            </Label>
            <Select value={role} onValueChange={setRole} required>
              <SelectTrigger id="role" data-testid="select-role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aged-care-provider">Aged Care Provider / Executive</SelectItem>
                <SelectItem value="care-manager">Care Manager / Team Leader</SelectItem>
                <SelectItem value="hr-whs">HR / WHS Professional</SelectItem>
                <SelectItem value="consultant">Consultant / Advisor</SelectItem>
                <SelectItem value="investor">Investor / Funding Partner</SelectItem>
                <SelectItem value="regulator">Regulator / Policy Maker</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="message" className="text-sm font-medium">
              Your Feedback <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are your thoughts? Any suggestions or questions?"
              className="min-h-[120px]"
              required
              data-testid="textarea-message"
            />
          </div>

          <div className="border-t border-border pt-4">
            <p className="text-sm text-muted-foreground mb-3">
              <strong>Optional:</strong> Leave your contact details if you'd like us to follow up
            </p>

            <div className="space-y-3">
              <div>
                <Label htmlFor="name" className="text-sm">Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+61 4XX XXX XXX"
                  data-testid="input-phone"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              data-testid="button-cancel-feedback"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              disabled={feedbackMutation.isPending}
              data-testid="button-submit-feedback"
            >
              {feedbackMutation.isPending ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Send Feedback
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
