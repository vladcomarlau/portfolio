import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function RotateScrollL(props:any) {

    const titleCardRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: titleCardRef,
        offset: ["start end", "end start"],
    });

    const rotateZ = useTransform(
        scrollYProgress,
        [0, 1],
        [-15, 7]
    );

    const moveX = useTransform<number, number>(
        scrollYProgress as MotionValue<number>,
        (latest) => Math.sin(latest*3) * -50 +40
    );
    
    return (
        <>
            <motion.div ref={titleCardRef} className="rounded-box p-4 mb-20"
                style={{ rotateZ: rotateZ }}>
                {props.children}
            </motion.div>
        </>
    )
}