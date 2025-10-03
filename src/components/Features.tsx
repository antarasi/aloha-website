import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";

const demoVideos = [
  {
    title: "Install models from the marketplace",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    title: "Chat with AI locally",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    title: "Search the web seamlessly",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    title: "Install custom plugins",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    title: "Work completely offline",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  }
];

export const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See <span className="gradient-primary bg-clip-text px-2">Aloha</span> in Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore powerful features designed for seamless AI assistance
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {demoVideos.map((demo, index) => (
              <div 
                key={index} 
                className="flex-[0_0_80%] md:flex-[0_0_70%] min-w-0"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">{demo.title}</h3>
                  <div className="rounded-lg overflow-hidden shadow-strong">
                    <video
                      className="w-full h-auto"
                      src={demo.videoUrl}
                      loop
                      autoPlay
                      muted
                      playsInline
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-3 mt-8">
          {demoVideos.map((_, index) => (
            <Button
              key={index}
              variant={selectedIndex === index ? "default" : "outline"}
              size="sm"
              onClick={() => scrollTo(index)}
              className="w-3 h-3 p-0 rounded-full"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};