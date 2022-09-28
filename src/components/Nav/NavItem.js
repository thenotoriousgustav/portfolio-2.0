export default function NavItem({
  slide,
  menu1,
  menu2,
  menu3,
  menu4,
  menu5,
  toggle,
}) {
  return (
    <div
      className='fixed -left-full z-40 block h-screen w-screen bg-white pt-8 font-neue text-4xl text-black xs:pt-24 md:pt-4 md:text-7xl'
      ref={slide}
    >
      <ul className='mt-16 flex flex-col items-center space-y-4 text-center xs:space-y-5 md:mt-44 md:space-y-4 lg:mt-10 lg:space-y-2'>
        <li ref={menu1} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <a href='/' className='px-2 md:px-4' onClick={toggle}>
            HOME
          </a>
        </li>
        <li ref={menu2} className='group'>
          <a href='#about' className='px-2 md:px-4' onClick={toggle}>
            ABOUT
          </a>
          <img src='2.png' alt='images' className='nav-hover'></img>
        </li>
        <li ref={menu3} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <a href='#work' className='px-2 md:px-4' onClick={toggle}>
            WORK
          </a>
        </li>
        <li ref={menu4} className='group'>
          <a href='#project' className='px-2 md:px-4' onClick={toggle}>
            PROJECT
          </a>
          <img src='2.png' alt='images' className='nav-hover'></img>
        </li>
        <li ref={menu5} className='group'>
          <img src='2.png' alt='images' className='nav-hover'></img>
          <a href='#contact' className='px-2 md:px-4' onClick={toggle}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  );
}
