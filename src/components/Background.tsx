import { useLoader, useFrame} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const Background = () => {
  const obj = useLoader(GLTFLoader, '/obj.glb')

  let rotY = 0;
  useFrame((state, delta) => {
    rotY += delta;
    state;
    obj.scene.rotateY(Math.sin(rotY*0.5)*0.0005);
    obj.scene.rotateX(Math.cos(rotY*0.5)*0.0005);
  })
  
  return (
    <primitive object={obj.scene} position={[1, 0.2, 1]} />
  )
}

export default Background
