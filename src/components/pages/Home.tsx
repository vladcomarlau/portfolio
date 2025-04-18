import { useState, useRef } from 'react'
import Title from '../Title'
import Projects from '../homeSubpages/Projects'
import CV from '../homeSubpages/CV'
import Footer from '../Footer'
import ContactBadges from '../ContactBadges'
import { motion, useTransform, useScroll, useInView, AnimatePresence } from "motion/react"
import MenuBar from '../MenuBar'
import { Typewriter } from '../Typewriter'

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
      <div className='gradientFade h-30'/>
      <div style={{zIndex:"100"}}>
        <div className='mx-20 text-right'
        style={{marginTop: "-60px"}}>
          <ContactBadges />
        </div>
        <Title />
        
        <div className='fixed w-full mt-5'
          style={{ top: "0", zIndex: "300" }}>
          <AnimatePresence>
            {!isTitleVisible && <MenuBar setHomeSubPage={setHomeSubPage} homeSubPage={homeSubPage}/>}
          </AnimatePresence>
        </div>

        <motion.div 
          className='w-2/3 mb-8 rounded-pill mx-auto p-3 shadow-xl backdrop-blur-sm
          font-extralight border border-stone-500/15'
          style={{backgroundColor:"rgb(69,10,223)",
            marginTop: "-30px"
          }}>
          <div className='font-gothic text-base-100'>
            About me
          </div>
          <p className='indent-5 text-base-100/90'>
            <Typewriter text="Focused on full-stack web development using Java, Spring Boot, React, REST APIs and
            relational databases. Dual wielding bachelor's degree: one of computer science from
            the Faculty of Cybernetics, Statistics, Economic Informatics, the other of management (ASE). Enthusiastic about problem-solving and continuous learning."/>
          </p>
        </motion.div>

        <motion.div className='md:mx-45 mx-20 customGlass'
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.5, type: "spring" }}
          onViewportEnter={() => setIsTitleVisible(true)}
          onViewportLeave={() => setIsTitleVisible(false)}
          style={{
            padding: "7px 0px 7px 1px", width: "135px",
            borderRadius: "20px 20px 0px 0px",
            marginBottom: "-11px"
          }}>
          <a className={homeSubPage === 0 ? 
            "text-base-100 text-md customButton font-extralight" :
            "text-base-100 text-md customButtonActive font-extralight"}
            onClick={() => setHomeSubPage(1)}>
            Projects
          </a>
          <a className={homeSubPage === 1 ?
            "text-base-100 text-md customButton font-extralight" :
            "text-base-100 text-md customButtonActive font-extralight"}
            onClick={() => setHomeSubPage(0)}>
            CV
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ scale: 0.8, marginTop: "150px", opacity: 0}}
          animate={{ scale: 1.0, marginTop: "0px", opacity: 1}}
          transition={{delay: 1.5, duration: 1, type:"spring"}}
          className='md:mx-20'>
          {homeSubPage == 0 && <CV/>}
          {homeSubPage == 1 && <Projects/>}
        </motion.div>
      </div>
      <Footer/>
    </>
  )
}


