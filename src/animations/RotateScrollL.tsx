import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function RotateScrollL(props:any) {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const rotateZ = useTransform(
        scrollYProgress,
        [0, 1],
        [15, -7]
    );

    const rotateX = useTransform(
        scrollYProgress,
        [0, 1],
        [10, -14]
    );

    return (
        <div className={"perspective-dramatic " + (props.className ?? "")}>
            <motion.div ref={ref} className="rounded-box p-4 mb-20"
                style={{ rotateZ: rotateZ, rotateX: rotateX }}>
                {props.children}
            </motion.div>
        </div>
    )
}