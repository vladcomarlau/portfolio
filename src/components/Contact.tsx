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
                  <div className="mt-4 md:-ml-1 -ml-5">
                    <a href={'/Vlad-Constantin_COMARLAU_2025_en.pdf'} download
                        className="btn-custom-a">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        <div className="text-nowrap text-xs shadow-xl overflow-hidden -ml-5">Download CV / Resume PDF</div>
                    </a>
                  </div>
                </div>
              </p>
            </div>
          </div>
          
        </motion.div>
      </motion.div>
    </>
  )
}


