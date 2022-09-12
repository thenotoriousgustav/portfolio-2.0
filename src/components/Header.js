import ProgressBar from "./ProgressBar";
import CircularText from "./CircularText";

export default function Header() {
  return (
    <>
      <ProgressBar />
      <header className='h-screen px-4 pt-28 text-secondary md:pt-40 lg:px-14 lg:pt-28'>
        <h1 className='font-neue text-6xl xs:text-7xl lg:text-8xl '>
          GUSTAM RHEZA.
        </h1>
        <div className='mt-4 flex flex-col items-center md:flex-row md:justify-between'>
          <img
            src='header.jpg'
            alt='This is my photos profile'
            className='h-48 w-96 object-cover md:h-52 md:w-[550px]'
          ></img>
          <p className='mt-7 text-xs font-light md:ml-8 md:mt-0 md:mr-4 md:w-5/12 md:text-sm lg:mr-16 lg:text-base'>
            / GUSTAM IS A FRONT-END & CREATIVE DEVELOPER BASED IN JAKARTA,
            INDONESIA. PASSIONATED ABOUT CREATING A BEAUTIFUL & JOYFUL DIGITAL
            EXPERIENCE
          </p>
        </div>

        <CircularText>SCROLL TO EXPLORE SCROLL TO EXPLORE</CircularText>

        <div className='mt-10 text-end md:mt-16'>
          <h2 className='font-neue text-xl xs:text-2xl md:text-5xl lg:text-5xl'>
            FRONT-END DEVELOPER /
            <span className='block'>CREATIVE DEVELOPER</span>
          </h2>
        </div>
      </header>
    </>
  );
}
