import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion, useScroll } from "motion/react";
import Hit8oxCard from "../../cards/Hit8oxCard";
import CarouselHorizontal from "../../carousels/CarouselHorizontal";

export default function Hit8ox() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
  
    return (
        <>              
            <RotateScrollR className="mb-10">
                <Hit8oxCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="h-200">
                <div className="sticky top-20">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            3D FIGHTING GAME
                        </span>
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="w-screen absolute left-0 top-7 md:-ml-29 -ml-9">
                        <CarouselHorizontal scrollYProgress={scrollYProgress} offset={-1100}>
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 mx-auto px-4 aspect-square"
                                src="/hit8oxScreenshots/1.mp4" />
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 mx-auto px-4 aspect-square"
                                src="/hit8oxScreenshots/2.mp4" />
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 0.86, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 -mx-7 px-4 aspect-square"
                                src="/hit8oxScreenshots/3.mp4" />
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 mx-auto px-4 aspect-square"
                                src="/hit8oxScreenshots/4.mp4" />
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 mx-auto px-4 aspect-square"
                                src="/hit8oxScreenshots/5.mp4" />
                        </CarouselHorizontal>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}