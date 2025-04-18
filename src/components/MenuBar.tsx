import { motion } from "motion/react";

export default function MenuBar(props:any) {
    return (
        <motion.div
            initial={{ y: -100, scale: 0.8 }}
            animate={{ y: 0, scale: 1.0 }}
            exit={{ y: -100, scale: 0.9 }}
            transition={{ type: "spring", duration: 1 }}>
            <div className="customGlass md:mx-15 mx-3 py-1 text-shadow-xs"
            style={{padding:"6px 0px 5px 0px"}}>
                <span className="text-base-100 text-md font-custom cursor-default"
                    style={{ margin: "5px 10px 3px 25px" }}>
                    VLAD COMARLAU
                </span>
                <span className="text-base-100 text-md customButton font-extralight"
                    onClick={() => props.setHomeSubPage(1)}>
                    Projects
                </span>
                <span className="text-base-100 text-md customButton font-extralight"
                    onClick={() => props.setHomeSubPage(0)}>
                    CV
                </span>
                <span className="text-base-100 text-md customButton font-extralight"
                    onClick={() => window.scrollTo(0, 0)}>
                    Contact
                </span>
            </div>
        </motion.div>
    )
}