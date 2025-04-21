import { motion, useTransform } from "motion/react";
import { Children, useEffect, useRef, useState } from "react";

export default function CarouselHorizontal(props: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    let width = Children.count(props.children) * 240 + 800;
    console.log(Children.count(props.children))

    const x = useTransform(
        props.scrollYProgress,
        [0.5, 0.9],
        [0, -width]
    );

    return (
        <div className="relative overflow-hidden h-100 p-3">
        <motion.div ref={containerRef} className="flex ml-[calc(50vw-270px)]" style={{ x }}>
                {props.children}
            </motion.div>
        </div>
        
    )
}