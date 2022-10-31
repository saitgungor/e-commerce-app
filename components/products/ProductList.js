import ProductItem from './ProductItem';

const ProductList = props => {
  return (
    <div className="w-full px-[5%] mt-10">
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {props.products.map(product => {
          return <ProductItem details={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
export default ProductList;
