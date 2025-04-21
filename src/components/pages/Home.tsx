import { useRef, useState } from 'react'
import Title from '../Title'
import Projects from './Projects'
import CV from './CV'
import ContactBadges from '../../buttons/ContactBadges'
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
import MenuBar from '../MenuBar'
import Contact from '../Contact'

export default function Home() {
  const [homeSubPage, setHomeSubPage] = useState(1);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const handlePageChange = (x:number) => {
    setHomeSubPage(x);
    window.scrollTo(0, 830);
  }

  const background = (
    <div className='background w-full' 
      style={{  
        height: "100vh",
        zIndex: "-100",
        position:"fixed",
        top: "0px"
      }}/>
  )

  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const arrowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1, 0]
  );

  return (
    <>
      {background}
      <div style={{zIndex:"100"}}>
        <motion.div className='gradientFade h-40 -mb-40'
          onViewportEnter={() => setIsTitleVisible(true)}
          onViewportLeave={() => setIsTitleVisible(false)}>
          <div className='sm:mx-20 mx-10 text-right absolute right-0'
            style={{ marginTop: "30px", marginBottom: "-60px", zIndex: "300" }}>
            <ContactBadges />
          </div>
        </motion.div>

        <div
          style={{zIndex:'10'}}>
          <Title />
        </div>
        
        <div className='fixed w-full mt-5'
          style={{ top: "0", zIndex: "300" }}>
          <AnimatePresence>
            {!isTitleVisible && <MenuBar setHomeSubPage={handlePageChange} homeSubPage={homeSubPage}/>}
          </AnimatePresence>
        </div>

        <motion.div style={{ opacity: arrowOpacity }}
          ref={targetRef} className="text-center w-1/2 absolute bottom-0 left-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
            className="size-10"
            style={{ marginLeft: "-20px" }}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>

        <motion.div 
          className='md:mx-20 mt-30'>
          {homeSubPage == 0 && (
            <div className='-mb-90'>
              <CV/>
            </div>
          )}
          {homeSubPage == 1 && <Projects/>}
        </motion.div>
        <div className='mt-120'>
          <Contact />
        </div>
      </div>
    </>
  )
}


