import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import CarouselHrms from "../../cards/CarouselHrms";
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

            <motion.div ref={targetRef} className="h-600">
                Features
                <motion.div className="sticky top-20 my-20"
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1}}>
                    <CarouselHrms scrollYProgress={scrollYProgress}/>
                </motion.div>
            </motion.div>
        </>
    )
}