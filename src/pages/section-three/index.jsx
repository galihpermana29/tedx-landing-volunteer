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
        text: 'Menentukan siapa yang akan berbicara dalam pre-event dan main event serta topik yang akan dibawakan.',
      },
      {
        img: cem,
        text: 'Bertanggung jawab atas segala bentuk publikasi melalui situs web, media sosial, dan agenda promosi acara lainnya.',
      },
    ],
  },
  {
    page: [
      {
        img: ep,
        text: 'Memimpin semua produksi, perlengkapan, perencanaan, manajemen panggung, teknologi, selama acara berlangsung.',
      },
      {
        img: vp,
        text: 'Mengawasi video dan produksi acara – mulai dari mengelola kebutuhan audio dan video, operator kamera, dan streaming langsung acara.',
      },
    ],
  },
  {
    page: [
      {
        img: design,
        text: 'Bertanggung jawab dalam membuat logo acara, materi branding, dan aset estetika lainnya dalam tiap komponen acara.',
      },
      {
        img: website,
        text: 'Bertanggung jawab untuk mengembangkan dan mengelola situs web yang dapat diakses dan dikelola dengan mudah.',
      },
    ],
  },
  {
    page: [
      {
        img: budget,
        text: 'Bekerja sama dengan Sponsorship serta bertanggung jawab atas pemasukan dan pengeluaran dana.',
      },
      {
        img: sponsor,
        text: 'Bertanggung jawab menggalangkan dana dari sponsor untuk biaya selama acara berlangsung',
      },
    ],
  },
  {
    page: [
      {
        img: event,
        text: 'Mengelola sebagian besar logistik hari acara, bertanggung jawab untuk menciptakan "pengalaman TEDx" untuk tamu, mengelola kegiatan hari acara di luar panggung utama, dan bertanggung jawab atas kebutuhan tiket dan pendaftaran.',
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
                className=" flex flex-col md:flex-row flex-wrap justify-center items-center min-w-[100vw] min-h-[100vh] md:gap-[150px]"
                key={idx}>
                {d.page.map((p, idx) => (
                  <MouseParallaxContainer
                    globalFactorX={0.1}
                    globalFactorY={0.1}>
                    <div
                      key={idx}
                      className="flex-1 flex flex-col items-center">
                      <MouseParallaxChild
                        className="flex-1 flex flex-col items-center"
                        factorX={0.9}
                        factorY={0.5}>
                        <div className="h-[250px] md:mb-[100px] flex justify-center items-center">
                          <img src={p.img} alt="s" />
                        </div>
                        <p className="font-open font-[600] md:text-[20px] text-center max-w-[300px] md:max-w-[500px] ">
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
