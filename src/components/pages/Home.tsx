import { useState, useRef } from 'react'
import Title from '../Title'
import Projects from '../homeSubpages/Projects'
import CV from '../homeSubpages/CV'
import Footer from '../Footer'
import ContactBadges from '../ContactBadges'
import { motion, useTransform, useScroll, useInView, AnimatePresence } from "motion/react"
import MenuBar from '../MenuBar'

export default function Home() {
  const [homeSubPage, setHomeSubPage] = useState(1);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const targetRef = useRef<HTMLDivElement>(null);

  const background = (
    <div className='background' 
      style={{ 
        width: "100vw", 
        height: "100vh",
        zIndex: "-100",
        position:"fixed",
        top: "0px"
      }}/>
  )

  return (
    <>
      {background}
      <div className='gradientFade h-30'>test</div>
      <div style={{zIndex:"100"}}>
        <motion.div
        onViewportEnter={() => setIsTitleVisible(true)}
        onViewportLeave={() => setIsTitleVisible(false)}>
          <Title />
          <div className='mx-20 text-right'>
            <ContactBadges />
          </div>
        </motion.div>
        <div className='fixed w-full mt-5'
          style={{ top: "0", zIndex: "300" }}>
          <AnimatePresence>
            {!isTitleVisible && <MenuBar setHomeSubPage={setHomeSubPage}/>}
          </AnimatePresence>
        </div>
        
        <div className='md:mx-20 mt-30'>
          {homeSubPage == 0 && <CV/>}
          {homeSubPage == 1 && <Projects/>}
        </div>
      </div>
      <Footer/>
    </>
  )
}


