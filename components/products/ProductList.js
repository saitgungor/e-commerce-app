import { useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = props => {
  const itemsPerPage = 12;
  const pageCount = Math.ceil(props.products.length / itemsPerPage);
  const pageArr = [];
  const [curPage, setCurPage] = useState(1);
  for (let i = 0; i < pageCount; i++) {
    pageArr.push('_');
  }
  return (
    <div className="w-full px-[5%] mt-10">
      <div className="grid grid-cols-4 grid-rows-2 gap-5">
        {props.products
          .slice((curPage - 1) * itemsPerPage, curPage * itemsPerPage)
          .map(product => {
            return <ProductItem details={product} key={product.id} />;
          })}
      </div>
      <div className="flex justify-center mt-12 text-xl">
        <ul className="flex gap-2">
          {pageArr.map((item, i) => {
            return (
              <li
                className={`px-2 cursor-pointer ${
                  i + 1 === curPage ? 'border border-black' : ''
                }`}
                key={i + 1}
                id={i + 1}
                onClick={event => {
                  setCurPage(+event.target.id);
                  console.log(event.target.id);
                }}
              >
                {i + 1}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ProductList;
