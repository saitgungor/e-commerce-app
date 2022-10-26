import Image from 'next/image';

const NewCollection = () => {
  return (
    <div className="h-[500px] w-full mt-12 bg-[#ffc0a6] p-8 ">
      <div className="h-full flex">
        <div className="w-1/2 bg-center bg-[url('/new-collection.jpg')] bg-no-repeat bg-contain "></div>
        <div className="px-8 w-1/2 text-white flex flex-col justify-center gap-5 ">
          <p className="font-Raleway font-medium text-4xl">
            Rahat, nefes alabilen kumaşı ile çok beklenen{' '}
            <span className="text-[#171441] font-semibold"> Sports </span>{' '}
            koleksiyonumuzu sizlerle buluşturuyoruz.
          </p>
          <span className="text-2xl font-semibold underline cursor-pointer hover:text-[#171441]">
            Şimdi Keşfedin
          </span>
        </div>
      </div>
    </div>
  );
};
export default NewCollection;
