import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const SpaceShip = (props) => {
  const shipRef = useRef();
  const { nodes, materials } = useGLTF('/models/space_ship.glb')

  useGSAP(() => {
    gsap.to(shipRef.current.position, {
      y: shipRef.current.position.y + 2,
      duration: 5,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <group {...props} dispose={null} ref={shipRef} scale={0.8}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['03_-_Default']}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/space_ship.glb')
export default SpaceShip;