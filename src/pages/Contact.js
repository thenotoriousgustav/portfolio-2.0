import Marquee from "../components/Marquee";
import Navbar from "../components/Nav/Navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className='h-screen px-4 pt-28 text-secondary lg:px-14'>
        <h1 className='lg:word-spacing text-start font-neue text-6xl md:text-end md:text-8xl lg:text-9xl'>
          LET'S TALK ABOUT <span>THE PROJECT?</span>
        </h1>

        <div className='mt-8 flex flex-col justify-center md:mt-16 md:flex-row md:justify-between'>
          <div>
            <p className='text-sm'>
              CONTACT ME -{" "}
              <span className='block'>FOR BUSINESS INQUIRIES.</span>
            </p>
          </div>

          <div className='my-8 flex flex-row justify-between md:my-0 md:flex-col'>
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

          <div className='mt-8 text-4xl md:mt-0 md:w-44'>
            <h2 className='text-center'>
              DROP ME AN{" "}
              <a href='/' className='underline'>
                EMAIL!
              </a>
            </h2>
          </div>
        </div>

        <div className='mt-16 md:mt-20  '>
          <Marquee />
        </div>
      </section>
    </>
  );
}
