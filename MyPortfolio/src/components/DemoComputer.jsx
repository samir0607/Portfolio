import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';
import { useGSAP } from '@gsap/react';

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/monitor.glb');

  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (txt) {
      txt.flipY = true;
      txt.minFilter = THREE.LinearFilter;
      txt.magFilter = THREE.LinearFilter;
      txt.generateMipmaps = false;
      txt.encoding = THREE.sRGBEncoding;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 2,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[1.45, 0, 0.4]} position={[0.45, -0.75, 0]} scale={1}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials['Material.005']}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials['Material.010']}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials['Material.011']}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials['Material.017']}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials['Material.002']}
          position={[0,0.01,0]}
        >
          <meshBasicMaterial map={txt} toneMapped={false}/>
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload('/models/monitor.glb');

export default DemoComputer;