import Marquee from "./Marquee";

export default function Footer() {
  return (
    <main className='mt-28 lg:mt-48' id='footer'>
      <Marquee />
      <div className='relative z-0 flex h-[45vh] items-center justify-center bg-background md:h-[65vh]'>
        <h1 className='-mb-16 text-center font-neue text-4xl text-white lg:text-9xl'>
          GET IN TOUCH!
        </h1>
      </div>

      <footer className='sticky left-0 bottom-0 -z-10 h-[40vh] w-screen bg-gray-400 p-4 text-white md:h-[60vh] lg:p-8'>
        <h3 className='text-lg'>Contact:</h3>
        <div className='space-x-8 underline underline-offset-2'>
          <a href='/'>WHATSAPP</a>
          <a href='/'>TELEGRAM</a>
        </div>

        <div className='mt-16'>
          <p className='text-xl'>Email me:</p>
          <a href='/' className='text-3xl lg:text-8xl'>
            rhezagustam@gmail.com
          </a>
        </div>

        <div className='mt-16 flex flex-wrap items-center justify-center md:justify-between lg:mt-20 '>
          <div className='flex items-center space-x-8'>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>Github</p>
          </div>
          <div className='mt-2'>
            <p>All rights reserved — © Gustam Rheza</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
