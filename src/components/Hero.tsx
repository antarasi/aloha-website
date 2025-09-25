import { Button } from "@/components/ui/button";
import { Download, Shield, Globe, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Hero headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your <span className="gradient-primary bg-clip-text text-transparent">Local</span> AI Assistant
            <br />
            <span className="text-accent">Secure & Private</span>
          </h1>
          
          {/* Hero description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aloha Desktop is a powerful, extensible AI assistant that runs entirely on your computer. 
            Search the web, browse websites, and get answers without compromising your privacy.
          </p>

          {/* Key benefits badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { icon: Shield, text: "100% Local & Secure" },
              { icon: Zap, text: "Lightning Fast" },
              { icon: Globe, text: "Web Search & Browse" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 gradient-card px-4 py-2 rounded-full shadow-soft backdrop-blur-sm">
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button variant="hero" size="lg" className="shadow-glow animate-glow">
              <Download className="mr-2 h-5 w-5" />
              Download for Free
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 space-y-2">
            <p className="text-sm text-muted-foreground">Free Forever • No Account Required • Open Source</p>
            <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
              <span>✓ Windows</span>
              <span>✓ macOS</span>
              <span>✓ Linux</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};