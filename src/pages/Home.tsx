import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'

import Background from '../components/Background'
import Title from '../components/Title'
import Card from '../components/Card'

export default function Home() {
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
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <Background/>
        </Suspense>
      </Canvas>
    </div>
  )

  const menu = (
    <div className="tabs tabs-box glass backdrop-blur-xl backdrop-contrast-50 m-3">
      <input type="radio" name="my_tabs_1" className="tab" aria-label="CV / Resume" />
      <input type="radio" name="my_tabs_1" className="tab" aria-label="Java Projects" checked="checked" />
      <input type="radio" name="my_tabs_1" className="tab" aria-label="Other Projects" />
    </div>
  )


  return (
    <>
      {background}
      <div style={{zIndex:"100"}}>
        <div className='mt-[30vh] mx-auto w-130 my-3'>
          <Title/>
        </div>
        <div className='md:mx-20 mt-50'>
          {menu}
          <div className="glass m-3 p-3 rounded-box mb-30">
            <div className='flex flex-wrap'>
              <Card title="Title" description="description"/>
              <Card title="Title" description="description"/>
              <Card title="Title" description="description"/>
              <Card title="Title" description="description"/>
              <Card title="Title" description="description"/>
              <Card title="Title" description="description"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


