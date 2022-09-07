import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProgressBar() {
  gsap.registerPlugin(ScrollTrigger);

  const progress = useRef();

  useEffect(() => {
    gsap.to(progress.current, {
      value: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#footer",
        scrub: 1,
      },
    });
  });

  return (
    <progress max='100' value='0' ref={progress} className='z-20'></progress>
  );
}
