import { Puzzle, Code, Zap, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const Plugins = () => {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-muted/30" id="plugins">
      <div className="container mx-auto max-w-6xl">
        {/* Dynamic layout based on video state */}
        <div className={`grid gap-12 items-start mb-16 transition-all duration-700 ease-in-out ${
          isVideoExpanded ? 'grid-cols-1' : 'lg:grid-cols-2'
        }`}>
          {/* Left: Title and Description */}
          <div className={`transition-all duration-700 ${isVideoExpanded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Puzzle className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">The Heart of Aloha</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Build Your Own AI-Powered Apps
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6">
              Plugins are the heart of Aloha Desktop. They lower the barrier of entry to build 
              your AI-powered app into writing just 2 simple text files.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Simple Setup</h3>
                  <p className="text-muted-foreground">
                    Just 2 text files - no complex configuration or dependencies required
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Rapid Development</h3>
                  <p className="text-muted-foreground">
                    Prototype complex AI apps in minutes, not hours or days
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Puzzle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Infinite Possibilities</h3>
                  <p className="text-muted-foreground">
                    Extend Aloha with any functionality you can imagine
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Video - expands to full width when clicked */}
          <div className={`relative transition-all duration-700 ${
            isVideoExpanded ? 'col-span-1' : ''
          }`}>
            {!isVideoExpanded ? (
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card cursor-pointer group"
                onClick={() => setIsVideoExpanded(true)}
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">
                    Stock Trading AI App
                  </h3>
                  <p className="text-white/80 text-sm">
                    Built in just 15 minutes
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsVideoExpanded(false)}
                  className="absolute -top-12 right-0 z-10 text-foreground hover:text-primary transition-colors flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg"
                >
                  <X className="w-5 h-5" />
                  <span className="text-sm font-medium">Close</span>
                </button>
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-border animate-scale-in">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Stock Trading AI App Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button size="lg" className="gap-2">
            <Puzzle className="w-5 h-5" />
            Explore Plugins Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};