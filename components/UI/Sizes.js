import { Fragment, useState } from 'react';

const Sizes = props => {
  const [showSizes, setShowSizes] = useState(false);
  const [productSize, setProductSize] = useState(null);
  return (
    <Fragment>
      {showSizes && (
        <div className="bg-white w-[70%] h-[20%] absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center flex flex-col justify-between py-2 rounded-lg">
          <span className=" font-semibold font-Narrow tracking-wider">
            Beden Seç
          </span>
          <ul className="flex justify-between mx-[3%]">
            {props.sizes.map(size => {
              return (
                <li
                  className={`border-2 rounded-full h-8 w-8 flex items-center justify-center cursor-pointer ${
                    size === productSize && 'categoriSizeChecked'
                  }`}
                  key={size}
                  id={size}
                  onClick={event => setProductSize(event.target.id)}
                >
                  {size}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!showSizes && (
        <div
          className="bg-white w-[70%] h-[10%] absolute bottom-[15%] left-1/2 -translate-x-1/2 text-center flex items-center justify-center  rounded-lg cursor-pointer"
          onClick={() => setShowSizes(true)}
        >
          <span className=" font-semibold font-Narrow tracking-wider">
            Sepete Ekle
          </span>
        </div>
      )}
    </Fragment>
  );
};
export default Sizes;
