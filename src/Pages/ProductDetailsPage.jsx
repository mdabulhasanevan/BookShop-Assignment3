import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from './../Components/Shared/Footer';

export default function ProductDetailsPage() {
  let { productId } = useParams();

  const { bookId } = useParams(); // Get the book id from route parameters
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch data from the data.json file
    fetch('/Book.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedBook = data[parseInt(productId)]; // Get the book by its id (index)
        setBook(selectedBook);
      })
      .catch((error) => console.error('Error fetching the book:', error));
  }, [bookId]);

  if (!book) {
    return <p>Loading book details...{ }</p>;
  }
  else {
    return (
      <div>
        <Navbar />
        <main className="flex">
          <img className="size-30"
            src={`${book.image}`}
            alt=""
          />
          <div>
          <h3 className="text-xs font-semibold" title={book?.bookName}>
            {book?.bookName.slice(0, 40)}
          </h3>
          <p className="text-sm">{book?.category}</p>
          <p className="text-sm">{book?.author}</p>
          <p className="text-sm">{book?.tags}</p>
          <p className="text-sm">{book?.publisher}</p>
          </div>
        </main>
        <Footer />

      </div>

    );
  }



}
