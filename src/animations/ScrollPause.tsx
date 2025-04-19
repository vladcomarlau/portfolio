import { motion, MotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export default function ScrollPause(props:any) {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 0.1, 0.9, 1], 
        [-240, -240, 240, 240]    //margin 100     -240 la inceput  240 dupa
    )

    return (
        <>
            <motion.div ref={ref} className="rounded-box p-4 mb-20"
                style={{ y }}>
                {props.children}
            </motion.div>
        </>
    )
}