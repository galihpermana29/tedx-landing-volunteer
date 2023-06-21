import division from '../../assets/imgs/divisi.png';
import curator from '../../assets/imgs/curator.png';
import cem from '../../assets/imgs/cem.png';
import ep from '../../assets/imgs/ep.png';
import vp from '../../assets/imgs/vp.png';
import design from '../../assets/imgs/design.png';
import website from '../../assets/imgs/website.png';
import budget from '../../assets/imgs/budget.png';
import sponsor from '../../assets/imgs/sponsor.png';
import event from '../../assets/imgs/event.png';
import { useHorizontalScroll } from '../../hooks/scroll';
import { useEffect, useRef, useState } from 'react';

import left from '../../assets/imgs/left.png';
import right from '../../assets/imgs/right.png';

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse';
import './style.scss';

const data = [
  {
    page: [
      {
        img: curator,
        text: 'Menentukan siapa yang akan berbicara dalam pre-event dan main event serta topik yang akan dibawakan',
      },
      {
        img: cem,
        text: 'Mengelola segala bentuk publikasi melalui situs web, media sosial, dan agenda-agenda promosi acara lainnya',
      },
    ],
  },
  {
    page: [
      {
        img: ep,
        text: 'Memimpin semua produksi, perlengkapan, perencanaan, manajemen panggung, dan teknologi selama acara berlangsung',
      },
      {
        img: vp,
        text: 'Memproduksi video, mulai dari mengelola kebutuhan audio, video, mengoperasikan kamera, hingga melakukan siaran langsung acara',
      },
    ],
  },
  {
    page: [
      {
        img: design,
        text: 'Mengonsep dan membuat desain serta aset estetika lainnya untuk pendukung visual acara',
      },
      {
        img: website,
        text: 'Mengembangkan dan mengelola situs web yang dapat diakses dan digunakan secara intuitif',
      },
    ],
  },
  {
    page: [
      {
        img: budget,
        text: 'Bertanggung jawab dalam mengelola pemasukan dan pengeluaran dana',
      },
      {
        img: sponsor,
        text: 'Mengelola hal-hal finansial dan bekerjasama dengan pihak eksternal untuk mendapatkan dana dalam mendukung terpenuhinya kebutuhan acara',
      },
    ],
  },
  {
    page: [
      {
        img: event,
        text: 'Bertanggung jawab atas “TEDx Experience” untuk para audiens serta merancang dan mengatur segala kebutuhan dan jalannya acara.',
      },
    ],
  },
];

export const SectionThree = () => {
  const [status, setStatusScroll] = useState(false);
  const scrollRef = useHorizontalScroll(status);

  const leftRef = useRef();
  const rightRef = useRef();

  useEffect(() => {
    const el = rightRef.current;
    const tar = scrollRef.current;
    if (el) {
      const onClick = (e) => {
        e.preventDefault();
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

        tar.scrollTo({
          left: width + tar.scrollLeft,
          behavior: 'smooth',
        });
      };
      el.addEventListener('click', onClick);
      return () => el.removeEventListener('click', onClick);
    }
  }, []);

  useEffect(() => {
    const el = leftRef.current;
    const tar = scrollRef.current;
    if (el) {
      const onClick = (e) => {
        e.preventDefault();
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;

        const stopSection = document.getElementById('stop-scroll');
        const rect = stopSection.getBoundingClientRect();
        const isInView = rect.top <= 0.4;
        tar.scrollTo({
          left: tar.scrollLeft - width,
          behavior: 'smooth',
        });
      };
      el.addEventListener('click', onClick);
      return () => el.removeEventListener('click', onClick);
    }
  }, []);

  return (
    <div className="relative bg-[url('/texture.png')] " id="section-three">
      <div className="relative min-h-screen bg-[url('/cloudy.png')] bg-no-repeat bg-cover pb-[80px] ">
        <div className="py-[50px] three">
          <div className="flex justify-center items-center">
            <img src={division} alt="aboutuse" />
          </div>
          <div
            id="stop-scroll"
            style={{ overflowX: 'scroll' }}
            ref={scrollRef}
            className="flex">
            {data.map((d, idx) => (
              <div
                className="flex flex-col md:flex-row justify-center items-center min-w-[100vw] min-h-[100vh] md:gap-[100px] lg:gap-[120px] lg:px-[20px]"
                key={idx}>
                {d.page.map((p, idx) => (
                  <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}>
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center  overflow-visible">
                      <MouseParallaxChild
                        className="flex-1 flex flex-col items-center overflow-visible relative"
                        factorX={0.9}
                        factorY={0.5}>
                        <div className="md:min-h-[350px] md:mb-[50px] lg:mb-[60px] flex justify-center items-center px-[30px] relative z-20">
                          <img src={p.img} alt="s" />
                        </div>
                        <p className="font-open font-[600] md:text-[20px] text-center max-w-[300px] md:max-w-[500px]">
                          {p.text}
                        </p>
                      </MouseParallaxChild>
                    </div>
                  </MouseParallaxContainer>
                ))}
              </div>
            ))}
          </div>
          <div className="w-full flex justify-center items-center gap-[30px] mt-[50px]">
            <div
              ref={leftRef}
              className="bg-[#04BD2C] border-2 border-black h-[60px] w-[60px] justify-center flex items-center rounded-full cursor-pointer">
              <img src={left} alt="ll" />
            </div>
            <div
              ref={rightRef}
              className="bg-[#04BD2C] border-2 border-black h-[60px] w-[60px] justify-center flex items-center rounded-full cursor-pointer">
              <img src={right} alt="rr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { SectionThree };
