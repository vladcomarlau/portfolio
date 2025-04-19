import { motion } from "motion/react";
import TechBadge from "../TechBadge";

export default function() {
    return (
        <>
            <motion.div className="">
                <span className="font-gothic bg-custom-secondary px-2 text-xl">
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
                <div className=" p-1">
                    <TechBadge name="java" className=""/>
                    <TechBadge name="spring" className=""/>
                    <TechBadge name="react" className=""/>
                    <TechBadge name="js" className=""/>
                    <TechBadge name="maven" className=""/>
                    <TechBadge name="jwt" className=""/>
                    <TechBadge name="intellij" className=""/>
                    <TechBadge name="npm" className=""/>
                    <TechBadge name="openai" className=""/>
                    <TechBadge name="bootstrap" className=""/>
                </div>
            </motion.div>
        </>
    )
}