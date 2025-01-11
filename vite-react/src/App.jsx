import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls, Sparkles } from '@react-three/drei';

const RotatingCube = () => {
  const meshRef = useRef(null);

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.001
    }
  });

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={100} scale={10} size={20} speed={0.001} noise={0.2} color='orange' />
    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6}/>

      <color attach="background" args={['#F0F0F0']}></color>

      <RotatingCube/>
    </Canvas>
  )
}

export default App;
