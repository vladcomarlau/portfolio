import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion, useScroll } from "motion/react";
import TVStreamerCard from "../../cards/TVStreamerCard";
import CarouselTVStreamer from "../../cards/CarouselTvStreamer";



export default function TVStreamer
() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>              
            <RotateScrollR className="mt-100 mb-40">
                <TVStreamerCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="h-600">
                <div className="sticky top-22">
                    <motion.div
                        initial={{ scale:0.2, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", duration: 0.7}}>
                        <CarouselTVStreamer scrollYProgress={scrollYProgress}/>
                    </motion.div>
                </div>
            </motion.div>

        </>
    )
}