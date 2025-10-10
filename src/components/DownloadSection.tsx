import { Button } from "@/components/ui/button";
import github from "@/lib/github";
import { Shield, Infinity, UserRoundX } from "lucide-react";

export const DownloadSection = () => {
  return (
    <section id="download" className="py-28 px-6 gradient-hero relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="mx-auto">
        <div className="mx-auto">
          {/* Main download card */}
          <div className="p-12 text-center animate-scale-in">
            <div className="space-y-24">
              <h1 className="font-bold leading-tight flex flex-col items-center justify-center gap-10">
                <span className="text-7xl lg:text-8xl text-accent caveat-semibold">Experience the magic ✨</span>
                <span className="text-4xl lg:text-6xl">Make your computer smarter today!</span>
              </h1>

              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <Button variant="hero" size="lg" className="text-black" onClick={() => github.downloadLatestReleaseAssetByPlatform('windows')}>
                  <img src="/windows.svg" className="mr-2 h-5 w-5" />
                  Windows
                </Button>
                <Button variant="hero" size="lg" className="text-black" onClick={() => github.downloadLatestReleaseAssetByPlatform('macos')}>
                  <img src="/apple.svg" className="mr-2 h-5 w-5" />
                  macOS
                </Button>
                <Button variant="hero" size="lg" className="text-black" onClick={() => github.downloadLatestReleaseAssetByPlatform('linux')}>
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