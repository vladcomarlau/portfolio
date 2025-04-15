import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Background from '../components/Background'
import Title from '../components/Title'
import Projects from '../components/homeSubpages/Projects'
import CV from '../components/homeSubpages/CV'

export default function Home() {
  const [homeSubPage, setHomeSubPage] = useState(1);

  const redirect = () => {
    window.location.href ='https://comarlau.com/business/';
  }

  const background = (
    <div 
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

  const clickCV = () => {
    setHomeSubPage(0);
  }

  const clickProjects = () => {
    setHomeSubPage(1);
  }

  const menu = (
    <div className="tabs tabs-box glass backdrop-blur-xl m-3">
      <input type="radio" name="my_tabs_1" className="tab text-lg font-light" aria-label="Projects" onClick={clickProjects} checked={homeSubPage==1} />
      <input type="radio" name="my_tabs_1" className="tab text-lg font-light" aria-label="CV / Resume" onClick={clickCV} checked={homeSubPage==0}/>
    </div>
  )

  return (
    <>
      {background}
      <div style={{zIndex:"100"}}>
        <div className='mt-[30vh] mx-auto w-115 my-3'>
          <Title/>
        </div>
        <div className='md:mx-20 mt-50'>
          {menu}
          {homeSubPage == 0 && <CV/>}
          {homeSubPage == 1 && <Projects/>}
        </div>
      </div>
    </>
  )
}


