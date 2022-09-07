import { useState, useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Navbar() {
  gsap.registerPlugin(ScrollTrigger);
  window.history.scrollRestoration = "manual";

  const [navbar, setNavbar] = useState(false);

  const tl = useRef();
  const slide = useRef();

  const menu1 = useRef();
  const menu2 = useRef();
  const menu3 = useRef();
  const menu4 = useRef();
  const menu5 = useRef();

  useEffect(() => {
    const menus = [
      menu1.current,
      menu2.current,
      menu3.current,
      menu4.current,
      menu5.current,
    ];
    tl.current = gsap.timeline({
      paused: true,
      reversed: true,
    });
    tl.current.to(slide.current, {
      left: 0,
      duration: 1.5,
      ease: Power3.easeInOut,
    });
    tl.current.from(
      menus,
      0.8,
      { y: 100, opacity: 0, ease: Power3.easeOut, stagger: 0.2 },
      "-=0.4"
    );
  }, []);

  useEffect(() => {
    navbar ? tl.current.play() : tl.current.reverse();
  }, [navbar]);

  return (
    <nav>
      <div className='fixed z-50 flex w-full justify-between px-4 py-5 text-green-500 lg:px-14'>
        <h3>GUSTAM.</h3>
        <button onClick={() => setNavbar(!navbar)}>
          {navbar ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className='fixed -left-full z-40 block h-screen w-screen bg-white pt-24 font-neue text-4xl text-black md:pt-8 md:text-5xl lg:text-7xl'
        ref={slide}
      >
        <ul className='mt-24 flex flex-col text-center xs:space-y-5 md:mt-10 md:space-y-0'>
          <li ref={menu1} className='group'>
            <img src='2.png' alt='images' className='nav-hover'></img>
            <a href='/' className='xs:px-2 md:px-8'>
              HOME
            </a>
          </li>
          <li ref={menu2} className='group'>
            <a href='/' className='xs:px-2 md:px-8'>
              ABOUT
            </a>
            <img src='2.png' alt='images' className='nav-hover'></img>
          </li>
          <li ref={menu3} className='group'>
            <img src='2.png' alt='images' className='nav-hover'></img>
            <a href='/' className='xs:px-2 md:px-8'>
              PROJECT
            </a>
          </li>
          <li ref={menu4} className='group'>
            <a href='/' className='xs:px-2 md:px-8'>
              ARCHIVE
            </a>
            <img src='2.png' alt='images' className='nav-hover'></img>
          </li>
          <li ref={menu5} className='group'>
            <img src='2.png' alt='images' className='nav-hover'></img>
            <a href='/' className='xs:px-2 md:px-8'>
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
