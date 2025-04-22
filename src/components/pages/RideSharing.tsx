import { useRef } from "react";
import RotateScrollL from "../../animations/RotateScrollL";
import { motion, useScroll } from "motion/react";
import RideSharingCard from "../../cards/RideSharingCard";
import CarouselRideSharing from "../../carousels/CarouselRideSharing";

export default function RideSharing() {
    const targetRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

  
    return (
        <>              
            <RotateScrollL>
                <RideSharingCard/>
            </RotateScrollL>

            <motion.div ref={targetRef} className="h-600 mt-40">
                <motion.div className="sticky top-20 my-30"
                    initial={{ scale: 0.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", duration: 1}}>
                    <CarouselRideSharing scrollYProgress={scrollYProgress}/>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", duration: 2 }}>
                <div className="sticky mt-140">
                    <div className="pb-1 mx-2">
                        <span className="font-gothic bg-custom-primary px-2 text-custom-secondary text-xs">
                            RIDE SHARING ANDROID APP
                        </span>
                    </div>
                </div>

                <div className="p-3">
                    <div className="text-center relative h-80 bg-custom-primary pt-3 font-light px-5 text-stone-950 overflow-scroll rounded-box">
                        <div className="px-3 py-1 text-left">
                            <div className="my-3 text-center text-xl font-gothic">Features</div>
                            <ul className="mb-7">
                                <li>- 6 fragments / screens</li>
                                <li>- Asynchronous processing using ExecutorService for multi-threading</li>
                                <li>- Network access to external resources:</li>
                                <li className="ml-7">- Application is accessing test.json file hosted here on GitHub</li>
                                <li>- JSON parsing with nested JSON objects to Java objects</li>
                                <li>- Use of SharedPreferences Android files (for storing Profile and Settings locally)</li>
                                <li>- Use of varied controls (TextView, FloatingActionButton, Spinner, ListView, DatePicker, TimePicker, RatingBar)</li>
                                <li>- Bottom navigation bar</li>
                                <li>- Data validation forms for trip adding and profile editing</li>
                                <li>- Data transfer between activities/fragments</li>
                                <li>- Use of style.xml (Light / Night mode)</li>
                                <li>- All strings are read from the resources strings file (for easy translation / localization)</li>
                                <li>- Custom adapter in order to display trips in the ListView</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>

        </>
    )
}