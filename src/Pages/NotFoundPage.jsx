import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './../Components/Shared/Navbar';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 text-center w-3/4 mx-auto ">
        <Navbar />
      <img
        src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg"
        alt="Page not found"
        className="w-80 h-80 object-contain mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-white bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-lg text-lg font-semibold"
      >
        Go Back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
