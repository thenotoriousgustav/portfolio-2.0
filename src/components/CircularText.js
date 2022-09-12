import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CircularText({ children }) {
  const rotate = useRef();

  useEffect(() => {
    gsap.to(rotate.current, {
      rotation: 360,
      repeat: -1,
      duration: 13,
      ease: "none",
    });
  });

  return (
    <svg
      viewBox='0 0 100 100'
      width='100'
      height='100'
      className='absolute inset-x-28 bottom-20 h-auto w-[15vh] fill-current xs:inset-x-36 xs:-bottom-16 md:bottom-10 md:left-4 md:w-[20vh] lg:left-11 lg:bottom-4 '
      ref={rotate}
    >
      <defs>
        <path
          id='circle'
          d='
  M 50, 50
  m -37, 0
  a 37,37 0 1,1 74,0
  a 37,37 0 1,1 -74,0'
        />
      </defs>
      <text font-size='9.1'>
        <textPath
          href='#circle'
          className='font-neue font-light tracking-widest'
        >
          {children}
        </textPath>
      </text>
    </svg>
  );
}
