import { useState, useEffect, useRef, useCallback } from "react";
import Plyr from "plyr"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import powerSavingModePromise from "@/lib/power-mode";

const demoVideos = [
  {
    emoji: "🔭",
    title: "Search Internet with natural language",
    videoUrl: "/video/web-search.mp4",
    posterUrl: "/video/web-search.webp",
    provider: 'vimeo',
    videoId: '1127389107',
  },
  {
    emoji: "🌐",
    title: "Summarize web pages",
    videoUrl: "/video/summarize.mp4",
    posterUrl: "/video/summarize.webp",
    provider: 'vimeo',
    videoId: '1127389100',
  },
  {
    emoji: "🤖",
    title: "Get the best AI models from the marketplace",
    videoUrl: "/video/models-marketplace.mp4",
    posterUrl: "/video/models-marketplace.webp",
    provider: 'vimeo',
    videoId: '1127389090',
  },
  {
    emoji: "🎯",
    title: "More accurate answers than other assistants",
    videoUrl: "/video/sql.mp4",
    posterUrl: "/video/sql.webp",
    provider: 'vimeo',
    videoId: '1127389127',
  },
];

export const Features = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [powerSavingMode, setPowerSavingMode] = useState<boolean | undefined>(undefined);
  const [api, setApi] = useState<CarouselApi>();
  const players = useRef<Plyr[]>([]);

  // Sync selectedIndex with carousel position
  useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);


  // detect power saving mode
  useEffect(() => {
    powerSavingModePromise.then((mode) => {
      setPowerSavingMode(mode);
    });
  }, []);

  // initial load
  useEffect(() => {
    const activePlayer = players.current[selectedIndex];
    if (activePlayer && powerSavingMode === false) { // auto play only if certainly not in power saving mode
      activePlayer.once('ready', () => {
        activePlayer.play();
      });
    }
  }, [powerSavingMode]); // eslint-disable-line react-hooks/exhaustive-deps -- only powerSavingMode is a dependency, run on initial load

  // Restart video from beginning when slide changes
  useEffect(() => {
    const activePlayer = players.current[selectedIndex];

    players.current.forEach((pausedPlayer) => {
      if (pausedPlayer !== activePlayer) {
        pausedPlayer.pause();
      }
    });

    if (activePlayer && !powerSavingMode) {
      // this may not work on initial load if the video is not ready, not expecting the video to autostart here
      activePlayer.play();
    }
  }, [selectedIndex, powerSavingMode]);

  const onRefChange = useCallback((node: HTMLDivElement | null) => {
    if (node) { 
      const index = Number(node.dataset.videoIndex);
      players.current[index] = new Plyr(node);
    }
  }, []);

  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto">
        {/* Demo Navigation Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4">
          {demoVideos.map((demo, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`
                px-4 py-3 rounded-lg border-2 text-sm lg:text-base font-semibold transition-all duration-200 hover:scale-105 flex flex-col items-center gap-2
                ${selectedIndex === index 
                  ? 'border-green-500 text-green-600' 
                  : 'text-white border-muted-foreground/20 text-muted-foreground bg-background hover:border-muted-foreground/40'
                }
              `}
              aria-label={`View ${demo.title} demo`}
            >
              <span className="text-2xl">{demo.emoji}</span>
              <span>{demo.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          containScroll: false,
        }}
        className="w-full"
      >
        <CarouselContent className="flex md:gap-4 xl:gap-10 xl:px-10 2xl:gap-20 2xl:px-20">
          {demoVideos.map((demo, index) => (
            <CarouselItem 
              key={index} 
              className="flex-[0_0_90%] md:flex-[0_0_80%] xl:flex-[0_0_80%] 2xl:flex-[0_0_60%] min-w-0 max-w-[1000px]"
            >
              <div 
                className="mx-auto max-w-[1000px]"
                onClick={() => {
                  if (index !== selectedIndex) {
                    api?.scrollTo(index);
                  }
                }}
              >
                <div 
                  className={`rounded-lg overflow-hidden shadow-strong relative transition-opacity duration-300 
                    ${index !== selectedIndex ? 'opacity-50 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div 
                    ref={onRefChange} 
                    data-video-index={index}
                    data-plyr-provider={demo.provider}
                    data-plyr-embed-id={demo.videoId}
                    data-poster={demo.posterUrl} 
                    className="aspect-video" 
                    data-plyr-config={JSON.stringify({
                      title: demo.title,
                      controls: ['play-large', 'play', 'current-time', 'fullscreen', 'restart'],
                      autoplay: false,
                      playsinline: true,
                      muted: true,
                      loop: { active: true }
                    })}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center text-sm pb-2 text-muted-foreground text-center mt-6">
        All demos shown in real time
      </div>

      {powerSavingMode && (
        <div className="flex justify-center text-sm pb-2 text-muted-foreground text-center">
          Videos may not display properly in power saving mode
        </div>
      )}
      
    </section>
  );
};