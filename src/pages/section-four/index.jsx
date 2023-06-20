import prev from '../../assets/imgs/prev.png';

import nol from '../../assets/imgs/2020.png';
import satu from '../../assets/imgs/2021.png';
import dua from '../../assets/imgs/2022.png';
import tiga from '../../assets/imgs/2023.png';
import segera from '../../assets/imgs/segera.png';

export const SectionFour = () => {
  return (
    <div
      className="relative min-h-screen bg-[url('../public/texture.png')]"
      id="section-four">
      <div className="cont py-[150px] flex flex-col items-center">
        <div className="flex justify-center items-center">
          <img src={prev} alt="aboutuse" />
        </div>
        <div className="text flex flex-wrap mt-[50px] gap-[50px] justify-center lg:justify-between items-center text-justify max-w-[900px]">
          <div className="flex flex-col items-center gap-[20px] ">
            <img src={nol} alt="2020" className="max-w-[200px]" />
            <div className="overflow-hidden rounded-[10px] bg-[#8AFFA3] cursor-pointer hover:border-[6px] border-[6px] border-transparent hover:border-[#04BD2C] transition-all ease-in-out duration-[0.5s]">
              <div className="h-[200px] w-[350px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/1fLUkqvb-0s"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
              <div className=" h-[100px] flex justify-center items-center ">
                <div className="max-w-[300px] text-center">
                  Rasa: Mewartakan Cerita, Mengunggah Rasa
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px] cursor-pointer">
            <img src={satu} alt="2020" className="max-w-[200px]" />
            <div className="overflow-hidden rounded-[10px] bg-[#8AFFA3] cursor-pointer hover:border-[6px] border-[6px] border-transparent hover:border-[#04BD2C] transition-all ease-in-out duration-[0.5s]">
              <div className="h-[200px] w-[350px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/rDgusdeaG5E"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
              <div className=" h-[100px] flex justify-center items-center ">
                <div className="max-w-[300px] text-center">
                  Manifestasi Peradaban: Yang Dibicarakan Ketika Membicarakan
                  Manusia
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px] cursor-pointer">
            <img src={dua} alt="2020" className="max-w-[200px]" />
            <div className="overflow-hidden rounded-[10px] bg-[#8AFFA3] cursor-pointer hover:border-[6px] border-[6px] border-transparent hover:border-[#04BD2C] transition-all ease-in-out duration-[0.5s]">
              <div className="h-[200px] w-[350px]">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/N4u36OXvUkI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
              <div className=" h-[100px] flex justify-center items-center ">
                <div className="max-w-[300px] text-center">
                  Manifestasi Peradaban: Yang Dibicarakan Ketika Membicarakan
                  Manusia
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px] cursor-pointer">
            <img src={tiga} alt="2020" className="max-w-[200px]" />
            <div className="overflow-hidden rounded-[10px] bg-[#8AFFA3] cursor-pointer hover:border-[6px] border-[6px] border-transparent hover:border-[#04BD2C] transition-all ease-in-out duration-[0.5s]">
              <div className="h-[200px] w-[350px] ">
                <div className="flex justify-center items-center h-full">
                  <img src={segera} alt="ss" className="" />
                </div>
              </div>
              <div className=" h-[100px] flex justify-center items-center ">
                <div className="max-w-[300px] text-center">
                  Manifestasi Peradaban: Yang Dibicarakan Ketika Membicarakan
                  Manusia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default { SectionFour };

// Note here...
// Opsi section previous events kalau line path kesulitan ada di sebelah kiri. Interaction cardnya bisa dicoba di prototype

// Aset:
// https://youtu.be/1fLUkqvb-0s
// https://youtu.be/rDgusdeaG5E
// https://youtu.be/N4u36OXvUkI
// Ryo Shandy
