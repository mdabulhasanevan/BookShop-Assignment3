
import SingleProduct from "./SingleProduct";
import React, { useState, useEffect } from 'react';
import { getAllProduct } from "../../utils/product";

export default function ProductList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch data from the data.json file
    fetch('/Book.json')
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error('Error fetching the books:', error));
  }, []);

  return (
    <section className="mx-auto container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


        {books?.map((product) => (
          <SingleProduct key={product.bookId} product={product} />
        ))}
      </div>
    </section>
  );
}