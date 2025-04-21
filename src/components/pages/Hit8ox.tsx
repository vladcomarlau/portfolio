import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion, useScroll, useTransform } from "motion/react";
import Hit8oxCard from "../../cards/Hit8oxCard";
import CarouselHorizontal from "../../cards/CarouselHorizontal";

export default function Hit8ox() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });
  
    return (
        <>              
            <RotateScrollR className="mt-10 mb-10">
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
                        className="w-screen absolute left-0 top-7 md:-ml-30 -ml-9">
                        <CarouselHorizontal scrollYProgress={scrollYProgress} offset={-340}>
                            <motion.video
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-[50vh] mx-auto px-4 aspect-square shadow-2xl"
                                src="/hit8oxScreenshots/1.mp4" autoPlay loop />
                            <motion.video
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-[50vh] mx-auto px-4 aspect-square shadow-2xl"
                                src="/hit8oxScreenshots/2.mp4" autoPlay loop />
                            <motion.video
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-[50vh] mx-auto px-4 aspect-square shadow-2xl"
                                src="/hit8oxScreenshots/3.mp4" autoPlay loop />
                            <motion.video
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-[50vh] mx-auto px-4 aspect-square shadow-2xl"
                                src="/hit8oxScreenshots/4.mp4" autoPlay loop />
                            <motion.video
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-[50vh] mx-auto px-4 aspect-square shadow-2xl"
                                src="/hit8oxScreenshots/5.mp4" autoPlay loop />
                        </CarouselHorizontal>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}