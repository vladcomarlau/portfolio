import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Background from '../components/Background'
import { OrbitControls } from '@react-three/drei'

export default function Home() {
  const redirect = () => {
    window.location.href ='https://comarlau.com/business/';
  }

  const background = (
    <div style={{ width: "100vw", height: "100vh",
      position:"absolute",
      top: "0",
      left: "0",
      zIndex: "-100"
     }}>
      <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[10, 10, 5]} />
      <Suspense fallback={null}>
        <Background />
      </Suspense>
      <OrbitControls />
    </Canvas>
    </div>
  )


  return (
    <>
      {background}

      <div style={{zIndex:"100"}}>
        <h1 className="text-3xl font-bold underline">
          Vlad-Constantin Comarlau
        </h1>
        <button className='shadow-xl'
          onClick={redirect}>
            go to business-management web app</button>
      </div>
    </>
  )
}


