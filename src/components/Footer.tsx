import { Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive" />
            <span>in Silicon Valley, CA, USA</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">© All rights reserved</span>
            <a href="https://github.com/antarasi/aloha-releases?tab=License-1-ov-file" target="_blank" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              EULA
            </a>
            <a href="https://x.com/AdikMatylewicz" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <svg width="1200" height="1227" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
              </svg>
            </a>
            <a href="https://github.com/antarasi/aloha-releases" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};