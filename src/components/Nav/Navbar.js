import { useState, useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavItem from "./NavItem";

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

      <NavItem
        menu1={menu1}
        menu2={menu2}
        menu3={menu3}
        menu4={menu4}
        menu5={menu5}
        slide={slide}
      />
    </nav>
  );
}
