import { useState, useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Pause } from "lucide-react";

const demoVideos = [
  {
    emoji: "🌐",
    title: "Summarize web pages",
    videoUrl: "/video/summarize.mp4"
  },
  {
    emoji: "🔭",
    title: "Search Internet with natural language",
    videoUrl: "/video/web-search.mp4"
  },
  {
    emoji: "🎯",
    title: "More accurate answers than other assistants",
    videoUrl: "/video/sql.mp4"
  },
  {
    emoji: "🤖",
    title: "Get the best AI models from the marketplace",
    videoUrl: "/video/models-marketplace.mp4"
  },
];

export const Features = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    containScroll: "trimSnaps"
  });

  const [selectedIndex, setSelectedIndex] = useState( /* Math.floor(demoVideos.length / 2)*/ 0);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  const handleVideoClick = useCallback((event: React.MouseEvent<HTMLVideoElement>, index: number) => {
    // If clicking on the current video, toggle play/pause
    if (index === selectedIndex) {
      const video = event.currentTarget;
      if (video.paused) {
        video.play().catch(() => {
          // Ignore autoplay errors
        });
        setIsVideoPaused(false);
      } else {
        video.pause();
        setIsVideoPaused(true);
      }
      return;
    }

    // If clicking on non-selected video, navigate to it
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const videoWidth = rect.width;
    
    // If clicked on left half, go to previous; if right half, go to next
    if (clickX < videoWidth / 2) {
      scrollToNext();
    } else {
      scrollToPrevious();
      
    }
  }, [selectedIndex, scrollToPrevious, scrollToNext]);

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

  // Restart video from beginning when slide changes
  useEffect(() => {
    const currentVideo = videoRefs.current[selectedIndex];
    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {
        // Ignore autoplay errors (e.g., browser policies)
      });
      setIsVideoPaused(false);
    }
  }, [selectedIndex]);

  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto">
        {/* Demo Navigation Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4">
          {demoVideos.map((demo, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
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
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 px-4 xl:gap-10 xl:px-10 2xl:gap-20 2xl:px-20">
          {demoVideos.map((demo, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] md:flex-[0_0_80%] xl:flex-[0_0_80%] 2xl:flex-[0_0_60%] min-w-0 max-w-[1000px]"
            >
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-strong relative">
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className={`w-full h-auto aspect-video cursor-pointer ${index !== selectedIndex ? 'opacity-50' : ''}`}
                    src={demo.videoUrl}
                    loop
                    autoPlay
                    muted
                    playsInline
                    onClick={(e) => handleVideoClick(e, index)}
                  />
                  {index === selectedIndex && isVideoPaused && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-black/50 rounded-full p-4">
                        <Pause className="w-12 h-12 text-white" fill="white" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};