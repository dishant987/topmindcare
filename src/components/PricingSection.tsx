import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

interface PricingSectionProps {
  onStartTrial: () => void;
}

const plans = [
  {
    name: 'Starter',
    price: '$9.99',
    period: '/month',
    description: 'Perfect for trying mindfulness with one child',
    features: [
      '1 child profile',
      '50+ guided meditations',
      'Basic progress tracking',
      'Mobile app access',
      'Email support'
    ],
    buttonText: 'Start Free Trial',
    isPopular: false
  },
  {
    name: 'Premium',
    price: '$19.99',
    period: '/month',
    description: 'Most popular for families with multiple children',
    features: [
      'Up to 3 child profiles',
      '200+ guided meditations',
      'Advanced progress analytics',
      'Family session plans',
      'Offline downloads',
      'Priority support',
      'Parent dashboard'
    ],
    buttonText: 'Start Free Trial',
    isPopular: true
  },
  {
    name: 'Family',
    price: '$29.99',
    period: '/month',
    description: 'Complete mindfulness solution for large families',
    features: [
      'Unlimited child profiles',
      'All meditation content',
      'Custom program creation',
      'Teacher resources',
      'Video call sessions',
      '24/7 expert support',
      'Advanced analytics',
      'Early access to new features'
    ],
    buttonText: 'Start Free Trial',
    isPopular: false
  }
];

const PricingSection = ({ onStartTrial }: PricingSectionProps) => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            All plans include a 14-day free trial. No credit card required. 
            Cancel anytime with full money-back guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.isPopular
                  ? 'bg-gradient-primary text-primary-foreground shadow-strong scale-105'
                  : 'bg-card shadow-soft hover:shadow-medium'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-warning text-warning-foreground font-semibold px-4 py-2">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.isPopular ? 'text-primary-foreground' : 'text-foreground'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.isPopular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                }`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`text-4xl font-bold ${
                    plan.isPopular ? 'text-primary-foreground' : 'text-foreground'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.isPopular ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      plan.isPopular ? 'bg-primary-foreground/20' : 'bg-success/20'
                    }`}>
                      <Check className={`w-3 h-3 ${
                        plan.isPopular ? 'text-primary-foreground' : 'text-success'
                      }`} />
                    </div>
                    <span className={`text-sm ${
                      plan.isPopular ? 'text-primary-foreground/90' : 'text-foreground'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.isPopular ? "minimal" : "hero"}
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90' 
                    : ''
                }`}
                onClick={onStartTrial}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            🎯 <strong>100% Money-Back Guarantee</strong> • 
            🔒 <strong>Secure Payment</strong> • 
            ⚡ <strong>Instant Access</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            All plans include access to our mobile app, progress tracking, and expert support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;