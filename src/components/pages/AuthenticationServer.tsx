import { useRef } from "react";
import RotateScrollR from "../../animations/RotateScrollR";
import { motion } from "motion/react";
import AuthenticationServerCard from "../../cards/AuthenticationServerCard";


export default function AuthenticationServer() {
    const targetRef = useRef(null);
  
    return (
        <div className="">
            <RotateScrollR className="mb-30 mt-10 ">
                <AuthenticationServerCard/>
            </RotateScrollR>

            <motion.div ref={targetRef} className="">

            </motion.div>
        </div>
    )
}