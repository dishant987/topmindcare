import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  class: string;
  message: string;
}

const TrialModal = ({ isOpen, onClose }: TrialModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    class: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Trial Started Successfully!",
      description: "Welcome to Mindery One! Check your email for next steps.",
    });

    setIsLoading(false);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      class: '',
      message: ''
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md animate-scale-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-primary">
            Start Your Free Trial
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Join thousands of families discovering mindfulness together
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground font-medium">
              Full Name *
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
              className="transition-all duration-200 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
              className="transition-all duration-200 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-foreground font-medium">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="transition-all duration-200 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="class" className="text-foreground font-medium">
              Child's Age Group *
            </Label>
            <Select value={formData.class} onValueChange={(value) => handleInputChange('class', value)} required>
              <SelectTrigger className="transition-all duration-200 focus:ring-primary">
                <SelectValue placeholder="Select age group" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4-6">Ages 4-6 (Early Learners)</SelectItem>
                <SelectItem value="7-10">Ages 7-10 (Elementary)</SelectItem>
                <SelectItem value="11-14">Ages 11-14 (Teens)</SelectItem>
                <SelectItem value="mixed">Mixed Ages</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground font-medium">
              Tell us about your goals
            </Label>
            <Textarea
              id="message"
              placeholder="What do you hope to achieve with mindfulness practice?"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              rows={3}
              className="transition-all duration-200 focus:ring-primary resize-none"
            />
          </div>

          <Button 
            type="submit" 
            variant="hero" 
            className="w-full" 
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? 'Starting Your Trial...' : 'Start Free Trial'}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By starting your trial, you agree to our Terms of Service and Privacy Policy.
            No credit card required.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialModal;