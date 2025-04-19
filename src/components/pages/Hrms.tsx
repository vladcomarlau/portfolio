import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import TechBadge from "../TechBadge";
import GitButton from "../../buttons/GitButton";
import TryButton from "../../buttons/TryButton";
import { useRef } from "react";

export default function Hrms() {

    const titleCardRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: titleCardRef,
        offset: ["start end", "end start"],
    });

    const rotateZ = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -15]
    );

    const moveX = useTransform<number, number>(
        scrollYProgress as MotionValue<number>,
        (latest) => Math.sin(latest*3) * 50 -40
    );
    
    return (
        <>
            <motion.div ref={titleCardRef} className="rounded-box bg-custom-secondary p-4 mb-20"
                style={{ rotateZ: rotateZ, x: moveX }}>
                <div className="-mt-8 mb-3 text-right">
                    <GitButton url="https://github.com/vladcomarlau/HRMS" />
                    <TryButton url=""/>
                </div>
                <span className="font-gothic bg-custom-primary px-2 text-xl text-custom-secondary">
                    HUMAN RESOURCES MANAGEMENT SYSTEM
                </span>
                <div>
                    <span className="text-custom-primary font-serif px-2 rounded-field">
                        Full Stack Web Application</span>
                </div>
                <div className="font-serif">
                    <p className="indent-10 m-2">
                        Web app developed for employee, organizational, payroll, leaves and performance evaluation management for use on intranet across entire organization.
                    </p>
                </div>
                
                <div className="p-1 saturate-0">
                    <TechBadge name="java" className=""/>
                    <TechBadge name="spring" className=""/>
                    <TechBadge name="react" className=""/>
                    <TechBadge name="js" className=""/>
                    <TechBadge name="maven" className=""/>
                    <TechBadge name="jwt" className=""/>
                    <TechBadge name="npm" className=""/>
                    <TechBadge name="openai" className=""/>
                    <TechBadge name="bootstrap" className=""/>
                    <TechBadge name="intellij" className=""/>
                </div>
            </motion.div>
        </>
    )
}