import Image from 'next/image';

const Header = () => {
  return (
    <div className="h-16 grid grid-cols-3">
      <div className="flex gap-5 justify-center items-center font-semibold">
        <span className="cursor-pointer hover:border-b-2 hover:border-black">
          Kadın
        </span>
        <span className="cursor-pointer hover:border-b-2 hover:border-black">
          Erkek
        </span>
        <span className="cursor-pointer hover:border-b-2 hover:border-black">
          Çocuk
        </span>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/logo.svg"
          alt="logo"
          height="64px"
          width="64px"
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 justify-between w-2/5 text-xs">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <span className="">
              <Image
                src="/icons/search.png"
                alt="search-icon"
                height="18px"
                width="18px"
              />
            </span>
            <span>Ara</span>
          </div>

          <div className="flex flex-col items-center justify-center cursor-pointer">
            <span className="">
              <Image
                src="/icons/account.png"
                alt="account-icon"
                height="18px"
                width="18px"
              />
            </span>
            <span>Hesabım</span>
          </div>

          <div className="relative cursor-pointer">
            <span className="absolute left-1/2 -translate-x-1/2 top-[10%]">
              <Image
                src="/icons/cart.png"
                alt="cart-icon"
                height="24px"
                width="24px"
              />
            </span>
            <span className="bg-black text-white rounded-full h-4 w-4 flex items-center justify-center absolute top-[55%] left-[45%]">
              11
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
