import Image from 'next/image';
import { useState } from 'react';
import HeaderCollapseMenu from './HeaderCollapseMenu';

const Header = props => {
  const [className, setClassName] = useState('background-white');
  const [activeCategori, setActiveCategori] = useState('Kadın');
  const [showMenu, setShowMenu] = useState(false);

  const mouseOverHandler = event => {
    console.log(event.target.id);
    if (
      event.target.id === 'Kadın' ||
      event.target.parentNode.id === 'Kadın' ||
      event.target.id === 'Erkek' ||
      event.target.parentNode.id === 'Erkek' ||
      event.target.id === 'Çocuk' ||
      event.target.parentNode.id === 'Çocuk'
    ) {
      setShowMenu(true);
      setActiveCategori(event.target.id || event.target.parentNode.id);
    }
    setClassName('bg-white');
  };
  const mouseOutHandler = () => {
    setClassName('background-white');
    setShowMenu(false);
  };

  return (
    <div
      className={`h-12 grid grid-cols-3 absolute w-full font-semibold ${
        props.isHomePage ? className : 'bg-white'
      }`}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <div className="flex mx-20 justify-center items-center relative gap-5">
        <div className="h-full flex items-center" id="Kadın">
          <span className=" hover:border-black hover:border-b-2  cursor-pointer">
            Kadın
          </span>
        </div>
        <div className="h-full flex items-center" id="Erkek">
          <span className=" hover:border-black hover:border-b-2  cursor-pointer">
            Erkek
          </span>
        </div>
        <div className="h-full flex items-center" id="Çocuk">
          <span className=" hover:border-black hover:border-b-2  cursor-pointer">
            Çocuk
          </span>
        </div>
      </div>
      <HeaderCollapseMenu categori={activeCategori} showMenu={showMenu} />
      <div className="flex justify-center items-center">
        <Image
          src="/logo-new.svg"
          alt="logo"
          height="42px"
          width="74,6px"
          className="cursor-pointer"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 justify-between w-2/5 text-xs">
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <span>
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
