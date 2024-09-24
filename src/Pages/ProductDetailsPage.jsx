
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
        const selectedBook = data[parseInt(productId - 1)]; // Get the book by its id (index)
        setBook(selectedBook);
      })
      .catch((error) => console.error('Error fetching the Book:', error));
  }, [bookId]);

  const handleWishtoRead = (book) => {
    alert("Book ID: "+ book.bookId+ " and Book Name "+ book.bookName+ "has been successfully added to the Wishlist");
  };

  const handleAddtoCart = (book) => {
    alert("Book ID: "+ book.bookId+ " and Book Name"+ book.bookName + + "has been successfully added to the Cart");
  };


  if (!book) {
    return <p>Loading book details...{ }</p>;
  }
  else {
    return (
      <div className="w-3/4 mx-auto">
        <Navbar />

        <main className="flex flex-col md:flex-row mx-auto">
          <div className="w-full md:w-1/2 p-2">
            <img
              className="object-cover w-full h-48 md:h-64"
              src={`${book.image}`}
              alt={book?.bookName || 'Book image'}
            />
          </div>
          <div className="w-full md:w-1/2 p-2">
            <h3 className="text-sm font-semibold" title={book?.bookName}>
              {book?.bookName.slice(0, 40)}
            </h3>
           
            <p className="text-sm"><b>Category: </b>{book?.category}</p>
            <p className="text-sm"><b>Author: </b>{book?.author}</p>
            <p className="text-sm"><b>Tags: </b>{book?.tags}</p>
            <p className="text-sm"><b>Rating: </b>{book?.rating}/5</p>
            <p className="text-sm"><b>publisher: </b>{book?.publisher}</p>
            <p className="text-sm"><b>Review: </b>{book?.review}</p>
            <p className="text-sm"><b>Total Page: </b>{book?.totalPages}</p>
            <p className="text-sm"><b>Published Date: </b>{book?.yearOfPublishing}</p>

            <button type="button" onClick={() => handleWishtoRead(book)} className="bg-red-400 rounded px-3 text-white py-2 m-2">
          Wish to Read  </button>
          <button type="button" onClick={() => handleAddtoCart(book)} className="bg-orange-900 rounded px-3 text-white py-2">
          Add to Cart   </button>
          </div>
        </main>




        <Footer />

      </div>

    );
  }



}
