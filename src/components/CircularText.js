export default function CircularText({ rotate }) {
  return (
    <svg
      viewBox='0 0 100 100'
      width='100'
      height='100'
      className='absolute bottom-20 right-0 h-auto w-[14vh] fill-current xs:bottom-16 xs:left-2 md:left-11 md:bottom-9 md:w-[20vh]'
      ref={rotate}
    >
      <defs>
        <path
          id='circle'
          d='
  M 50, 50
  m -37, 0
  a 37,37 0 1,1 74,0
  a 37,37 0 1,1 -74,0'
        />
      </defs>
      <text font-size='9.1'>
        <textPath
          href='#circle'
          className='font-neue font-light tracking-widest'
        >
          SCROLL TO EXPLORE SCROLL TO EXPLORE
        </textPath>
      </text>
    </svg>
  );
}
