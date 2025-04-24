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