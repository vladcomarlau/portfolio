import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion } from "motion/react";
import BusinessAppCard from "../../cards/BusinessAppCard";

export default function BusinessApp() {
    const targetRef = useRef(null);
  
    return (
        <div className="">
            <RotateScrollR className="mb-30 mt-10 ">
                <BusinessAppCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="">

            </motion.div>
        </div>
    )
}