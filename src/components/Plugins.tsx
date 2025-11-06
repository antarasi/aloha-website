import { Puzzle, Code, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const Plugins = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30" id="plugins">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Puzzle className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">The Heart of Aloha</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Build Your Own AI-Powered Apps
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Plugins are the heart of Aloha Desktop. They lower the barrier of entry to build 
            your AI-powered app into writing just 2 simple text files.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Simple Setup</h3>
            <p className="text-muted-foreground">
              Just 2 text files - no complex configuration or dependencies required
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapid Development</h3>
            <p className="text-muted-foreground">
              Prototype complex AI apps in minutes, not hours or days
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Puzzle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Infinite Possibilities</h3>
            <p className="text-muted-foreground">
              Extend Aloha with any functionality you can imagine
            </p>
          </div>
        </div>

        {/* Video Demo */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative group"
            >
              <div className="aspect-video bg-muted flex items-center justify-center relative">
                <img 
                  src="/video/models-marketplace.webp" 
                  alt="Stock Trading AI App Demo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary group-hover:scale-110 transition-all flex items-center justify-center">
                    <svg 
                      className="w-10 h-10 text-primary-foreground ml-1" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-1">
                  Stock Trading AI App Prototype
                </h3>
                <p className="text-white/80 text-sm">
                  Watch how I built a fully functional AI-powered stock trading app in just 15 minutes
                </p>
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="gap-2">
              <Puzzle className="w-5 h-5" />
              Explore Plugins Marketplace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};