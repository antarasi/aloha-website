import { Button } from "@/components/ui/button";
import { Download, Shield, Infinity, UserRoundX } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main download card */}
          <div className="p-12 text-center animate-scale-in">
            <div className="space-y-8">
              <div className="w-20 h-20 gradient-primary rounded-3xl mx-auto flex items-center justify-center shadow-glow animate-glow">
                <Download className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Download Aloha Desktop</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of users who trust Aloha as their private AI assistant
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button variant="hero" size="lg" className="text-black">
                  <img src="/windows.svg" className="mr-2 h-5 w-5" />
                  Windows
                </Button>
                <Button variant="hero" size="lg" className="text-black">
                  <img src="/apple.svg" className="mr-2 h-5 w-5" />
                  macOS
                </Button>
                <Button variant="hero" size="lg" className="text-black">
                  <img src="/linux.svg" className="mr-2 h-5 w-5" />
                  Linux
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserRoundX className="w-4 h-4 text-accent" />
                  <span>No Account Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Infinity className="w-4 h-4 text-accent" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};