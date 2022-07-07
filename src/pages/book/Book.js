import React from "react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { CardBody, CardTitle, CardText } from "reactstrap";
import { StyledContainer, StyledCard } from "./styled";
import Spinner from "../../components/Spinner";
import { getBook } from "../../api/books";

export default function Book() {
  const { id: bookID } = useParams();
  const { error, loading, data: book } = useAxios(() => getBook(bookID));

  return (
    <StyledContainer className="book">
      {error && <p className="error">{error}</p>}
      {loading && !book && <Spinner />}
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
