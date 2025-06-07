import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { calculateSizes } from '../constants/index.js'
import SpaceShip from '../components/SpaceShip.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Astronaut from '../components/Astronaut.jsx'
import Rings from '../components/Rings.jsx'
import { Leva } from 'leva'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'
import SpaceStation from '../components/SpaceStation.jsx'
const Hero = () => {
  const isSmall = useMediaQuery({maxWidth: 440});
  const isMobile = useMediaQuery({maxWidth: 768});
  const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});
  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className='xl:text-6xl md:text-5xl sm:text-3xl text-3xl font-medium text-white text-center font-captain'>Samir Gupta<span className="waving-hand">👾</span></p>
        <p className="hero_tag text-gray_gradient">Turning Ideas Into Impact</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, -10]} />
            <Leva hidden/>
            <HeroCamera isMobile={isMobile}>
            <SpaceStation 
              scale={sizes.deskScale} 
              //position={sizes.deskPosition} 
              rotation={[0.1,-Math.PI,0]}
            />
            </HeroCamera>

            <group>
              <SpaceShip position={sizes.targetPosition}/>
              <ReactLogo position={sizes.reactLogoPosition}/>
              <Astronaut position={sizes.astronautPosition}/>
              <Rings position={sizes.ringPosition}/>
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[7.5, 4, -8]} intensity={10} />
         </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero