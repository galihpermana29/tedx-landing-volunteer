import { useState } from 'react';
import vid1 from '../../assets/vid/bumper.mp4';
import './style.scss';

export const SectionFive = () => {
  const [video, setVideo] = useState(false);
  return (
    <div className="relative overflow-hidden h-[100vh]" id="section-five">
      <video
        className="absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] object-cover"
        autoplay="autoplay"
        loop="loop"
        muted
        defaultMuted
        playsinline
        preload="auto">
        <source src={vid1} type="video/mp4" />
      </video>

      <div class="relative text-white z-[4] flex flex-col justify-center items-center text-center h-[100vh] cont">
        <div className="mb-[200px] hover:mb-[250px] transition-all ease-in-out duration-[0.5s] cursor-pointer flex flex-col justify-center items-center">
          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            } font-[700] uppercase text-[#FFD205] text-[30px] md:text-[54px] max-w-[800px] transition-all ease-in-out duration-[0.8s]`}>
            Memantik Baskara:
          </div>
          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            } font-[500] italic uppercase text-[#FFD205] text-[20px] md:text-[34px] max-w-[1200px] transition-all ease-in-out duration-[0.8s]`}>
            Tersulut Tak Membara, Terbakar Tak Bersuara
          </div>
        </div>
        <div
          onClick={() => {
            setVideo(!video);
          }}
          className="hover:underline font-[400] text-[15px] font-open cursor-pointer w-full text-center">
          {video ? 'Tutup' : 'Lihat'} Video
        </div>
      </div>
      <div
        className={`${
          video ? 'opacity-[0.00001]' : ''
        } absolute top-0 left-0 right-0 bottom-0 bg-[#00000069] z-[2] transition-all ease-in-out duration-[1.5s]`}></div>
    </div>
  );
};

export default { SectionFive };
