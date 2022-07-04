import React from "react";
import BookList from "../../components/BookList/BookList";
import { StyledContainer } from "./styled";
import { useAxios } from "../../hooks/useAxios";
import Spinner from "../../components/Spinner";

export default function Books() {
  const { data, loading, error } = useAxios("/Books");

  return (
    <StyledContainer>
      {error && <p className="error">{error}</p>}
      {loading && !data && <Spinner />}
      {data && !loading && !error && <BookList books={data} />}
    </StyledContainer>
  );
}
