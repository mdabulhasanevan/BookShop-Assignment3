import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
//import { useParams } from 'react-router-dom';
import Footer from './../Components/Shared/Footer';

export default function ProductDetailsPage() {
  const { id } = useParams();
   const book = products.find((b) => b.id === parseInt(id));

  return (
    <div>
      <Navbar />
      <div>
      {book?.bookName}
      <img
        src={`${book.image}`}
        alt=""
      />

      </div>
      <Footer />
      
    </div>
  );
}
