import { motion } from "motion/react";
import CarouselHorizontal from "./CarouselHorizontal";

export default function CarouselTVStreamer(props:any) {
    
    return (
        <div>
            <div className='text-stone-100 font-bold font-gothic px-2 italic text-xs'>
                / PROJECTS / FULL STACK - WEB APPLICATIONS
            </div>
            <div className="pb-1 mx-2">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                    LIVE TV WEB STREAMER
                </span>
            </div>
            <div>
                <CarouselHorizontal scrollYProgress={props.scrollYProgress}>
                    <img className="flex-shrink-0 w-full h-full object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/1.png"/>
                    <img className="flex-shrink-0 w-full h-full object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/2.png"/>
                    <img className="flex-shrink-0 w-full h-full object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/3.png"/>
                </CarouselHorizontal>
            </div>
        </div>
    )
}