import { useState } from 'react';

const HeaderCollapseMenu = props => {
  let categories, imgURL, title;
  const [showMenu, setShowMenu] = useState(false);
  // if (!props.showMenu && setShowMenu) setShowMenu(false);

  const mouseInHandler = () => {
    setShowMenu(true);
  };
  const mouseOutHandler = () => {
    setShowMenu(false);
  };

  if (props.categori === 'Kadın') {
    title = 'KADIN';
    categories = [
      'Üst Giyim',
      'Dış Giyim',
      'İç Giyim',
      'Takı & Aksesuar',
      'Çanta',
    ];
    imgURL = "bg-[url('/header-menu/kadın.jpg')]";
  }
  if (props.categori === 'Erkek') {
    title = 'ERKEK';
    categories = ['Üst Giyim', 'Dış Giyim', 'İç Giyim', 'Aksesuar'];
    imgURL = "bg-[url('/header-menu/erkek.jpg')]";
  }

  if (props.categori === 'Çocuk') {
    title = 'ÇOCUK';
    categories = ['Giyim', 'Ayakkabı', 'Aksesuar'];
    imgURL = "bg-[url('/header-menu/çocuk.jpg')]";
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
      className={`w-[40%] p-5 h-[500%]  justify-between absolute left-20 border-2  border-gray-300 bg-white text-black top-[100%] ${
        props.showMenu || showMenu ? 'flex' : 'hidden '
      } `}
    >
      <div className="w-1/3">
        <h2 className="font-bold text-xl">{title}</h2>
        <ul className="font-normal mt-2 cursor-pointer">{listItems}</ul>
      </div>
      <div className={`w-1/2 bg-contain bg-no-repeat ${imgURL}`}></div>
    </div>
  );
};

export default HeaderCollapseMenu;
