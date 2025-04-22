import CarouselHorizontal from "./CarouselHorizontal";

export default function CarouselTVStreamer(props:any) {
    
    return (
        <div>
            <div className="pb-1 mx-2">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                    LIVE TV WEB STREAMER
                </span>
            </div>
            <div className="w-screen absolute left-0 top-0 md:-ml-30 -ml-9">
                <CarouselHorizontal scrollYProgress={props.scrollYProgress}>
                    <img className="w-200 h-100 object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/1.png"/>
                    <img className="w-200 h-100 object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/4.png"/>
                    <img className="w-200 h-100 object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/2.png"/>
                    <img className="w-200 h-100 object-contain mx-4 px-1 py-2 rounded-field" src="/tvStreamerScreenshots/3.png"/>
                </CarouselHorizontal>
            </div>
        </div>
    )
}