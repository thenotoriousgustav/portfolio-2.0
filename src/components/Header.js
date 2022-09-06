import ProgressBar from "./ProgressBar";

export default function Header() {
  return (
    <>
      <ProgressBar />
      <header className='h-screen px-4 pt-24 text-[#b0b0b0] lg:px-14'>
        <h1 className='font-neue text-6xl md:text-7xl lg:text-8xl '>
          GUSTAM RHEZA.
        </h1>
        <div className='mt-2 flex flex-col items-center md:mt-4 md:flex-row md:justify-between'>
          <img
            src='header.jpg'
            alt='This is my photos profile'
            className='h-36 w-96 object-cover lg:h-52 lg:w-[550px]'
          ></img>
          <p className='mt-4 text-xs font-light md:ml-8 md:mt-0 md:mr-16 lg:text-base'>
            / FREELANCER BASED IN JAKARTA, INDONESIA
          </p>
        </div>
        <div className='mt-12 text-end md:mt-16'>
          <h2 className='font-neue text-xl md:text-4xl lg:text-5xl'>
            FRONT-END DEVELOPER /
            <span className='block'>CREATIVE DEVELOPER</span>
          </h2>
        </div>
      </header>
    </>
  );
}
