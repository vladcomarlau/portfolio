import { motion } from "motion/react";

export default function MenuBar(props:any) {
    return (
        <motion.div
            initial={{ y: -100, scale: 0.2, }}
            animate={{ y: 0, scale: 1.0 }}
            exit={{ y: -100, scale: 0.2 }}
            transition={{ type: "spring", duration: 1 }}>
            <div className="customGlass md:mx-45 mx-5 py-1 text-shadow-md"
                style={{padding:"7px 0px 5px 0px", 
                border:"1px solid rgba(255,255,255,0.2)",
                height:"39px"}}>
                <span className="text-base-100 text-md font-gothic italic cursor-default px-1"
                    style={{ margin: "5px 10px 3px 25px" }}>
                    Vlad Comarlau
                </span>
                <a className={props.homeSubPage === 0 ?
                    "text-md customButton font-extralight" :
                    "text-md customButtonActive font-extralight"}
                    onClick={() => props.setHomeSubPage(1)}>
                    Projects
                </a>
                <a className={props.homeSubPage === 1 ?
                    "text-md customButton font-extralight" :
                    "text-md customButtonActive font-extralight"}
                    onClick={() => props.setHomeSubPage(0)}
                    style={{ marginLeft: "4px" }}>
                    CV
                </a>
                <span className="text-base-100 text-md customButton font-extralight text-shadow-lg"
                    onClick={() => window.scrollTo(0, 0)}>
                    Contact
                </span>
            </div>
        </motion.div>
    )
}