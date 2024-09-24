
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
        <span className="absolute top-0 right-0 bg-orange-500 p-1 rounded">
          {product?.rating}
        </span>
        <div className="bg-gray-100">
          <img className="object-cover w-full h-30 md:h-40"
            src={`${product.image}`}
            alt=""
          />
        </div>
        <h1 clzzassName="text-xl font-bold" title={product?.bookName}><b>Book Name: </b>
          {product?.bookName.slice(0, 20)}
        </h1>
        <p className="text-sm"><b>Category: </b>{product?.category}</p>
        <p className="text-sm"><b>Author: </b>{product?.author}</p>
        <p className="text-sm"><b>Tags: </b>{product?.tags}</p>
        <p className="text-sm"><b>Rating: </b>{product?.rating}/5</p>
        <button type="button" onClick={() => handleSeeDetails(product.bookId)} className="bg-orange-400 rounded px-3 text-white py-2">
          Book Details
        </button>
        
      </div>
    </Link>
  );
}