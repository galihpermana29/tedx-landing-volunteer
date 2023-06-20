import { useState } from 'react';
import logo from '../../assets/imgs/tedx_logo.png';

import './styles.scss';
export const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  return (
    <div className="flex justify-between items-center py-[20px] z-50 left-0 right-0 absolute cont">
      <div className={`max-w-[120px] ${hamburgerActive ? 'z-50' : ''}`}>
        <img src={logo} alt="tedx" />
      </div>
      <div
        className={`${
          hamburgerActive
            ? 'flex h-[100vh] bg-black text-white absolute top-[0] left-0 right-0 flex-col justify-center gap-[30px] items-center '
            : 'text-white gap-[30px] lg:flex hidden transition-all ease-in-out duration-[0.6s]'
        } `}>
        <a
          onClick={() => setHamburgerActive(false)}
          href="#section-two"
          className=" uppercase font-sans font-[700] text-[16px] hover:text-[#FF191B] transition-all ease-in-out duration-[0.6s]">
          About Us
        </a>
        <a
          onClick={() => setHamburgerActive(false)}
          href="#section-three"
          className="uppercase font-sans font-[700] text-[16px] hover:text-[#FF191B] transition-all ease-in-out duration-[0.6s]">
          Divisions
        </a>
        <a
          onClick={() => setHamburgerActive(false)}
          href="#section-four"
          className="uppercase font-sans font-[700] text-[16px] hover:text-[#FF191B] transition-all ease-in-out duration-[0.6s]">
          Previous Event
        </a>
        <a
          onClick={() => setHamburgerActive(false)}
          href="#section-five"
          className="uppercase font-sans font-[700] text-[16px] hover:text-[#FF191B] transition-all ease-in-out duration-[0.6s]">
          Grand Theme
        </a>
        <a
          onClick={() => setHamburgerActive(false)}
          href="#section-six"
          className="uppercase font-sans font-[700] text-[16px] hover:text-[#FF191B] transition-all ease-in-out duration-[0.6s]">
          Registration
        </a>
      </div>

      <div
        className={`hamburger ${hamburgerActive ? 'is-active' : ''}`}
        id="hamburger-1"
        onClick={() => setHamburgerActive(!hamburgerActive)}>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  );
};

export default { Navbar };
