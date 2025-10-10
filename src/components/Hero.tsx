import { Shield, EarthLock, MessageCircleHeart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden -z-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 py-24 animate-fade-in">
          {/* Hero headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight flex flex-col items-center justify-center gap-4">
            <span>World's best <span className="gradient-primary bg-clip-text px-2">AI</span> on your device</span>
            <span className="text-accent">Private &&nbsp;Powerful</span>
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
        </div>
      </div>
    </section>
  );
};