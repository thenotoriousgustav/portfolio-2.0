import { useEffect, useRef } from "react";
import { gsap, Power3, Power4 } from "gsap";

import ProgressBar from "./ProgressBar";
import CircularText from "./CircularText";

export default function Header() {
  const tl = useRef();
  const name = useRef();
  const img = useRef();
  const title = useRef();
  const desc = useRef();

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.from(name.current, {
      duration: 1.7,
      y: 450,
      skewY: 30,
      ease: "power4.out",
      stagger: 3,
    });
    tl.current.from(
      img.current,
      {
        height: 0,
        duration: 1.5,
        ease: Power4.easeInOut,
      },
      "-=1"
    );
    tl.current.from(
      desc.current,
      {
        duration: 1.7,
        y: 430,
        skewY: 40,
        ease: "power4.out",
        stagger: 4,
      },
      "-=0.5"
    );
    tl.current.from(
      title.current,
      {
        y: 100,
        duration: 2,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=1"
    );
    tl.current.from(
      ".circle",
      {
        x: -1000,
        duration: 3,
        ease: Power4.easeOut,
      },
      "-=2"
    );
  }, []);

  return (
    <>
      <ProgressBar />
      <header className='h-screen px-4 pt-28 text-secondary md:pt-40 lg:px-14 lg:pt-28'>
        <div className='h-36 overflow-hidden md:h-24'>
          <h1 className='font-neue text-6xl xs:text-7xl lg:text-8xl' ref={name}>
            GUSTAM RHEZA.
          </h1>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between'>
          <div className='mt-4 h-52'>
            <img
              src='header.jpg'
              alt='This is my photos profile'
              className='h-48 w-96 object-cover md:h-52 md:w-[550px]'
              ref={img}
            ></img>
          </div>
          <div className='h-12 overflow-hidden md:ml-8 md:mt-0 md:mr-4 md:h-20 md:w-5/12 md:text-sm lg:mr-16'>
            <p className='text-xs font-light lg:text-base' ref={desc}>
              / GUSTAM IS A FRONT-END & CREATIVE DEVELOPER BASED IN JAKARTA,
              INDONESIA. PASSIONATED ABOUT CREATING A BEAUTIFUL & JOYFUL DIGITAL
              EXPERIENCE
            </p>
          </div>
        </div>

        <CircularText>SCROLL TO EXPLORE SCROLL TO EXPLORE</CircularText>

        <div className='mt-6 text-end md:mt-16'>
          <h2
            className='font-neue text-xl xs:text-2xl md:text-5xl lg:text-5xl'
            ref={title}
          >
            FRONT-END DEVELOPER /
            <span className='block'>CREATIVE DEVELOPER</span>
          </h2>
        </div>
      </header>
    </>
  );
}
