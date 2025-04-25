import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion, useScroll } from "motion/react";
import NightRideCard from "../../cards/NightRideCard";
import CarouselHorizontal from "../../carousels/CarouselHorizontal";

export default function NightRide() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
  
    return (
        <>              
            <RotateScrollR className="mt-10 mb-10">
                <NightRideCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="h-120">
                <div className="sticky top-20">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            DRIVING GAME
                        </span>
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="absolute left-0 top-7 pt-4">
                        <CarouselHorizontal scrollYProgress={scrollYProgress} width={480}>
                            <motion.video
                                loop
                                muted
                                playsInline
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="w-60 px-4 aspect-square"
                                src="/nightRideScreenshots/1.mp4" autoPlay  />
                            <motion.video
                                loop
                                muted
                                playsInline
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="w-60 px-4 aspect-square"
                                src="/nightRideScreenshots/2.mp4" autoPlay  />
                            <motion.video
                                loop
                                muted
                                playsInline
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="w-60 px-4 aspect-square"
                                src="/nightRideScreenshots/3.mp4" autoPlay  />
                        </CarouselHorizontal>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}