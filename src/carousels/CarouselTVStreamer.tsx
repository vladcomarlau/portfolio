import PresenceDivSlide from "../animations/PresenceDivSlide";
import CarouselFade from "./CarouselFade";

export default function CarouselTVStreamer(props:any) {
    
    return (
        <div>
            <div className="pb-1 mx-2">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                    LIVE TV WEB STREAMER
                </span>
            </div>

            <CarouselFade scrollYProgress={props.scrollYProgress}>
                
                <PresenceDivSlide key="1">
                    <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                        <img className="w-full rounded-box" src="tvStreamerScreenshots/1.png" />
                    </div>
                </PresenceDivSlide>

                <PresenceDivSlide key="2">
                    <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                        <img className="w-full rounded-box" src="tvStreamerScreenshots/2.png" />
                    </div>
                </PresenceDivSlide>

                <PresenceDivSlide key="3">
                    <div className="w-[min(80vw,80vh)] h-[min(80vw,80vh)] max-w-4xl mx-auto">
                        <img className="w-full rounded-box" src="tvStreamerScreenshots/3.png" />
                    </div>
                </PresenceDivSlide>

                <PresenceDivSlide key="4">
                    <div className="w-[min(80vw,80vh)] h-[min(80vw,70vh)] max-w-4xl mx-auto">
                        <img className="w-full rounded-box" src="tvStreamerScreenshots/4.png" />
                    </div>
                </PresenceDivSlide>
                
            </CarouselFade>
            </div>
    )
}