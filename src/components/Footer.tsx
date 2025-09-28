import { Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto">
        <div className="border-t border-border/50 mt-12 py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>in Silicon Valley, CA, USA</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">© All rights reserved</span>
            <a href="https://github.com/antarasi/aloha-releases" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};