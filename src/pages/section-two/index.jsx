import aboutus from '../../assets/imgs/aboutus.png';
import flower from '../../assets/imgs/flower.png';
export const SectionTwo = () => {
  return (
    <div className="relative min-h-screen bg-[url('../public/texture.png')]" id="section-two" >
      <div className="cont py-[50px]">
        <div className="flex justify-center items-center">
          <img src={aboutus} alt="aboutuse" />
        </div>
        <div className="text flex flex-wrap mt-[50px] gap-[20px] justify-between text-justify">
          <div className="flex flex-col gap-[20px] min-w-[300px] max-w-[570px] flex-1">
            <div>
              <h1 className="font-open text-black font-[700] text-[20px]">
                TED
              </h1>
              <p className="mt-[20px] font-open text-black font-[400] text-[16px]">
                TED merupakan sebuah organisasi nirlaba dengan semangat “Ideas
                Worth Spreading” yang berfokus pada Technology, Education, dan
                Design. TED pertama kali dibentuk pada tahun 1984 dan menjadi
                ruang bagi individu-individu dengan semangat yang sama untuk
                menyebarkan ide-ide brilian di seluruh dunia.
              </p>
            </div>
            <div>
              <h1 className="font-open text-black font-[700] text-[20px]">
                TEDx
              </h1>
              <p className="mt-[20px] font-open text-black font-[400] text-[16px]">
                TEDx merupakan events yang mengolaborasikan komunitas lokal
                untuk berbagi ide dengan konsep yang ada pada TED sehingga
                memicu diskusi dan koneksi yang mendalam. TEDx dengan label
                ikonik bersimbol “x” bermakna bahwa events tersebut
                diselenggarakan secara independen dengan lisensi dari TED. 
              </p>
            </div>
          </div>
          <div className="min-w-[300px] max-w-[570px] flex-1">
            <div>
              <h1 className="font-open text-black font-[700] text-[20px]">
                TEDxUniversitasBrawijaya
              </h1>
              <p className="mt-[20px] font-open text-black font-[400] text-[16px]">
                TEDxUniversitasBrawijaya merupakan salah satu dari TEDx events
                yang diselenggarakan secara independen dengan lisensi TEDx untuk
                lingkup komunitas Universitas Brawijaya. Pada tahun ini,
                TEDxUniversitasBrawijaya akan kembali menjadi katalis dalam
                mengekspos gelora pikiran untuk menempuh titik elaborasi dengan
                semangat “Ideas Worth Spreading”.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:z-20 md:absolute md:block md:bottom-[-80px] md:right-[0px] lg:right-[50px] overflow-hidden">
        <img src={flower} alt="bunga" className='lg:w-[500px]'/>
      </div>
    </div>
  );
};

export default { SectionTwo };
