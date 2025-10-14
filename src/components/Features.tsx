import { useState, useEffect, useRef } from "react";
import Plyr, { PlyrInstance } from "plyr-react"

const demoVideos = [
  {
    emoji: "🌐",
    title: "Summarize web pages",
    videoUrl: "/video/summarize.mp4",
    posterUrl: "/video/summarize.webp",
  },
  {
    emoji: "🔭",
    title: "Search Internet with natural language",
    videoUrl: "/video/web-search.mp4",
    posterUrl: "/video/web-search.webp",
  },
  {
    emoji: "🎯",
    title: "More accurate answers than other assistants",
    videoUrl: "/video/sql.mp4",
    posterUrl: "/video/sql.webp",
  },
  {
    emoji: "🤖",
    title: "Get the best AI models from the marketplace",
    videoUrl: "/video/models-marketplace.mp4",
    posterUrl: "/video/models-marketplace.webp",
  },
];

export const Features = () => {
  const DEFAULT_SELECTED_INDEX = 0; // Math.floor(demoVideos.length / 2)
  const [selectedIndex, setSelectedIndex] = useState(DEFAULT_SELECTED_INDEX);
  const videoRefs = useRef<(PlyrInstance | null)[]>([]);

  // Restart video from beginning when slide changes
  useEffect(() => {
    const currentVideo = videoRefs.current[DEFAULT_SELECTED_INDEX];
    if (currentVideo) {
      currentVideo.restart();
    }
  }, [videoRefs, DEFAULT_SELECTED_INDEX]);

  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container mx-auto">
        {/* Demo Navigation Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 px-4">
          {demoVideos.map((demo, index) => (
            <button
              key={index}
              // onClick={() => scrollTo(index)}
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
      <div className="overflow-hidden">
        <div className="flex gap-4 px-4 xl:gap-10 xl:px-10 2xl:gap-20 2xl:px-20">
          {demoVideos.map((demo, index) => (
            <div 
              key={index} 
              className="flex-[0_0_90%] md:flex-[0_0_80%] xl:flex-[0_0_80%] 2xl:flex-[0_0_60%] min-w-0 max-w-[1000px]"
            >
              <div className="space-y-4">
                <div 
                  className={`aspect-video rounded-lg overflow-hidden shadow-strong relative cursor-pointer ${index !== selectedIndex ? 'opacity-50' : ''}`} 
                  // onClick={(e) => handleVideoClick(e, index)}
                >
                  <Plyr
                    ref={(el) => (videoRefs.current[index] = el)}
                    source={{
                      type: 'video',
                      sources: [{ src: demo.videoUrl, type: 'video/mp4' }],
                      poster: demo.posterUrl
                    }}
                    options={{
                      controls: index === selectedIndex ? ['play', 'current-time', 'fullscreen'] : [],
                      autoplay: false,
                      muted: true,
                      loop: { active: true }
                    }}                
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-sm pb-2 text-muted-foreground text-center mt-6">
        * all demos shown in real time
      </div>
      
    </section>
  );
};