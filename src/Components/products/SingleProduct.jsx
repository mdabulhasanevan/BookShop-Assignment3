
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";
import React, { useState, useEffect } from 'react';



export default function SingleProduct(props) {
  const [selectedBook, setSelectedBook] = useState(null);
  const { product } = props;

  const showDetails = (product) => {
    navigate('/product', { state: { product } });
  };

  // Function to handle "See Details" button click
  const handleSeeDetails = (book) => {
    setSelectedBook(book);
  };

  return (
    <Link to={ROUTES.SINGLE_PRODUCTS.DYNAMIC(product.bookId)}>
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
        <button type="button" onClick={() => handleSeeDetails(product.bookId)} className="bg-orange-900 rounded px-3 text-white py-2">
          Book Details
        </button>
        
      </div>
    </Link>
  );
}