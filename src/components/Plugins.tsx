import { Code, Zap, X, Store, BotMessageSquare, ExternalLink } from "lucide-react";
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
              <Code className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary">For Developers</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Build Your Own<br/>AI-Powered App
            </h2>
            
            <p className="text-xl text-muted-foreground mb-12">
            Make your app experience feel like talking to a friend!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Build fast with templates and examples</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <BotMessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Interact in natural language</h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Store className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Publish to open marketplace</h3>
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
                className="relative rounded-xl overflow-hidden shadow-2xl border border-border bg-card cursor-pointer group mt-14"
                onClick={() => setIsVideoExpanded(true)}
              >
                <div className="aspect-video bg-muted flex items-center justify-center relative">
                  <img 
                    src="/video/yt-thumbnail.webp" 
                    alt="Stock Trading AI App Demo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors flex items-end p-4">
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
                    src="https://www.youtube.com/embed/HGJzU5n9ook?autoplay=1"
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
          <Button size="lg" className="gap-2" onClick={() => window.open('https://github.com/antarasi/aloha-sdk/tree/main', '_blank')}>
            <ExternalLink className="w-5 h-5" />
            Start Building Your Plugin
          </Button>
        </div>
      </div>
    </section>
  );
};