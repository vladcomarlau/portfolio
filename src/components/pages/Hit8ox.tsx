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

            <div className="h-250">
                <motion.div className="sticky top-20"
                    initial={{ scale: 0.8, opacity: 0.2 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1}}>
                    <div className="p-3 mx-auto 
                        md:w-[min(80vw,80vh)] md:h-[min(80vw,80vh)]
                        w-[min(90vw,90vh)] h-[min(90vw,90vh)] max-w-4xl">
                        <iframe className="w-full min-h-82"
                                    src="https://www.youtube.com/embed/sFq478qXQg8?si=2dlA1A6SAxjy14EJ&amp;start=312" 
                                    title="YouTube video player" frameBorder="0" 
                                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen></iframe>
                    </div>
                </motion.div>
            </div>

            <motion.div ref={targetRef} className="h-200">
                <div className="sticky top-20">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs ">
                            3D FIGHTING GAME
                        </span>
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 1 }}
                        className="absolute left-0 top-7">
                        <CarouselHorizontal scrollYProgress={scrollYProgress} width={905}>
                            <motion.video
                                autoPlay
                                loop
                                playsInline
                                muted
                                webkit-playsInline
                                initial={{scale: 0.5, filter: "blur(60px)" }}
                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.2 }}
                                className="h-60 px-4 aspect-square"
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
                                className="h-60 px-4 aspect-square"
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
                                className="h-60 px-4 aspect-square"
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
                                className="h-60 px-4 aspect-square"
                                src="/hit8oxScreenshots/5.mp4" />
                        </CarouselHorizontal>
                    </motion.div>
                </div>
            </motion.div>

            <div className="mt-100">
                <div className="font-serif py-3">
                    <p className="indent-10 p-2">
                        Words from Tom Hall, id Software co-founder and DOOM, Wolfenstein 3D creative director.
                    </p>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0.2 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1}}>
                    <div className="p-3 mx-auto 
                        md:w-[min(80vw,80vh)] md:h-[min(80vw,80vh)]
                        w-[min(90vw,90vh)] h-[min(90vw,90vh)] max-w-4xl">
                        <img src="/hit8oxScreenshots/6.jpeg"  />
                    </div>
                </motion.div>
            </div>
        </>
    )
}