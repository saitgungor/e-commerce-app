import Image from 'next/image';
import { useState } from 'react';
import ColorPalette from '../UI/ColorPalette';
import Sizes from '../UI/Sizes';

const ProductItem = props => {
  const [showColors, setShowColors] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [color, setColor] = useState(props.details.colors[0].hex);
  const { imgURL } = props.details.colors.filter(item => item.hex === color)[0];

  return (
    <div
      className="w-full font-RobotoCondensed relative"
      onMouseEnter={() => {
        setShowColors(true);
        setShowSizes(true);
      }}
      onMouseLeave={() => {
        setShowColors(false);
        setShowSizes(false);
      }}
    >
      <Image src={imgURL} width="1200px" height="1500px" alt="women" />
      <div className="text-center font-medium  text-gray-800 text-lg flex justify-between ">
        {`${props.details.name} ${props.details.colors[0].name}`}
        <span className="text-gray-500">{`${props.details.price}₺`}</span>
      </div>
      {!showColors && (
        <div className="text-xs font-medium text-gray-500 mt-1">{`+${
          props.details.colors.length - 1
        } renk`}</div>
      )}

      {showSizes && <Sizes sizes={['XS', 'S', 'M', 'L', 'XL']} />}

      {showColors && (
        <ColorPalette
          colors={props.details.colors}
          changeColor={color => setColor(color)}
        />
      )}
    </div>
  );
};
export default ProductItem;
