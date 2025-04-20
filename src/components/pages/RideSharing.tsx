import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import RotateScrollR from "../../animations/RotateScrollR";
import CarouselHrms from "../../cards/CarouselHrms";
import HrmsCard from "../../cards/HrmsCard";
import { motion, useScroll } from "motion/react";



export default function RideSharing() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>              
            <RotateScrollR>

            </RotateScrollR>

            <motion.div ref={targetRef} className="h-600 mb-100">
                <div className="sticky top-17 my-20">
                    <CarouselHrms scrollYProgress={scrollYProgress}/>
                </div>
            </motion.div>

        </>
    )
}