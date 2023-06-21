import vid1 from '../../assets/vid/vid1.mp4';
import './style.scss';

import awan1 from '../../assets/imgs/awan1.png';
import awan2 from '../../assets/imgs/awan2.png';
import burung from '../../assets/imgs/burung.png';

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import { useState } from 'react';
import { toggleFullScreen } from '../../utils/fullscreen';
export const SectionOne = () => {
  const [video, setVideo] = useState(false);
  return (
    <div className="relative overflow-hidden h-[100vh]">
      <video
        className="absolute h-auto w-auto min-h-[100%] min-w-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[1] object-cover"
        autoplay="autoplay"
        loop="loop"
        muted
        defaultMuted
        playsInline
        preload="auto">
        <source src={vid1} type="video/mp4" />
      </video>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <div class="relative text-white z-[4] flex flex-col justify-end items-start h-[100vh] cont">
          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            } hidden lg:flex absolute top-[100px] left-[100px] max-w-[250px] transition-all ease-in-out duration-[0.2s]`}>
            <MouseParallaxChild factorX={0.3} factorY={0.5}>
              <img src={awan1} alt="t" />
            </MouseParallaxChild>
          </div>
          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            } hidden lg:flex absolute top-[250px] right-[200px] max-w-[200px] transition-all ease-in-out duration-[0.4s]`}>
            <MouseParallaxChild factorX={0.7} factorY={0.8}>
              <img src={awan2} alt="t" />
            </MouseParallaxChild>
          </div>
          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            }hidden lg:flex absolute bottom-[100px] right-[500px] transition-all ease-in-out duration-[0.5s]`}>
            <MouseParallaxChild factorX={0.3} factorY={0.3}>
              <img src={burung} alt="t" />
            </MouseParallaxChild>
          </div>

          <div
            className={`${
              video ? 'opacity-[0.00001]' : ''
            } mb-[100px] transition-all ease-in-out duration-[0.8s]`}>
            <div className="font-[700] text-[#FF191B] text-[40px] md:text-[64px] max-w-[800px]">
              TEDx
            </div>
            <div className="font-[700] text-[40px] md:text-[64px] max-w-[800px]">
              Universitas Brawijaya
            </div>
            <div className="font-[700] text-[#FF191B] text-[80px] md:text-[128px] max-w-[800px]">
              2023
            </div>
          </div>
          <div
            onClick={() => {
              toggleFullScreen();
              setVideo(!video);
            }}
            className="hover:underline font-[400] text-[15px] font-open cursor-pointer w-full text-center pb-[20px]">
            {video ? 'Tutup' : 'Lihat'} Video
          </div>
        </div>
      </MouseParallaxContainer>

      <div
        className={`${
          video ? 'opacity-[0.00001]' : ''
        } absolute top-0 left-0 right-0 bottom-0 bg-[#00000098] z-[2] transition-all ease-in-out duration-[1.5s]`}></div>
    </div>
  );
};

export default { SectionOne };
