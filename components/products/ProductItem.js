import Image from 'next/image';

const ProductItem = props => {
  return (
    <div>
      <div className="w-full font-RobotoCondensed">
        <Image src="/products/women/camel.jpg" width="1200px" height="1800px" />
      </div>
      <div className="text-center font-medium  text-gray-800 text-lg flex justify-between ">
        {`${props.details.name} ${props.details.id}`}
        <span className="text-gray-500">{`${props.details.price}₺`}</span>
      </div>
      <div className="text-xs font-medium text-gray-500">+4 renk</div>
    </div>
  );
};
export default ProductItem;
