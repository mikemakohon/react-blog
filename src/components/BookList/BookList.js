import React from "react";
import { Link } from "react-router-dom";
import "./BookList.css";

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="card">
          <h3>{book.title}</h3>
          <p className="description">{book.description.substring(0, 100)}...</p>
          <p className="date">
            {new Date(book.publishDate).toLocaleDateString()}
          </p>
          <Link to={`/books/${book.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
