import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { Typewriter } from "./Typewriter"
import { useRef } from "react";

const Title = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotateXRaw = useTransform(
    scrollYProgress, 
    [0.5, 0.8, 1], 
    [0, 80, 110]
  );

  const rotateX = useSpring(
    rotateXRaw, { damping: 85, stiffness: 1200, restDelta: 0.001 }
  );
  
  return (
    <>
      <motion.div 
        initial={{ backgroundColor: "rgba(245,245,244,1)" }}
        animate={{ backgroundColor: "rgba(255,255,255,0)" }}
        transition={{delay:1.7, time:0.2}}
        className="perspective-distant bg-stone-100" ref={targetRef}>
        <motion.div
          initial={{x:-400, opacity: 0 }}
          animate={{x:0, opacity: 1 }}
          transition={{ type: "spring", delay:0.3, duration: 2 }}
          style={{ rotateX: rotateX }}
          className="h-screen backface-hidden origin-bottom">
          <div className=" text-stone-950 bg-stone-100 h-screen">
            <div
              className="font-gothic italic md:text-8xl sm:text-6xl text-6xl p-3 font-extrabold 
              rounded-b-none text-shadow-md pt-22 sm:px-10
              ">
              <div>
                Vlad-Constantin
              </div>
              <div>
                Comarlau
              </div>
            </div>

            <div className='sm:w-2/3 w-6/7 mb-8 rounded-pill mx-auto p-3 shadow-xl backdrop-blur-sm
            font-extralight border border-stone-500/15 -mt-4'
              style={{
                backgroundColor: "rgb(69,10,223)",
              }}>
              <div className='font-gothic text-base-100'>
                About me
              </div>
              <p className='indent-5 text-base-100/90 font-serif'>
                <Typewriter text="Focused on full-stack web development using Java, Spring Boot, React, REST APIs and
              relational databases. Dual wielding bachelor's degree: one in computer science from
              the Faculty of Cybernetics, Statistics and Economic Informatics, the other one in management (ASE). Enthusiastic about problem-solving and continuous learning."/>
              </p>
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </>
  )
}

export default Title
