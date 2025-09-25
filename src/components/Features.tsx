import { Shield, Zap, Puzzle, Infinity } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "100% Local & Secure",
    description: "All your conversations stay on your device. No data sent to external servers, ensuring complete privacy and security.",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Native desktop performance with instant responses. No waiting for network requests or server processing delays.",
    color: "text-accent"
  },
  {
    icon: Puzzle,
    title: "Fully Extensible",
    description: "Customize and extend functionality with plugins. Integrate with your favorite tools and workflows seamlessly.",
    color: "text-primary"
  },
  {
    icon: Infinity,
    title: "Free Forever",
    description: "No subscriptions, no usage limits, no hidden costs. Download once and use forever with all features included.",
    color: "text-accent"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-primary bg-clip-text px-2">Aloha</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for non-engineers who want powerful AI assistance without compromising on privacy or paying monthly subscriptions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-8 gradient-card border-0 shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center space-y-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};