import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./Book.css";

export default function Book() {
  const { id } = useParams();
  const url = "https://fakerestapi.azurewebsites.net/api/v1/Books/" + id;
  const { error, isPending, data: book } = useFetch(url);

  return (
    <div className="book">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {book && (
        <>
          <h2 className="page-title">{book.title}</h2>
          <p>{book.description}</p>
          <p>Pages: {book.pageCount}</p>
          <p>{new Date(book.publishDate).toLocaleDateString()}</p>
        </>
      )}
    </div>
  );
}
