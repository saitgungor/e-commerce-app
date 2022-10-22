import { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = 3;
  let slider1, slider2, slider3;
  switch (curSlide) {
    case 0:
      slider1 = '';
      slider2 = 'right-[100%]';
      slider3 = 'right-[200%]';
      break;
    case 1:
      slider1 = '-left-[100%]';
      slider2 = '';
      slider3 = 'right-[100%]';
      break;
    case 2:
      slider1 = '-left-[200%]';
      slider2 = '-left-[100%]';
      slider3 = '';
      break;
  }

  const changeSlide = type => {
    if (type === 'increment') curSlide++;
    if (type === 'decrement') curSlide--;
    if (curSlide === maxSlide) curSlide = 0;
    if (curSlide < 0) curSlide = maxSlide - 1;
    setCurSlide(curSlide);
  };

  useEffect(() => {
    let sliderTime = setTimeout(() => {
      console.log('timeout');
      changeSlide('increment');
    }, 6000);

    return () => {
      clearTimeout(sliderTime);
    };
  }, [curSlide]);

  return (
    <div className="overflow-hidden flex w-full h-[700px] justify-center relative">
      <div className={`absolute w-full  h-[700px] ${slider1}`}>
        <Image src="/slider/slider-1.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className={`absolute w-full  h-[700px] ${slider2}`}>
        <Image src="/slider/slider-2.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className={`absolute w-full  h-[700px] ${slider3}`}>
        <Image src="/slider/slider-3.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="flex gap-2 absolute bottom-[5%]">
        <div
          className={`h-3 w-3  rounded-full border-white border cursor-pointer ${
            curSlide === 0 && 'bg-white'
          }`}
          onClick={() => setCurSlide(0)}
        ></div>
        <div
          className={`h-3 w-3  rounded-full border-white border cursor-pointer ${
            curSlide === 1 && 'bg-white'
          }`}
          onClick={() => setCurSlide(1)}
        ></div>
        <div
          className={`h-3 w-3  rounded-full border-white border cursor-pointer ${
            curSlide === 2 && 'bg-white'
          }`}
          onClick={() => setCurSlide(2)}
        ></div>
      </div>
      <div
        className="absolute left-[1%] top-1/2 cursor-pointer"
        onClick={() => changeSlide('decrement')}
      >
        <Image
          className="arrow-white"
          src="/slider/left-arrow.svg"
          height="64px"
          width="64px"
        />
      </div>
      <div
        className="absolute right-[1%] top-1/2 cursor-pointer"
        onClick={() => changeSlide('increment')}
      >
        <Image
          className="arrow-white"
          src="/slider/right-arrow.svg"
          height="64px"
          width="64px"
        />
      </div>
    </div>
  );
};

export default Slider;
