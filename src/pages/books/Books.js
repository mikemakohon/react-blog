import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookList from "../../components/BookList/BookList";
import { StyledContainer } from "./styled";
import Spinner from "../../components/Spinner";
import { bookListFetchStart } from "./thunks/bookList";
import Pagination from "../../components/Pagination";
import { paginationChangePage } from "../../components/Pagination/reducers/pagination";
// import { useAxios } from "../../hooks/useAxios";
// import { getBooks } from "../../api/books";

import * as selectors from "./selectors/bookList";

export default function Books() {
  // const { data, loading, error } = useAxios(getBooks);

  const loading = useSelector(selectors.bookListLoadingSelector);
  const data = useSelector(selectors.bookListDataSelector);
  const error = useSelector(selectors.bookListErrorSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { itemsPerPage, currentPage } = useSelector(
    selectors.bookListPaginationSelector
  );
  const currentItems = useSelector(selectors.bookListCurrentItemsSelector);
  const handlePagination = (page) => {
    dispatch(paginationChangePage({ page }));
  };

  useEffect(() => {
    dispatch(bookListFetchStart());
  }, [dispatch]);

  return (
    <>
      <StyledContainer>
        {error && <p className="error">{error}</p>}
        {loading && <Spinner />}
        {data && !loading && !error && <BookList books={currentItems} />}
      </StyledContainer>
      {data.length > itemsPerPage && !error && (
        <Pagination
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          paginate={handlePagination}
        />
      )}
    </>
  );
}
