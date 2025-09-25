import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 gradient-card backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-bold text-xl">Aloha Desktop</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">Demo</a>
            <a href="#download" className="text-foreground hover:text-primary transition-colors">Download</a>
            <Button variant="hero" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#demo" className="text-foreground hover:text-primary transition-colors">Demo</a>
              <a href="#download" className="text-foreground hover:text-primary transition-colors">Download</a>
              <Button variant="hero" size="sm" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download for Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};