import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const demoVideos = [
  {
    title: "Get the best AI models from the marketplace",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
  {
    title: "Summarize web pages",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
  },
  {
    title: "Search Internet with natural language",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  {
    title: "Extend capabilities with plugins",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
  },
  {
    title: "Ask expert questions",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
  }
];

export const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });
  const [selectedIndex, setSelectedIndex] = useState(Math.floor(demoVideos.length / 2));

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollToPrevious = useCallback(() => {
    const prevIndex = (selectedIndex - 1 + demoVideos.length) % demoVideos.length;
    scrollTo(prevIndex);
  }, [selectedIndex, scrollTo]);

  const scrollToNext = useCallback(() => {
    const nextIndex = (selectedIndex + 1) % demoVideos.length;
    scrollTo(nextIndex);
  }, [selectedIndex, scrollTo]);

  const handleVideoClick = useCallback((event: React.MouseEvent<HTMLVideoElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const videoWidth = rect.width;
    
    // If clicked on left half, go to previous; if right half, go to next
    if (clickX < videoWidth / 2) {
      scrollToNext();
    } else {
      scrollToPrevious();
      
    }
  }, [scrollToPrevious, scrollToNext]);

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

  // Scroll to initial selected index when carousel is ready (only once on load)
  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(selectedIndex, true); // true = instant scroll without animation
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [emblaApi]);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto">
        {/* Demo Navigation Tiles */}
        <div className="flex justify-center gap-4 mb-8 px-4">
          {demoVideos.map((demo, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                flex-1 max-w-xs px-4 py-3 rounded-lg border-2 text-sm lg:text-base font-semibold transition-all duration-200 hover:scale-105
                ${selectedIndex === index 
                  ? 'border-green-500 text-green-600' 
                  : 'text-white border-muted-foreground/20 text-muted-foreground bg-background hover:border-muted-foreground/40'
                }
              `}
              aria-label={`View ${demo.title} demo`}
            >
              {demo.title}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4 xl:gap-10 xl:px-10 2xl:gap-20 2xl:px-20">
          {demoVideos.map((demo, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] md:flex-[0_0_80%] xl:flex-[0_0_80%] 2xl:flex-[0_0_60%] min-w-0 max-w-[1000px]"
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-strong">
                  <video
                    className={`w-full h-auto aspect-video ${index !== selectedIndex ? 'cursor-pointer opacity-50' : ''}`}
                    src={demo.videoUrl}
                    loop
                    autoPlay
                    muted
                    playsInline
                    onClick={index !== selectedIndex ? handleVideoClick : undefined}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};