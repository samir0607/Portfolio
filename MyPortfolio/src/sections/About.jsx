"use client"
import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState, useRef, useEffect } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 2;
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('samir.gupta987@gmail.com');
    setHasCopied(true);
    setTimeout(()=>{
      setHasCopied(false);
    }, 4000);
  }
  return (
    <section className="c-space my-20" id="about">
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 h-full gap-5'>

        <div className='col-span-1 xl:row-span-3'>
          <div className="grid-container">
            <img src="/assets/DelhiShoot.jpeg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
              <div>
                <p className="grid-headtext">Hi, I'm Samir Gupta,<br/> Master-mind of Brilliant Ideas</p>
                <p className="grid-subtext">Passionate about creating user-friendly and visually appealing web applications with almost 2 years of practice.</p> 
              </div>
          </div>
        </div>

        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">Specializing JavaScript/TypeScript with React and Next.js ecosystems to create impactful products</p>
            </div>
          </div>
        </div>
      
        <div className='col-span-1 xl:row-span-4'>
          <div className='grid-container'>
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                ref={globeRef}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundImageUrl='//unpkg.com/three-globe/example/img/night-sky.png'
              />
            </div>
            <div>
              <p className="grid-headtext">Flexible for Remote works across most timezones</p>
              <p className="grid-subtext">Currently based in Delhi, India</p>
              <a href="#contact">
                <Button className="w-full" name="Contact Me" isBeam={true} containerClass="w-full mt-10"/>
              </a>
            </div>
          </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
          <div className='grid-container'>
            <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit flex object-cover" />
            <div>
              <p className="grid-headtext">Career Objective</p>
              <p className="grid-subtext">I love to code and love to learn new technologies and explore AI-tools for making impactful projects. I have strong interest in AI/ML and I am always looking for new opportunities.</p>
            </div>
          </div>
        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
          <div className='grid-container'>
            <img src="/assets/grid4.png" alt="grid-3" className="w-full md:h-[126px] sm:h-[266px] h-fit object-cover sm:object-top" />
            <div  className="space-y-2">
              <p className="grid-subtext text-center">Contact Me!</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>samir.gupta987@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About