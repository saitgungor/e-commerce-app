import Image from 'next/image';
import { useState } from 'react';
import ColorPalette from '../UI/ColorPalette';

const ProductItem = props => {
  const [showColors, setShowColors] = useState(false);
  const [color, setColor] = useState(props.details.colors[0].hex);
  const { imgURL } = props.details.colors.filter(item => item.hex === color)[0];

  return (
    <div
      className="w-full font-RobotoCondensed"
      onMouseEnter={() => setShowColors(true)}
      onMouseLeave={() => setShowColors(false)}
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
