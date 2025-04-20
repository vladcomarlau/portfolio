import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import RotateScrollR from "../../animations/RotateScrollR";
import CarouselHrms from "../../cards/CarouselHrms";
import HrmsCard from "../../cards/HrmsCard";
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";



export default function Hrms() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>
            <RotateScrollL><HrmsCard/></RotateScrollL>

            <motion.div ref={targetRef} className="h-600">
                <div className="sticky top-20 my-20">
                    <CarouselHrms scrollYProgress={scrollYProgress}/>
                </div>
            </motion.div>
            
            <RotateScrollR><HrmsCard /></RotateScrollR>
        </>
    )
}