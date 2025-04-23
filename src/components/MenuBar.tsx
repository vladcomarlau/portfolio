import { motion } from "motion/react";

export default function MenuBar(props:any) {    
    return (
        <motion.div
            initial={{ y: -100, scale: 0.2, }}
            animate={{ y: 0, scale: 1.0 }}
            exit={{ y: -100, scale: 0.2 }}
            transition={{ type: "spring", duration: 1 }}
            className="max-w-5xl mx-auto">
            <div className="customGlass text-shadow-md rounded-full mx-3"
                style={{padding:"7px 0px 31px 0px", 
                border:"1px solid rgba(255,255,255,0.2)",
                height:"39px"}}>
                <span className="inline-block sm:mx-4 text-base-100 font-gothic italic cursor-default px-1">
                    Vlad Comarlau
                </span>
                <a className={props.activeButton === 0 ?
                    "text-md customButtonActive font-extralight" :
                    "text-md customButton font-extralight" }
                    onClick={() => {
                        props.handlePageChange(0, 840);
                        props.setActiveButton(0);
                    }}>
                    Projects
                </a>
                <a className={props.activeButton === 1 ?
                    "text-md customButtonActive font-extralight" :
                    "text-md customButton font-extralight" }
                    onClick={() => {
                        props.handlePageChange(1, 840);
                        props.setActiveButton(1);
                    }}
                    style={{ marginLeft: "4px" }}>
                    CV
                </a>
                <span className={props.activeButton === 2 ?
                    "text-md customButtonActive font-extralight" :
                    "text-md customButton font-extralight" }
                    onClick={() => {
                        window.scrollTo(0, document.body.scrollHeight);
                        props.setActiveButton(2);

                    }}>
                    Contact
                </span>
            </div>
        </motion.div>
    )
}