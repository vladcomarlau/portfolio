import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion } from "motion/react";
import BusinessAppCard from "../../cards/BusinessAppCard";

export default function BusinessApp() {
    const targetRef = useRef(null);
  
    return (
        <>
            <RotateScrollR className="mb-30 mt-30">
                <BusinessAppCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="">

            </motion.div>
        </>
    )
}