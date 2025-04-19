import { motion } from "motion/react";

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
                <div className="">
                    <div className="text-custom-primary font-serif px-2 rounded-field">
                        Technologies used: 
                    </div>
                </div>
            </motion.div>
        </>
    )
}