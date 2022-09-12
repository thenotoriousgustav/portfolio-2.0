import Marquee from "./Marquee";

export default function Footer() {
  return (
    <main className='mt-28 lg:mt-48' id='footer'>
      <Marquee />
      <div className='relative z-0 flex h-[120vh] items-center justify-center bg-background'>
        <h1 className='-mb-16 text-center font-neue text-4xl text-white md:text-7xl lg:text-9xl'>
          GET IN TOUCH!
        </h1>
      </div>

      <footer
        className='sticky left-0 bottom-0 -z-10 h-[100vh] w-screen bg-gray-600 p-4 text-white lg:p-8'
        id='contact'
      >
        <div className='mt-16'>
          <h1 className='lg:word-spacing text-start font-neue text-3xl xs:text-6xl md:text-8xl lg:text-end lg:text-9xl'>
            LET'S TALK ABOUT <span>THE PROJECT?</span>
          </h1>
        </div>

        <div className='mt-8 flex flex-col justify-center md:mt-16 lg:flex-row lg:justify-between'>
          <div>
            <p className='text-sm'>
              CONTACT ME -{" "}
              <span className='block'>FOR BUSINESS INQUIRIES.</span>
            </p>
          </div>

          <div className='my-8 flex justify-between md:my-12 lg:my-0 lg:space-x-44 '>
            <div>
              <h5 className='text-lg'>SOCIAL</h5>
              <div className='mt-2 flex cursor-pointer flex-col underline'>
                <a href='/'>INSTAGRAM</a>
                <a href='/'>TWITTER</a>
                <a href='/'>LINKEDIN</a>
              </div>
            </div>

            <div>
              <h5 className='text-lg'>CONTACT</h5>
              <div className='mt-2 flex cursor-pointer flex-col underline'>
                <a href='/'>WHATSAPP</a>
                <a href='/'>TELEGRAM</a>
                <a href='/'>LINE</a>
              </div>
            </div>
          </div>

          <div className='mt-8 text-4xl md:mt-20 md:text-6xl lg:mt-0 lg:w-44 lg:text-4xl'>
            <h2 className='text-center'>
              DROP ME AN{" "}
              <a href='/' className='block underline lg:inline-block'>
                EMAIL!
              </a>
            </h2>
          </div>
        </div>
      </footer>
    </main>
  );
}
