import { Button } from "@/components/ui/button";
import { Download, Shield, EarthLock, MessageCircleHeart, ArrowDown, MousePointerClick, MonitorPlay, CirclePlay, Clapperboard } from "lucide-react";

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
          World's best <span className="gradient-primary bg-clip-text px-2">AI</span> on your computer
            <br />
            <span className="text-accent">Private & Powerful</span>
          </h1>
          
          {/* Hero description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Aloha Desktop is a powerful, extendable AI assistant that runs entirely on your computer. 
            Search the web, browse websites, and get answers without compromising your privacy. 
            Designed for users, not engineers.
          </p>

          {/* Key benefits badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { icon: Shield, text: "100% Local & Secure" },
              { icon: EarthLock, text: "Web Search & Browse" },
              { icon: MessageCircleHeart, text: "Beautifully Minimalistic" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 gradient-card px-4 py-2 rounded-full shadow-soft backdrop-blur-sm">
                <Icon className="w-5 h-5 text-accent" />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>

          <div className="">
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button variant="hero" size="lg">
                <Clapperboard />
                See it in action
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 space-y-2">
              <p className="text-sm text-muted-foreground">Free Forever • No Account Required • Open Source Plugins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};