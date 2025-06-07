import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import { Color } from 'three'

const SpaceStation = (props) => {
  const { nodes } = useGLTF('/models/space_station.glb')

  const darkMetalMaterial = useMemo(() => ({
    color: new Color('#12cffa'),
    metalness: 1.12,
    roughness: 0.4
  }), [])

  const emissiveMaterial = useMemo(() => ({
    color: new Color('#000000'),
    emissive: new Color('#00ffff'),
    emissiveIntensity: 1.5,
    toneMapped: false
  }), [])

  const renderMesh = (geometry, isEmissive = false) => (
    <mesh 
			geometry={geometry} 
			rotation={[-Math.PI / 2, 0, 0]} 
			scale={100}>
      <meshStandardMaterial {...(isEmissive ? emissiveMaterial : darkMetalMaterial)} />
    </mesh>
  )

  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.8, -0.13, 0]} position={[0, -19, 40]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.19}>
          {renderMesh(nodes.spacestation001_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation002_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation003_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation004_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation005_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation006_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation007_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation008_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation009_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation010_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation011_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation012_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation013_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation014_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation015_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation016_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation017_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation018_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation019_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation020_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation021_low_Main_0.geometry, true)}
          {renderMesh(nodes.spacestation022_low_Main_0.geometry, true)}
          {renderMesh(nodes.spacestation023_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation024_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation025_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation026_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation027_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation029_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation030_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation031_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation032_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation033_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation034_low_Main_0.geometry)}
          {renderMesh(nodes.spacestation_low_Main_0.geometry)}
          {renderMesh(nodes.emit_low001_emitrED_0.geometry, true)}
          {renderMesh(nodes.emit_low_emitrED_0.geometry, true)}
          {renderMesh(nodes.emit_low002_emitrED_0.geometry, true)}
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/space_station.glb')

export default SpaceStation
