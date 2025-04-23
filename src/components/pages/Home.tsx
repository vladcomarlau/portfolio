import { useRef, useState } from 'react'
import Title from '../Title'
import Projects from './Projects'
import CV from './CV'
import ContactBadges from '../../buttons/ContactBadges'
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react"
import MenuBar from '../MenuBar'
import Contact from '../Contact'

export default function Home() {
  const [Page, setPage] = useState(0);
  const [activeButton, setActiveButton] = useState(0);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  const handlePageChange = (page: number) => {
    if(page != -1) {
      setPage(page);
      setActiveButton(page);
    }

    delay(100).then(() => {
      const target = document.getElementById(page.toString());
      if (target != null) {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - 60,
          behavior: 'smooth'
        });
      }
    });
    
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
          <div className='absolute mx-auto w-full'
            style={{ marginTop: "30px", marginBottom: "-60px", zIndex: "300" }}>
            <div className='mx-auto max-w-5xl text-end px-4'>
              <ContactBadges handlePageChange={handlePageChange} />
            </div>
          </div>
        </motion.div>

        <div id="-1"
          style={{zIndex:'10'}}>
          <Title />
        </div>
        
        <div className='fixed w-full mt-5'
          style={{ top: "0", zIndex: "300" }}>
          <AnimatePresence>
            {!isTitleVisible && <MenuBar handlePageChange={handlePageChange} Page={Page} setActiveButton={setActiveButton} activeButton={activeButton}/>}
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
          {Page == 0 && <Projects/>}
          {Page == 1 && (
            <div className='-mb-90'>
              <CV/>
            </div>
          )}
        </motion.div>
        
        <motion.div className='mt-120'
          onViewportEnter={() => setActiveButton(2)}
          onViewportLeave={() => setActiveButton(Page)}>
          <Contact />
        </motion.div>
      </div>
    </>
  )
}


