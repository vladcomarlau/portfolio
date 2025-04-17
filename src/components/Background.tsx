import { useLoader, useFrame} from '@react-three/fiber'
import { Euler } from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { useEffect } from 'react';


const Background = () => {
  const obj = useLoader(GLTFLoader, '/obj.glb')

  useEffect(() => {
    obj.scene.traverse((child) => {
      if ((child as any).isMesh) {
        child.castShadow = true
        child.receiveShadow = true   // optional, if you want self‑shadowing
      }
    })
  }, [obj])

  let rotY = 0;
  useFrame((state, delta) => {
    rotY += delta;
    state;

    obj.scene.setRotationFromEuler(
      new Euler(
        Math.sin(rotY / 3) * -0.1 + 0.1, 
        Math.cos(rotY / 2.5) * -0.4 - 0.2, 
        0));
  })
  
  return (
    <primitive object={obj.scene} position={[0.3, 2.5, -5]} />
  )
}

export default Background
