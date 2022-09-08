import { Link } from "react-router-dom";

export default function NavItem({ slide, menu1, menu2, menu3, menu4, menu5 }) {
  return (
    <div
      className='fixed -left-full z-40 block h-screen w-screen bg-white pt-24 font-neue text-4xl text-black md:pt-8 md:text-5xl lg:text-7xl'
      ref={slide}
    >
      <ul className='mt-24 flex flex-col text-center xs:space-y-5 md:mt-10 md:space-y-0'>
        <li ref={menu1} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <Link to='/' className='xs:px-2 md:px-8'>
            HOME
          </Link>
        </li>
        <li ref={menu2} className='group'>
          <Link to='/about' className='xs:px-2 md:px-8'>
            ABOUT
          </Link>
          <img src='2.png' alt='images' className='nav-hover'></img>
        </li>
        <li ref={menu3} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <Link to='/' className='xs:px-2 md:px-8'>
            PROJECT
          </Link>
        </li>
        <li ref={menu4} className='group'>
          <Link to='/' className='xs:px-2 md:px-8'>
            ARCHIVE
          </Link>
          <img src='2.png' alt='images' className='nav-hover'></img>
        </li>
        <li ref={menu5} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <Link to='/contact' className='xs:px-2 md:px-8'>
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}
