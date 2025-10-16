import { Check, X } from "lucide-react";
import React from "react";

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
  { key: "crossPlatform", label: "For Windows, MacOS and Linux" },
  { key: "webSearch", label: "Web Search" },
  { key: "plugins", label: "Plugins Marketplace" },
  { key: "extendable", label: "Extendable (build your own plugins)" },
  { key: "aiModels", label: "World's best AI Models Marketplace" },
];

export const Competitors = () => {
  return (
    <section className="py-16 bg-muted/30" id="comparison">
      <div className="mx-auto">
        <div className="mb-12 text-center container">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <strong className="text-foreground">Aloha Desktop</strong> is the only AI assistant that combines 
            complete privacy, full extensibility, and zero cost in a single package. 
            Build your own plugins, choose from world's best AI models, and work completely offline.
          </p>
        </div>

        <div>
        <table className="w-full max-w-[1352px] mx-auto">
            <thead className="sticky top-16 z-20 bg-muted/95 backdrop-blur-[10px]" >
            <tr className="border-b">
                <th className="text-left p-6 font-semibold text-base w-[333px] hidden md:table-cell"></th>
                {competitors.map((competitor) => (
                <th key={competitor.name} className="text-center p-3 md:p-6 font-semibold text-sm sm:text-base">
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
                <React.Fragment key={dimension.key}>
                  <tr className={`md:hidden ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <td className="pt-4 font-medium text-sm sm:text-base" colSpan={competitors.length}>
                      <span className="sticky left-0 pl-6 inline-block z-10">{dimension.label}</span>
                    </td>
                  </tr>
                  <tr className={`border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}>
                    <td className="p-3 md:py-6 font-medium text-right hidden md:table-cell">{dimension.label}</td>
                    {competitors.map((competitor) => (
                      <td key={`${competitor.name}-${dimension.key}`} className="text-center p-3">
                        {competitor.features[dimension.key as keyof typeof competitor.features] ? (
                          <div className="flex justify-center">
                            <div className="w-8 h-8 flex items-center justify-center">
                              <Check className={`w-7 h-7 mx-auto text-primary`} />                       
                            </div>
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
              </React.Fragment>
            ))}
            </tbody>
        </table>
        </div>
      </div>
    </section>
  );
};
