import CarouselHorizontal from "./CarouselHorizontal";

export default function CarouselTVStreamer(props:any) {
    
    return (
        <div>
            <div className="pb-1 mx-2">
                <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                    LIVE TV WEB STREAMER
                </span>
            </div>
            <div className="absolute left-0 top-0 py-5">
                <CarouselHorizontal scrollYProgress={props.scrollYProgress} width={1470}>
                    <img className="w-[500px] object-contain rounded-field" src="/tvStreamerScreenshots/1.png"/>
                    <img className="w-[500px] object-contain rounded-field" src="/tvStreamerScreenshots/4.png"/>
                    <img className="w-[450px] object-contain rounded-field" src="/tvStreamerScreenshots/2.png"/>
                    <img className="w-[500px] object-contain rounded-field" src="/tvStreamerScreenshots/3.png"/>
                </CarouselHorizontal>
            </div>
        </div>
    )
}