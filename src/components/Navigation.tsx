import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { useState } from "react";
import github from "@/lib/github";
import { useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    github.fetchAndStoreLatestRelease();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-900/70 backdrop-blur-[10px] border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a className="flex items-center space-x-2" href="/">
            <div className="rounded-lg flex items-center justify-center">
              <img src="/icon.png" alt="Aloha Desktop" className="size-11" />
            </div>
            <span className="font-bold text-xl">Aloha Desktop</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#demo" className="text-foreground hover:text-primary transition-colors">Demo</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#comparison" className="text-foreground hover:text-primary transition-colors">Compare AI Desktop Apps</a>
            <a href="#plugins" className="text-foreground hover:text-primary transition-colors">Plugins</a>
            <Button variant="hero" size="sm" onClick={() => window.location.href = "#download"}>
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
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#demo" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Demo</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#comparison" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Compare Desktop Apps</a>
              <Button variant="hero" size="sm" onClick={() => { window.location.href = "#download"; setIsOpen(false) }}>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};