import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { Typewriter } from "./Typewriter"
import { useRef } from "react";

const Title = () => {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(
    scrollYProgress, 
    [0.5, 1], 
    [0, 120]
  );

  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0.5, 0.8, 1],
      [0, 30, -200]
    ), {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001
  })
  
  return (
    <>
      <div className="perspective-distant" ref={targetRef}>
        <motion.div
          initial={{x:-400, opacity: 0 }}
          animate={{x:0, opacity: 1 }}
          transition={{ type: "spring", delay:0.3, duration: 2 }}
          style={{ rotateX: rotateX, translateY: translateY }}
          className="h-screen backface-hidden origin-bottom">
          <div className="bg2 h-screen">
            <div
              className="font-gothic italic md:text-8xl sm:text-6xl text-5xl p-3 font-extrabold 
              rounded-b-none text-shadow-md text-stone-100 pt-30 sm:px-10
              ">
              <div>
                Vlad-Constantin
              </div>
              <div>
                Comarlau
              </div>
            </div>

            <div
              className='sm:w-2/3 w-6/7 mb-8 rounded-pill mx-auto p-3 shadow-xl backdrop-blur-sm
            font-extralight border border-stone-500/15'
              style={{
                backgroundColor: "rgb(69,10,223)",
                marginTop: "-15px"
              }}>
              <div className='font-gothic text-base-100'>
                About me
              </div>
              <p className='indent-5 text-base-100/90 font-serif'>
                <Typewriter text="Focused on full-stack web development using Java, Spring Boot, React, REST APIs and
              relational databases. Dual wielding bachelor's degree: one of computer science from
              the Faculty of Cybernetics, Statistics, Economic Informatics, the other of management (ASE). Enthusiastic about problem-solving and continuous learning."/>
              </p>
            </div>
          </div>
          
        </motion.div>
      </div>
    </>
  )
}

export default Title
