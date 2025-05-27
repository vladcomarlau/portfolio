import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import CarouselHrms from "../../carousels/CarouselHrms";
import HrmsCard from "../../cards/HrmsCard";
import { motion, useScroll } from "motion/react";

export default function Hrms() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>
            <RotateScrollL className="mb-30 mt-10">
                <HrmsCard/>
            </RotateScrollL>

            <motion.div ref={targetRef} className="h-250">
                <motion.div className="sticky top-20"
                    initial={{ scale: 0.8, opacity: 0.2 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1}}>
                    <div className="p-3 mx-auto 
                        md:w-[min(80vw,80vh)] md:h-[min(80vw,80vh)]
                        w-[min(90vw,90vh)] h-[min(90vw,90vh)] max-w-4xl">
                        <iframe className="w-full min-h-82"
                                    src="https://www.youtube.com/embed/e_mEPLk1xgM?si=0aB8b0Gp2jY6ITzJ" 
                                    title="YouTube video player" frameBorder="0" 
                                    allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerPolicy="strict-origin-when-cross-origin" 
                                    allowFullScreen></iframe>
                    </div>
                </motion.div>
            </motion.div>
            

            <motion.div ref={targetRef} className="h-650">
                <motion.div className="sticky top-20"
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1}}>
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            HUMAN RESOURCES MANAGEMENT SYSTEM
                        </span>
                    </div>
                    <CarouselHrms scrollYProgress={scrollYProgress}/>
                </motion.div>
            </motion.div>
        </>
    )
}