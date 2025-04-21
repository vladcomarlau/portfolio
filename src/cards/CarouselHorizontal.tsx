import { motion, useTransform } from "motion/react";
import { Children, useRef } from "react";

export default function CarouselHorizontal(props: any) {
  //use with 200px width images & mx-4 px-1 

  const containerRef = useRef<HTMLDivElement>(null);

  let width = Children.count(props.children) * 240 + 700;
  console.log(Children.count(props.children))

  const x = useTransform(
      props.scrollYProgress,
      [0.5, 0.9],
      [0, -width]
  );

  return (
    <div className="relative overflow-hidden h-100 p-3">
      <motion.div ref={containerRef} className="flex sm:ml-[calc(50vw-310px)] ml-[calc(50vw-240px)]" style={{ x }}>
        {props.children}
      </motion.div>
    </div>
  )
}