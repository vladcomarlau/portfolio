import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useInView } from 'react-intersection-observer'
import { Environment } from '@react-three/drei'
import Background from '../Background'
import Title from '../Title'
import Projects from '../homeSubpages/Projects'
import CV from '../homeSubpages/CV'
import DarkModeToggle from '../DarkModeToggle'
import Footer from '../Footer'
import MenuBar from '../MenuBar'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import { KernelSize, Resolution } from 'postprocessing'

export default function Home() {
  const [homeSubPage, setHomeSubPage] = useState(1);

  const { ref: titleRef, inView: isMenuBarVisible } = useInView({
    threshold: 0,
    rootMargin: '0px',
  });

  const background = (
    <div className='background' 
      style={{ 
        width: "100vw", 
        height: "100vh",
        zIndex: "-100",
        position:"fixed",
        top: "0px"
      }}>
      <Canvas shadows>
        <EffectComposer>
          <Bloom luminanceThreshold={6} luminanceSmoothing={0.1} height={360} />
        </EffectComposer>
        
        <Environment preset="sunset" />
        <Background />

        <directionalLight
          intensity={1.2}
          position={[-5, 10, 15]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
          shadow-bias={-0.0005}/>
        
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
        <div className='mt-[40vh] mx-auto w-115 my-3' ref={titleRef}>
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


