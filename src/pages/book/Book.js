import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { CardBody, CardTitle, CardText } from "reactstrap";
import { StyledContainer, StyledCard } from "./styled";
import Spinner from "../../components/Spinner";
import { bookFetchStart } from "./thunks/book";
// import { useAxios } from "../../hooks/useAxios";
// import { getBook } from "../../api/books";

import * as selectors from "./selectors/book";

export default function Book() {
  const { id: bookID } = useParams();
  // const { error, loading, data: book } = useAxios(() => getBook(bookID));

  const loading = useSelector(selectors.bookLoadingSelector);
  const book = useSelector(selectors.bookDataSelector);
  const error = useSelector(selectors.bookErrorSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(bookFetchStart(bookID));
  }, [dispatch, bookID]);

  return (
    <StyledContainer className="book">
      {error && <p className="error">{error}</p>}
      {loading && <Spinner />}
      {book && !loading && !error && (
        <StyledCard body color="light" outline>
          <CardBody>
            <CardTitle tag="h1">{book.title}</CardTitle>
            <CardText>{book.description}</CardText>
            <CardText>Pages: {book.pageCount}</CardText>
            <CardText>
              {moment(book.publishDate).format("MMM DD YYYY")}
            </CardText>
          </CardBody>
        </StyledCard>
      )}
    </StyledContainer>
  );
}
