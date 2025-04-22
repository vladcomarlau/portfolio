import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import { motion, useScroll } from "motion/react";
import PortfolioCard from "../../cards/PortfolioCard";

export default function Portfolio() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>
            <RotateScrollL className="mb-30 mt-40">
                <PortfolioCard/>
            </RotateScrollL>

            <motion.div ref={targetRef} className="">
                <motion.div className="sticky top-20"
                initial={{ scale: 0.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1}}>
                    <div className="sticky mt-1">
                        <div className="pb-1 mx-2">
                            <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                                THIS WEBSITE
                            </span>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="text-center relative bg-custom-primary pt-3 font-light px-5 text-stone-950 overflow-scroll rounded-box">
                            <div className="text-left pb-5">
                                <p className="text-center font-gothic">
                                    OLDER CONCEPT
                                </p>
                                <p className="indent-5 mb-3 text-sm italic mx-5">
                                    Something about having my 3D head scanned with an iPhone floating around felt too obtrusive..
                                </p>
                                <video className="rounded" src="/portfolio.mp4" loop autoPlay/>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    )
}