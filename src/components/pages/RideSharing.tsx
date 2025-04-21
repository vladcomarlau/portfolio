import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
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
                Ride Sharing
            </RotateScrollR>

            <motion.div ref={targetRef} className="h-600 mb-100">
                <div className="sticky top-17 my-20">
                    Carousel
                </div>
            </motion.div>

        </>
    )
}