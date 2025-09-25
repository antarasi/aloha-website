import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Shield, Zap, Heart } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get <span className="gradient-primary bg-clip-text text-transparent">Started</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download Aloha Desktop today and experience the future of private, local AI assistance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main download card */}
          <Card className="p-12 gradient-card border-0 shadow-strong text-center animate-scale-in">
            <div className="space-y-8">
              <div className="w-20 h-20 gradient-primary rounded-3xl mx-auto flex items-center justify-center shadow-glow animate-glow">
                <Download className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Download Aloha Desktop</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of users who trust Aloha for their daily AI assistance needs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
                <Button variant="hero" size="lg" className="shadow-glow">
                  <Download className="mr-2 h-5 w-5" />
                  Windows
                </Button>
                <Button variant="hero" size="lg" className="shadow-glow">
                  <Download className="mr-2 h-5 w-5" />
                  macOS
                </Button>
                <Button variant="hero" size="lg" className="shadow-glow">
                  <Download className="mr-2 h-5 w-5" />
                  Linux
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span>Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-destructive" />
                  <span>Free Forever</span>
                </div>
              </div>
            </div>
          </Card>

          {/* System requirements */}
          <div className="mt-12 text-center">
            <h4 className="text-lg font-semibold mb-4">System Requirements</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div>
                <strong className="text-foreground">Windows</strong>
                <br />Windows 10 or later
                <br />4GB RAM minimum
              </div>
              <div>
                <strong className="text-foreground">macOS</strong>
                <br />macOS 11.0 or later
                <br />Intel or Apple Silicon
              </div>
              <div>
                <strong className="text-foreground">Linux</strong>
                <br />Ubuntu 20.04+ or equivalent
                <br />x64 architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};