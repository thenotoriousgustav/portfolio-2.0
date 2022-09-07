import React from "react";

export default function About() {
  return (
    <section className='mt-32 px-4 lg:mt-48 lg:px-14'>
      <div className='flex flex-wrap justify-between'>
        <h2 className='font-neue text-xl text-white'>ABOUT ME</h2>
        <div className='max-w-5xl text-secondary'>
          <p className='text-3xl font-light md:text-5xl'>
            HI! I'M GUSTAM AN 18 Y.O
            <span className='underline'> FRONT END & CREATIVE DEVELOPER</span>,
            CURRENTLY STUDY AT GUNADARMA UNIVERSITY. BORN AND RAISED IN
            <span className='underline'> JAKARTA</span>I HAVE MORE THAN
            <span className='underline'> 3 YEARS</span> OF EXPERIENCE ON THE WEB
            DEVELOPMENT.
          </p>

          <p class='mt-5 text-white underline'>more about me.</p>
        </div>
      </div>
    </section>
  );
}
