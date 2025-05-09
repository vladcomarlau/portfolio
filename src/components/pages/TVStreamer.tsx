import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion, useScroll } from "motion/react";
import TVStreamerCard from "../../cards/TVStreamerCard";
import CarouselTVStreamer from "../../carousels/CarouselTVStreamer";

export default function TVStreamer
() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
  
    return (
        <>              
            <RotateScrollR className="mt-0 mb-20">
                <TVStreamerCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="h-700">
                <div className="sticky top-22">
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0.3 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 1.2 }}>
                        <CarouselTVStreamer scrollYProgress={scrollYProgress}/>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0.4 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 0.7 }}>
                <div className="sticky mt-140">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            LIVE TV WEB STREAMER
                        </span>
                    </div>
                </div>

                <div className="p-3">
                    <div className="text-center relative h-80 bg-custom-primary pt-3 font-light px-5 text-stone-950 overflow-scroll rounded-box">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Features</div>
                            <ul className="">
                                <li>- Live cable TV streaming in HD with ~10 seconds delay</li>
                                <li>- Channel grid menu utomatically updates channel name by taking a screenshot when changing channels (This way it stays updated evem if the TV operator adds/removes TV channels from the channel grid)</li>
                                <li>- Basic username and password authentication using built-in Simple File Server BasicAuthenticator</li>
                                <li>- GUI window with credentials, logs and selection of capture device</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}