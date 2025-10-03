import { Binoculars, Globe, Brain, Puzzle } from "lucide-react";
export const AppPreview = () => {
  return <section id="demo" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* App demo GIF */}
          <div className="w-full h-full">
            <video
              className="w-full h-full rounded-lg block object-cover bg-transparent object-center cursor-auto z-10 -mt-40"
              src="https://framerusercontent.com/assets/AZ96TECFBZMUZ8F7WLnlTeoB0.mp4"
              loop
              playsInline
              autoPlay
              muted
            ></video>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[{
            icon: Binoculars,
            title: "Web Search",
            description: "Aloha Desktop can search the internet to provide more accurate answers"
          }, {
            icon: Globe,
            title: "Web Crawling",
            description: "The agent can browse and extract information from any website"
          }, {
            icon: Brain,
            title: "Thinking",
            description: "Aloha Desktop supports reasoning to enhance quality of the answers"
          }, {
            icon: Puzzle,
            title: "Extendable",
            description: "Unlock new capabilities with community plugins or build your own plugins"
          }].map((feature, index) => <div key={index} className="p-6 border-0 text-center animate-fade-in" style={{
            animationDelay: `${index * 0.2 + 0.5}s`
          }}>
                <feature.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};