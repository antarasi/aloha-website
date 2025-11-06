import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { AppPreview } from "@/components/AppPreview";
import { Competitors } from "@/components/Competitors";
import { Plugins } from "@/components/Plugins";
import { DownloadSection } from "@/components/DownloadSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AppPreview />
      <Features />
      <Competitors />
      <Plugins />
      <DownloadSection />
    </div>
  );
};

export default Index;
