import { Fragment, useState } from 'react';
import Image from 'next/image';

const BestSellers = () => {
  const [first, setFirst] = useState(0);
  const sellerItems = [
    "bg-[url('/bestsellers/1.jpg')]",
    "bg-[url('/bestsellers/2.jpg')]",
    "bg-[url('/bestsellers/3.jpg')]",
    "bg-[url('/bestsellers/4.jpg')]",
    "bg-[url('/bestsellers/5.jpg')]",
    "bg-[url('/bestsellers/6.jpg')]",
    "bg-[url('/bestsellers/7.jpg')]",
    "bg-[url('/bestsellers/8.jpg')]",
  ];

  const nextSellerHandler = () => {
    if (first + 4 === sellerItems.length - 2) return;
    setFirst(prev => prev + 1);
    console.log(sellerItems.length);
    console.log(first + 4);
  };
  const prevSellerHandler = () => {
    if (first === 0) return;
    setFirst(prev => prev - 1);
  };
  return (
    <div className="w-100 h-[450px] mt-12 text-center">
      <h2 className="font-semibold text-4xl font-Narrow text-[#0b0a18] tracking-wider">
        Çok Satanlar
      </h2>
      <div className="grid grid-cols-5 gap-5 w-full h-full">
        <div
          className={`${sellerItems[first]} bg-no-repeat bg-contain bg-center h-full w-full scale-75 relative`}
        >
          <div
            onClick={prevSellerHandler}
            className="absolute top-1/2 right-0 translate-y-[-50%] h-24 w-24 cursor-pointer"
          >
            <Image
              className="background-white centered"
              alt="left-arrow"
              src="/slider/left-arrow.svg"
              layout="fill"
            />
          </div>
        </div>
        <div
          className={`${
            sellerItems[first + 1]
          } bg-no-repeat bg-contain bg-center h-full w-full`}
        ></div>
        <div
          className={`${
            sellerItems[first + 2]
          } bg-no-repeat bg-contain bg-center h-full w-full`}
        ></div>
        <div
          className={`${
            sellerItems[first + 3]
          } bg-no-repeat bg-contain bg-center h-full w-full`}
        ></div>
        <div
          className={`${
            sellerItems[first + 4]
          } bg-no-repeat bg-contain bg-center h-full w-full scale-75`}
        >
          <div
            onClick={nextSellerHandler}
            className="absolute top-1/2 left-0 translate-y-[-50%] h-24 w-24 cursor-pointer"
          >
            <Image
              className="background-white centered"
              alt="right-arrow"
              src="/slider/right-arrow.svg"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSellers;
