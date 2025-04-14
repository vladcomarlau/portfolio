import { useLoader, useFrame} from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/Addons.js'

const Background = () => {
  const obj = useLoader(OBJLoader, '/obj.obj')

  let rotY = 0;
  useFrame((state, delta) => {
    rotY += delta;
    state;
    obj.rotateY(Math.sin(rotY*0.5)*0.0005);
    obj.rotateX(Math.cos(rotY*0.5)*0.0005);
  })
  
  return (
    <>
        <primitive object={obj}
          position={[1, 0.2, 1]}
        />
    </>
  )
}

export default Background
