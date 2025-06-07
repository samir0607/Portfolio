import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Color } from 'three';

const SpaceShip = (props) => {
  const shipRef = useRef();
  const { nodes, materials } = useGLTF('/models/space_ship.glb');

  const radius = 12;
  const angle = useRef(0);
  const speed = 1.2; // radians per second
  const prev = useRef({ x: 0, y: 0, z: 0 });

  useFrame((_, delta) => {
    // Use delta to update angle based on time (not frames)
    angle.current += speed * delta;

    const x = Math.cos(angle.current) * radius;
    const y = -Math.cos(angle.current); // subtle Y motion
    const z = Math.sin(angle.current) * radius;

    const ship = shipRef.current;
    if (!ship) return;

    const prevPos = prev.current;
    const dir = {
      x: x - prevPos.x,
      y: y - prevPos.y,
      z: z - prevPos.z,
    };

    const length = Math.sqrt(dir.x ** 2 + dir.y ** 2 + dir.z ** 2);
    if (length > 0) {
      dir.x /= length;
      dir.y /= length;
      dir.z /= length;
    }

    ship.position.set(x, y, z);
    ship.lookAt(x + dir.x, y + dir.y, z + dir.z);

    const scaleFactor = 1 - (z / radius) * 0.5;
    ship.scale.setScalar(0.2 * scaleFactor);

    prev.current = { x, y, z };
  });

  return (
    <group {...props} dispose={null} ref={shipRef}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials['03_-_Default']}
        rotation={[-Math.PI / 2, 0, 0]}>
        <directionalLight position={[0, 0, 2]} intensity={1.5} />
        <meshStandardMaterial
          color={new Color('#12cffa')}
          metalness={1.22}
          roughness={0.5}
        />
      </mesh>
    </group>
  );
};

useGLTF.preload('/models/space_ship.glb');
export default SpaceShip;
