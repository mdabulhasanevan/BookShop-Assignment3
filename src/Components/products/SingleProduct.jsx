import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

export default function SingleProduct(props) {
  const { product } = props;
  return (
    <Link to={ROUTES.SINGLE_PRODUCTS.DYNAMIC(product.slug)}>
      <div className="bg-white p-3 shadow rounded border border-red-100 space-y-4 relative">
        <span className="absolute top-0 right-0 bg-gray-400 p-1 rounded">
          10%
        </span>
        <div className="bg-gray-100">
          <img className="w-30"
            src={`${product.image}`}
            alt=""
          />
        </div>
        <h3 className="text-xs font-semibold" title={product?.bookName}>
          {product?.bookName.slice(0, 40)}
        </h3>
        <p className="text-sm">{product?.category}</p>
        <p className="text-sm">{product?.author}</p>
        <p className="text-sm">{product?.tags}</p>
        <p className="text-sm">{product?.publisher}</p>
        <button type="button" className="bg-orange-900 rounded px-3 text-white py-2">
          Book Details
        </button>
        <Link to={`/product/${product.bookId}`}>
              <button>View Details</button>
            </Link>
      </div>
    </Link>
  );
}