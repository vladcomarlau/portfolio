import { motion, useTransform } from "motion/react";
import { useRef } from "react";

export default function CarouselHorizontal(props: any) {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useTransform(
    props.scrollYProgress,
    [0.5, 0.9],
    [0, -props.width]
);

  return (
    <div className="relative h-[400px] overflow-hidden">
      <motion.div ref={containerRef} className="flex" style={{ x }}>
        {props.children}
      </motion.div>
    </div>
  )
}