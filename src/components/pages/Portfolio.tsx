import RotateScrollL from "../../animations/RotateScrollL";
import { motion } from "motion/react";
import PortfolioCard from "../../cards/PortfolioCard";

export default function Portfolio() {
  
    return (
        <>
            <RotateScrollL className="mb-30">
                <PortfolioCard/>
            </RotateScrollL>

            <motion.div className="sticky top-20"
                initial={{ scale: 0.8, opacity: 0.2 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", duration: 1}}>
                <div className="sticky mt-1">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            THIS WEBSITE
                        </span>
                    </div>
                </div>
                <div className="p-3 mx-auto 
                    md:w-[min(80vw,80vh)] md:h-[min(80vw,80vh)]
                    w-[min(90vw,90vh)] h-[min(90vw,90vh)] max-w-4xl">
                    <div className="text-center relative bg-custom-primary pt-3 font-light text-stone-950 overflow-scroll rounded-box">
                        <div className="text-center">
                            <p className="text-center font-gothic">
                                OLDER CONCEPT
                            </p>
                            <p className="indent-5 text-sm italic mx-5 pb-2">
                                Having my 3D head scanned with an iPhone floating around felt too obtrusive..
                            </p>
                            <video className="rounded-b" src="/portfolio.mp4" loop autoPlay />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}