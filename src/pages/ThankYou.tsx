import { useEffect } from "react";
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
    <div className="min-h-screen flex items-center justify-center px-6 py-24 gradient-hero relative animate-fade-in">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="animate-pulse text-6xl">🎉</div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold">
            Thank You!
          </h1>
          <p className="text-2xl lg:text-4xl caveat-semibold text-accent">
            Your journey with local AI begins now!
          </p>
        </div>

        <div className="p-6 lg:p-8 mx-auto">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-left">
            <img 
              src="/avatar.jpeg" 
              alt="Creator" 
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover flex-shrink-0 ring-4 ring-primary/20 mt-2"
            />
            <div className="space-y-2 text-sm lg:text-base text-justify">
              <p>
                Aloha plugins turn AI into a Swiss Army knife - every tool you add unlocks a&nbsp;new capability on your device that you can interact with in natural language.
                There's <span className="font-bold">no billing</span>, 
                <span className="font-bold"> no cloud</span>,
                <span className="font-bold"> no account required</span> — just good software,
                and I like it that way.
              </p>
              <p>
                Don't hesitate to reach out to me directly on <a href="https://www.linkedin.com/in/adrian-matylewicz/" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">LinkedIn</a> or <a href="https://github.com/antarasi/aloha-releases/issues?q=is%3Aissue%20state%3Aopen%20label%3Aenhancement" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">create a feature request on GitHub</a> if you have an idea how Aloha can make your life easier.
              </p>
              <p className="font-semibold text-right caveat-semibold text-xl md:text-2xl">
                Adrian Matylewicz
              </p>
              <p className="text-right text-muted-foreground">
                Senior Full-Stack Software Engineer @&nbsp;NVIDIA | Ex-Amazon
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 w-full px-6 left-0 right-0 text-center">
          <p className="text-sm text-muted-foreground">
            If your download didn't start 
            you can find releases for all platforms <a href="https://github.com/antarasi/aloha-releases/releases" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">here</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
