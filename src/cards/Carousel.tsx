import { AnimatePresence, motion, useTransform } from "motion/react";
import { Children, useEffect, useState } from "react";

export default function Carousel(props:any) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const childrenNo = Children.count(props.children) - 1;
    
    const slideNo = useTransform(
        props.scrollYProgress,
        [0, 0.18, 0.7, 1],
        [0, 0, childrenNo, childrenNo]
    );

    const roundedSlideNo = useTransform(slideNo, (v) => Math.floor(v));

    // cu subscribe modifici o variabila ordinara pe baza unui MotionValue
    useEffect(() => {
        const unsubscribe = roundedSlideNo.on("change", (v) => {setCurrentSlide(v)});
        return () => unsubscribe();
    }, [roundedSlideNo]);

    return (
        <>
            <motion.div>
                <ul>
                    <AnimatePresence> 
                        {/*orice motion element din interior trebuie sa aiba un key*/}
                        {props.children != null && (props.children[currentSlide] ?? props.children)}
                    </AnimatePresence>
                </ul>
            </motion.div>
        </>
    )
}