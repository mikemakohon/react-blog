import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookList from "../../components/BookList/BookList";
import { StyledContainer } from "./styled";
import Spinner from "../../components/Spinner";
import { bookListFetchStart } from "./actions/bookList";
// import { useAxios } from "../../hooks/useAxios";
// import { getBooks } from "../../api/books";

import * as selectors from "./selectors/bookList";

export default function Books() {
  // const { data, loading, error } = useAxios(getBooks);

  const loading = useSelector(selectors.bookListLoadingSelector);
  const data = useSelector((state) => selectors.bookListDataSelector(state));
  const error = useSelector(selectors.bookListErrorSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(bookListFetchStart());
  }, [dispatch]);

  return (
    <StyledContainer>
      {error && <p className="error">{error}</p>}
      {loading && !data && <Spinner />}
      {data && !loading && !error && <BookList books={data} />}
    </StyledContainer>
  );
}
