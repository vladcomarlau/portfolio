import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef } from "react";

export default function Contact () {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

  const rotateXRaw = useTransform(
    scrollYProgress, 
    [0.1, 0.6], 
    [-100, 0]
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
        className="perspective-distant bg-stone-100 mt-20" ref={targetRef}>
        <motion.div
          initial={{x:-400, opacity: 0 }}
          animate={{x:0, opacity: 1 }}
          transition={{ type: "spring", delay:0.3, duration: 2 }}
          style={{ rotateX: rotateX }}
          className="h-dvh backface-hidden origin-top bg-stone-100 overflow-hidden">
          <div className=" text-stone-950 max-w-5xl mx-auto">
            <div
              className="font-gothic italic md:text-8xl sm:text-6xl text-6xl p-3 font-extrabold 
              rounded-b-none text-shadow-md pt-22 sm:px-10
              ">
              <div>
                Contact
              </div>
            </div>

            <div className='md:w-110 w-90 mb-8 text-start rounded-pill mx-auto p-3 shadow-xl backdrop-blur-sm
            font-extralight border border-stone-500/15'
              style={{
                backgroundColor: "rgb(69,10,223)",
              }}>

              <p className='indent-5 text-base-100/90 font-serif'>
                <div className="text-gothic text-xl">Vlad-Constantin Comarlau</div>

                <div className="my-3">
                  <a className="block underline" href="tel:0752230503" >0752 230 503</a>
                  <a className="block underline" href="mailto: vladcom95@gmail.com" >vladcom95@gmail.com</a>
                  <a className="block underline" target="_" href="https://linkedin.com/in/comarlauvlad/" >linkedin.com/in/comarlauvlad/</a>
                </div>
              </p>
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </>
  )
}


