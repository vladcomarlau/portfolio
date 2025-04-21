import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export default function CarouselHorizontal(props: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
    
        const ro = new ResizeObserver(entries => {
          for (let entry of entries) {
            setWidth(entry.contentRect.width);
          }
        });
    
        ro.observe(el); 

        return () => {
          ro.disconnect(); //pt unmount
        };
    }, []); 

    const x = useTransform(
        props.scrollYProgress,
        [0.24, 0.77],
        [0, -width*2.15]
    );

    return (
        <div className="relative w-full overflow-hidden w-full h-[68vh]">
            <motion.div ref={containerRef} className="flex" style={{ x }}>
                {props.children}
            </motion.div>
        </div>
        
    )
}