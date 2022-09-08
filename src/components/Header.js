import ProgressBar from "./ProgressBar";
import CircularText from "./CircularText";

export default function Header() {
  return (
    <>
      <ProgressBar />
      <header className='h-screen px-4 pt-28 text-secondary lg:px-14'>
        <h1 className='font-neue text-6xl md:text-7xl lg:text-8xl '>
          GUSTAM RHEZA.
        </h1>
        <div className='mt-4 flex flex-col items-center md:flex-row md:justify-between'>
          <img
            src='header.jpg'
            alt='This is my photos profile'
            className='h-48 w-96 object-cover lg:h-52 lg:w-[550px]'
          ></img>
          <p className='mt-7 text-xs font-light md:ml-8 md:mt-0 md:mr-16 lg:w-4/12 lg:text-base'>
            / GUSTAM IS A FRONT-END & CREATIVE DEVELOPER BASED IN JAKARTA,
            INDONESIA. PASSIONATED ABOUT CREATING A BEAUTIFUL & JOYFUL DIGITAL
            EXPERIENCE
          </p>
        </div>

        <CircularText>SCROLL TO EXPLORE SCROLL TO EXPLORE</CircularText>

        <div className='mt-10 text-end md:mt-28'>
          <h2 className='font-neue text-xl md:text-4xl lg:text-5xl'>
            FRONT-END DEVELOPER /
            <span className='block'>CREATIVE DEVELOPER</span>
          </h2>
        </div>
      </header>
    </>
  );
}
