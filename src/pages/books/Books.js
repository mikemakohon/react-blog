import React from "react";
import "./Books.css";
import BookList from "../../components/BookList/BookList";
import { useFetch } from "../../hooks/useFetch";

export default function Books() {
  const { data, isPending, error } = useFetch(
    "https://fakerestapi.azurewebsites.net/api/v1/Books"
  );

  return (
    <div className="books">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <BookList books={data} />}
    </div>
  );
}
