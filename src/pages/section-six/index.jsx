import pendaftaran from '../../assets/imgs/pendaftaran.png';
import bunga1 from '../../assets/imgs/bunga1.png';
import bunga2 from '../../assets/imgs/bunga2.png';
import runningText from '../../assets/imgs/running-text.png';
import star from '../../assets/imgs/running-start.png';

import './style.scss';
import { Link } from 'react-router-dom';
export const SectionSix = () => {
  return (
    <div
      className="relative min-h-screen bg-[url('../public/texture.png')]"
      id="section-six">
      <div className="absolute top-[20px] max-w-[100px] md:max-w-[200px]">
        <img src={bunga1} alt="" />
      </div>
      <div className="absolute right-0 top-[10px] max-w-[80px] md:max-w-[200px] md:top-[50px]">
        <img src={bunga2} alt="" />
      </div>
      <div className="cont py-[50px]">
        <div className="flex justify-center items-center mt-[50px]">
          <img src={pendaftaran} alt="aboutuse" />
        </div>
        <div className="text flex flex-wrap mt-[100px] gap-[20px] justify-center">
          <div className="flex justify-center flex-col items-center">
            <div className="font-open font-[700] text-[20px] md:text-[40px] text-center">
              Siapkan Dirimu Untuk Menjadi Bagian dari{' '}
              <span className="text-red-600">TEDx</span>UniversitasBrawijaya
              2023!
            </div>
            <a
              target="_blank"
              href="https://bit.ly/3NC990X"
              className="  
              cursor-pointer
              button-register
            mt-[50px] w-[250px] h-[70px] flex justify-center items-center bg-[#04BD2C] rounded-[10px] border-2 border-black font-open text-[20px] font-[700] text-white uppercase">
              Daftar Di Sini{' '}
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-left mt-[100px]">
        <div className="flex items-center gap-[20px]">
          <img src={runningText} alt="running text" className="flex-1" />
          <img
            src={star}
            alt="running text"
            className="flex-1 max-w-[50px] md:max-w-[100px]"
          />
          <img src={runningText} alt="running text" className="flex-1" />
        </div>
      </div>
    </div>
  );
};

export default { SectionSix };
