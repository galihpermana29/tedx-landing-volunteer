import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useHorizontalScroll() {
  const navigate = useNavigate();
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        e.preventDefault();
        const width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        const stopSection = document.getElementById('stop-scroll');
        const rect = stopSection.getBoundingClientRect();
        const isInView = rect.top <= 0.4;
        if (el.scrollLeft === 0 && isInView && e.deltaY < 0) {
          document
            .querySelector(`#section-two`)
            .scrollIntoView({ behavior: 'smooth' });
          return;
        }


        if (!isInView && !(el.scrollLeft > width * 4 && e.deltaY > 0)) {
          document
            .querySelector(`#stop-scroll`)
            .scrollIntoView({ behavior: 'smooth' });
          return;
        }

        if (isInView) {
          if (e.deltaY == 0 || (el.scrollLeft > width * 4 && e.deltaY > 0)) {
            window.scrollTo({
              top: window.scrollY + e.deltaY,
              behavior: 'smooth',
            });
            return;
          }

          if (e.deltaY < 0) {
            el.scrollTo({
              left: el.scrollLeft - width,
              behavior: 'smooth',
            });
            return;
          }
          el.scrollTo({
            left: width + el.scrollLeft,
            behavior: 'smooth',
          });
        }
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);
  return elRef;
}
