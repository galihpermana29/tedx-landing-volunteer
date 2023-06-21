import logo from '../../assets/imgs/tedx_logo.png';
import gmail from '../../assets/imgs/gmail.png';
import ig from '../../assets/imgs/ig.png';
import yt from '../../assets/imgs/yt.png';
import twitter from '../../assets/imgs/twitter.png';
import './style.scss';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div className="bg-[#121212] min-h-[50vh] cont relative">
      <div className="flex justify-center w-full items-center pt-[60px] ">
        <img src={logo} alt="tedx" className='max-w-[120px] md:max-w-[150px]'/>
      </div>
      <div className="text-white flex flex-col justify-center items-center pt-[40px]">
        <p className="text-white p-[20px] text-center font-[600] text-[16px]">
          Mari Terkoneksi
        </p>
        <div className="flex items-center">
          <Link to={'mailto:contact.tedxunivbrawijaya@gmail.com'}>
            <img src={gmail} alt="gmail" />
          </Link>
          <a
            target="_blank"
            href={'https://youtube.com/@tedxuniversitasbrawijaya2100'}>
            <img src={yt} alt="gmail" />
          </a>
          <a
            target="_blank"
            href={
              'https://instagram.com/tedxuniversitasbrawijaya?igshid=ZWQyN2ExYTkwZQ== '
            }>
            <img src={ig} alt="gmail" />
          </a>
          <a target="_blank" href={'https://twitter.com/tedxbrawijaya?s=21 '}>
            <img src={twitter} alt="gmail" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 border-t-2 left-0 right-0">
        <div className="text-white text-[12px] md:text-[16px] p-[20px] text-center font-[400]">
          © 2023 TEDxUniversitasBrawijaya 2023. An independently organized TED
          event under license from TED.
        </div>
      </div>
    </div>
  );
};

export default { Footer };

// Note here...
// Email: contact.tedxunivbrawijaya@gmail.com

// Instagram: https://instagram.com/tedxuniversitasbrawijaya?igshid=ZWQyN2ExYTkwZQ==

// Twitter: https://twitter.com/tedxbrawijaya?s=21

// Youtube: https://youtube.com/@tedxuniversitasbrawijaya2100
// Ryo Shandy
