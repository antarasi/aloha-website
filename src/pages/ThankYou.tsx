import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const ThankYou = () => {
  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-20 h-20 text-accent animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold">
            Thank You! 🎉
          </h1>
          <p className="text-2xl lg:text-3xl text-muted-foreground caveat-semibold">
            Your download has started
          </p>
        </div>

        <div className="space-y-6 py-8">
          <p className="text-xl lg:text-2xl leading-relaxed">
            <span className="text-accent font-semibold">Your new journey with AI begins now.</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get ready to experience the future of productivity. Aloha Desktop will transform 
            the way you interact with your computer, making every task smarter, faster, and more intuitive.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => window.location.href = "/#features"}
          >
            Explore Features
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = "/"}
          >
            Back to Home
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            <Download className="inline w-4 h-4 mr-1" />
            If your download didn't start, please check your downloads folder or try again from the home page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
