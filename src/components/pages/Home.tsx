import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import Background from '../Background'
import Title from '../Title'
import Projects from '../homeSubpages/Projects'
import CV from '../homeSubpages/CV'
import DarkModeToggle from '../DarkModeToggle'
import Footer from '../Footer'
import MenuBar from '../MenuBar'

export default function Home() {
  const [homeSubPage, setHomeSubPage] = useState(1);

  const { ref: titleRef, inView: isMenuBarVisible } = useInView({
    threshold: 0, // = any pixel counts as visible
    rootMargin: '0px',
  });

  const background = (
    <div className='background' 
      style={{ 
        width: "100vw", 
        height: "100vh",
        zIndex: "-100",
        position:"fixed",
        marginTop: "-30vh"
      }}>
      <Canvas>
        <ambientLight intensity={0.5}/>
        <directionalLight
          position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <Background/>
        </Suspense>
      </Canvas>
    </div>
  )

  const menu = (
    <div className="tabs tabs-box glass backdrop-blur-xl m-3 rounded-full p-3"
    style={{overflowY:"auto"}}>
      <input type="radio" name="my_tabs_1" className="btn btn-base"
      style={{borderRadius:"20px"}}
      aria-label="Projects" onClick={() => setHomeSubPage(1)} checked={homeSubPage==1} />
      <input type="radio" name="my_tabs_1" className="btn btn-base mx-1" 
      style={{ borderRadius: "20px" }}
      aria-label="CV / Resume" onClick={() => setHomeSubPage(0)} checked={homeSubPage==0}/>
    </div>
  )

  return (
    <>
      {background}
      <DarkModeToggle/>
      <div style={{zIndex:"100"}}>
        <div className='mt-[30vh] mx-auto w-115 my-3' ref={titleRef}>
          <Title/>
        </div>
        {!isMenuBarVisible && <MenuBar/>}
        <div className='md:mx-20 mt-30'>
          {menu}
          {homeSubPage == 0 && <CV/>}
          {homeSubPage == 1 && <Projects/>}
        </div>
      </div>
      <Footer/>
    </>
  )
}


