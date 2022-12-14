import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import { Link } from "react-router-dom";

import client from "../client";
export default function ProjectSection() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      const image = el.querySelector("img"),
        setX = gsap.quickSetter(image, "x", "px"),
        setY = gsap.quickSetter(image, "y", "px"),
        align = (e) => {
          const top = el.getBoundingClientRect().top;
          setX(e.clientX + 250);
          setY(e.clientY - top);
        },
        startFollow = () => document.addEventListener("mousemove", align),
        stopFollow = () => document.removeEventListener("mousemove", align),
        fade = gsap.to(image, {
          autoAlpha: 1,
          ease: "none",
          paused: true,
          lazy: false,
          onReverseComplete: stopFollow,
        });

      el.addEventListener("mouseenter", (e) => {
        fade.play();
        startFollow();
        align(e);
      });

      el.addEventListener("mouseleave", () => fade.reverse());
    });
  });

  return (
    <section className='mt-48 px-4 text-white lg:px-14' id='project'>
      <h2 className='font-neue text-3xl'>MY PROJECT</h2>
      <div className='mt-10'>
        {Posts.map((post) => {
          return (
            <Link to={`/project/${post.slug.current}`} key={post.slug.current}>
              <div
                className='group relative border-b py-8 text-secondary hover:text-white'
                ref={addToRefs}
              >
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  className='invisible absolute z-10 hidden h-80 w-[550px] -translate-x-1/2 -translate-y-1/2 transform object-cover opacity-0 lg:block'
                ></img>
                <div className='flex transform items-center justify-between'>
                  <h2 className='w-7/12 font-neue text-xl uppercase lg:text-4xl'>
                    {post.title}
                  </h2>
                  <p className='text-xs uppercase'>
                    PORTFOLIO
                    <span className='block'>/2022</span>
                  </p>

                  <button>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='ml-1 inline-block h-4 transform transition-all duration-500 group-hover:rotate-45'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
