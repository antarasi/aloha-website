export const AIModels = () => {
  const models = [
    { name: "Alibaba", logo: "/logo/alibaba.svg" },
    { name: "Meta", logo: "/logo/meta.svg" },
    { name: "Microsoft", logo: "/logo/microsoft.svg" },
    { name: "NVIDIA", logo: "/logo/nvidia.svg" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access cutting-edge AI technology from the world's top providers, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto items-center">
          {models.map((model) => (
            <div
              key={model.name}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg border border-border/50 bg-card/30 hover:bg-card/50 transition-all hover:scale-105"
            >
              <img
                src={model.logo}
                alt={`${model.name} logo`}
                className="h-12 w-12 object-contain"
              />
              <span className="text-sm font-medium text-foreground/80">{model.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
