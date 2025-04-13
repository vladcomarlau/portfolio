import { useLoader, useFrame, useThree} from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/Addons.js'

const Title = () => {
  const obj = useLoader(OBJLoader, '/obj.obj')

  let rotY = 0;
  useFrame((state, delta) => {
    rotY += delta;
    obj.rotateY(Math.sin(rotY*0.5)*0.002);
    obj.rotateX(Math.cos(rotY*0.5)*0.002);
  })
  
  return (
    <>
        <primitive object={obj}
          position={[1, 0, 0]}
        />
    </>
  )
}

export default Title
