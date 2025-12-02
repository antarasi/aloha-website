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
            Congrats!
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
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover flex-shrink-0 ring-4 ring-primary/20 -mt-2"
            />
            <div className="space-y-2 text-sm lg:text-base text-justify">
              <p>
                There's <span className="font-bold">no billing</span>, 
                <span className="font-bold"> no cloud</span>,
                <span className="font-bold"> no account required</span> — just good software,
                and I like it that way.
              </p>
              <p>
                If you have any questions or feedback, let's chat on <a href="https://github.com/antarasi/aloha-releases/discussions" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">GitHub Discussions
                </a> or <a href="https://github.com/antarasi/aloha-releases/issues?q=is%3Aissue%20state%3Aopen%20label%3Aenhancement" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">create a feature request
                </a>. Keep an eye on <a href="https://x.com/AdikMatylewicz" target="_blank" className="text-primary hover:text-accent transition-colors font-semibold">X</a> for project updates.
              </p>
              <p className="font-semibold text-right caveat-semibold text-xl md:text-2xl">
                Adrian Matylewicz
              </p>
              <a className="text-right text-muted-foreground flex items-center justify-end hover:text-muted-foreground/80 transition-colors" href="https://www.linkedin.com/in/adrian-matylewicz/" target="_blank">
                <svg className="h-4 w-4 mr-2" height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/><path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/></g></svg>
                <span>Senior Full-Stack Software Engineer @&nbsp;NVIDIA | Ex-Amazon</span>
              </a>
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
