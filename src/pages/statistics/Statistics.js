import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { Table } from "reactstrap";
import { StyledContainer } from "./styled";
import Spinner from "../../components/Spinner";
import { statisticsFetchStart } from "./actions/statistics";
// import { useAxios } from "../../hooks/useAxios";
// import { getBooks } from "../../api/books";

import * as selectors from "./selectors/statistics";

export default function Statistics() {
  // const { data: books, loading, error } = useAxios(getBooks);

  const dispatch = useDispatch();
  const loading = useSelector(selectors.statisticsLoadingSelector);
  const error = useSelector(selectors.statisticsErrorSelector);
  const books = useSelector((state) => selectors.statisticsDataSelector(state));

  useEffect(() => {
    dispatch(statisticsFetchStart());
  }, [dispatch]);

  return (
    <StyledContainer>
      {error && <p className="error">{error}</p>}
      {loading && !books && <Spinner />}
      {books && !loading && !error && (
        <Table bordered responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>pages</th>
              <th>CreatedAt</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>{book.title}</td>
                <td>{book.description.substring(0, 100)}...</td>
                <td>{book.pageCount}</td>
                <td>{moment(book.publishDate).format("MMM DD YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </StyledContainer>
  );
}
