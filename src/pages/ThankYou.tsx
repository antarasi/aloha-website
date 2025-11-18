import { useEffect } from "react";
import { Download, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    })

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
    <div className="min-h-screen flex items-center justify-center px-6 gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="animate-pulse text-6xl">🎉</div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold">
            Thank You!
          </h1>
          <p className="text-2xl lg:text-3xl caveat-semibold text-accent">
            Your journey with AI begins now!
          </p>
        </div>

        <div className="space-y-6 py-8">
          <p className="text-xl lg:text-2xl leading-relaxed">
            <span className="font-semibold">Your download has started.</span>
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get ready to experience the future of productivity. Aloha Desktop will transform 
            the way you interact with your computer, making every task smarter, faster, and more intuitive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
