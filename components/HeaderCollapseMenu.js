import Link from 'next/link';
import { useState } from 'react';

const HeaderCollapseMenu = props => {
  let categories, imgURL, title, url;
  const [showMenu, setShowMenu] = useState(false);

  const mouseInHandler = () => {
    setShowMenu(true);
  };
  const mouseOutHandler = () => {
    setShowMenu(false);
  };

  if (props.categori === 'Kadın') {
    title = 'KADIN';
    url = '/categories/women';
    categories = [
      'Üst Giyim',
      'Dış Giyim',
      'İç Giyim',
      'Takı & Aksesuar',
      'Çanta',
    ];
    imgURL = "bg-[url('/header-menu/women.jpg')]";
  }
  if (props.categori === 'Erkek') {
    title = 'ERKEK';
    url = '/categories/men';
    categories = ['Üst Giyim', 'Dış Giyim', 'İç Giyim', 'Aksesuar'];
    imgURL = "bg-[url('/header-menu/men.jpg')]";
  }

  if (props.categori === 'Çocuk') {
    title = 'ÇOCUK';
    url = '/categories/kids';
    categories = ['Giyim', 'Ayakkabı', 'Aksesuar'];
    imgURL = "bg-[url('/header-menu/kids.jpg')]";
  }

  const listItems = categories.map(item => (
    <li key={item} className="hover:font-semibold">
      {item}
    </li>
  ));
  return (
    <div
      onMouseOver={mouseInHandler}
      onMouseOut={mouseOutHandler}
      className={`w-[40%] p-5 h-[400%]  justify-between absolute left-[10%] border-2  border-gray-300 bg-white text-black top-[100%] ${
        props.showMenu || showMenu ? 'flex' : 'hidden '
      } `}
    >
      <div className="w-1/3">
        <Link href={url}>
          <h2 className="font-bold text-xl cursor-pointer">{title}</h2>
        </Link>
        <Link href={url}>
          <ul className="font-normal mt-2 cursor-pointer">{listItems}</ul>
        </Link>
      </div>
      <Link href={url}>
        <div
          className={`w-1/2 bg-contain bg-no-repeat cursor-pointer ${imgURL}`}
        ></div>
      </Link>
    </div>
  );
};

export default HeaderCollapseMenu;
