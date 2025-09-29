import { Check, X } from "lucide-react";

const competitors = [
  {
    name: "Aloha",
    img: "/logo.png",
    isOurProduct: true,
    features: {
      free: true,
      privacy: true,
      plugins: true,
      extendable: true,
      offline: true,
      aiModels: true,
      webSearch: true,
      crossPlatform: true
    }
  },
  {
    name: "Ollama",
    img: "/ollama.png",
    isOurProduct: false,
    features: {
      free: true,
      privacy: true,
      plugins: false,
      extendable: false,
      offline: true,
      aiModels: false,
      webSearch: false,
      crossPlatform: true
    }
  },
  {
    name: "Claude",
    img: "/claude.png",
    isOurProduct: false,
    features: {
      free: false,
      privacy: false,
      plugins: false,
      extendable: false,
      offline: false,
      aiModels: false,
      webSearch: true,
      crossPlatform: false
    }
  },
  {
    name: "ChatGPT",
    img: "/chatgpt.png",
    isOurProduct: false,
    features: {
      free: false,
      privacy: false,
      plugins: true,
      extendable: false,
      offline: false,
      aiModels: false,
      webSearch: true,
      crossPlatform: false
    }
  }
];

const dimensions = [
  { key: "privacy", label: "100% Privacy" },
  { key: "free", label: "100% Free" },
  { key: "offline", label: "Works offline" },
  { key: "crossPlatform", label: "Supports Windows, MacOS and Linux" },
  { key: "webSearch", label: "Web Search" },
  { key: "plugins", label: "Plugins Marketplace" },
  { key: "extendable", label: "Extendable (build your own plugins)" },
  { key: "aiModels", label: "World's best AI Models Marketplace" },
];

export const Competitors = () => {
  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-foreground">Aloha Desktop</strong> is the only AI assistant that combines 
            complete privacy, full extensibility, and zero cost in a single package. 
            Build your own plugins, choose from world's best AI models, and work completely offline.
          </p>
        </div>

        <div className="overflow-x-auto">
        <table className="w-full">
            <thead>
            <tr className="border-b bg-muted/50">
                <th className="text-left p-6 font-semibold text-lg"></th>
                {competitors.map((competitor) => (
                <th key={competitor.name} className="text-center p-6 font-semibold text-lg min-w-[140px]">
                    <div className="flex flex-col items-center space-y-2">
                    <img src={competitor.img} alt={competitor.name} className="w-10 h-10" />
                    <span>
                        {competitor.name}<br />Desktop
                    </span>
                    </div>
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {dimensions.map((dimension, index) => (
                <tr key={dimension.key} className={`border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                <td className="p-6 font-medium text-right">{dimension.label}</td>
                {competitors.map((competitor) => (
                    <td key={`${competitor.name}-${dimension.key}`} className="text-center p-2">
                    {competitor.features[dimension.key as keyof typeof competitor.features] ? (
                        <div className="flex justify-center">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <Check className={`w-7 h-7 mx-auto text-primary`} />                       </div>
                        </div>
                    ) : (
                        <div className="flex justify-center">
                        <div className="w-8 h-8 flex items-center justify-center">
                            <X className="w-6 h-6 mx-auto text-muted-foreground/50" />
                        </div>
                        </div>
                    )}
                    </td>
                ))}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};
